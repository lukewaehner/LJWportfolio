---
name: Luke Waehner Portfolio
description: Recruiter-facing operator dashboard — signal over spectacle
colors:
  signal-blue: "#2563eb"
  signal-blue-dim: "#60a5fa"
  live-green: "#10b981"
  surface-light: "#fafafa"
  surface-dark: "#09090b"
  panel-light: "#ffffff"
  panel-dark: "#18181b"
  ink-primary-light: "#18181b"
  ink-primary-dark: "#fafafa"
  ink-secondary: "#71717a"
  ink-body-light: "#52525b"
  ink-body-dark: "#a1a1aa"
  border-light: "#e4e4e7"
  border-dark: "#27272a"
  surface-raised-light: "#f4f4f5"
  surface-raised-dark: "#27272a"
typography:
  display:
    fontFamily: "Outfit, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.8rem, 7vw, 5.5rem)"
    fontWeight: 700
    lineHeight: 0.88
    letterSpacing: "-0.05em"
  headline:
    fontFamily: "Outfit, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Outfit, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Outfit, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "JetBrains Mono, ui-monospace, Courier New, monospace"
    fontSize: "0.65rem"
    fontWeight: 400
    letterSpacing: "0.15em"
rounded:
  pill: "9999px"
  card: "16px"
  input: "12px"
  chip: "8px"
  tag: "4px"
spacing:
  section: "7rem"
  card-padding: "28px"
  content-max: "56rem"
components:
  button-primary:
    backgroundColor: "{colors.ink-primary-light}"
    textColor: "{colors.panel-light}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "#3f3f46"
    textColor: "{colors.panel-light}"
  button-ghost:
    backgroundColor: "{colors.panel-light}"
    textColor: "{colors.ink-body-light}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-ghost-hover:
    backgroundColor: "{colors.surface-raised-light}"
    textColor: "{colors.ink-primary-light}"
  button-icon:
    backgroundColor: "{colors.panel-light}"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.pill}"
    size: "44px"
  chip-tag:
    backgroundColor: "{colors.surface-raised-light}"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.tag}"
    padding: "4px 10px"
  chip-skill:
    backgroundColor: "{colors.panel-light}"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.chip}"
    padding: "10px 16px"
  input-field:
    backgroundColor: "{colors.panel-light}"
    textColor: "{colors.ink-primary-light}"
    rounded: "{rounded.input}"
    padding: "0 16px"
    height: "48px"
---

# Design System: Luke Waehner Portfolio

## 1. Overview

**Creative North Star: "The Quiet Operator"**

A senior engineer does not walk into a room and announce their credentials. Their presence is enough. This design system operates the same way: tightly controlled typography, a deliberate neutral field, and one reserved accent color that appears only when it has something to say. The system communicates technical depth not through decoration but through specificity — real numbers, precise stack names, a layout that a recruiter can parse in seconds without conscious effort.

The experience is calm and confident. Whitespace is not emptiness; it is the breathing room that makes each data point land with weight. Framer Motion entrance animations are short, expo-eased, and purposeful — they choreograph attention toward the content hierarchy rather than celebrating themselves. The single moment of flash (the hero entrance, the card lift on hover) earns its attention by being surrounded by quiet.

This system explicitly rejects: animation noise that buries the signal; generic portfolio templates (hero section + icon grid + card rows); glassmorphism or neon-on-dark theatrics; any layout where a recruiter cannot identify Luke's core value in 10 seconds.

**Key Characteristics:**
- Neutral-dominant palette: zinc foundation with one reserved signal blue
- Tightly-cropped, bold typography with high contrast between display and metadata scales
- Flat surfaces at rest; depth is earned through interaction, never applied decoratively
- JetBrains Mono used exclusively as a metadata register — never for body prose
- Tonal layering (Surface → Panel → Surface Raised) as the primary spatial signal
- Dark mode supported through semantically paired tokens, not inverted hex values

## 2. Colors: The Signal Palette

One accent. Infinite zinc. The palette is architecture, not decoration.

