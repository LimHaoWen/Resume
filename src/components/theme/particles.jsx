import { useEffect, useState } from "react";
import particlesConfig from "/particlesConfig.js";

const hasDOM = () => typeof window !== "undefined" && typeof document !== "undefined";

function useTailwindDark() {
  const [isDark, setIsDark] = useState(() => {
    if (!hasDOM()) return false;
    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    if (!hasDOM()) return;
    const el = document.documentElement;
    let prev = el.classList.contains("dark");
    const sync = () => {
      const now = el.classList.contains("dark");
      if (now !== prev) {
        prev = now;
        setIsDark(now);
      }
    };

    const mo = new MutationObserver(sync);
    mo.observe(el, { attributes: true, attributeFilter: ["class"] });

    sync();

    return () => mo.disconnect();
  }, []);

  return isDark;
}

function themedConfig(cfg, isDark) {
  const fg = isDark ? "#FFFFFF" : "#000000";
  return {
    ...cfg,
    particles: {
      ...cfg.particles,
      color: { ...(cfg.particles?.color ?? {}), value: fg },
      line_linked: { ...(cfg.particles?.line_linked ?? {}), color: fg },
    },
  };
}

function useParticlesJsWithConfig(id) {
  const isDark = useTailwindDark();

  // First init
  useEffect(() => {
    if (!hasDOM() || !window.particlesJS) return;
    const exists = Array.isArray(window.pJSDom) && window.pJSDom.some(d => d?.pJS?.canvas?.el?.id === id)
    if (!exists) window.particlesJS(id, themedConfig(particlesConfig, isDark));

    return () => {
      if (!Array.isArray(window.pJSDom)) return;
      const idx = window.pJSDom.findIndex(d => d?.pJS?.canvas?.el?.id === id);
      if (idx >= 0) {
        const inst = window.pJSDom[idx];
        inst?.pJS?.fn?.vendors?.destroy?.();
        window.pJSDom.splice(idx, 1);
      }
    };
  }, [isDark, id]);

  // Update on dark mode toggle
  useEffect(() => {
    if (!hasDOM()) return;

    const domArr = Array.isArray(window.pJSDom) ? window.pJSDom : [];
    const pJS = domArr.find(d => d?.pJS?.canvas?.el?.id === id)?.pJS;
    if (!pJS) return;

    const fg = isDark ? "#FFFFFF" : "#000000";
    if (pJS.particles?.color) pJS.particles.color.value = fg;
    if (pJS.particles?.line_linked) pJS.particles.line_linked.color = fg;
  }, [isDark, id]);
}

const ParticlesBackground = () => {
  useParticlesJsWithConfig("particles-js");
  return <div id="particles-js" className="fixed inset-0 size-full z-0 pointer-events-none" />;
};

export default ParticlesBackground;