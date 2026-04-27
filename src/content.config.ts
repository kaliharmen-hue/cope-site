import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    heroHeading: z.string().optional(),
    heroPrimaryCtaLabel: z.string().optional(),
    heroPrimaryCtaHref: z.string().optional(),
    heroSecondaryCtaLabel: z.string().optional(),
    heroSecondaryCtaHref: z.string().optional(),
    intro: z.string().optional(),
    ctaLabel: z.string().optional(),
    ctaHref: z.string().optional(),
    artImpactHeading: z.string().optional(),
    artImpactBodyOne: z.string().optional(),
    artImpactBodyTwo: z.string().optional(),
    muralsHeading: z.string().optional(),
    muralsBodyOne: z.string().optional(),
    muralsBodyTwo: z.string().optional(),
    commissionsHeading: z.string().optional(),
    commissionsBody: z.string().optional(),
    apparelHeading: z.string().optional(),
    apparelBody: z.string().optional(),
    journalHeading: z.string().optional(),
    journalBody: z.string().optional(),
  }),
});

const products = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    price: z.string(),
    status: z.string(),
    medium: z.string(),
    dimensions: z.string(),
    framing: z.string(),
    primaryImage: z.string(),
    imageAlt: z.string().optional(),
    galleryImages: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string().optional(),
        }),
      )
      .optional(),
    enquiryType: z.string(),
  }),
});

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
  }),
});

export const collections = {
  pages,
  products,
  posts,
};