### Primary
- **Signal Blue** (`#2563eb` / `oklch(49% 0.22 261)`): The single interactive signal in the system. Used for CTAs, link text, the rotating role label, and focus rings. Appears on ≤8% of any given screen. Its restraint is what gives it authority — when it appears, the recruiter's eye goes there.
- **Signal Blue Dim** (`#60a5fa` / `oklch(68% 0.16 261)`): Signal Blue's dark-mode counterpart. Reduced chroma accommodates the dark field without losing legibility or becoming aggressive.

### Secondary
- **Live Green** (`#10b981` / `oklch(72% 0.17 162)`): Used exclusively on the availability indicator dot and its ping animation. A single-use semantic color. Never repurposed as a general accent.

### Neutral
- **Surface Light / Dark** (`#fafafa` / `#09090b`): Page background. Light is lightly off-white so Panel reads as elevated above it. Dark is near-black with enough warmth to prevent harshness.
- **Panel Light / Dark** (`#ffffff` / `#18181b`): Card and nav surfaces. One step above Surface — creates tonal separation without shadow.
- **Ink Primary** (`#18181b` / `#fafafa`): Headings, display text, high-emphasis labels.
- **Ink Secondary** (`#71717a`): Supporting text in both modes. Nav items at rest, metadata captions, stat labels.
- **Ink Body** (`#52525b` / `#a1a1aa`): Prose paragraphs. Slightly softer than Ink Primary so headings hold hierarchy in the same column.
- **Border** (`#e4e4e7` / `#27272a`): Structural strokes on cards, inputs, and the nav backdrop.
- **Surface Raised** (`#f4f4f5` / `#27272a`): Active nav background, stat block tints, hover fills. One step above Panel.

**The Signal Rule.** Signal Blue (`#2563eb`) is used for interactive destinations only: links, the primary CTA, the rotating role label, and focus rings. Prohibited as a decorative accent, section tint, background fill, or border color. If blue appears on a surface that is not interactive, remove it.

**The Neutral Staircase Rule.** Surface → Panel → Surface Raised is the three-step elevation staircase. Never skip steps. A card (`Panel`) sits on `Surface`. An active nav item (`Surface Raised`) sits on the nav (`Panel`). Depth is expressed through tonal adjacency first; shadow is a secondary, interaction-only signal.

## 3. Typography

**Display Font:** Outfit (via Google Fonts, `ui-sans-serif` fallback)
**Body Font:** Outfit — the same family carries all prose and UI copy
**Mono Font:** JetBrains Mono (`ui-monospace`, `Courier New` fallback)

**Character:** Outfit's geometric warmth reads as approachable but never soft — ideal for a profile bridging finance and engineering. Paired with JetBrains Mono for metadata, the combination signals: this person writes code and communicates clearly. The display scale is aggressive (tracking-tighter, line-height < 1) to anchor the hero; everything below relaxes into legibility.

### Hierarchy
- **Display** (700, `clamp(2.8rem, 7vw, 5.5rem)`, line-height 0.88, tracking −0.05em): Hero name only. Tight enough to feel confident, not compressed enough to feel strained.
- **Headline** (700, `clamp(2.25rem, 5vw, 3rem)`, line-height 1.1, tracking −0.04em): Section headings. Matches the display family but relaxes for readability at scroll distance.
- **Title** (700, 1.125rem, line-height 1.3, tracking −0.02em): Project card headings, component titles.
- **Body** (400, 1.05rem, line-height 1.7, max 65ch): Prose paragraphs. Never span full width — cap at 65ch so the eye doesn't fatigue.
- **Label** (JetBrains Mono 400, 0.65rem, tracking 0.15em, uppercase): Tags, section eyebrows, form labels, stat descriptors. Always uppercase. Always wide-tracked.

**The Mono Index Rule.** JetBrains Mono is the metadata voice. Appears in: tech stack tags, section eyebrows, form field labels, availability badge text, stat block labels. Prohibited in headings, body prose, CTAs, and nav links. If you reach for mono because something "looks technical," stop — the content makes it technical.

