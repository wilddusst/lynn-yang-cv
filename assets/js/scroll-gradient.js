(() => {
  const root = document.documentElement;

  const clamp01 = (v) => Math.max(0, Math.min(1, v));

  const update = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
    const max = (document.documentElement.scrollHeight - window.innerHeight) || 1;
    const s = clamp01(scrollTop / max);

    // 緩動一點：不要太敏感
    // 如果你想更慢，把 0.85 改成 0.92
    const eased = 1 - Math.pow(1 - s, 0.85);

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
