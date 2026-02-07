# Changelog

## [2.1.0] - 2026-02-07

### Added
- Item 109: "Create a Functional Video Game" (EN + FR) — build playable games with AI
- Showcase page (showcase.html)

### Changed
- Consolidated script loading: `include.js` now dynamically loads `funfacts.js` and `main.js` — pages only need `<script src="include.js">` in `<head>`
- Removed `<script src="funfacts.js">` and `<script src="main.js">` from all 9 HTML pages
- Renamed "Personal" category to "Fun" across all files (CSS, filter pills, data files)
- Changed `main.js` from DOMContentLoaded listener to IIFE for compatibility with dynamic loading
- Fixed `insertPoint` logic in `include.js` to use `document.body.lastElementChild`
- Renamed "About Your Curator" to "About the 100 Things with AI" with expanded philosophy section
- Updated README.md with current project structure and file descriptions

## [2.0.0] - 2026-02-07

### Added
- Multi-page architecture: split monolithic index.html into separate pages (tools, toolkit, tips, things, about, faq, quickwins)
- Shared component system via include.js (nav, footer, fun facts widget, scroll-to-top, meta tags)
- Shared styles.css, main.js, and funfacts.js
- CEMI owl logo with white circle on transparent background
- Favicons in all sizes (16px–512px), favicon.ico, apple-touch-icon
- Open Graph image, Twitter card, and share-square for social media
- site.webmanifest for PWA support
- GitHub card on tools page
- Carlos Miranda Levy photo on about page
- Nav search that redirects to things page with query
- xperto.academy link in footer
- maimusic.org links in music-related items
- xperto.media/portfolio links in visual/video items
- Google Flow, OpenAI Sora, Kling AI, NanoBanana Pro, Claude Code, Vercel, Google Firestore to tools
- Quick Wins page
- FAQ page
- Fun facts widget with ChatGPT and Perplexity research links

### Changed
- Renamed site from "100 Things You Can Do with AI" to "100 Things with AI"
- Renamed "About Your Speaker" to "About Your Curator"
- Applied CEMI color palette (Rojo Oscuro #a70000, Ocre Amarillo #D9A441, Azul Cobalto #2F4F6F, Verde Tierra #4B775A, Marrón Arcilla #A67F5B, Arena Neutra #E0CBA8)
- Switched fonts to MuseoModerno (display), Inter (body), Source Code Pro (code)
- Nav and footer logo now shows owl icon + "100 Things with AI"
- French translation (fr.html) updated with new palette and branding

## [1.0.0] - 2025-02-07

### Added
- Complete interactive website for "100 Things You Can Do with AI"
- Hero section with animated gradients, floating orbs, and the CEMI.AI mantra
- Showcase section with 5 real AI projects (videos, games, music, study materials)
- Content & Format foundational skills guide (Markdown + HTML)
- About section with Carlos Miranda Levy bio and recognitions
- All 100 AI use cases across 10 categories with full content:
  - Writing & Content (1-10)
  - Learning & Education (11-20)
  - Art & Design (21-30)
  - Music & Audio (31-40)
  - Video & Animation (41-50)
  - Productivity (51-60)
  - Coding & Tech (61-70)
  - Business & Entrepreneurship (71-80)
  - Science & Research (81-90)
  - Fun (91-100)
- Each item includes: description, step-by-step guide, ready-to-copy prompt, customization tips, recommended tools, resource links, and CEMI.AI contact
- Search functionality with debounced filtering
- Category filter pills (10 categories + All)
- Expandable/collapsible item cards
- Copy-to-clipboard on all prompts
- Scroll-triggered reveal animations
- Progress tracker ("X of 100 explored")
- Scroll-to-top button
- Responsive mobile design with hamburger menu
- Fixed navigation with scroll-aware hide/show
- Dark editorial theme with vibrant gradient accents
- Playfair Display, Lora, and Source Code Pro typography
- Inline SVG icons throughout (Lucide-style)
- README.md with full project documentation
