(() => {
  const root = document.documentElement;
  const clamp01 = (v) => Math.max(0, Math.min(1, v));

  const update = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
    const max = (document.documentElement.scrollHeight - window.innerHeight) || 1;
    const s = clamp01(scrollTop / max);

    // 慢一點的緩動，變化更柔
    const eased = 1 - Math.pow(1 - s, 0.88);
    root.style.setProperty("--s", eased.toFixed(4));
  };

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      update();
      ticking = false;
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", update);
  update();
})();
