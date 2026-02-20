# CLAUDE.md — Project Guide for AI Assistants

## Project Overview
**100 Things with AI** (https://100.cemi.ai) — A multi-page static site showcasing 115+ practical AI use cases across 14 categories, in 8 languages.

## Architecture
- Pure HTML, CSS, vanilla JS — no frameworks, no build step
- `include.js` injects shared components (nav, footer, fun facts widget, search modal, script loading)
- `main.js` loaded dynamically by include.js via `funfacts.js` onload chain — uses IIFE, NOT DOMContentLoaded
- Data-driven: `data.js` (EN) + `data-{lang}.js` for translations

## File Naming Convention
- English pages: `{page}.html` (index.html, things.html, glossary.html, etc.)
- Translated pages: `{lang}-{page}.html` (fr-things.html, ja-glossary.html, etc.)
- Exception: translated index = `{lang}.html` (fr.html, ja.html, etc.)
- Data files: `data.js` (EN), `data-{lang}.js` for translations

## Languages
en, fr, es, pt, de, it, ja, zh (8 total)

## Key Patterns in include.js
- `STRINGS` object per language with all UI translations
- `ph(pageName)` generates language-prefixed page links
- `langHref(targetLang)` generates links to the same page in a different language
- `document.documentElement.lang` detects current language
- `document.body.dataset.page` identifies current page
- Footer appended with `document.body.insertAdjacentHTML('beforeend', ...)`

## Pages (16 public + admin)
index, things, donts, explore, tips, toolkit, tools, quickwins, showcase, faq, about, contact, program, ai-readiness, newsletter, glossary, admin

## Navigation Structure
```
100+ ▾ (Explore 100+, 100+ Things, A Few Don'ts)
Learn AI → program.html (also highlights for ai-readiness)
Using AI ▾ (Tips, Skills, Quick Wins, Showcase)
Resources ▾ (FAQ, Tools, Glossary, Newsletter)
About ▾ (About 100+, Contact Us)
```

## Firebase / Firestore
- `firebase-config.js` initializes Firebase app + Firestore (`window.__db`)
- Collections: `likes`, `suggestions`, `newsletter`, `contacts`
- Firestore rules in `firestore.rules` — deploy with `firebase deploy --only firestore:rules`
- Contact form loads Firebase on-demand (not preloaded)

## Categories
writing, learning, art, music, video, productivity, coding, business, science, fun, quickwins, family, social, jobs, legal

## Critical Rules

### Translation & CJK Safety
- NEVER truncate or partially write files with CJK/multi-byte text
- NEVER guess translations — ask if uncertain
- All files must be UTF-8, no BOM
- CJK text has NO spaces between words
- Simplified Chinese only (zh-CN) — never mix Traditional Chinese
- Japanese: appropriate kanji/hiragana/katakana mix; foreign terms in katakana
- Run `node -c file.js` after every edit to JS data files

### Code Conventions
- Scripts loaded dynamically must use IIFE, not DOMContentLoaded
- `querySelector` only finds first match — use `querySelectorAll` for multiple elements
- HTML entities (&#XXXX;) for accented/CJK characters in HTML files
- Unicode escapes (\uXXXX) for non-ASCII in JS strings
- Search redirect needs language prefix: `prefix + 'things.html?q=...'`

### data.js Warning
- data.js is ~136KB — too large for a single AI write operation
- Use targeted edits (Edit tool) instead of rewriting the whole file
- Same applies to translated data-{lang}.js files
