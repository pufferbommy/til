import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Today I learned. | pufferbommy',
    description: 'Sharing what I learned today',
    site: context.site,
    trailingSlash: true,
    items: await pagesGlobToRssItems(
      import.meta.glob(["./posts/**/*.{md,mdx}", "!./posts/**/_*.{md,mdx}"]),
    ),
  })
}
