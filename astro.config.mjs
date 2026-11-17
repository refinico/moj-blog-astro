// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Adres kanoniczny. Nadpisz zmienną SITE_URL przy deployu na własną domenę.
export default defineConfig({
	site: process.env.SITE_URL || 'https://refinico.github.io',
	integrations: [mdx(), sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
});
