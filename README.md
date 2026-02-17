# 100 Things You Can Do with AI

A comprehensive, interactive website created for a talk at **Lycee Francais de Saint Domingue**, presented by [CEMI.AI](https://cemi.ai).

**Live site:** [https://100.cemi.ai](https://100.cemi.ai)

## About

This project showcases 100 practical things you can do with AI, organized into 10 categories. Each item includes step-by-step guides, ready-to-use prompts, recommended tools, and resource links. The site is designed for teenager students to explore, learn, and start creating with AI.

### Our Mantra

> AI is not about doing the same faster and easier -- it is about doing MORE and BETTER than before. And about learning to do new things and improve ourselves.

## Features

- **115+ AI use cases** across 14 categories: Writing, Learning, Art, Music, Video, Productivity, Coding, Business, Science, Fun, Quick Wins, Family, Social, and Job Hunting
- **Ready-to-copy prompts** with one-click copy for each use case
- **Step-by-step guides** for every item
- **8 languages**: English, French, Spanish, Portuguese, German, Italian, Japanese, and Chinese
- **User suggestions**: Floating "+" button to submit new items, categories, and more
- **Item likes**: Heart button on each item with Firestore persistence
- **Showcase section** with real AI projects by Carlos Miranda Levy
- **Content & Format guide** covering Markdown and HTML as foundational AI skills
- **Search and filter** by category or keywords
- **Progress tracker** showing how many items you've explored
- **Responsive design** optimized for mobile and desktop
- **Three theme flavors** -- Pastel (default), Light, and Dark -- with a toggle in the nav bar, persisted via localStorage
- **Google Analytics** (GA4) tracking page views, searches, likes, and suggestion submissions

## Tech Stack

- Pure HTML, CSS, and vanilla JavaScript (no frameworks, no build step)
- Firebase (Firestore for likes/suggestions, Auth for admin)
- Google Analytics (GA4) via gtag.js
- Google Fonts: MuseoModerno (display), Inter (body), Source Code Pro (code)
- Inline SVG icons (Lucide-style)
- Data-driven architecture with separate `data.js` (EN) and `data-{lang}.js` for translations
- `include.js` dynamically injects shared components and loads scripts

## Project Structure

```
index.html          # Home page (+ {lang}.html for each language)
things.html         # The 100+ things (+ {lang}-things.html)
tips.html           # Tips for using AI
toolkit.html        # Useful skills (Markdown, HTML, Mermaid, GitHub Pages)
tools.html          # Our favorite AI tools
quickwins.html      # Quick wins to try right now
showcase.html       # Real AI projects showcase
faq.html            # Frequently asked questions
about.html          # About the project and curator
admin.html          # Admin dashboard (Firebase Auth protected)
include.js          # Shared components (nav, footer, widgets, script loading)
styles.css          # Shared styles
main.js             # Shared interactions (nav, search modal, scroll, FAQ)
funfacts.js         # AI fun facts data
data.js             # All 115 items data array (English)
data-{lang}.js      # Translated items (fr, es, pt, de, it, ja, zh)
firebase-config.js  # Firebase initialization (Firestore, Auth)
likes.js            # Item like buttons with Firestore persistence
suggest-app.js      # Suggestion form modal (11 types x 8 languages)
admin-app.js        # Admin dashboard logic
README.md           # This file
CHANGELOG.md        # Version history
resources/          # Reference materials
```

## Deployment

The site is a multi-page static application. To deploy:

1. Host all HTML, JS, and CSS files in the same directory
2. Serve via GitHub Pages, Netlify, Vercel, or any static hosting
3. Point your domain (e.g., `100.cemi.ai`) to the hosting

To test locally, just open `index.html` in a browser.

## About the Speaker

**Carlos Miranda Levy** -- Chief Innovation Officer & Director of Transformation at Xperto Group. Stanford Fellow, TEDx Speaker, with 25+ years of experience in AI, digital strategy, and human-centered design.

- [thesocialentrepreneur.com](https://thesocialentrepreneur.com)
- [cemi.ai](https://cemi.ai)

## Showcase Projects

- [35 Videos in 35 Days](https://xperto.media/jugueton) -- AI-powered video production
- [Video Game in an Afternoon](https://cary.xperto.media) -- AI game prototype
- [Jazz Band in 3 Hours](https://pachamaima.com) -- AI-generated music
- [Record Label in a Weekend](https://maimusic.org) -- Full AI music label
- [AI Study Materials](https://carlosmirandalevy.github.io/aiprendizaje/) -- Educational content

## License

Copyright 2026 CEMI.AI. All rights reserved.
