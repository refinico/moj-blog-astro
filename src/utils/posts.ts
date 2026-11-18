import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

/** Szkice są widoczne lokalnie, ale nie trafiają na produkcję. */
export function isPublished(post: BlogPost): boolean {
	return import.meta.env.DEV || !post.data.draft;
}

/** Publikowalne wpisy, od najnowszego. */
export async function getPublishedPosts(): Promise<BlogPost[]> {
	const posts = await getCollection('blog', (post) => isPublished(post));
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** Pierwszy tag działa jako kategoria wpisu. */
export function getCategory(post: BlogPost): string {
	return post.data.tags[0] ?? 'AI';
}

/** Szacunkowy czas czytania na podstawie liczby słów. */
export function getReadingTime(post: BlogPost): number {
	const words = (post.body ?? '').trim().split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.round(words / 200));
}

/** Unikalne kategorie wraz z liczbą wpisów (najczęstsze pierwsze). */
export function getAllTags(posts: BlogPost[]): string[] {
	const counts = new Map<string, number>();
	for (const post of posts) {
		for (const tag of post.data.tags) {
			counts.set(tag, (counts.get(tag) ?? 0) + 1);
		}
	}
	return [...counts.entries()]
		.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'pl'))
		.map(([tag]) => tag);
}

export function paginate<T>(items: T[], page: number, perPage = 9) {
	const totalPages = Math.max(1, Math.ceil(items.length / perPage));
	const currentPage = Math.min(Math.max(1, page), totalPages);
	return {
		items: items.slice((currentPage - 1) * perPage, currentPage * perPage),
		currentPage,
		totalPages,
	};
}
