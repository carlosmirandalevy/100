# Changelog

## [3.1.3] - 2026-02-17

### Added
- **Lawra.org (item 164)**: New "Legal" category with sister project link to lawra.org, added across all 6 data files (en, fr, es, de, ja, zh)
- **Legal category styling**: New `--cat-legal` color variable in styles.css, filter pill on all 8 things pages, and category in suggest-app.js
- **Lawra.org footer link**: Added lawra.org promotion section in footer via include.js with translations for all 8 languages
- **Item icon support**: Items with an `icon` field now display a logo image instead of the item number in the card header

### Changed
- **Prompt/tip blocks now conditional**: The "Ready-to-Use Prompt" and "Customize it" blocks in all 8 things pages are now hidden when `prompt`/`promptTip` are empty, supporting non-prompt items like Lawra.org

## [3.1.2] - 2026-02-17

### Added
- **Launch plan** (`resources/launch-plan.md`): 4-week social media rollout with posts for LinkedIn, X, Instagram, and Facebook, plus standalone origin story article
- **Hero image prompts** (`resources/hero-image-prompts.md`): MidJourney and Gemini prompts for site hero image

## [3.1.1] - 2026-02-17

### Changed
- **Consolidated Google Analytics**: Unified all analytics tracking under a single GA4 property (`G-5BQ9VNWRX5`), removing separate Firebase Analytics SDK
- Updated `measurementId` in `firebase-config.js` to match the primary GA4 property

### Added
- **Like/unlike event tracking**: `likes.js` now fires `gtag('event', 'like/unlike')` with `item_id`
- **Suggestion submission tracking**: `suggest-app.js` now fires `gtag('event', 'suggestion_submit')` with `type`, `category`, and `language`

### Removed
- Firebase Analytics compat SDK dynamic load from `firebase-config.js` (redundant with gtag.js in `include.js`)

## [3.1.0] - 2026-02-15

### Added
- **Job Hunting category**: New "jobs" category with teal-green color (`--cat-jobs: #1B7A6F`)
- 3 new items (IDs 161-163): Create a Personal Introduction Letter, Create a Job Hunting Plan, Advanced Job Hunting Planner (interactive HTML with .cemijob save/load)
- Job Hunting items translated into all 7 languages (fr, es, pt, de, it, ja, zh)
- "Job Hunting" filter pill added to all 8 language things pages with translated labels

### Changed
- Category filter pills sorted alphabetically by displayed label in all 8 language things pages
- Hardcoded results-count placeholders cleared (JS populates dynamically)
- Portuguese nav logo text shortened: "a fazer e não com IA"
- Fun facts script now always loads `funfacts.js` (fixes 404 for non-English pages)
- Carlos continents stat changed from 6 to 4 on all 8 about pages

### Fixed
- `data-zh.js` syntax error: unescaped ASCII double quotes inside Chinese prompt string (line 925)

## [3.0.0] - 2026-02-15

### Added
- **User Suggestions**: Floating "+" button on every page opens a suggest modal for submitting new items, don'ts, categories, examples, requests, tips, skills, quick wins, showcase entries, tools, and FAQs
- **Item Likes**: Heart button on each item in all 8 things pages with Firestore persistence and localStorage dedup; unlike support (toggle)
- **Admin Dashboard** (`admin.html`): Firebase Auth login, submission review with filter/sort, status management (pending/reviewed/published/rejected)
- **Firebase integration**: `firebase-config.js` (shared init), `likes.js` (like buttons), `suggest-app.js` (form with 11 submission types x 8 languages), `admin-app.js` (dashboard)
- **Google Analytics** via Firebase Analytics SDK, loaded dynamically by `firebase-config.js`
- Suggest form translations embedded in `suggest-app.js` for all 8 languages
- Suggest link in footer quick links and about pages (opens modal via `#suggest`)
- Community-driven messaging added to all 8 about pages ("not a static catalog")

### Changed
- Firebase SDK and page-specific scripts now loaded centrally from `include.js` (no manual `<script>` tags in HTML pages)
- Suggest form is a modal (no standalone suggest.html pages) — loaded on demand when first opened
- Toolkit pages updated across all 8 languages: added Step 0 (enable Markdown in Google Docs) and rewrote Step 2 (Paste from Markdown)

