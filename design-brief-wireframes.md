# Design Brief — Maccabi AI | Ofek
## Wireframe Design Request for Claude Design

---

## Project Context

**Product name:** מכבי AI | אופק  
**Client:** Maccabi Healthcare Services  
**Purpose:** A digital learning companion for "Ofek" — a 9-session management development program for ~100 unit managers at Maccabi.  
**Primary usage:** During and between program sessions — on mobile phone first, also on tablet and desktop.  
**Language:** Hebrew — full RTL (right-to-left) layout throughout. All labels, buttons, and UI text in Hebrew.

**The product is NOT** a generic LMS or content library. It is a focused, clean journey companion. The manager opens it, sees exactly where they are in the program, and knows what to do next — with minimal friction.

---

## ⚠️ Critical Design Requirement: Mobile First

**This is the single most important constraint in this project.**

The app must be designed starting from the smallest screen (375px / iPhone SE) and progressively enhanced for tablet (768px) and desktop (1280px). This is not optional.

### Why Mobile First Matters Here
- Managers use this app on their phones between sessions, in hallways, and in brief breaks during the program day.
- A 100-person in-person event means managers may be checking the agenda on their phones while seated.
- The "during session" use case is almost always mobile.

### Mobile-First Design Rules for Every Screen
1. **Base layout is single column** — no side-by-side columns at 375px
2. **Touch targets are minimum 44×44px** — all buttons, links, and interactive elements
3. **Font sizes**: minimum 14px body, 18px headings at 375px (scale up for larger screens)
4. **Tap-friendly spacing**: at least 8px between interactive elements
5. **No hover-only interactions** — all information accessible without hover
6. **Thumb zone awareness**: primary CTAs in the bottom half of the screen where possible
7. **Horizontal scroll is forbidden** — no element should cause horizontal overflow
8. **The current session CTA ("כניסה למפגש") must be immediately visible** without scrolling on mobile

### Breakpoints (Tailwind convention)
| Breakpoint | Width | Use |
|---|---|---|
| Base (mobile) | 375px | **Design starts here** |
| `sm` | 640px | Small tablet / large phone |
| `md` | 768px | Tablet |
| `lg` | 1024px | Laptop |
| `xl` | 1280px | Desktop |

---

## Brand & Visual Direction

### Color Palette
| Role | Color | Hex |
|---|---|---|
| Primary | Maccabi Deep Blue | `#004B87` |
| Secondary | Maccabi Green | `#00A651` |
| Accent | Warm Orange | `#F7941D` |
| Background | Off-white | `#F5F7FA` |
| Card / Surface | White | `#FFFFFF` |
| Border | Light gray | `#E5E8EC` |
| Text – Primary | Near black | `#1A2233` |
| Text – Muted | Medium gray | `#6B7A99` |

### Typography
- **Font:** Heebo (Google Fonts) — a modern Hebrew typeface, clean and professional.
- **Headings:** Bold (700), 24–32px
- **Body:** Regular (400), 14–16px
- **Labels / metadata:** Medium (500), 12–13px

### Visual Tone
- Clean, minimal, trustworthy — consistent with a professional healthcare organization.
- NOT gamey, NOT heavy enterprise, NOT a "startup app with neon colors."
- Generous whitespace. Rounded corners (8–12px radius on cards). Subtle shadows.
- Professional badge system for session formats and statuses — pills, not bold banners.

---

## Application Structure

The app has three main screens to wireframe:

1. **Home Page** — Journey Map
2. **Session Page** — Individual session detail (two states: open / locked)
3. **AI Advisor Panel** — Chat component (two states: active / coming soon)

All screens share a global **Header** component.

---

## Screen 1 — Header (Global, All Pages)

**Layout:** Fixed top navigation bar, full-width, height ~64px.