**The Scale Contrast Rule.** The ratio between Display and Label is roughly 10:1. This gulf is intentional. Never compress it by bumping label sizes or lowering display sizes. A flat type scale reads as amateur.

## 4. Elevation

This system uses **tonal layering as the primary depth signal** and **interaction-driven shadows** as the secondary. Surfaces are flat at rest. The three-step neutral staircase creates spatial hierarchy without any shadow at all. Shadow appears only as a response to hover on interactive cards — a physical lift, not ambient decoration. The goal is a 3D sense of depth that feels earned.

### Shadow Vocabulary
- **Card hover lift** (`0 4px 6px rgba(0,0,0,0.04), 0 16px 40px rgba(0,0,0,0.10), 0 1px 0 rgba(0,0,0,0.02)`): Applied on `article:hover`. Pairs with `translateY(-2px)` to sell a physical lift. Duration 300ms, ease `cubic-bezier(0.16,1,0.3,1)`. Dark mode: middle layer scales to `rgba(0,0,0,0.40)`.
- **Headshot ambient** (`0 25px 50px rgba(0,0,0,0.12)`): Hero portrait only. Grounds the circular image in the page field. Static — not interactive.
- **Nav backdrop** (`0 1px 3px rgba(0,0,0,0.04)`): Subtle ambient on the fixed nav pill. Reinforces separation from scrolling content.

**The Flat-Until-Earned Rule.** Shadow is a response to user interaction, not a default surface treatment. Cards, panels, and containers carry zero shadow at rest. The card hover lift is the one earned exception. Reach for a background tint before reaching for a shadow on any non-interactive element.

## 5. Components

### Buttons
Direct and quiet. No gradients, no animated fills. The primary button is a black pill. Its ghost counterpart is white with a border. Both use identical radius and padding so they sit side-by-side at equal visual weight without competing.

- **Shape:** Full pill (9999px radius)
- **Primary:** Background `#18181b`, text `#fafafa`, padding `12px 24px`, 0.875rem, weight 500. Dark mode: background `#fafafa`, text `#18181b`.
- **Hover / Focus:** Background darkens to `#3f3f46` (light) / `#e4e4e7` (dark). `scale(0.98)` on active. Focus ring: `ring-2 ring-offset-2 ring-blue-500/50`.
- **Ghost:** Background `#ffffff` / `#18181b`, border `#e4e4e7` / `#27272a`, text Ink Body. Hover: background shifts to Surface Raised. Same radius and padding as Primary.
- **Icon:** 44×44px pill. Ghost treatment. Used for social links — no visible text.

### Chips / Tags
Two distinct chip classes. Never interchange them.

- **Tech stack tag:** Background `#f4f4f5` (dark: `#27272a`), border `#e4e4e7` (dark: `#3f3f46`), text Ink Secondary, JetBrains Mono, 0.58rem, uppercase, tracking-widest, radius 4px, padding `4px 10px`. Non-interactive — no hover state.
- **Skill marquee pill:** Background Panel, border Border, text Ink Secondary, JetBrains Mono, 0.65rem, uppercase, tracking 0.15em, radius 8px, padding `10px 16px`.

### Cards
The project card is the flagship interactive surface. Depth is the reward for attention.

- **Corner Style:** Gently curved (16px radius)
- **Background:** Panel Light `#ffffff` / Panel Dark `#18181b`
- **Shadow Strategy:** Zero shadow at rest. Hover: 3-layer lift shadow + `translateY(-2px)`. See Elevation.
- **Border:** `1px solid rgba(228,228,231,0.7)` (light) / `1px solid #27272a` (dark)
- **Internal Padding:** 28px on the content side. Image panel is zero-padded, edge-to-edge.
- **Image:** Scales to `1.04` on card hover (`transition-transform duration-500`). Never crop text over images.

### Stat Block
Key metrics in the About section: `3.83 GPA`, `55% onboarding reduction`, `13μs latency`.

