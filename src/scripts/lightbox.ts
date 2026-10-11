const root = document.querySelector<HTMLElement>('[data-lightbox]');
const image = root?.querySelector<HTMLImageElement>('[data-lightbox-image]');
const closeButton = root?.querySelector<HTMLButtonElement>('.lightbox-close');

if (root && image && closeButton) {
  let lastTrigger: HTMLElement | null = null;

  const isOpen = () => !root.hasAttribute('hidden');

  const open = (trigger: HTMLElement) => {
    const src = trigger.dataset.lightboxSrc;
    if (!src || isOpen()) return;

    lastTrigger = trigger;
    image.src = src;
    image.alt = trigger.dataset.lightboxAlt ?? '';
    root.removeAttribute('hidden');
    document.documentElement.style.overflow = 'hidden';
    closeButton.focus({ preventScroll: true });
  };

  const close = () => {
    if (!isOpen()) return;

    root.setAttribute('hidden', '');
    image.removeAttribute('src');
    image.alt = '';
    document.documentElement.style.overflow = '';
    lastTrigger?.focus({ preventScroll: true });
    lastTrigger = null;
  };

  document.querySelectorAll<HTMLElement>('[data-lightbox-open]').forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      open(trigger);
    });
  });

  root.querySelectorAll<HTMLElement>('[data-lightbox-close]').forEach((el) => {
    el.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      close();
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen()) {
      event.preventDefault();
      close();
    }
  });
}
