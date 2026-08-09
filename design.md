---
name: Edcenta Design System
version: 2.1.0
spec: stitch-design-md/v1
design_language: Bento Box Architecture (Solid Tactile Modular Grid)
philosophy: Interactive Learning, Gamified Motivation & Comprehensive Performance Oversight
domain: EdTech Platform (Students, Parents, Tutors, Schools, Homework Buddies)
target_curricula:
  - WAEC (West African Examinations Council)
  - NECO (National Examinations Council)
  - JAMB (Joint Admissions and Matriculation Board)
  - Common Entrance & Primary 1-6 Basic Education
  - JSS 1-3 & SSS 1-3 Secondary Education

tokens:
  colors:
    brand:
      primary_blue: "#0075BC"
      primary_blue_hover: "#005F99"
      emerald_green: "#00AE9A"
      emerald_green_hover: "#008F7E"
      accent_gold: "#FFB800"
      accent_gold_glow: "rgba(255, 184, 0, 0.35)"
      electric_purple: "#8B53FF"
    
    persona_accents:
      student:
        primary_cyan: "#00F2FE"
        secondary_gold: "#FFB800"
        badge_bg: "#E0F2FE"
        badge_text: "#0369A1"
      parent:
        primary_emerald: "#059669"
        secondary_indigo: "#4F46E5"
        badge_bg: "#D1FAE5"
        badge_text: "#047857"
      tutor:
        primary_violet: "#7C3AED"
        secondary_obsidian: "#0F172A"
        badge_bg: "#F3E8FF"
        badge_text: "#6D28D9"
      school:
        primary_amber: "#D97706"
        secondary_slate: "#1E293B"
        badge_bg: "#FEF3C7"
        badge_text: "#B45309"

    surfaces:
      bento_light:
        bg_app: "#FAFAFA"
        bento_card: "#FFFFFF"
        bento_subtle: "#F1F5F9"
        border_light: "#E2E8F0"
        border_strong: "#CBD5E1"
        text_primary: "#0F172A"
        text_secondary: "#475569"
      bento_dark:
        bg_app: "#0B0F17"
        bento_card: "#131C2E"
        bento_subtle: "#1E293B"
        border_dark: "#1E293B"
        border_strong: "#334155"
        text_primary: "#F8FAFC"
        text_secondary: "#94A3B8"

    semantics:
      success: "#10B981"
      warning: "#F59E0B"
      danger: "#EF4444"
      info: "#3B82F6"
      points_gold: "#FFB800"
      naira_cash_green: "#059669"

  typography:
    fonts:
      sans: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif"
      display: "'Outfit', 'Plus Jakarta Sans', sans-serif"
      mono: "'JetBrains Mono', monospace"
    sizes:
      display_2xl: "3.75rem" # 60px
      display_xl: "3.00rem"  # 48px
      heading_lg: "2.25rem"  # 36px
      heading_md: "1.50rem"  # 24px
      heading_sm: "1.25rem"  # 20px
      body_lg: "1.125rem"    # 18px
      body_base: "1.00rem"   # 16px
      body_sm: "0.875rem"    # 14px
      caption: "0.75rem"     # 12px

  bento_grid:
    gap: "1.5rem" # 24px
    outer_padding: "2rem" # 32px
    card_radius: "1.5rem" # 24px (rounded-2xl)
    inner_widget_radius: "1rem" # 16px (rounded-xl)

  elevation:
    shadow_flat: "none"
    bento_card_shadow: "0 4px 20px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.04)"
    shadow_gold_glow: "0 0 30px rgba(255, 184, 0, 0.35)"

  shapes:
    radius_sm: "0.375rem"  # 6px (Input controls, pills)
    radius_md: "0.50rem"   # 8px (Small cards, dropdowns)
    radius_lg: "0.75rem"   # 12px (Standard cards, modals)
    radius_xl: "1.00rem"   # 16px (Feature containers)
    radius_2xl: "1.50rem"  # 24px (Bento Compartments)
    radius_full: "9999px"  # Full round (Avatars, live tickers)

  breakpoints:
    mobile: "640px"
    tablet: "768px"
    laptop: "1024px"
    desktop: "1280px"
    wide: "1536px"
---

# Edcenta Design System — Bento Box Architecture (`DESIGN.md`)

> **Specification Standard:** Google Stitch `DESIGN.md` (v2.1)  
> **Design Methodology:** **Bento Box Grid System** (Solid, Tactile, Asymmetric Modular Compartments)  
> **Repository Scope:** Edcenta Educational Platform (`edcenta-fc` frontend, `edcenta-bc` backend)  
> **Core Mission:** Connect **Students**, **Parents**, **Tutors**, **Schools**, and **Homework Buddy Mentors** through curriculum-aligned worksheets (WAEC, NECO, JAMB, Primary/Secondary), live EV Connect virtual classrooms, automated parent email diagnostics, and points-to-cash rewards.  
> **Surface Aesthetic Rule:** Solid Bento Box compartments (`#FFFFFF` light, `#131C2E` dark) with crisp 1px structural borders (`#E2E8F0` / `#1E293B`), zero glassmorphism, and clear feature density.

---

## 1. Core Educational Pillars & Platform Features

