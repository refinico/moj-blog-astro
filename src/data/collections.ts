import coverAgents from '../assets/cover-agents.png';
import coverModels from '../assets/cover-models.png';
import coverRag from '../assets/cover-rag.png';
import coverCode from '../assets/cover-code.png';
import type { BlogPost } from '../utils/posts';

export interface Collection {
	slug: string;
	title: string;
	/** Tag używany w frontmatterze wpisów — musi się dokładnie zgadzać. */
	tag: string;
	description: string;
	image: typeof coverAgents;
}

export const collections: Collection[] = [
	{
		slug: 'agenci-ai',
		title: 'Agenci AI',
		tag: 'AgenciAI',
		description: 'Wpisy o agentach AI, ich architekturze, pamięci i nadzorze nad nimi.',
		image: coverAgents,
	},
	{
		slug: 'modele-ai',
		title: 'Modele AI',
		tag: 'ModeleAI',
		description: 'Analizy modeli językowych i porównania ich możliwości.',
		image: coverModels,
	},
	{
		slug: 'rag-i-wektory',
		title: 'RAG i wektory',
		tag: 'RAG',
		description: 'RAG, bazy wektorowe i wyszukiwanie semantyczne.',
		image: coverRag,
	},
	{
		slug: 'kodowanie',
		title: 'Kodowanie',
		tag: 'Kodowanie',
		description: 'Praktyczne poradniki kodowania i narzędzia dla programistów.',
		image: coverCode,
	},
];

/** Liczba wpisów z danym tagiem — kafelki kolekcji nie mają stałych liczb. */
export function countPostsWithTag(posts: BlogPost[], tag: string): number {
	return posts.filter((post) => post.data.tags.includes(tag)).length;
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
