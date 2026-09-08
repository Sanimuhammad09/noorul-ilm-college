---
name: Academic Prestige
colors:
  surface: '#faf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#faf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f4ef'
  surface-container: '#efeee9'
  surface-container-high: '#e9e8e3'
  surface-container-highest: '#e3e3de'
  on-surface: '#1b1c19'
  on-surface-variant: '#534344'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#867274'
  outline-variant: '#d8c1c3'
  surface-tint: '#934655'
  primary: '#390111'
  on-primary: '#ffffff'
  primary-container: '#551625'
  on-primary-container: '#d37b89'
  inverse-primary: '#ffb2bd'
  secondary: '#6e5d27'
  on-secondary: '#ffffff'
  secondary-container: '#f9e19d'
  on-secondary-container: '#75632c'
  tertiary: '#191919'
  on-tertiary: '#ffffff'
  tertiary-container: '#2e2d2d'
  on-tertiary-container: '#969494'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9dd'
  primary-fixed-dim: '#ffb2bd'
  on-primary-fixed: '#3d0414'
  on-primary-fixed-variant: '#762f3e'
  secondary-fixed: '#f9e19d'
  secondary-fixed-dim: '#dcc584'
  on-secondary-fixed: '#231a00'
  on-secondary-fixed-variant: '#554511'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c9c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#faf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e3e3de'
  heritage-burgundy: '#551625'
  academic-gold: '#D3BC7C'
  ink-black: '#070707'
  paper-white: '#F9F8F3'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style

This design system is engineered to evoke a sense of global academic excellence, tradition, and forward-thinking innovation. The brand personality is prestigious and authoritative yet accessible, designed to appeal to international students and academic faculty alike.

The design style is **Corporate / Modern** with a strong **Minimalist** foundation. It prioritizes clarity and whitespace to reflect institutional transparency and high standards. Subtle high-contrast elements and sophisticated layering ensure the interface feels premium and trustworthy, avoiding unnecessary flourishes in favor of structural integrity and legibility. Visuals should emphasize high-quality photography of modern campus life and global connectivity.

## Colors

The palette is anchored by **Heritage Burgundy**, a deep, scholarly hue that communicates stability and history. This is complemented by **Academic Gold**, used sparingly for high-value accents, calls to action, and celebratory highlights. 

The background utilizes a warm **Paper White** (#F9F8F3) to reduce eye strain and provide a more tactile, sophisticated feel than pure white, while **Ink Black** provides sharp, high-contrast legibility for body text. This combination ensures a "global" aesthetic that fits the standards of elite international educational institutions.

## Typography

The typographic strategy utilizes a classic serif/sans-serif pairing to balance tradition with modernity. **Playfair Display** is reserved for headlines and display text, lending an editorial and prestigious air to the brand. **Inter** is used for all functional and body text, ensuring maximum readability and a clean, systematic feel across digital interfaces.

For mobile, display sizes are scaled down to ensure they remain within the viewport while maintaining their characteristic elegance. Labels and navigational elements should use uppercase styling with slight letter spacing to differentiate them from informative body text.

## Layout & Spacing

The design system employs a **Fixed Grid** model for desktop to maintain a structured, organized appearance, while transitioning to a **Fluid Grid** for tablet and mobile devices. 

- **Desktop (1440px+):** 12-column grid, 1280px max-width, 24px gutters, 48px side margins.
- **Tablet (768px - 1439px):** 8-column grid, fluid width, 24px gutters, 32px side margins.
- **Mobile (Up to 767px):** 4-column grid, fluid width, 16px gutters, 16px side margins.

A consistent 8px spatial rhythm governs all padding and margin decisions, ensuring visual harmony across components and sections. Content should be grouped logically with generous vertical whitespace (64px to 120px) between major sections to emphasize the minimalist, premium feel.

## Elevation & Depth

Visual hierarchy is primarily established through **Tonal Layers** and **Low-Contrast Outlines**. Rather than aggressive shadows, the system uses subtle background color shifts (Paper White to Pure White) to define separate functional areas.

When depth is required for interactive elements like cards or dropdowns, use "Ambient Shadows"—extremely soft, low-opacity (#070707 at 4-8%) blurs with no horizontal offset and a slight vertical displacement. This mimics the soft lighting found in modern architectural environments, reinforcing the "International College" aesthetic. Borders should be 1px wide and use a low-opacity version of the Ink Black or Heritage Burgundy to maintain a crisp, refined look.

## Shapes

The shape language is **Soft (0.25rem)**. This slight rounding takes the edge off the "Corporate" feel, making the institution appear welcoming and contemporary without losing its professional structure. 

- **Standard Buttons & Inputs:** 4px (0.25rem) radius.
- **Cards & Content Containers:** 8px (0.5rem) radius for a more distinct structural presence.
- **Decorative Elements:** Occasional use of "Pill" shapes for tags or badges to create visual variety in secondary UI elements.

## Components

### Buttons
- **Primary:** Heritage Burgundy background, Paper White text. Rectangular with 4px radius.
- **Secondary:** Transparent background, Heritage Burgundy border (1px), Heritage Burgundy text.
- **Tertiary:** Academic Gold background, Ink Black text (for high-conversion actions like "Apply Now").

### Cards
Cards should have a Pure White (#FFFFFF) background to stand out against the Paper White page background. Use a 1px border (#070707 at 10% opacity) and a subtle 8px radius. Card titles should always use Playfair Display.

### Input Fields
Inputs are minimal: Paper White background with an Ink Black bottom border or 1px all-around border. Labels are placed above the field using `label-md` typography. Focus states should use a 2px Academic Gold border.

### Lists & Navigation
Navigation links should use `label-lg` for top-level items. Lists in content areas should use custom markers in Heritage Burgundy or Academic Gold to reinforce brand identity.

### Additional Components
- **Academic Badges:** Circular or pill-shaped tags for accreditation and rankings.
- **Featured Quote:** Large Playfair Display italic text with a Heritage Burgundy vertical accent bar.
- **Stat Grid:** Large numeric displays in Playfair Display for "Students," "Faculty," etc., to showcase institutional scale.