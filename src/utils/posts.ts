import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

/** W trybie dev pokazujemy szkice, na produkcji są one pomijane. */
export function isPublished(post: BlogPost): boolean {
	return import.meta.env.DEV || !post.data.draft;
}

/** Publikowalne wpisy, od najnowszego. */
export async function getPublishedPosts(): Promise<BlogPost[]> {
	const posts = await getCollection('blog', (post) => isPublished(post));
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** Unikalne tagi wraz z liczbą wpisów (najczęstsze pierwsze). */
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
