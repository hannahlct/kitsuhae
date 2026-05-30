# Portfolio — React + TypeScript + Vite

Graphic designer portfolio scaffold matching the warm-beige, OS-window aesthetic.

## Quick start

```bash
npm install
npm run dev
```

## Project structure

```
src/
├── styles/
│   └── globals.css          # Design tokens (CSS vars) + base reset
├── types/
│   └── index.ts             # Shared TypeScript interfaces
├── data/
│   └── index.ts             # ← Fill in your real content here
├── hooks/
│   ├── useWorkFilter.ts     # Category filter state + logic
│   └── useActiveSection.ts  # IntersectionObserver for scroll tracking
└── components/
    ├── ProfileCard           # Top identity card
    ├── WindowNav             # OS-window nav / category filter
    ├── WorkCard              # Individual project card
    ├── AboutPanel            # Bio + skills grid
    ├── ContactStrip          # Bottom CTA
    └── SocialIcon            # Inline SVG social icons
```

## Customising

### 1. Fill in your data
Edit `src/data/index.ts` — replace all `[bracket]` placeholders with your real info.

### 2. Design tokens
All colours, spacing, and typography live in `src/styles/globals.css` as CSS custom properties. Change them there and every component updates automatically.

Key token groups:
- `--color-*`    palette
- `--font-*`     typefaces
- `--space-*`    spacing scale
- `--radius-*`   border radii
- `--duration-*` / `--ease-*`  motion

### 3. Add work items
Add objects to the `work` array in `src/data/index.ts`. Drop thumbnail images in `public/assets/` and reference them as `/assets/thumb.jpg`.

### 4. Add nav categories
Extend the `navCategories` array. Each category's `filter` string must match a `WorkItem.category` value.

### 5. Add social platforms
Extend `SocialIcon.tsx` with a new `case` and add the link to `profile.socials` in `data/index.ts`.

## Build

```bash
npm run build   # outputs to dist/
npm run preview # local preview of production build
```
