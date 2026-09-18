import { useEffect } from "react";

// Lets the pointer/touch drag a horizontal track (identified by `trackId`),
// clamping the translation per viewport-width breakpoint in `clamps`.
export function useDragCarousel(trackId, clamps) {
  useEffect(() => {
    const track = document.getElementById(trackId);
    if (!track) return;

    const handleOnDown = (e) => {
      track.dataset.mouseDownAt = e.clientX;
    };

    const handleOnUp = () => {
      track.dataset.mouseDownAt = "0";
      track.dataset.prevPercentage = track.dataset.percentage;
    };

    const handleOnMove = (e) => {
      if (track.dataset.mouseDownAt === "0") return;

      const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
      const maxDelta = window.innerWidth / 2;

      const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
      let clamp = null;
      for (const breakpoint of Object.keys(clamps)) {
        if (viewportWidth < breakpoint) {
          clamp = clamps[breakpoint];
          break;
        }
      }

      const percentage = (mouseDelta / maxDelta) * -100;
      const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
      const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), clamp);

      track.dataset.percentage = nextPercentage;

      track.animate(
        { transform: `translate(${nextPercentage}%, 0%)` },
        { duration: 1200, fill: "forwards" }
      );

      for (const image of track.getElementsByClassName("image")) {
        image.animate(
          { objectPosition: `${100 + nextPercentage}% center` },
          { duration: 1200, fill: "forwards" }
        );
      }
    };

    const handleTouchStart = (e) => handleOnDown(e.touches[0]);
    const handleTouchEnd = (e) => handleOnUp(e.changedTouches[0]);
    const handleTouchMove = (e) => handleOnMove(e.touches[0]);

    window.addEventListener("mousedown", handleOnDown);
    window.addEventListener("mouseup", handleOnUp);
    window.addEventListener("mousemove", handleOnMove);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousedown", handleOnDown);
      window.removeEventListener("mouseup", handleOnUp);
      window.removeEventListener("mousemove", handleOnMove);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [trackId, clamps]);
}
