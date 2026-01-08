Website authoring quick guide

Where to put content

- Story projects
  - Folder: content/projects/
  - Each project is a Markdown file with frontmatter. Example: content/projects/no-saints-left.md
  - Edit title, description, youtube, instagram, video, audio, slides (array of public paths)

- Images and media (public)
  - Landing background: public/assets/landing/landing-bg.png
  - About image: public/assets/about/about.png
  - Header icon: public/assets/header-cat.png
  - Story project assets: public/assets/<project-slug>/ (e.g. public/assets/no-saints-left/)
    - Add slides (png/jpg), video (mp4), audio (mp3) and reference them in the project's frontmatter slides array or video field
  - Personal work (masonry): public/assets/personal-work/
    - Add image files (e.g. 1.png, sketch.jpg). Files are read automatically and sorted numerically.

How to add a new project

1. Create content/projects/<slug>.md with frontmatter including an id matching the slug. Example frontmatter keys:
   - id: "my-project"
   - title: "My Project"
   - description: "Short blurb"
   - youtube: "https://www.youtube.com/watch?v=..."
   - slides: ["/assets/my-project/1.png", "/assets/my-project/2.png"]
2. Put media in public/assets/<slug>/
3. Run dev server (if not running): npm run dev — Next should pick up changes

Personal Work ordering
- The personal work gallery automatically reads files from public/assets/personal-work and sorts them "naturally" (so filenames with numbers like 1.png, 2.png will sort in numeric order).
- To control which column an image appears in the masonry layout, prefix filenames (e.g. 01-image.png) or edit ordering by renaming files.

Deployment / build
- Build for production: npm run build
- After updating content, rebuild the site to ensure everything is picked up by static generation.

If you want me to:
- Add a simple admin JSON to edit project metadata in-browser
- Auto-generate thumbnails or resize images
- Integrate Netlify CMS / Tina / Contentful for non-dev editing

Tell me which feature you'd like next and I'll implement it.
