# Changelog

## [2.3.1] - 2026-02-11

### Fixed
- Share dropdown on item cards no longer hidden behind previous item (removed overflow:hidden from item-card; item-body already handles its own overflow)

## [2.3.0] - 2026-02-11

### Added
- Three-theme system: Pastel (default), Light, and Dark
- Theme toggle button in nav bar with dropdown (between search and language selector)
- Translated theme labels in all 8 languages (en, fr, es, pt, de, it, ja, zh)
- Theme persistence via localStorage across page loads and navigation
- Early theme application in include.js to prevent flash of unstyled content (FOUC)
- CSS variables for nav background, code blocks, shadows, and borders
- Pastel theme: warm cream backgrounds, softened accent colors, gentle shadows
- Light theme: white backgrounds, original vibrant accent colors, subtle shadows
- Theme-specific card borders and hero orb adjustments for light backgrounds

### Changed
- Replaced 15+ hardcoded color values in styles.css with CSS variables (nav, code blocks, shadows, modals, dropdowns)
- Replaced inline `background:#0d0d25` in all 8 tips pages with `var(--bg-code)`
- Converted categoryColors in all 8 things pages from hardcoded hex to CSS variable lookups via `getComputedStyle`
- Category number gradients now use `color-mix(... 70%, black)` for reliable white-text contrast across all themes
- Mobile nav theme toggle uses collapsible dropdown matching existing nav patterns

## [2.2.0] - 2026-02-08

### Added
- Items 117–120: Interactive Dashboards, Scenario Simulations, Resume Screening, Client Research (business category)
- 5 playable game demos (Breakout, Frogger, Space Invaders, Rogue, Soccer) with prompts and downloadable HTML
- Game demo cards on Showcase page with in-page modal playback
- Hero images for each game demo in card previews
- ASCII art examples for item 110 (static art with View modal)
- ASCII art animation examples for item 111 (iframe-based Play modal)
- Game examples file (game-examples.js) and ASCII examples file (ascii-examples.js)
- Rogue game: CGA color palette, Code Page 437 characters, diagonal movement, help/instructions screen
- Soccer game: halftime animation, goalkeeper AI improvements, 2-minute halves

### Changed
- Rebranded "100 Things" to "100+ Things" across all 8 languages (nav, titles, headings, search, manifest)
- Updated "Video Game in an Afternoon" showcase card to describe Caribbean sea turtle educational game
- Removed duplicate "La Travesia de Cary" showcase card
- Showcase SVG icons now inline with card titles instead of separate icon boxes
- Examples section now renders before tools list in item expanded view
- Game card footer: responsive layout with name on one line, buttons wrapping below
- Game modal iframes auto-focus on load for immediate keyboard input
- Mobile hamburger menu: "Using AI" dropdown now collapsed by default (no empty space)
- Item body max-height increased to 10000px to prevent content truncation on mobile
- Examples grid fixed to 3 columns (was auto-fit 4)
- Filter pill updated to "All (100+)"

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