### Removed
- 8 standalone suggest.html pages replaced by modal approach

## [2.7.0] - 2026-02-15

### Added
- Floating page share button (bottom-right) on every page via include.js
- Email sharing option added to all share dropdowns (items and page-level)
- Share dropdown now shows 6 options: Copy Link, Email, WhatsApp, X/Twitter, LinkedIn, Facebook
- Translated email label in all 8 languages
- Fun Fact widget now starts collapsed as a lightbulb icon; expands on click

### Changed
- Refactored page share to reuse share.js infrastructure instead of duplicating logic in include.js
- share.js now loaded dynamically on all pages (not just things pages)
- Added load guard to share.js to prevent double execution on things pages

## [2.6.1] - 2026-02-15

### Changed
- Replace emoji icons with elegant Lucide-style SVG icons in Explore page (route cards, quiz roles, detail header)
- Route card icons now inherit category color for visual consistency

### Fixed
- Added 28 missing items to French data file (IDs 108, 110-115, 136-156)
- Added 21 missing Family items to Chinese data file (IDs 136-156)
- All 8 language data files now have the complete 156 items

## [2.6.0] - 2026-02-15

### Added
- **Explore page** (`explore.html` + 7 language variants) — personalized AI learning routes
- 12 curated learning routes (Student, Professional, Creative, Parent, Entrepreneur, Developer, Researcher, Writer, Musician, Educator, Job Seeker, Hobbyist)
- Quick Quiz: 3-step wizard (role → experience → interests) with personalized route recommendations
- Browse mode: grid of all 12 routes with detail stepper and progress tracking (localStorage)
- Route data files (`routes.js` + 7 language variants) with item adaptations by experience level
- `explore-app.js` shared page logic (IIFE) with deep linking (`?route=id`) support
- Explore link in top-level nav and footer quick links across all 8 languages
- ~20 new STRINGS keys for Explore UI across all 8 language blocks
- Explore routes paragraph added to all 8 about pages
- Talk catalog text (`talk-catalog.md`) in English and Spanish

### Changed
- Showcase moved from top-level nav into "Using AI" dropdown (above Tools)
- `window.__S` bridge added in include.js to expose STRINGS to page scripts

## [2.5.0] - 2026-02-15

### Added
- 12 Quick Wins items (IDs 124-135) — bite-sized AI tasks across all 8 languages
- 21 Family items (IDs 136-156) — parent-child AI conversation and activity prompts across all 8 languages
- Quick Wins and Family category filter pills on all things pages
- Quick Wins (`--cat-quickwins`) and Family (`--cat-family`) CSS category colors for all 3 themes
- Preview button support (promptDemos) on prompt blocks across all things pages

### Changed
- Footer copyright updated to 2026, added Carlos Miranda Levy credit
- Removed unused `availableAt` key from STRINGS in include.js

## [2.4.1] - 2026-02-14

### Added
- Item 123: Preview buttons (Claude & Gemini) on Example 4 linking to live guitar learning planner demos
- Guitar learning planner demo pages (demos/planners/)

### Fixed
- Item number circles disappearing on hard refresh (Shift+Ctrl+R) — categoryColors were pre-computed before CSS loaded; now computed live via getCategoryGradient() with fallback
- Progress tracker total-count hardcoded to 119 — now dynamically set from ITEMS.length on page load
- Item 123 prompt text truncated — increased .item-body.open max-height from 10000px to 50000px

## [2.4.0] - 2026-02-13

### Added
- Item 123: "Learn to Play an Instrument" with 4 example prompts, translated across all 8 languages
- prompt4 rendering support added to all 8 things pages (Example 4 tab)

### Fixed
- Copy button now reads from `pre code` textContent instead of `data-prompt` attribute, fixing truncation when prompts contain double quotes
- prompt4 TAB 2 replaced with brief structural description (matching prompt3 style) instead of pre-generated 6-month curriculum, across all 8 languages

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
