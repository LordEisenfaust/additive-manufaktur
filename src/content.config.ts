import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projekte = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projekte' }),
  schema: ({ image }) =>
    z.object({
      titel: z.string(),
      spiel: z.string(),
      kurz: z.string(),
      bild: image(),
      bildAlt: z.string(),
      galerie: z
        .array(z.object({ bild: image(), alt: z.string() }))
        .default([]),
      fakten: z.array(z.object({ label: z.string(), wert: z.string() })).default([]),
      reihenfolge: z.number().default(100),
    }),
});

export const collections = { projekte };
