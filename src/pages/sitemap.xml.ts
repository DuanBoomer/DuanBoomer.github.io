import { getCollection } from 'astro:content';

const site = import.meta.env.SITE ?? 'http://localhost:4321';
const base = new URL(site);

const formatDate = (date: Date) => date.toISOString();

export async function GET() {
	const posts = await getCollection('blog');
	const visiblePosts = posts
		.filter((post) => !post.data.draft)
		.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());

	const latestDate = visiblePosts[0]?.data.publishDate ?? new Date();

	const urls = [
		{
			loc: new URL('/', base).toString(),
			lastmod: formatDate(latestDate),
			changefreq: 'weekly',
			priority: '1.0',
		},
		{
			loc: new URL('/blog/', base).toString(),
			lastmod: formatDate(latestDate),
			changefreq: 'weekly',
			priority: '0.9',
		},
		...visiblePosts.map((post) => ({
			loc: new URL(`/blog/${post.slug}/`, base).toString(),
			lastmod: formatDate(post.data.publishDate),
			changefreq: 'monthly',
			priority: '0.7',
		})),
	];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
	.map(
		(url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>
`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
		},
	});
}
