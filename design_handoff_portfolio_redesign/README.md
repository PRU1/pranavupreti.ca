# Handoff: Portfolio Site Expansion

## Overview
Expands the current single-page portfolio (Banner + About + Footer only) into a fuller, still-minimal one-page site: sticky nav, hero with headshot, About, Photo Gallery, Projects, Experience, Skills & Coursework, Research, and Contact. Keeps the existing visual language (cream background, et-book serif, teal accent) — no new design system introduced.

## About the Design Files
The bundled HTML file (`portfolio-redesign-mockup.html`) is a **design reference**, not production code — it's built on this project's own component runtime (custom template syntax, inline styles), not React/JSX. Treat it as the source of truth for layout, copy, spacing, and colors, and **recreate it inside the existing Create React App codebase** (`01_portfolio/`), using its existing stack: React, react-bootstrap, Animate.css, react-on-screen, react-type-animation. Follow the existing component-per-section pattern (`src/components/*.js`) rather than porting any markup verbatim.

## Fidelity
**High-fidelity.** Colors, type, spacing, and copy in the mockup are final for this pass — recreate pixel-close using the tokens below. Placeholder body copy in Projects/Experience/Skills/Research was pulled from the user's resume draft and is real content, not lorem ipsum.

## Design Tokens
- Background: `#fff2e7`
- Text: `#403d3d`
- Accent (teal): `#13a888`, hover `#236acd`
- Hairline rule: `rgba(64,61,61,0.15)`
- Border (cards/tags): `rgba(64,61,61,0.2)` – `rgba(64,61,61,0.25)`
- Font family: `et-book, Palatino, "Palatino Linotype", "Palatino LT STD", "Book Antiqua", Georgia, serif` (already in `App.css` as `@font-face "et-book"`, files in `src/et-book/`)
- Kicker label: 13px, uppercase, letter-spacing 1.5px, color accent
- H1 (hero): 50px / 700 / line-height 1.1
- H2 (section title): 32px / 700 (28px for Gallery/Contact)
- H4 (card/timeline title): 19–20px / 700
- Body: 16–19px / line-height 1.5–1.65
- Tag chip: 12–13px, `border:1px solid rgba(64,61,61,0.25)`, `border-radius:20px`, `padding:4-5px 10-12px`, no fill
- Card: `border:1px solid rgba(64,61,61,0.2)`, `border-radius:10px`, `padding:26px`, no fill/shadow
- Section spacing: ~60-70px vertical padding, 6% horizontal, hairline `border-top` between sections (except hero/about/gallery)

## Screens / Views
Single scrolling page, sections in this order:

### 1. Nav (new)
Sticky top bar, `background:#fff2e7`, `border-bottom:1px solid rgba(64,61,61,0.15)`, flex row, `padding:16px 6%`, wraps on narrow widths.
- Left: wordmark "Pranav Upreti", bold, 19px, no underline.
- Right: links About / Gallery / Projects / Experience / Skills / Research / Contact — 16px, `opacity:0.75` default, anchor to section ids (`#about`, `#gallery`, etc.).

### 2. Hero (`#home`) — modified
`min-height:82vh`, centered flex, `padding:40px 6%`.
- Row: left column (name + tagline + social icons) beside a headshot image on the right, `align-items:stretch` so the image spans the full height of that text block (~180px wide, `border-radius:14px`, 1px hairline border).
- H1 "Hi! I'm Pranav," in accent teal.
- Tagline: "**EngSci @ UofT** | Interested in quantum computing and ML."
- 3 circular icon links (42px): GitHub (`https://github.com/PRU1`), LinkedIn (`https://www.linkedin.com/pranav-upreti`), Resume PDF — thin-stroke (1.6px) line icons, color `#13a888`.
- Scroll-down chevron below, linking to `#about`, subtle bounce animation (`@keyframes updown`, 2.4s loop).

### 3. About (`#about`) — unchanged content
Existing 3 paragraphs of bio copy, max-width 760px, centered column, 18px body text. (No layout change from current site — kept as-is.)

### 4. Gallery (`#gallery`) — new
Centered kicker "Gallery" + H2 "Off the clock". A single large image (`420px` tall, `border-radius:14px`, `object-fit:cover`) with:
  - Bottom gradient overlay + caption text (white, 15px).
  - Left/right circular chevron buttons (38px, white 85% bg) to cycle images.
  - Dot indicators below (8px circles, active = accent teal, inactive = `rgba(64,61,61,0.25)`).
Source images: reuse existing `src/assets/img/slider/*` set (p1, famousMilo, m4, m6, m7) with existing captions (Jokers Hill trail, Twinning with my dog Milo, Humber trail, Winter lights, Snow day).

### 5. Projects (`#projects`) — new
Centered kicker + H2 "Things I've built". Grid `repeat(auto-fit, minmax(260px,1fr))`, gap 24px, 3 cards:
1. **plot2spectra** — Python, Computer Vision, Claude API. "Digitizes published figures back into numerical data — reimplements an optical-flow-inspired curve tracer and replaces hand-tuned axis/tick detection with Claude Vision."
2. **Virtual Aircraft Controller** — FastAPI, Streamlit, higgs-audio API. "A real-time virtual aircraft controller with speech input — extracts heading, altitude, and runway assignment from voice via an audio-to-text pipeline."
3. **SlideHive** — CAD, SimScale Thermal Analysis. "A beehive redesigned for the Toronto Beekeeping Collective — cuts lifting strain by over 50%, matches Langstroth-hive insulation, and adds a drawer mechanism that resists propolis buildup."
Each card: title (20px/700), description (16px, 85% opacity), tag chips, "View on GitHub →" link (`https://github.com/PRU1`).

