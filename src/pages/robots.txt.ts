const site = import.meta.env.SITE ?? 'http://localhost:4321';
const sitemapUrl = new URL('/sitemap.xml', site).toString();

export async function GET() {
	const body = `User-agent: *
Allow: /
Sitemap: ${sitemapUrl}
`;

	return new Response(body, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
		},
	});
}