- **Treatment:** Subtle background tint (`#f4f4f5` light / `#27272a` dark), padding `12px 16px`, radius 8px. No border. No side stripe.
- **Value:** 1.5rem, weight 700, tracking-tighter, Ink Primary.
- **Label:** JetBrains Mono, 0.65rem, uppercase, tracking-widest, Ink Secondary.

### Inputs / Fields
Clean stroked fields. White/zinc-900 background reads as a panel surface, not a form fill.

- **Style:** Background Panel, border Border, radius 12px, height 48px (textarea: auto with `resize-none`)
- **Focus:** `ring-2 ring-blue-500/30 border-blue-500/50` — the one structural use of Signal Blue, justified because focus is interactive
- **Labels:** JetBrains Mono, 0.75rem, uppercase, tracking-widest, Ink Secondary. Positioned above the field.
- **Placeholder:** Ink Secondary at ~60% opacity

### Navigation
The floating pill nav is the system's signature structural element.

- **Style:** Panel at 85% opacity, `backdrop-blur-md`, Border stroke, `shadow-sm`. Full-width on mobile; 36rem pill on sm+.
- **Default item:** Ink Secondary, 0.82rem, weight 500
- **Active item:** Ink Primary. Surface Raised pill background behind the link, animated via `layoutId="activeSection"` spring (stiffness 380, damping 30).
- **Hover:** Transitions to Ink Primary, 200ms.

### Availability Badge
Single-use signature component in the hero.

- **Treatment:** Panel background, Border stroke, full pill, padding `8px 16px`. Floats on a slow sine-wave (`y: [0, -5, 0]`, 3s, ease-in-out).
- **Dot:** 8px circle, Live Green (`#10b981`). Inner ring pings at 75% opacity — the only animated accent outside entrance choreography.
- **Text:** 0.875rem, weight 500, Ink Secondary.

## 6. Do's and Don'ts

### Do:
- **Do** use Signal Blue (`#2563eb`) exclusively on interactive destinations: links, the primary CTA, the rotating role label, and focus rings.
- **Do** let whitespace carry weight. Section gap is `7rem`. Resist the urge to fill it.
- **Do** use JetBrains Mono for all metadata: stack tags, eyebrows, form labels, stat descriptors. Always uppercase. Always wide-tracked.
- **Do** keep the shadow vocabulary minimal: card hover lift and headshot ambient only. Use background tints for all other depth signals.
- **Do** put stat block numbers in a tinted container (`#f4f4f5`) — never a side-stripe border. The tint communicates enclosure; the stripe communicates decoration.
- **Do** scale the display headline aggressively: `clamp(2.8rem, 7vw, 5.5rem)`, tracking-tighter, line-height under 1. The gulf between Display and Label is the primary hierarchy signal.
- **Do** exit every entrance animation within 700ms total. Stagger CTAs by 80ms. Never re-animate an element already in view.
- **Do** give cards a physical lift on hover: `translateY(-2px)` plus the 3-layer shadow. This is the system's one moment of earned dimensionality.

### Don't:
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent on any element. The old stat block used this pattern — it is prohibited going forward. Replace with background tints.
- **Don't** use gradient text (`background-clip: text` with a gradient). A single Ink Primary or Signal Blue is always more legible and more authoritative.
- **Don't** use glassmorphism decoratively. The nav backdrop-blur is structural (separating a fixed layer from scrolling content). Blur applied elsewhere is banned.
- **Don't** animate layout properties (width, height, top, left). Animate `transform` and `opacity` only.
- **Don't** reach for neon or high-chroma palettes. This system is zinc and one controlled blue. Anything brighter reads as shouting.
- **Don't** use identical card grids (icon + heading + text, repeated). Projects are feature cards with image panels — not a 3-column icon grid.
- **Don't** let any section do two jobs. One scroll stop answers one recruiter question.
- **Don't** use Signal Blue on stat block accents, section dividers, or decorative borders. When blue appears in a non-interactive context, attention is misdirected.
- **Don't** clutter above the fold with animation noise. The hero entrance is choreographed; sections below it scroll in cleanly.
