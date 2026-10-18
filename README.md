# Chy Meng's portfolio

A static personal site built with Astro, Tailwind CSS 4, and Sass.

Live site: https://chymeng.com/

## Setup

Use Node.js 22.22.0 or newer and npm.

Browser support follows [Tailwind 4's requirements](https://tailwindcss.com/docs/upgrade-guide#browser-requirements):
Safari 16.4+, Chrome 111+, and Firefox 128+.

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

Run `npm test` for theme-selection regression tests and `npm audit` to check
dependencies against the current vulnerability database.

Astro optimizes the avatar and minifies the generated HTML, CSS, and JavaScript.
Tailwind runs through its Vite plugin and loads the existing palette configuration.

## Editing

- `src/pages/index.astro`: page composition.
- `src/components/`: introduction, contact links, footer, and theme toggle.
- `src/layouts/Layout.astro`: metadata and theme initialization before rendering.
- `lib/theme-util.js`: manual theme selection and optional browser persistence.
- `tailwind.config.cjs`: palette and Tailwind configuration.

The theme follows the system preference until a visitor selects one. Selections
remain active for the page when browser storage is blocked. Reduced-motion
preferences disable the pulsing heart and theme-toggle transitions.
