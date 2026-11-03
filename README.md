# mikelynagh.com

Mike Lynagh's personal website, built with Next.js, React and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Open the local URL printed by Next.js. Use `npm run lint` and `npm run build` before publishing changes.

## Writing an article

Create a Markdown draft with:

```bash
npm run new:article -- "My article title"
```

This creates `posts/my-article-title.md` with the required frontmatter. Write the article directly in that file. The Writing page discovers it automatically, uses the first paragraph as its excerpt and sorts it by publication date.

The filename becomes the public URL (`/posts/my-article-title`), so choose it carefully and avoid renaming it after publication. If a published filename must change, add a permanent redirect in `next.config.js`.

Optional frontmatter:

```yaml
excerpt: "A short custom description for article cards and search results."
tags:
  - Software
  - AI
```

Before publishing, check the article locally, then run:

```bash
npm run lint
npm run build
```
