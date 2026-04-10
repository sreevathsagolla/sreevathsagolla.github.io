# sreevathsagolla.github.io

> This website was built with the help of **Claude Opus 4.6** (Anthropic) via [Claude Code](https://claude.ai/code).

Personal academic website for Sreevathsa Golla — PhD Researcher in Oceanography & Climate Science at the University of Southampton & National Oceanography Centre.

**Live at:** [sreevathsagolla.com](https://sreevathsagolla.com)

## Structure

```
index.html                          — The entire website (HTML, CSS, JS all inline)
sitemap.xml                         — XML sitemap for search engine indexing
robots.txt                          — Crawler directives with sitemap reference
CNAME                               — Custom domain configuration
assets/
  icon.svg                          — Custom SVG favicon
  profile.jpg                       — Profile photo
  background.JPG                    — Hero background image (optimized)
  Sreevathsa_Golla_CV.pdf           — CV download (linked from hero "My CV" button)
  picture_assets_carousel/
    NCAR/                           — Visiting Researcher photos (4 images)
    UOALBERTA/                      — Mitacs Globalink photos (4 images)
    IISERB_GANS_CONTIN/             — IISER Bhopal GAN research photos (3 images)
    IISERB_SRCNN_SUMMER/            — IISER Bhopal CNN research photos (2 images)
    OSM_2026/                       — Ocean Sciences Meeting 2026 photos (3 images)
    AGU_2024/                       — AGU Fall Meeting 2024 photos (3 images)
    EGU_2024/                       — EGU General Assembly 2024 photos (3 images)
```

Everything lives in a single `index.html` — styles are in an inline `<style>` block and scripts in an inline `<script>` block at the bottom. No build step, no dependencies, no framework.

## Sections

1. **Hero** — Name, subtitle, tagline, location tag, profile photo, CV download (coral) + Get in Touch (teal) buttons. Uses `background.JPG` as a full-width cinematic backdrop with a dark gradient overlay.
2. **Research & Education Background** — About text, research interest tags, education cards (PhD, BS-MS) with thesis titles, hyperlinked advisor names, and institution links.
3. **Research Journey** — Timeline of research positions with image carousels alongside each entry. Carousels auto-scroll, pause on hover with arrow controls, and dim other carousels when one is focused. Institutions and supervisor names are hyperlinked.
4. **Publications** — Two-column clickable card grid. Clicking any card opens a detail modal showing full author names with superscript affiliations, journal info, status badge, abstract, and a link to the full text or preprint. Status badges: "In Revision" (yellow) and "In Preparation" (red).
5. **Presentations** — Two-column card grid with inline image carousels for each conference (OSM 2026, AGU 2024, EGU 2024). Less prominent presentations listed separately below.
6. **Skills & Tools** — Grid with icon headers and pill-style tags per category.
7. **Teaching, Leadership & More** — Two-column layout: left column for teaching & leadership roles, right column for Awards & Funding and Workshops & Training.
8. **Let's Connect** — Contact form (Formspree) + sidebar with links to Google Scholar, ORCID, ResearchGate, LinkedIn, GitHub, and X (Twitter).

## Features

- **Light/dark mode toggle** — horizontal slider switch (sun/moon) in the nav bar, persists via `localStorage`. Dark mode palette harmonized with the earthy stone/mountain accent colours.
- **Publication detail modals** — clicking any publication card opens a centered pop-up with full author list, institutional affiliations, journal info, abstract text, and a link to the paper. Styled with translucent overlay and blur backdrop.
- **Image lightbox** — clicking any carousel image (Research Journey or Presentations) opens a full-size lightbox with navigation arrows, dot indicators, and keyboard support (arrow keys, Escape).
- **Image carousels** — Research Journey and Presentations entries have auto-scrolling carousels (3s interval) with activity photos. Hover pauses auto-scroll and shows navigation arrows; other carousels dim to reduce distraction.
- **Scroll-progress bar** — teal-to-coral gradient bar at the top of the viewport tracking scroll position.
- **Back-to-top button** — appears after scrolling 400px, smooth-scrolls to top on click.
- **Responsive** — mobile hamburger menu, stacked layouts on small screens, carousels stack below text.
- **Scroll animations** — elements fade in via `IntersectionObserver`.
- **Hyperlinked advisors & institutions** — supervisor names and institutions throughout link to their respective pages, styled with accent colours.
- **SEO** — meta description, canonical URL, keywords, Open Graph tags (for LinkedIn/Facebook link previews), Twitter Card tags, XML sitemap, robots.txt, and Google Search Console verification.
- **External dependencies** (CDN only): Google Fonts (Newsreader + DM Sans), Font Awesome icons, Academicons.

## Contact Form

The contact form uses [Formspree](https://formspree.io) (endpoint: `mykbbzbz`). Submissions are forwarded to `sreevathsa.golla@soton.ac.uk`. All fields (Name, Email, Message) are mandatory.

## Image Optimization

All carousel images have been resized to 800px wide at quality 80 with metadata stripped. The hero `background.JPG` is optimized to 1920px wide.

## Hosting

Deployed via GitHub Pages from the `main` branch with a custom domain (`sreevathsagolla.com`). The repo can be **private** — GitHub Pages works with private repos on any paid GitHub plan (Pro, Team, Enterprise). On the free plan, the repo must be public for Pages to work.
