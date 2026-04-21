# Design System Strategy: The Cinematic Canvas

## 1. Overview & Creative North Star
This design system is built upon the "Cinematic Canvas" philosophy. Rather than treating an interface as a collection of boxes and buttons, we view it as a high-end editorial gallery where content—specifically video—is the undisputed protagonist. 

The "template" look is discarded in favor of **Soft Minimalism**. We achieve this through intentional asymmetry, massive breathing room (negative space), and a rejection of traditional structural lines. By utilizing the depth of field found in cinematography, we create a UI that feels layered and atmospheric rather than flat and functional. 

**Creative North Star: The Cinematic Canvas**
*   **Immersion over Interface:** UI elements should recede until needed.
*   **Tonal Fluidity:** Hierarchy is defined by light and shade, not lines.
*   **Intentional Friction:** Using scale and whitespace to slow the user down and focus their attention on premium content.

---

## 2. Colors & Surface Philosophy
The palette utilizes a high-contrast foundation of `surface` (#f9f9f9) and `on_surface` (#1a1c1c), punctuated by a signature `primary` red (#bc0100).

### The "No-Line" Rule
Explicitly prohibit the use of 1px solid borders for sectioning or containment. Boundaries must be defined solely through background color shifts. For example, a sidebar should be rendered in `surface_container_low` against a main content area of `surface`. This creates a sophisticated, "app-like" feel that mimics high-end hardware design.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the surface-container tiers to define importance:
*   **Base Layer:** `surface` (The foundation).
*   **Structural Sections:** `surface_container_low` or `surface_container` (Sidebars, navigation bars).
*   **Interactive Elements:** `surface_container_highest` (Cards, active states).
*   **Floating Elements:** `surface_container_lowest` (Popovers, modals) to create a "lifted" effect against darker containers.

### The "Glass & Gradient" Rule
To move beyond a generic "flat" look:
*   **Glassmorphism:** For floating navigation or overlays, use `surface` at 80% opacity with a `backdrop-blur` of 20px. This allows the vibrant colors of video thumbnails to bleed through the UI, making the system feel integrated with the content.
*   **Signature Textures:** For primary CTAs, do not use flat red. Apply a subtle linear gradient from `primary` (#bc0100) to `primary_container` (#eb0000) at a 135-degree angle. This adds a "jewel-like" polish.

---

## 3. Typography
We utilize **Inter** across all scales to maintain a technical yet readable editorial feel.

*   **Display Scales (`display-lg` to `display-sm`):** Use these for high-impact curation titles. Set with a slightly tighter letter-spacing (-0.02em) to give a "headline" feel.
*   **Headline & Title:** These are your primary navigation cues. Use `headline-sm` for video titles to ensure they command attention without crowding the grid.
*   **Body & Labels:** Use `body-md` for descriptions. `label-sm` should be reserved for metadata (e.g., view counts, timestamps), rendered in `tertiary` (#5c5c5c) to reduce visual noise.

Hierarchy is conveyed through **Value, not just Weight**. Important information stays `on_surface`, while secondary information moves to `on_surface_variant` or `tertiary`.

---

## 4. Elevation & Depth
In this system, depth is organic. We mimic natural light and physical stacking.

### The Layering Principle
Achieve depth by "stacking" surface tiers. Place a `surface_container_lowest` card on a `surface_container_low` section. The delta in hex value provides enough contrast for the human eye to perceive a "lift" without a single drop shadow.

### Ambient Shadows
When a component must "float" (e.g., a context menu), use **Ambient Shadows**:
*   **Color:** 6% opacity of `on_surface`.
*   **Blur:** High (24px - 40px).
*   **Spread:** -4px.
This creates a soft glow that feels like a natural shadow cast by a softbox in a studio, rather than a digital "drop shadow."

### The "Ghost Border" Fallback
If accessibility requirements demand a border, use a **Ghost Border**: `outline_variant` (#ebbbb4) at 15% opacity. It should be felt, not seen.

---

## 5. Components

### Buttons
*   **Primary:** Pill-shaped (`rounded: full`). Gradient fill (Primary to Primary Container). Label in `on_primary`. No shadow.
*   **Secondary:** Pill-shaped. Background: `surface_container_high`. Label: `on_surface`.
*   **Tertiary:** No background. Label: `secondary` (#0056c3). Use for low-emphasis actions like "More."

### Video Cards
*   **Thumbnails:** Use `rounded: lg` (1rem). No border.
*   **Metadata:** Use vertical white space (12px) to separate the title (`title-sm`) from the channel name (`label-md`). 
*   **Hover State:** On hover, the card should scale slightly (1.02x) and the background shift to `surface_container_highest`.

### Selection Chips
*   Used for category filtering. 
*   **Unselected:** `surface_container_high`, `rounded: md`.
*   **Selected:** `on_surface` background with `surface` text. This high-contrast inversion provides immediate feedback.

### Input Fields
*   **Style:** Minimalist. `surface_container_low` background with a `rounded: full` shape. 
*   **Focus:** Transition the background to `surface_container_highest` and add a 1px `ghost border` using the `primary` color at 30% opacity.

---

## 6. Do's and Don'ts

### Do:
*   **Embrace Asymmetry:** Use the Spacing Scale to create unbalanced margins that guide the eye toward the "Play" action.
*   **Prioritize Thumbnails:** Treat video thumbnails as the primary color source of the UI.
*   **Use Tonal Transitions:** Use `surface_dim` for the "darkest" light-mode areas to create a sense of richness.

### Don't:
*   **Don't use 100% black text on white.** Always use `on_surface` (#1a1c1c) for better optical comfort.
*   **Don't use dividers.** Forbid horizontal lines between list items. Use 16px - 24px of vertical whitespace to define separation.
*   **Don't use standard "Red" for everything.** Reserve #FF0000 / `primary` for the most critical calls to action only. Overuse kills the premium editorial feel.
*   **Don't crowd the grid.** If a layout feels busy, increase the container padding and remove one metadata element. Less is always more.