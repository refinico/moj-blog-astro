import type { AiCategory } from './types';
import { part1 } from './part1';
import { part2 } from './part2';
import { part3 } from './part3';
import { part4 } from './part4';

export type { AiCategory, AiTool } from './types';

export const AI_CATEGORIES: AiCategory[] = [...part1, ...part2, ...part3, ...part4];

export const AI_TOOL_COUNT = AI_CATEGORIES.reduce((n, c) => n + c.tools.length, 0);

/** Skrót nazwy na awatar (2 pierwsze litery). */
export function initials(name: string): string {
	const clean = name.replace(/[^A-Za-zĄ-Żą-ż0-9 ]/g, ' ').trim();
	return clean.slice(0, 2).toUpperCase();
}

/** Domena z adresu URL (do faviconu). */
export function domain(url: string): string {
	try {
		return new URL(url).hostname.replace(/^www\./, '');
	} catch {
		return '';
	}
}
