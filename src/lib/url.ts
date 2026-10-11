/** Prefix an in-site path with Astro's base URL so GitHub Pages subpaths resolve. */
export function withBase(path = ''): string {
  const raw = import.meta.env.BASE_URL;
  const base = raw.endsWith('/') ? raw : `${raw}/`;

  if (path === '' || path === '/') return base;
  if (path.startsWith('#')) return `${base}${path}`;
  return `${base}${path.replace(/^\/+/, '')}`;
}

export function opensInNewTab(href: string): boolean {
  return /^https?:\/\//i.test(href);
}
