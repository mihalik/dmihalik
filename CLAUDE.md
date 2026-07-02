# CLAUDE.md

This file provides guidance for AI assistants working with this codebase.

## Project Overview

This is **dmihalik.com**, a personal blog and portfolio website for Dustin Mihalik. It's a static site built with React Router 7, using MDX for content and Tailwind CSS for styling.

## Tech Stack

- **Framework**: React Router 7 (formerly Remix)
- **Language**: TypeScript
- **Build Tool**: Vite
- **Content**: MDX with frontmatter
- **Styling**: Tailwind CSS with `@tailwindcss/typography`
- **Node Version**: 22.1.0 (specified in `.nvmrc`)

## Project Structure

```
/
├── app/
│   ├── articles/          # Blog posts as MDX files
│   ├── routes/            # Page routes (about, contact, archive, etc.)
│   ├── root.tsx           # Root layout with header/footer
│   ├── articleRoot.tsx    # Layout wrapper for articles
│   ├── posts.ts           # Helper to load and sort blog posts
│   ├── routes.ts          # Route configuration
│   └── app.css            # Tailwind imports
├── public/
│   └── images/            # Static images
├── package.json
├── vite.config.ts
├── react-router.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## Development Commands

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Run production server
npm run typecheck    # Run TypeScript type checking
```

## Key Conventions

### Article File Naming

Articles use a date-based naming convention:
```
YYYY.MM.DD.slug-name.mdx
```

Example: `2025.05.29.me-mcp.mdx`

The filename is transformed into a URL path:
- `2025.05.29.me-mcp.mdx` → `/articles/2025/05/29/me-mcp`

### MDX Frontmatter

Articles require frontmatter with:
```yaml
---
title: "Article Title"
date: "YYYY-MM-DD"
---
```

After frontmatter, articles should include:
```jsx
export const meta = [{title: frontmatter.title}];

**{frontmatter.date}**
# {frontmatter.title}

[content here]
```

### Page Routes (MDX)

Static pages in `app/routes/` use frontmatter with `type: 'page'`:
```yaml
---
title: 'Page Title'
date: '2024-11-05'
type: 'page'
---
```

### Routing Structure

- Routes are configured in `app/routes.ts`
- Articles are nested under `/articles` path using `articleRoot.tsx` as layout
- Other pages use file-system routing from `app/routes/`
- Special route files use bracket notation: `atom[.]xml.tsx` → `/atom.xml`

### Styling

- Uses Tailwind CSS utility classes
- Typography plugin (`prose` classes) for article content
- Custom font: Inter (configured in `tailwind.config.ts`)
- Main content uses `prose lg:prose-xl` for responsive typography

## Static Generation

The site is pre-rendered at build time:
- `react-router.config.ts` sets `prerender: true`
- All routes are automatically discovered and pre-rendered
- Build output goes to `build/server` and `build/client`

## Adding New Content

### New Blog Post

1. Create file in `app/articles/` with date-based naming
2. Add required frontmatter (title, date)
3. Add meta export and heading pattern
4. Write content in MDX

### New Static Page

1. Create `.mdx` or `.tsx` file in `app/routes/`
2. For MDX: add frontmatter with `type: 'page'`
3. Page URL matches filename (e.g., `about.mdx` → `/about`)

## Feed Generation

An Atom feed is generated at `/atom.xml` via `app/routes/atom[.]xml.tsx`. It includes the 10 most recent posts with full content rendered to HTML.

## Important Files

- `app/posts.ts`: Loads all MDX articles using Vite's glob import
- `app/root.tsx`: Global layout with header, footer, and Cloudflare analytics
- `app/routes.ts`: Configures dual routing (articles + pages)
