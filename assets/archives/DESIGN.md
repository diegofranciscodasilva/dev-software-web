---
name: Deep Tech Minimalist
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#bcc8d1'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#87929b'
  outline-variant: '#3d4850'
  surface-tint: '#7ad0ff'
  primary: '#8fd6ff'
  on-primary: '#003549'
  primary-container: '#00bfff'
  on-primary-container: '#004a65'
  inverse-primary: '#00668a'
  secondary: '#c8c6c5'
  on-secondary: '#303030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#ffc184'
  on-tertiary: '#492900'
  tertiary-container: '#fb9c24'
  on-tertiary-container: '#653a00'
  error: '#DC3545'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c3e8ff'
  primary-fixed-dim: '#7ad0ff'
  on-primary-fixed: '#001e2c'
  on-primary-fixed-variant: '#004c69'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1b1b1c'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#ffdcbd'
  tertiary-fixed-dim: '#ffb86e'
  on-tertiary-fixed: '#2c1600'
  on-tertiary-fixed-variant: '#693c00'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  surface-card: '#181818'
  border-subtle: '#2D2D2D'
  text-primary: '#F1F5F9'
  text-secondary: '#A0A0A0'
  success: '#28A745'
  light-bg: '#F8FAFC'
  light-text: '#172033'
typography:
  headline-xl:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  section-gap: 80px
---

## Brand & Style
The design system is engineered for a "Deep Tech" aesthetic, positioning the product as a sophisticated, high-performance digital services provider. The brand personality is rooted in technical precision and professional reliability.

The design style is **Minimalist / Tech-Modern**. It prioritizes a high-signal-to-noise ratio by utilizing generous negative space, a restricted high-contrast color palette, and geometric structural elements. Visual interest is generated through "Digital Brutalism" light-touches, such as mono-spaced accents, terminal-style boxes, and subtle circuit-inspired linework, rather than traditional imagery.

## Colors
The palette is optimized for a "Dark Mode First" experience to emphasize the technological focus. The primary **Electric Blue** acts as a high-visibility beacon for interaction points, while the neutral scales are meticulously tiered to provide depth without relying on heavy shadows.

In Dark Mode, use `#121212` for the base canvas and `#181818` for primary containers. In Light Mode, transition to a clean `#F8FAFC` background with `#172033` text to maintain high legibility and a professional "SaaS" feel.

## Typography
The typographic hierarchy uses **Montserrat** for headlines to provide a bold, geometric presence. **Inter** is the workhorse for body copy, selected for its exceptional readability in digital interfaces. 

A third typeface, **JetBrains Mono** (or similar technical mono-space), is introduced for small labels, code snippets, and metadata to reinforce the developer-centric aesthetic. Strictly avoid serif fonts to maintain the modern, streamlined look.

## Layout & Spacing
This design system utilizes a **12-column fluid grid** for desktop and a **4-column grid** for mobile. The layout philosophy emphasizes "Negative Space as a Feature," allowing elements room to breathe to maintain a premium feel.

- **Desktop:** 1280px max-width, 24px gutters.
- **Section Spacing:** Use 80px to 120px vertical gaps between major landing page sections to prevent visual clutter.
- **Alignment:** Align text-heavy components to a strict left-axis to reflect a systematic, organized code-like structure.

## Elevation & Depth
Depth is achieved through **Tonal Layering** and **Low-Contrast Outlines** rather than heavy shadows. 

- **Surface Tiers:** Background (`#121212`) > Card (`#181818`) > Float (`#1E1E1E`).
- **Borders:** Use thin 1px borders (`#2D2D2D`) to define shapes. 
- **Interactive State:** On hover, cards should rise slightly (3px translateY) and the border color should transition to the **Electric Blue** accent.
- **Glassmorphism:** Use sparingly for the sticky header (backdrop-filter: blur(12px)) to maintain context while scrolling.

## Shapes
The shape language is "Soft-Technical." Elements use a **0.25rem (4px)** base radius to feel modern but precise. Avoid large, bubbly radiuses. 

Interactive elements like buttons and input fields should maintain this disciplined 4px corner to align with the geometric linework and terminal-style boxes used in the background graphics.

## Components
- **Sticky Header:** Contains the "Dev Software Web" logo in Montserrat 600. Includes a toggle switch for Light/Dark mode on the far right. Use a subtle bottom border (`#2D2D2D`).
- **Buttons:** Primary CTAs are solid Electric Blue with White or Dark-Neutral text. Secondary buttons are outlined (Ghost style) with 1px Electric Blue borders.
- **Cards:** Background `#181818`. On hover, apply a `3px` upward shift and change the border to `#00BFFF`.
- **Project Timeline:** Use a vertical 1px line in Electric Blue with small circular nodes for each step of the process.
- **Terminal Boxes:** For feature descriptions, use a container with a dark header bar containing three "window control" dots to mimic a code editor.
- **Input Fields:** Dark background, 1px border, with Electric Blue focus states. Use mono-spaced font for placeholder text to enhance the tech vibe.