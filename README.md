# Chy Meng's portfolio

A static personal site built with Astro and handwritten CSS.

Live site: https://chymeng.com/

## Setup

Use Node.js 22.22.0 or newer and npm.
The `.nvmrc` file selects the latest Node.js 22 release for nvm and Netlify builds.

```sh
npm ci
npm run dev
```

The development server runs at http://localhost:4321.

## Build and preview

```sh
npm run build
npm run preview
```

Deploy the generated `dist/` directory to a static hosting provider. Configure
the provider to use Node.js 22.22.0 or newer and `npm run build`.
Netlify reads the Node.js version from `.nvmrc`; its publish directory is `dist`.

Run `npm test` for theme-selection regression tests and `npm audit` to check
dependencies against the current vulnerability database.

Astro optimizes the avatar and minifies the generated HTML, CSS, and JavaScript.
Styles are plain CSS, with shared palette tokens in `src/styles/global.css`.

## Editing

- `src/pages/index.astro`: page composition.
- `src/components/`: introduction, contact links, footer, and theme toggle.
- `src/layouts/Layout.astro`: metadata and theme initialization before rendering.
- `lib/theme-util.js`: manual theme selection and optional browser persistence.
- `src/styles/global.css`: palette, layout, typography, and contact-link effects.
- `src/styles/theme-toggle.css`: sun/moon styling and transitions.

The theme follows the system preference until a visitor selects one. Selections
remain active for the page when browser storage is blocked. Reduced-motion
preferences disable the pulsing heart and theme-toggle transitions.
