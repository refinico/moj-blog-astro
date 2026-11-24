// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Adres kanoniczny: agentpmo.pl; workflow ustawia SITE_URL na ten sam adres przy deployu.
export default defineConfig({
	site: process.env.SITE_URL || 'https://agentpmo.pl',
	integrations: [mdx(), sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
});
