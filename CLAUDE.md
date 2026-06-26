# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Snip URL API documentation site built with **Next.js 14** and **Nextra 4** (docs theme). Deployed at `docs.snipurl.click`.

## Commands

```bash
npm run dev     # Start dev server (localhost:3000)
npm run build   # Production build
npm run start   # Serve production build
```

No test suite or linter is configured.

## Architecture

### Nextra 4 + App Router

This uses Nextra 4's app-router integration (not the older pages-router approach):

- **`next.config.mjs`** — wraps Next config with `nextra({ contentDirBasePath: '/' })`
- **`app/[[...mdxPath]]/page.tsx`** — catch-all route that imports MDX pages via `nextra/pages`
- **`app/layout.tsx`** — root layout with Nextra `Layout`, `Navbar`, `Footer` components
- **`mdx-components.tsx`** — re-exports Nextra theme's MDX components (required by Next.js MDX)
- **`content/`** — all documentation content as `.mdx` files with `_meta.ts` for navigation ordering

### Content Structure

Navigation is defined by `_meta.ts` files in each content directory:

```
content/
├── _meta.ts              # Top-level nav order
├── index.mdx             # Landing page
├── getting-started/      # Auth, rate limits, quickstart
├── api-reference/        # Endpoints: links, analytics, qr-codes, account
├── errors.mdx
├── sdks.mdx
└── changelog.mdx
```

### Styling

- `app/globals.css` — custom overrides on top of `nextra-theme-docs/style.css`
- Nextra 4 injects inline `:root` CSS variables, so overrides require `!important`
- Brand color: amber/gold (`hsl(30deg 63% 47%)`)

## Key Patterns

- **Adding a new page**: create an `.mdx` file under `content/`, then add its key to the parent `_meta.ts`
- **Adding a new section**: create a subdirectory under `content/` with its own `_meta.ts` and `index.mdx`
- **Search is enabled**: uses FlexSearch configured in `theme.config.tsx` and `next.config.mjs`
- **Theme configuration**: `theme.config.tsx` contains all Nextra theme settings (logo, footer, search, etc.)
- **`declarations.d.ts`** exists to satisfy TypeScript for CSS module imports
- **Responsive design**: fully optimized for mobile (320px+), tablet (768px+), and desktop (1024px+)