**Elements (right to left in RTL):**
- **Logo area (right):** Text logo: `מכבי AI | אופק` — the word "מכבי AI" in primary blue (bold), `| אופק` in muted gray. Optionally a small Maccabi-style icon to the right of the text.
- **Navigation links (center, optional):** Links to main sections: `מפת המסע`, `מפגשים`, `יועץ AI`. On mobile/tablet, collapse to a hamburger.
- **User area (left):** Small avatar circle + name placeholder (e.g., "ד"ר רחל כהן") + minimal dropdown caret. On mobile, reduce to just avatar.

**Visual:** White background, bottom border `#E5E8EC`. On scroll: add subtle drop shadow.

---

## Screen 2 — Home Page: Journey Map

**Route:** `/`  
**Purpose:** The manager sees their full program journey — 9 sessions, progress, and entry point to the current session.

### Layout Structure (Mobile — 375px) ← START HERE

```
┌─────────────────────────┐  ← 375px
│  [Header: 56px tall]    │
│  Logo       [☰ menu]    │
├─────────────────────────┤
│  px-4, py-4             │
│                         │
│  מסע הלמידה — אופק      │  ← H1, 20px bold
│  תיאור קצר (1 line)     │  ← 14px muted
│                         │
│  ┌─── Progress Card ──┐  │
│  │ progress bar 100%  │  │
│  │ 0 / 9 הושלמו       │  │
│  │ [legend row]       │  │
│  └────────────────────┘  │
│                         │
│  ┌─── Card 1 CURRENT ─┐  │  ← Full width, 2px blue border
│  │ [מפגש נוכחי ●]     │  │     min-height 140px
│  │ [פרונטלי badge]    │  │
│  │ 01 תפיסת תפקיד     │  │  ← 18px bold, primary blue
│  │ subtitle (muted)   │  │
│  │ 📅 יוני 2026       │  │
│  │ ⏱ יום מלא          │  │
│  │ ─────────────────  │  │
│  │ [● נוכחי] [כניסה→] │  │  ← CTA: 44px tall
│  └────────────────────┘  │
│                         │
│  ┌─── Card 2 OPEN ────┐  │  ← Full width
│  │ ...                │  │
│  └────────────────────┘  │
│                         │
│  [Cards 3–9 stacked]    │
│  (locked cards dimmed)  │
│                         │
│  [footer note, 12px]    │
└─────────────────────────┘
```

### Layout Structure (Desktop — 1280px)

```
┌─────────────────────────────────────────────────────┐
│                    HEADER                           │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ← Page padding (max-width ~1100px, centered) →    │
│                                                     │
│  [Page Title: מסע הלמידה — תוכנית אופק]             │
│  [Subtitle: one-line description]                   │
│                                                     │
│  ┌─── Progress Card ──────────────────────────────┐  │
│  │ Progress bar: 0 of 9 sessions completed        │  │
│  │ Legend: ● Completed  ● Current  ○ Open  🔒 Locked │  │
│  └────────────────────────────────────────────────┘  │
│                                                     │
│  ┌── Session Grid (3 columns) ──────────────────────┐  │
│  │  [Card 1 — CURRENT]  [Card 2 — OPEN]  [Card 3 — OPEN]  │
│  │  [Card 4 — LOCKED]   [Card 5 — LOCKED] [Card 6 — LOCKED]│
│  │  [Card 7 — LOCKED]   [Card 8 — LOCKED] [Card 9 — LOCKED]│
│  └────────────────────────────────────────────────┘  │
│                                                     │
│  [Footer note: locked sessions open per schedule]  │
└─────────────────────────────────────────────────────┘
```

### Session Card — CURRENT State (prominent)

This is the most important card. Must be visually distinct.

```
┌────────────────────────────────────────────┐
│  Border: 2px solid #004B87 (primary blue)  │
│  Optional: subtle blue glow / shadow       │
│                                            │
│  [מפגש נוכחי badge — blue pill, pulsing dot] │
│  [פרונטלי badge — gray pill + icon]        │
│                                            │
│  מספר: 01                                   │
│  כותרת: תפיסת תפקיד                        │
│  תיאור קצר (1–2 שורות, muted gray)         │
│                                            │
│  📅 יוני 2026  ⏱ יום מלא  👥 100 משתתפים  │
│                                            │
│  [כפתור ראשי: "כניסה למפגש" — כחול מלא]    │
└────────────────────────────────────────────┘
```

### Session Card — OPEN State

```
┌────────────────────────────────────────────┐
│  Border: 1px solid #E5E8EC                 │
│  Background: White                         │
│                                            │
│  [פתוח badge — light gray pill]            │
│  [פרונטלי badge — gray pill + icon]        │
│                                            │
│  מספר: 02                                   │
│  כותרת: תקשורת בינאישית                    │
│  תיאור קצר                                 │
│                                            │
│  📅 יולי 2026  ⏱ חצי יום                  │
│                                            │
│  [כפתור: "כניסה למפגש" — outline style]   │
└────────────────────────────────────────────┘
```

### Session Card — LOCKED State

```
┌────────────────────────────────────────────┐
│  Border: 1px solid #E5E8EC                 │
│  Background: #FAFAFA (slightly dimmed)     │
│  Opacity: ~80%                             │
│                                            │
│  [🔒 נעול badge — gray, muted]             │
│  [format badge]                            │
│                                            │
│  מספר: 04                                   │
│  כותרת: הנעה והשפעה                        │
│  [תיאור: "ייפתח לפי לוח הזמנים"]           │
│                                            │
│  📅 ייקבע בהמשך                            │
│                                            │
│  [כפתור disabled — grayed out, no click]   │
└────────────────────────────────────────────┘
```

### Responsive Behavior
- **Tablet (768px):** 2-column grid
- **Mobile (375px):** 1 column. Progress bar and legend collapse to minimal version.

---

## Screen 3 — Session Page (Open / Current State)

**Route:** `/session/[id]`  
**Purpose:** Full detail view for a single session — agenda, tools, homework, AI advisor.

### Layout Structure (Mobile — 375px) ← START HERE

On mobile everything stacks in a single column. Order matters — put the most critical content first.

```
┌─────────────────────────┐
│  [Header]               │
├─────────────────────────┤
│  px-4, pt-3             │
│                         │
│  ← מפת המסע  (breadcrumb, 13px)         │
│                         │
│  ┌─── Session Header ─┐  │  ← card, p-4, blue border if current
│  │ [נוכחי ●] [פרונטלי] │  │
│  │ 01 of 9            │  │
│  │                    │  │
│  │ תפיסת תפקיד        │  │  ← 20px bold
│  │ subtitle (muted)   │  │
│  │                    │  │
│  │ description (14px) │  │
│  │                    │  │
│  │ 📅 date  ⏱ duration │  │  ← flex row, 13px
│  └────────────────────┘  │
│                         │
│  ── אג'נדת המפגש ────── │  ← section title, 16px bold
│                         │
│  ┌── Agenda Item 1 ───┐  │
│  │ [09:00] פתיחה...   │  │  ← time badge right, title next
│  └────────────────────┘  │
│  ┌── Agenda Item 2 ───┐  │
│  │ ...                │  │
│  └────────────────────┘  │
│  [...more items]        │
│                         │
│  ── כלים דיגיטליים ──── │  ← section title
│  [Tool card 1]          │  ← full width
│  [Tool card 2]          │
│                         │
│  ┌── מטלה לבית ───────┐  │  ← orange right-border card
│  │ description        │  │
│  └────────────────────┘  │
│                         │
│  ┌── הכנה למפגש הבא ──┐  │  ← green right-border card
│  │ description        │  │
│  └────────────────────┘  │
│                         │
│  ── יועץ AI אישי ─────── │
│  [AdvisorPanel]         │  ← full width, 360px tall
│                         │
│  ─ Navigation ───────── │
│  [← מפגש קודם] [הבא →] │  ← row, space-between
└─────────────────────────┘
```

### Layout Structure (Desktop — 1280px)

```
┌─────────────────────────────────────────────────────────┐
│                       HEADER                            │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ← breadcrumb: "מפת המסע  >  תפיסת תפקיד" →            │
│                                                         │
│  ┌── Session Header Card ─────────────────────────────┐  │
│  │  [מפגש נוכחי badge]  [פרונטלי badge]  [01 of 9]    │  │
│  │                                                     │  │
│  │  H1: תפיסת תפקיד                                    │  │
│  │  Subtitle: גיבוש זהות ניהולית ותפיסת כוכב הצפון    │  │
│  │                                                     │  │
│  │  Description paragraph (2–3 lines)                 │  │
│  │                                                     │  │
│  │  📅 יוני 2026   ⏱ יום מלא   👥 כ-100 משתתפים       │  │
│  │   📍 מיקום TBD                                       │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                         │
│  ┌─── Left (2/3 wide) ────┐  ┌── Right (1/3) ────────┐  │
│  │                        │  │                       │  │
│  │  [Section: אג'נדה]      │  │  [Section: כלים]      │  │
│  │  Timeline of agenda    │  │  Tool cards list      │  │
│  │  items (see below)     │  │                       │  │
│  │                        │  │  [Section: יועץ AI]    │  │
│  │  [Section: מטלה לבית]  │  │  Advisor panel        │  │
│  │  Highlighted card      │  │                       │  │
│  │                        │  │                       │  │
│  │  [Section: הכנה הבאה]  │  │                       │  │
│  │  Highlighted card      │  │                       │  │
│  └────────────────────────┘  └───────────────────────┘  │
│                                                         │
│  ─── Navigation footer ──────────────────────────────── │
│  [← מפגש קודם]    [כל המפגשים]    [מפגש הבא →]         │
└─────────────────────────────────────────────────────────┘
```

### Agenda Item (Timeline Style)

Each agenda item is a horizontal card with a time/index marker on the right edge:

```
┌─────────────────────────────────────────────────────┐
│  [09:00] │  כותרת: פתיחה והיכרות באמצעות קלפים     │
│          │  תיאור קצר (optional, muted gray)        │
│          │  מנחה: [name if available]               │
└─────────────────────────────────────────────────────┘
```

- Time label on the right: monospace font, blue background pill
- Vertical connector line between items (thin, gray)
- Last item: no connector

### Homework & Next Prep Cards

Left-border accent cards (RTL: right-border):

```
┌─ 4px solid accent color (orange for homework, green for next prep) ──────┐
│  Icon + Label: "מטלה לבית"                                               │
│  Text content describing the assignment                                   │
└──────────────────────────────────────────────────────────────────────────┘
```

### Digital Tools (Right Column)

Compact cards, stacked vertically:

```
┌─────────────────────────────────────┐
│  Tool name (bold, small)            │
│  Short description (muted, 1 line)  │
│  [פתח כלי →] (link, primary blue)   │
└─────────────────────────────────────┘
```

---

## Screen 4 — Session Page (Locked State)

When a session is locked, the header card is still shown (with lock badge and muted styling), but the main content area shows a centered lock notice instead of the agenda.

```
┌─────────────────────────────────────────────────────┐
│  [Session Header Card — subdued, opacity reduced]   │
├─────────────────────────────────────────────────────┤
│                                                     │
│              ┌──────────────────────┐               │
│              │   🔒 (large icon)    │               │
│              │                      │               │
│              │  מפגש זה טרם נפתח    │               │
│              │  (subtext: date/note) │               │
│              │                      │               │
│              │  [חזרה למפת המסע]    │               │
│              └──────────────────────┘               │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## Screen 5 — AI Advisor Panel (Two States)

This panel lives in the right column of the Session Page.

### State A: Active (for current session)

```
┌─────────────────────────────────────────┐
│  HEADER: [blue bot icon]  יועץ מכבי AI  │
│           ● פעיל (green dot)            │
├─────────────────────────────────────────┤
│                                         │
│  [Assistant bubble, right-aligned,     │
│   blue background, white text]          │
│   "שלום! אני יועץ מכבי AI..."           │
│                                         │
│  [User bubble, left-aligned,           │
│   gray background]                      │
│   "תוכל להסביר את מודל DISC?"           │
│                                         │
│  [Assistant bubble...]                 │
│                                         │
├─────────────────────────────────────────┤
│  ┌─────────────────────────┐  [Send →] │
│  │  שאל את יועץ מכבי AI...│           │
│  └─────────────────────────┘           │
└─────────────────────────────────────────┘
```

### State B: Coming Soon (for future/open sessions)

```
┌─────────────────────────────────────────┐
│  HEADER: [sparkle icon]  יועץ מכבי AI  │
│           [בקרוב badge — orange]        │
├─────────────────────────────────────────┤
│                                         │
│  Short description of what the         │
│  advisor will do (2–3 lines)            │
│                                         │
│  Feature bullet list:                  │
│  • מענה על שאלות לפי חומרי התוכנית     │
│  • עזרה בהכנה לשיחות קשות             │
│  • ניתוח דילמות ניהוליות              │
│  • חיבור למודלים מהמפגשים              │
│                                         │
│  [Input field — disabled, grayed out]  │
└─────────────────────────────────────────┘
```

---

## Status Badges Reference

These appear on cards and headers throughout:

| Status | Label | Style |
|---|---|---|
| `completed` | ✓ הושלם | Green pill, green checkmark icon |
| `current` | ● מפגש נוכחי | Blue pill, animated pulsing dot |
| `open` | פתוח | Light gray pill |
| `locked` | 🔒 נעול | Gray pill, lock icon, muted text |

**Format badges:**

| Format | Label | Style |
|---|---|---|
| `frontal` | פרונטלי | Light blue pill + building icon |
| `virtual` | וירטואלי בזום | Light purple pill + monitor icon |
| `external` | ספק חיצוני | Light yellow pill + briefcase icon |

---

## Interaction Notes for Wireframes

- All interactive elements (buttons, cards, links) should show a clear **hover state** — typically a subtle color shift or border highlight.
- The **current session card** on the home page should visually "pop" more than any other element on the screen.
- **Locked content** should look accessible in layout but clearly unavailable — use opacity and lock iconography, not removal of the element.
- **Buttons:**
  - Primary CTA (e.g., "כניסה למפגש" on current session): solid primary blue, white text, rounded 8px
  - Secondary CTA (e.g., outline buttons on open sessions): white background, blue border, blue text
  - Disabled: gray background, gray text, no cursor interaction
- **The AI chat panel** should feel like a lightweight, embedded chat widget — not a full-screen takeover.

---

## Screens to Wireframe (Priority Order)

Design mobile (375px) first for every screen, then show the larger breakpoint.

1. **Home Page — Mobile (375px)** — single column journey map, all 9 cards stacked, current session prominent at top-of-fold
2. **Home Page — Desktop (1280px)** — 3-column grid, progress bar, full legend
3. **Session Page — Mobile (375px), Open State** — session 1, all content in single column (agenda → tools → homework → advisor)
4. **Session Page — Mobile (375px), Locked State** — session 4, lock notice
5. **Session Page — Desktop, Open State** — 2/3 + 1/3 column split, full content
6. **AI Advisor Panel — Mobile close-up** — both states (active / coming soon) stacked, full width

---

## What to Avoid

- Avoid navigation sidebars (this is not a dashboard app)
- Avoid complex data tables or charts — this is a learning companion, not an analytics tool
- Avoid hero images or stock photo placeholders — the content is text and structured data
- Avoid modal overlays for primary content — everything should be accessible on-page
- Avoid an English-style left-to-right layout for any element — everything is RTL

---

## Technical Reference

The scaffolding is built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. The wireframes should translate directly to the existing component hierarchy:

| Wireframe Section | Component |
|---|---|
| Global header | `src/components/Header.tsx` |
| Home page journey map | `src/components/JourneyMap.tsx` |
| Session card | `src/components/SessionCard.tsx` |
| Status/format badges | `src/components/StatusBadge.tsx` |
| Session detail page | `src/app/session/[id]/page.tsx` |
| AI Advisor panel | `src/components/advisor/AdvisorPanel.tsx` |
| Session data | `src/data/sessions.ts` |

---

*Design brief prepared for: Claude Design (or equivalent design generation tool)*  
*Based on: Maccabi AI Product Spec v0.2*  
*Project: Ofek Management Development Program 2026*
