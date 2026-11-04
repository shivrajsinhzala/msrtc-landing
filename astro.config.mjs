// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://msrtc.shivrajsinh.in';

export default defineConfig({
  site: SITE,
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        const path = new URL(item.url).pathname.replace(/\/$/, '') || '/';
        if (path === '/') { item.priority = 1.0; item.changefreq = 'daily'; }
        else if (path.includes('-bus-time-table')) { item.priority = 0.9; item.changefreq = 'weekly'; }
        else if (path.includes('-bus-station-contact-number')) { item.priority = 0.85; item.changefreq = 'weekly'; }
        else { item.priority = 0.8; item.changefreq = 'weekly'; }
        return item;
      },
    }),
  ],
});
