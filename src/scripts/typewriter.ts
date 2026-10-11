function startTypewriter() {
  const target = document.querySelector<HTMLElement>('[data-typewriter]');
  if (!target || target.dataset.typing === '1') return;

  const fullText = target.dataset.text ?? '';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  target.dataset.typing = '1';

  if (reducedMotion || !fullText) {
    target.textContent = fullText;
    return;
  }

  target.textContent = '';
  let index = 0;
  const stepMs = 55;

  const tick = () => {
    index += 1;
    target.textContent = fullText.slice(0, index);
    if (index < fullText.length) {
      window.setTimeout(tick, stepMs);
    }
  };

  window.setTimeout(tick, 280);
}

startTypewriter();
