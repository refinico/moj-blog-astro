// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Adres kanoniczny. Workflow nadpisuje SITE_URL tym samym adresem przy deployu.
export default defineConfig({
	site: process.env.SITE_URL || 'https://agentpmo.pl',
	integrations: [mdx(), sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
});
