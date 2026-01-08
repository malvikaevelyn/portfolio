# Malvika Portfolio

This is a modern, visually stunning portfolio for an animation and art student. Built with Next.js, Tailwind CSS, and TypeScript, it features a minimal yet playful UI with smooth animations and transitions.

## Folder Structure

- `/public`: Static assets like images, videos, and icons.
- `/content`: Markdown or JSON files for easy updates to bio, portfolio data, and gallery lists.
- `/src/components`: Reusable components and section-specific components.
- `/src/pages`: Maps directly to website routes using Next.js file-based routing.
- `/src/styles`: Global Tailwind CSS styles.
- `/src/utils`: TypeScript types and utility functions.
- `/src/hooks`: Custom React hooks.

## Development

### Prerequisites
- Node.js (v18 or later)
- npm or yarn

### Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## TODOs
- Add bio content in `/content/bio/bio.md`.
- Populate portfolio data in `/content/portfolio/*.json`.
- Add images and videos to `/public/assets/images` and `/public/assets/videos`.

## Notes
- All transitions and animations are implemented with Framer Motion and Tailwind CSS.
- The project is designed for easy updates by non-technical users.
