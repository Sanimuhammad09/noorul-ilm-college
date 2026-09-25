---
name: Academic Prestige & Operational Rigor
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#444651'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#757682'
  outline-variant: '#c5c5d3'
  surface-tint: '#4059aa'
  primary: '#00236f'
  on-primary: '#ffffff'
  primary-container: '#1e3a8a'
  on-primary-container: '#90a8ff'
  inverse-primary: '#b6c4ff'
  secondary: '#006c4e'
  on-secondary: '#ffffff'
  secondary-container: '#97f5cc'
  on-secondary-container: '#007353'
  tertiary: '#442100'
  on-tertiary: '#ffffff'
  tertiary-container: '#653400'
  on-tertiary-container: '#fc922b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b6c4ff'
  on-primary-fixed: '#00164e'
  on-primary-fixed-variant: '#264191'
  secondary-fixed: '#97f5cc'
  secondary-fixed-dim: '#7bd8b1'
  on-secondary-fixed: '#002115'
  on-secondary-fixed-variant: '#00513a'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
  metric-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
The design system establishes an institutional, trustworthy, and modern academic presence for Noorul Ilm International School in Kaduna, Nigeria. It bridges institutional stature with operational clarity. The interface must inspire confidence in school proprietors, bursars, educators, and guardians through a balanced aesthetic of order, dignity, and efficiency.

The visual direction uses a Corporate Modern foundation enhanced by subtle institutional craftsmanship. The experience feels grounded, crisp, and authoritative—avoiding both cold bureaucratic minimalism and playful ed-tech consumer aesthetics. High-contrast typography, disciplined data grids, and structured card hierarchies ensure that administrative tasks (such as grading schedules, fee reconciliation, and attendance registries) are executed with zero cognitive strain.

## Colors
The color hierarchy is rooted in dignity, national heritage, and academic honor:

- **Primary (`#1E3A8A` - Royal Deep Navy):** The structural anchor. Applied across primary actions, active navigational states, key metric highlights, and administrative structural frames. It communicates trust, institutional stability, and governance.
- **Secondary (`#047857` - Emerald Green):** Represents vitality, academic progression, and Nigerian heritage. Applied across verified student credentials, approved fee clearances, positive academic trends, and secondary brand highlights.
- **Tertiary (`#D97706` - Warm Gold):** The hallmark of merit, distinction, and honor rolls. Used deliberately for honors, academic achievements, dean’s commendations, and premium portal highlights.
- **Neutral Palette:** Built upon Slate tones. The default canvas surface is `#F8FAFC`, stepping up to `#FFFFFF` for data cards, with `#E2E8F0` serving as the boundary line border. Core typography sits at `#0F172A` for headers and high-contrast metrics, `#334155` for standard content, and `#64748B` for tertiary metadata.
- **Financial & Status Accents:** Fee tracking and currency balances (₦) leverage explicit semantics: Success (`#059669`) for settled accounts, Warning (`#D97706`) for overdue grace periods, and Danger (`#DC2626`) for default collections or critical alerts.

## Typography
The system uses a two-typeface architecture:
1. **Display & Headings (Plus Jakarta Sans):** Selected for its balanced geometric clarity and academic structure. It brings a crisp, institutional finish to section headers, school performance dashboards, and modal summaries.
2. **Body & Interface Data (Inter):** Engineered for dense tabular reading, form inputs, grade reports, and financial ledgers. All numbers in data tables and currency amounts (₦) must strictly enforce OpenType tabular figures (`font-variant-numeric: tabular-nums; lining-nums;`) to guarantee alignment down column decimals.

## Layout & Spacing
The layout uses a 12-column fluid grid on desktop (`>1024px`), transforming into an 8-column layout on tablet (`768px - 1023px`), and a 4-column layout on mobile (`<768px`).

- **Workspaces:** Desktop views maintain a persistent 280px left navigation rail for RBAC-filtered school modules, with an optional 360px contextual sliding drawer on the right for student dossiers or quick-grade entry.
- **Rhythm:** Spacing follows a 4px baseline, scaled into 8px increments. Dense administrative tables utilize compact internal paddings (`space-sm`), while high-level dashboard summaries and portal cards breathe with `space-lg` and `space-xl` separation.

## Elevation & Depth
Depth is created using crisp structural boundaries combined with low-opacity navy-tinted ambient shadows, rejecting heavy drop-shadows in favor of clarity:

