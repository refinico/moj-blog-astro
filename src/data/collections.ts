import type { BlogPost } from '../utils/posts';

export interface Collection {
	slug: string;
	title: string;
	/** Tagi z frontmatteru wpisów — muszą się dokładnie zgadzać. */
	tags: string[];
	description: string;
	gradient: string;
}

export const collections: Collection[] = [
	{
		slug: 'agenci-i-modele-ai',
		title: 'Agenci i Modele AI',
		tags: ['AgenciAI', 'ModeleAI'],
		description: 'Agenci, modele językowe i to, co z nich naprawdę działa w praktyce.',
		gradient: 'from-sky-500/70 to-cyan-400/50',
	},
	{
		slug: 'zarzadzanie-produktem',
		title: 'Zarządzanie Produktem',
		tags: [
			'ProductOwner',
			'ChangeManagement',
			'AdopcjaAI',
			'Zarządzanie',
			'Delegowanie',
			'Praca',
			'Wdrożenie',
			'Wdrożenia',
			'POC',
			'Produkcja',
			'Hackathon',
		],
		description: 'Zarządzanie produktem i angażement zespołu: adopcja AI, decyzje i wdrożenia z perspektywy Product Ownera i PMO.',
		gradient: 'from-violet-500/70 to-indigo-400/50',
	},
	{
		slug: 'bezpieczenstwo-i-regulacje',
		title: 'Bezpieczeństwo i regulacje',
		tags: [
			'Bezpieczeństwo',
			'Cyberbezpieczeństwo',
			'Prawo',
			'RODO',
			'Regulacje',
			'AIAct',
			'Compliance',
			'EtykaAI',
			'Etyka',
			'PromptInjection',
			'Uprawnienia',
		],
		description: 'Ryzyka, prompt injection, prawo i regulacje wokół systemów AI.',
		gradient: 'from-rose-500/70 to-orange-400/50',
	},
	{
		slug: 'kodowanie',
		title: 'Kodowanie',
		tags: ['Kodowanie'],
		description: 'Praktyczne poradniki kodowania i narzędzia dla programistów.',
		gradient: 'from-emerald-500/70 to-teal-400/50',
	},
];

/** Liczba wpisów pasujących do dowolnego z tagów kolekcji. */
export function countPostsWithTags(posts: BlogPost[], tags: string[]): number {
	return posts.filter((post) => post.data.tags.some((tag) => tags.includes(tag))).length;
}

/** Poprawna polska odmiana: 1 artykuł, 2 artykuły, 5 artykułów. */
export function formatArticleCount(count: number): string {
	const lastTwo = count % 100;
	const last = count % 10;
	let word = 'artykułów';
	if (count === 1) word = 'artykuł';
	else if (last >= 2 && last <= 4 && (lastTwo < 12 || lastTwo > 14)) word = 'artykuły';
	return `${count} ${word}`;
}