Edcenta is built around 4 concrete platform pillars:

1. **Points-to-Cash Reward Engine:** Students earn **1 point per correct answer** (1,000 points = ₦500 cash equivalent). Minimum withdrawal threshold: 5,000 points (₦2,500).
2. **EV Connect Virtual Classroom:** Interactive whiteboard tools, class scheduling, one-on-one & group tutoring sessions, and screen sharing.
3. **Automated Performance Tracking & Parent Reports:** Real-time analytics tracking topic mastery (>70% strong topics, <70% topics needing practice) and automated weekly email summaries to parents.
4. **Homework Buddy Mentorship & National Curriculum Worksheets:** University student mentors providing remote homework help alongside structured WAEC, NECO, JAMB, and Primary 1-6 / JSS 1-3 / SSS 1-3 worksheets.

---

## 2. Bento Grid Layout & Persona Conversion Matrix

```mermaid
graph TD
    A[Edcenta Bento Grid Architecture] --> B[Student Bento Cell]
    A --> C[Parent Bento Cell]
    A --> D[Tutor Bento Cell]
    A --> E[School Bento Cell]

    B --> B1[Points-to-Cash Wallet Ticker]
    B --> B2[Assigned Worksheets & Homework Buddy Help]

    C --> C1[Weekly Automated Performance Email Reports]
    C --> C2[Browse & 1-Tap Worksheet Assign]

    D --> D1[EV Connect Virtual Whiteboard Classroom]
    D --> D2[Worksheet & Assessment Creation]

    E --> E1[Multi-Grade WAEC/NECO/JAMB Matrix]
    E --> E2[Teacher & Group Management]
```

### Persona Compartment Specifications

| Persona Bento Cell | Core Platform Feature | Primary Visual Signature | Key Action Button |
| :--- | :--- | :--- | :--- |
| **Student Cell** | Points-to-Cash Wallet & Homework Buddy Help | **Cyan (`#00F2FE`) & Gold (`#FFB800`)** | `"Solve Worksheets & Earn Cash"` |
| **Parent Cell** | Weekly Email Reports & 1-Tap Activity Assign | **Emerald (`#059669`) & Indigo (`#4F46E5`)** | `"View Child Performance"` |
| **Tutor Cell** | EV Connect Classroom & Worksheet Management | **Violet (`#7C3AED`) & Obsidian (`#0F172A`)** | `"Launch Virtual Whiteboard"` |
| **School Cell** | Curriculum Grades & Institution Management | **Amber (`#D97706`) & Slate (`#1E293B`)** | `"Manage School Dashboard"` |

---

## 3. Color Architecture & Bento Tokens

### 3.1 Solid Surface System

```css
:root {
  /* Brand Constants */
  --color-brand-blue: #0075BC;
  --color-brand-emerald: #00AE9A;
  --color-brand-gold: #FFB800;
  --color-brand-purple: #8B53FF;

  /* Surface Light Tokens */
  --bg-app-light: #FAFAFA;
  --bg-bento-card-light: #FFFFFF;
  --bg-bento-subtle-light: #F1F5F9;
  --border-bento-light: #E2E8F0;
  --text-primary-light: #0F172A;
  --text-secondary-light: #475569;

  /* Surface Dark Tokens */
  --bg-app-dark: #0B0F17;
  --bg-bento-card-dark: #131C2E;
  --bg-bento-subtle-dark: #1E293B;
  --border-bento-dark: #1E293B;
  --text-primary-dark: #F8FAFC;
  --text-secondary-dark: #94A3B8;
}
```

---

## 4. Typography & Educational Readability

1. **Primary Interface (`font-sans`):** `Plus Jakarta Sans`, sans-serif.
2. **Display Headlines (`font-display`):** `Outfit`, `Plus Jakarta Sans`, sans-serif.
3. **Monospace / Points (`font-mono`):** `JetBrains Mono`, monospace (Points counter, math formulas, question IDs).

---

## 5. Do's and Don'ts

### ✅ DO:
1. **Highlight real Edcenta features:** Points-to-Cash, EV Connect Whiteboard, Automated Parent Email Summaries, Homework Buddy Mentors, and WAEC/NECO/JAMB Worksheets.
2. **Display clear economic context** for points (1,000 pts = ₦500 cash).
3. **Use solid Bento surfaces** (`#FFFFFF` light, `#131C2E` dark) with crisp 1px structural borders.

### ❌ DON'T:
1. **DON'T EVER render internal design system jargon or developer methodology tags** (e.g., "Bento Box Grid Architecture" or "Stitch DESIGN.md") in user-facing UI copy, badges, or headlines. Headlines must always be clean, natural customer product copy.
2. **DON'T claim AI-generated activities or AI features that are not built.** Frame the platform around real interactive tools, tutor co-working, parent analytics, and student rewards.
3. **DON'T use glassmorphism or backdrop blurs.**
4. **DON'T allow text copying or screenshots on exam worksheets.**
5. **DON'T use dummy hardcoded arrays for pricing or subscriptions.** Fetch live plan data from the server.

---
*Created for Edcenta Platform Specification under Google Stitch DESIGN.md Standard (v2.2).*
