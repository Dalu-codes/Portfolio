# JOHN — Portfolio

React + TypeScript + Tailwind CSS (Vite).

## Run it

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Structure

- `src/App.tsx` — page composition
- `src/components/` — Header, Hero, SectionBar, Projects, Skills, About, Contact, Footer, Icons, Reveal (scroll-in animation hook)
- `src/index.css` — Tailwind directives + checkerboard placeholder styles + animation utility classes
- `tailwind.config.ts` — custom colors (`bg` #252525, `green` #BAEB6B, `yellow` #FFF9C2) and Poppins font

All image/icon placeholders are checkerboard blocks, ready to be swapped for real assets.