- **Surface Tier 0 (Canvas):** `#F8FAFC` base application background.
- **Surface Tier 1 (Cards, Modules, Tables):** `#FFFFFF` with a mandatory 1px border (`#E2E8F0`). Shadow: `0px 1px 3px rgba(15, 23, 42, 0.04), 0px 1px 2px rgba(15, 23, 42, 0.02)`.
- **Surface Tier 2 (Interactive Floating Elements, Dropdowns, Popovers):** `#FFFFFF` with 1px `#CBD5E1`. Shadow: `0px 4px 6px -1px rgba(15, 23, 42, 0.07), 0px 2px 4px -2px rgba(15, 23, 42, 0.05)`.
- **Surface Tier 3 (Modals, Confirmation Dialogs):** `#FFFFFF` framed in `#E2E8F0`, set against an overlay of `rgba(15, 23, 42, 0.45)` with 4px backdrop blur. Shadow: `0px 20px 25px -5px rgba(15, 23, 42, 0.1), 0px 8px 10px -6px rgba(15, 23, 42, 0.06)`.

## Shapes
The shape system applies a controlled rounded aesthetic (`roundedness: 2`) that softens administrative density while retaining structural authority:

- **Small Components (Badges, Chips, Form Inputs, Standard Buttons):** Standard radius of `0.5rem` (`rounded-md`).
- **Standard Surfaces (Data Cards, Module Panels, Empty States):** `1rem` (`rounded-lg`) corner radius.
- **Large Framing Surfaces (Modals, Floating Toolbars, Slide-out Drawers):** `1.5rem` (`rounded-xl`) corner radius.
- **Pills:** Full circular rounding (`9999px`) is reserved exclusively for numerical count indicators, student avatar frames, and pill status tags.

## Components

### Buttons
- **Primary:** Background `#1E3A8A`, text `#FFFFFF`, radius `0.5rem`, height `40px` (`space-md` horizontal padding). Hover: `#172554`. Focus: 2px ring offset with `#3B82F6`.
- **Secondary:** Surface `#FFFFFF`, border 1px solid `#CBD5E1`, text `#1E293B`. Hover: `#F1F5F9`.
- **Destructive:** Background `#DC2626`, text `#FFFFFF`. Hover: `#B91C1C`.
- **Accent (Commendation/Honor):** Background `#D97706`, text `#FFFFFF`. Hover: `#B45309`.

### Form Fields & Inputs
- Height `40px`, background `#FFFFFF`, border 1px solid `#CBD5E1`, radius `0.5rem`, text `#0F172A`, font size `14px`.
- Active focus state: Border color `#1E3A8A` with a 3px ring of `rgba(30, 58, 138, 0.12)`.
- Currency Inputs: Fixed left-adornment containing `₦` rendered in bold Inter with `#64748B` neutral background.

### Cards & Data Containers
- Solid `#FFFFFF` background, 1px solid `#E2E8F0`, radius `1rem`, internal padding `1.5rem`.
- Section header within cards features a bottom hairline divider (`1px solid #F1F5F9`) separating title controls from card content.

### Badges & Status Chips
- Height `24px`, padding `0.25rem 0.625rem`, radius `9999px`, font size `11px`, font weight `600`, uppercase tracking (`0.04em`).
- **Paid / Active / Promoted:** Background `#ECFDF5`, text `#047857`, border 1px solid `#A7F3D0`.
- **Pending / In Review:** Background `#FFFBEB`, text `#B45309`, border 1px solid `#FDE68A`.
- **Overdue / Suspended:** Background `#FEF2F2`, text `#B91C1C`, border 1px solid `#FECACA`.
- **Academic Scholar:** Background `#FEF3C7`, text `#92400E`, border 1px solid `#FCD34D`.

### Data Tables
- Header row: Background `#F8FAFC`, height `44px`, text `#475569`, uppercase `11px` Inter font with sorting triggers.
- Body rows: Height `52px`, border-bottom 1px solid `#F1F5F9`, hover background `#F8FAFC`. Tabular numerical formatting for IDs, percentages, and amounts.

### RBAC Permission Matrix & Segmented Controls
- Segmented switches: Enclosed in `#F1F5F9` tray, active segment has `#FFFFFF` fill, `#0F172A` text, 1px border `#E2E8F0`, and light shadow.
- Checkboxes: 16px square, radius `4px`, checked state uses `#1E3A8A` with a white checkmark icon.