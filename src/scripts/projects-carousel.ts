function initProjectCarousel(root: HTMLElement) {
  const track = root.querySelector<HTMLElement>('[data-carousel-track]');
  const prev = root.querySelector<HTMLButtonElement>('[data-carousel-prev]');
  const next = root.querySelector<HTMLButtonElement>('[data-carousel-next]');
  const status = root.querySelector<HTMLElement>('[data-carousel-status]');
  const dotsHost = root.querySelector<HTMLElement>('[data-carousel-dots]');
  const slides = Array.from(root.querySelectorAll<HTMLElement>('[data-carousel-slide]'));

  if (!track || !prev || !next || slides.length === 0) return;

  const pageSize = () => (window.matchMedia('(min-width: 48rem)').matches ? 2 : 1);
  const pageCount = () => Math.max(1, Math.ceil(slides.length / pageSize()));
  const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const nearestPage = () => {
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (maxScroll <= 0) return 0;
    const pages = pageCount();
    return Math.min(pages - 1, Math.round((track.scrollLeft / maxScroll) * (pages - 1)));
  };

  const scrollToPage = (page: number) => {
    const pages = pageCount();
    const clamped = Math.max(0, Math.min(pages - 1, page));
    const maxScroll = track.scrollWidth - track.clientWidth;
    const left = pages <= 1 ? 0 : (maxScroll * clamped) / (pages - 1);

    track.scrollTo({
      left,
      behavior: reducedMotion() ? 'auto' : 'smooth',
    });
  };

  const sync = () => {
    const page = nearestPage();
    const pages = pageCount();
    prev.disabled = page <= 0;
    next.disabled = page >= pages - 1;

    if (status) {
      status.textContent = `Showing ${page + 1} of ${pages}`;
    }

    if (dotsHost) {
      const buttons = Array.from(dotsHost.querySelectorAll<HTMLButtonElement>('button'));
      buttons.forEach((button, index) => {
        const active = index === page;
        button.setAttribute('aria-selected', active ? 'true' : 'false');
        button.classList.toggle('is-active', active);
      });
    }
  };

  const renderDots = () => {
    if (!dotsHost) return;
    dotsHost.replaceChildren();
    const pages = pageCount();
    for (let i = 0; i < pages; i += 1) {
      const button = document.createElement('button');
      button.type = 'button';
      button.setAttribute('role', 'tab');
      button.setAttribute('aria-label', `Go to page ${i + 1}`);
      button.addEventListener('click', () => scrollToPage(i));
      dotsHost.append(button);
    }
    sync();
  };

  prev.addEventListener('click', () => scrollToPage(nearestPage() - 1));
  next.addEventListener('click', () => scrollToPage(nearestPage() + 1));
  track.addEventListener('scroll', () => sync(), { passive: true });
  window.addEventListener('resize', () => {
    renderDots();
    scrollToPage(nearestPage());
  });

  renderDots();
}

document.querySelectorAll<HTMLElement>('[data-project-carousel]').forEach(initProjectCarousel);
