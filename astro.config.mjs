// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Adres kanoniczny: własna domena agentpmo.pl. Zmienna SITE_URL go nadpisuje.
export default defineConfig({
	site: process.env.SITE_URL || 'https://agentpmo.pl',
	integrations: [mdx(), sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
});
