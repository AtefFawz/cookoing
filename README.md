# Cookoing

A responsive recipe-discovery experience built with the Next.js App Router, React and TypeScript. The project focuses on a small set of complete, useful flows rather than placeholder sections: discover recipes, filter and search, save favourites, and follow a recipe with adjustable servings and a cook-along checklist.

## Features

- Responsive editorial-style interface with light and dark themes.
- Recipe discovery with search across recipe names, descriptions and ingredients, category filters, sorting and an empty state.
- Favourite recipes stored locally in the browser (`localStorage`). No account or backend is required.
- Dedicated recipe pages generated from typed recipe data.
- Adjustable servings with ingredient quantities recalculated automatically.
- Interactive ingredient checklist with progress, cooking tips and print-friendly recipe pages.
- Native share support where available, with a clipboard fallback.
- Contact form validation that opens a prefilled email draft when an email address is configured.
- Legacy route redirects for `/aboutUs`, `/blog` and `/contactUs`.
- Accessible labels, keyboard focus states, reduced-motion support and responsive layouts.

## Tech stack

- Next.js 16 App Router
- React 19
- TypeScript 5
- CSS custom properties and responsive CSS (no runtime UI framework)
- Next.js Image component for local image assets

## Getting started

### Requirements

- Node.js 20.9 or newer
- npm 10 or newer

### Install

```bash
npm ci
```

### Configure environment (optional)

Copy `.env.example` to `.env.local`.

```bash
cp .env.example .env.local
```

Set `NEXT_PUBLIC_CONTACT_EMAIL` to the inbox that should receive contact messages. The form uses the visitor's configured mail app to prepare a message; it does not send or store submissions on a server. `NEXT_PUBLIC_SITE_URL` can be set to the deployed canonical URL when needed by deployment metadata or integrations.

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```text
src/
├── app/                         # App Router routes, layouts and global styles
│   ├── recipes/[slug]/          # Static-generated recipe detail routes
│   ├── about/                   # Brand story
│   ├── journal/                 # Editorial notes
│   └── contact/                 # Contact experience
├── components/
│   ├── layout/                  # Global navigation, footer and theme provider
│   └── ui/                      # Small reusable presentation primitives
├── features/
│   ├── contact/                 # Contact form behaviour
│   ├── favorites/               # Local favourite state and persistence
│   └── recipes/                 # Typed recipe data, explorer and detail interactions

public/images/                   # Local image assets supplied with the project
```

## Available scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run the TypeScript compiler without emitting files |

## Notes on data and persistence

Recipe content currently lives in `src/features/recipes/data/recipes.ts`. This is intentional for the supplied frontend-only project: it gives the application a typed, testable data boundary without pretending a database or API exists. Favourites and theme preferences are stored in the visitor's browser and are not synced between devices.

To take the project further, the next production step would be to connect the recipe data boundary to a CMS or database, then add server-backed accounts and synchronised favourites only when those services are available.

## Quality checks

Run the project checks after installing dependencies:

```bash
npm run typecheck
npm run lint
npm run build
```

The repository keeps recipe content and browser-only preferences separate from presentation components so the data source can be replaced by an API or CMS without rewriting the UI.
