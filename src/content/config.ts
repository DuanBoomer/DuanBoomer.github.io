import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.date(),
		tags: z.array(z.string()).default([]),
		author: z.string().default('DBAI'),
		readingTime: z.string().optional(),
		hero: z.string().optional(),
		draft: z.boolean().default(false),
	}),
});

export const collections = { blog };