### 6. Experience (`#experience`) — new
Kicker + H2 "Where I've spent my time". Vertical timeline: `border-left:2px solid rgba(19,168,136,0.35)`, `padding-left:26px`, 30px gap between 3 entries, each with a small teal dot marker:
1. **Feb 2026 – Present** — Undergraduate Researcher, Joyce Poon Group. "Built a benchmarking suite for PhIDO, an agentic photonic integrated circuit design tool, and implemented deterministic GDSFactory+ routing into its layout agent."
2. **May 2026 – Aug 2026** — Research Volunteer, Mount Sinai Hospital. "Ballistocardiography signal analysis with Dr. Isaac Sung Jae Chang — estimated cardiac stroke volume from 3-axis BCG signals and validated heart-rate extraction on healthy and heart-failure cohorts."
3. **Nov 2025 – Present** — Embedded Programmer, UTBIOME. "C++ firmware and centrifuge-motor control logic for an on-demand droplet generator used in medical research."

### 7. Skills & Coursework (`#skills`) — new
Kicker + H2 "What I work with". 4-column grid (`auto-fit, minmax(220px,1fr)`), each column a category label (16px/700) + wrapped tag chips:
- **Languages**: Python, C/C++, MATLAB, Java, SystemVerilog
- **ML & Quantum**: NumPy/SciPy, Keras/TensorFlow, Pennylane, Qiskit
- **Hardware & Photonics**: RISC-V, gdsfactory/KLayout, Tidy3D
- **Tools & Web**: FastAPI/Streamlit, Git, uv/pytest, HTML/CSS/JS

### 8. Research (`#publications`, nav label "Research") — new
Kicker "Research" + H2 "Publications & writing". Single entry (no card, just hairline `border-top` + padding):
**Benchmarking Suite for PhIDO** — Joyce Poon Group, University of Toronto · ongoing. "Testing an agentic photonic integrated circuit design tool's ability to reproduce novel PICs from papers and foundry data sheets — with toggleable PDK/knowledge-base retrieval, physics checkers, and formal verification."

### 9. Contact / Footer (`#contact`) — modified
Kicker + H2 "Let's talk", centered. Phone + email line (`437 326 1907 | pranav.upreti@mail.utoronto.ca`, mailto link), small copyright line with current year.

## Interactions & Behavior
- All nav links are same-page anchor scrolls (`scroll-behavior: smooth` already set globally).
- Gallery: prev/next buttons and dot indicators update a single `currentImageIndex` state; no auto-advance.
- Scroll-cue chevron: click scrolls to `#about`; continuous up/down float animation, no hover state needed beyond default link opacity.
- No new form/validation logic — Contact section is copy-only in this pass (the old Contact.js form component is not part of this design and can stay unused/removed as before).

## State Management
- `currentImageIndex` (number) for the Gallery carousel — the only new state needed. Everything else is static content.

## Assets
- Headshot: currently an **empty placeholder** in the mockup — needs a real photo dropped in before shipping.
- Gallery photos: reuse existing `src/assets/img/slider/p1.png`, `famousMilo.jpeg`, `m4.png`, `m6.png`, `m7.png` (m3/m5 also exist in the repo if you want all 7).
- Icons: GitHub/LinkedIn/Resume icons were redrawn as simple inline SVG (thin 1.6px stroke) to avoid a new icon-library dependency — the existing `react-bootstrap-icons` package (`Github`, `Linkedin`, `FileEarmarkText`, already used in `Banner.js`) is a fine substitute.
- Fonts: no new fonts — reuses `et-book` already loaded in `App.css`.
- Resume PDF: `src/assets/img/industry.pdf` (existing link target).

## Suggested component breakdown (React)
- `NavBar.js` — replace current empty nav with the new sticky nav (About/Gallery/Projects/Experience/Skills/Research/Contact links).
- `Banner.js` — add headshot image next to name/tagline/icons.
- `About.js` — unchanged.
- `Gallery.js` — new, houses the photo carousel (can reuse `PhotoSlider.js` logic, restyled per spec above).
- `Projects.js` / `ProjectCard.js` — replace placeholder Lorem-ipsum tab layout with the 3 real cards above (no tabs needed).
- `Experience.js` — new, vertical timeline component.
- `Skills.js` — replace carousel version with the 4-column tag grid above.
- `Research.js` — new, single entry block.
- `Footer.js` — update heading/copy per spec, keep phone/email line.
- `App.js` — render `NavBar`, `Banner`, `About`, `Gallery`, `Projects`, `Experience`, `Skills`, `Research`, `Footer` in that order.

## Files
- `portfolio-redesign-mockup.html` — the full design reference. Note: this file depends on the design tool's runtime and won't render standalone in a plain browser — view it back in the design project.
- `screenshots/` — one PNG per section (hero, about, gallery, projects, experience, skills, research, contact) for quick visual reference.
- `assets/` — fonts, resume PDF, and photos referenced by the mockup.
