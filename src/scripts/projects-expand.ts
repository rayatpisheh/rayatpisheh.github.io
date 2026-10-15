function initProjectExpand() {
  for (const row of document.querySelectorAll<HTMLElement>('[data-project]')) {
    const toggle = row.querySelector<HTMLButtonElement>('[data-project-toggle]');
    const desc = row.querySelector<HTMLElement>('.project-desc');
    if (!toggle || !desc) continue;

    row.classList.add('is-clamped');
    if (desc.scrollHeight <= desc.clientHeight + 1) {
      row.classList.remove('is-clamped');
      continue;
    }

    toggle.hidden = false;
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      toggle.textContent = expanded ? 'More' : 'Less';
      row.classList.toggle('is-clamped', expanded);
    });
  }
}

initProjectExpand();
