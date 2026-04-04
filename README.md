# sreevathsagolla.github.io

Personal academic website for Sreevathsa Golla — PhD Researcher in Oceanography & Climate Science at the University of Southampton & National Oceanography Centre.

**Live at:** [sreevathsagolla.github.io](https://sreevathsagolla.github.io)

## Structure

```
index.html              — The entire website (HTML, CSS, JS all inline)
assets/
  profile.jpg           — Profile photo (B&W, Stonehenge)
  background.JPG        — Hero background image (mountains/landscape)
  Sreevathsa_Golla_CV.pdf — CV download (linked from hero "My CV" button)
```

Everything lives in a single `index.html` — styles are in an inline `<style>` block and scripts in an inline `<script>` block at the bottom. No build step, no dependencies, no framework.

## Sections

1. **Hero** — Name, subtitle, tagline, location tag, profile photo, CV download + contact buttons. Uses `background.JPG` as a full-width cinematic backdrop with a dark fade overlay.
2. **Research & Education Background** — About text, research interest tags, education cards (PhD, BS-MS) with thesis titles and advisor details.
3. **Research Journey** — Timeline of positions: PhD, Visiting Researcher (NCAR), Mitacs Globalink (Alberta), IISER Bhopal internships. Each with supervisor info.
4. **Publications** — Two-column clickable card grid. Published papers link to their DOI pages. "In Revision" and "In Preparation" shown as status badges.
5. **Presentations** — Conference cards with coloured Oral (blue/teal) and Poster (green) type tags.
6. **Skills & Tools** — Grid with icon headers and pill-style tags per category. Teaching & Leadership subsection below.
7. **Let's Connect** — Contact form (Formspree) + sidebar with links to Email, Google Scholar, ORCID, ResearchGate, GitHub, LinkedIn.

## Features

- **Light/dark mode toggle** — button in the nav bar, defaults to light, persists choice via `localStorage`.
- **Responsive** — mobile hamburger menu, stacked layouts on small screens.
- **Scroll animations** — elements fade in via `IntersectionObserver`.
- **External dependencies** (CDN only): Google Fonts (Newsreader + DM Sans), Font Awesome icons, Academicons.

## Contact Form

The contact form uses [Formspree](https://formspree.io) (endpoint: `mykbbzbz`). Submissions are forwarded to `sreevathsa.golla@soton.ac.uk`. All fields (Name, Email, Message) are mandatory.

## Things to update

- **Google Scholar link** — replace `YOUR_ID` in the nav icons and contact sidebar with your actual Google Scholar user ID.
- **CV PDF** — upload `Sreevathsa_Golla_CV.pdf` to `assets/`.
- **ResearchGate / LinkedIn URLs** — verify they point to the correct profiles.

## Hosting

Deployed via GitHub Pages from the `main` branch. The repo can be **private** — GitHub Pages works with private repos on any paid GitHub plan (Pro, Team, Enterprise). On the free plan, the repo must be public for Pages to work.
