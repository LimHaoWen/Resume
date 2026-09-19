import { useEffect } from "react";

const AUTO_SPEED_PX_PER_SEC = 40;
const AUTO_RESUME_DELAY_MS = 2000;

// Lets the pointer/touch drag a horizontal track (identified by `trackId`),
// clamping the translation per viewport-width breakpoint in `clamps`. A clamp
// of "fit" is measured from the track so the last item stops at the right edge.
// While untouched the track drifts slowly to the end and back, pausing while
// dragged, hovered (on hover-capable devices) or off-screen.
export function useDragCarousel(trackId, clamps) {
  useEffect(() => {
    const track = document.getElementById(trackId);
    if (!track) return;

    if (track.dataset.percentage === undefined) track.dataset.percentage = "0";

    const getClamp = () => {
      const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
      let clamp = null;
      for (const breakpoint of Object.keys(clamps)) {
        if (viewportWidth < breakpoint) {
          clamp = clamps[breakpoint];
          break;
        }
      }

      if (clamp === "fit") {
        const last = track.lastElementChild;
        const overflow = last.offsetLeft + last.offsetWidth - document.documentElement.clientWidth;
        clamp = -(Math.max(overflow, 0) / track.offsetWidth) * 100;
      }
      return clamp;
    };

    const applyPosition = (percentage, duration) => {
      track.dataset.percentage = percentage;

      track.animate(
        { transform: `translate(${percentage}%, 0%)` },
        { duration, fill: "forwards" }
      );

      for (const image of track.getElementsByClassName("image")) {
        image.animate(
          { objectPosition: `${Math.max(0, 100 + percentage)}% center` },
          { duration, fill: "forwards" }
        );
      }
    };

    let resumeAt = 0;

    const handleOnDown = (e) => {
      track.dataset.mouseDownAt = e.clientX;
    };

    const handleOnUp = () => {
      track.dataset.mouseDownAt = "0";
      track.dataset.prevPercentage = track.dataset.percentage;
      resumeAt = performance.now() + AUTO_RESUME_DELAY_MS;
    };

    const handleOnMove = (e) => {
      if (track.dataset.mouseDownAt === "0") return;

      const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
      const maxDelta = window.innerWidth / 2;

      const percentage = (mouseDelta / maxDelta) * -100;
      const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
      const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), getClamp());

      applyPosition(nextPercentage, 1200);
    };

    const handleTouchStart = (e) => handleOnDown(e.touches[0]);
    const handleTouchEnd = (e) => handleOnUp(e.changedTouches[0]);
    const handleTouchMove = (e) => handleOnMove(e.touches[0]);

    window.addEventListener("mousedown", handleOnDown);
    window.addEventListener("mouseup", handleOnUp);
    window.addEventListener("mousemove", handleOnMove);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("touchcancel", handleTouchEnd);
    window.addEventListener("touchmove", handleTouchMove);

    // Auto-scroll: `direction` is -1 while moving toward the end (percentage
    // decreasing) and flips to 1 on reaching either limit.
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const canHover = window.matchMedia("(hover: hover)");
    let direction = -1;
    let hovered = false;
    let visible = true;
    let lastTime = null;
    let frame;

    const handleEnter = () => { if (canHover.matches) hovered = true; };
    const handleLeave = () => { hovered = false; };
    track.addEventListener("mouseenter", handleEnter);
    track.addEventListener("mouseleave", handleLeave);

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    // Observe the parent: the track itself is translated, and on mobile it is
    // only one viewport wide, so it would count as off-screen after one card.
    observer.observe(track.parentElement);

    const tick = (now) => {
      frame = requestAnimationFrame(tick);
      const dt = lastTime === null ? 0 : now - lastTime;
      lastTime = now;

      const dragging = track.dataset.mouseDownAt !== undefined && track.dataset.mouseDownAt !== "0";
      if (reducedMotion.matches || dragging || hovered || !visible || now < resumeAt) return;

      const limit = getClamp();
      const step = ((AUTO_SPEED_PX_PER_SEC * dt) / 1000 / track.offsetWidth) * 100;
      let next = parseFloat(track.dataset.percentage) + direction * step;

      if (next <= limit) {
        next = limit;
        direction = 1;
      } else if (next >= 0) {
        next = 0;
        direction = -1;
      }

      track.dataset.prevPercentage = next;
      applyPosition(next, 0);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      track.removeEventListener("mouseenter", handleEnter);
      track.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("mousedown", handleOnDown);
      window.removeEventListener("mouseup", handleOnUp);
      window.removeEventListener("mousemove", handleOnMove);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchEnd);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [trackId, clamps]);
}
