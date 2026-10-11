const button = document.querySelector<HTMLButtonElement>('[data-scroll-top]');

if (button) {
  const threshold = 400;

  const sync = () => {
    const visible = window.scrollY > threshold;
    button.hidden = !visible;
    button.setAttribute('aria-hidden', visible ? 'false' : 'true');
  };

  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  });

  window.addEventListener('scroll', sync, { passive: true });
  sync();
}
