import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

// GitHub Pages project site: https://<username>.github.io/<repository>/
// 1. Set `site` to https://<username>.github.io
// 2. Set `base` to /<repository-name> (leading slash, no trailing slash)
// 3. If the repository is <username>.github.io, remove `base`
const site = 'https://rayatpisheh.github.io';
const base = '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  integrations: [icon()],
});
