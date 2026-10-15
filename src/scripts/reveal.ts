function initReveal() {
  const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  if (nodes.length === 0) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    for (const node of nodes) node.classList.add('is-revealed');
    document.documentElement.classList.add('reveal-ready');
    return;
  }

  const revealNow = (node: Element) => node.classList.add('is-revealed');

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        revealNow(entry.target);
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -6% 0px', threshold: 0.05 },
  );

  for (const node of nodes) {
    const rect = node.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.94 && rect.bottom > 0;
    if (inView) {
      revealNow(node);
    } else {
      observer.observe(node);
    }
  }

  requestAnimationFrame(() => {
    document.documentElement.classList.add('reveal-ready');
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReveal, { once: true });
} else {
  initReveal();
}
