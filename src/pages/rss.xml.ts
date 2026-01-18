import { getCollection } from 'astro:content';

const site = import.meta.env.SITE ?? 'http://localhost:4321';
const base = new URL(site);

const escapeXml = (value: string) =>
	value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');

export async function GET() {
	const posts = await getCollection('blog');
	const visiblePosts = posts
		.filter((post) => !post.data.draft)
		.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());

	const lastBuild = visiblePosts[0]?.data.publishDate ?? new Date();
	const rssUrl = new URL('/rss.xml', base).toString();

	const items = visiblePosts
		.map((post) => {
			const link = new URL(`/blog/${post.slug}/`, base).toString();
			return `    <item>
      <title>${escapeXml(post.data.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${post.data.publishDate.toUTCString()}</pubDate>
      <description>${escapeXml(post.data.description)}</description>
    </item>`;
		})
		.join('\n');

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>DBAI</title>
    <link>${base.toString()}</link>
    <description>AI engineering notes on Copilot Studio and the Microsoft ecosystem.</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuild.toUTCString()}</lastBuildDate>
    <atom:link href="${rssUrl}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/rss+xml; charset=utf-8',
		},
	});
}
