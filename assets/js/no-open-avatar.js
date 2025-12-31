(() => {
  const el = document.querySelector(".header-avatar.no-open");
  if (!el) return;

  // Disable right click menu on avatar area
  el.addEventListener("contextmenu", (e) => e.preventDefault());

  // Reduce long-press behaviors on mobile
  el.style.webkitTouchCallout = "none";
})();
