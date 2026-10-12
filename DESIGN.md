# Grid & Logic art direction

Concept: precision meets imagination. Real brand: original G SVG mark, cyan #00d8d5, ink #080c10, off-white #eeeee8. Preserve studio positioning and contact information. Copy is direct, technical and concrete.

Typography: Space Grotesk display and Inter body, local WOFF2 fonts; mono system labels. Display 48–116px, body 16–20px.
Grid: 12-column desktop with 64px gutters, 6-column tablet, stacked mobile with 22px gutters. Spacing 8/16/24/40/64/96/128px.
Hero: enormous left-aligned type, cyan word accent, custom CSS perspective lattice on the right; tangible interactive material selection below.
Navigation: compact logo left, descriptive text links right, square cyan enquiry action; mobile disclosure with Escape support.
Imagery: source-backed project screenshots, framed as selected work; no stock office photography.
Motion: gentle once-only section reveals and purposeful grid rotation; reduced motion disables transforms.
Distinctive elements: perspective grid installation, numbered service rows with inverted hover, alternating wide and narrow portfolio compositions.
Tokens: primitive ink/cyan/paper → semantic background/text/accent → button border/section divider variables in globals.css.
Buttons: square 48px minimum, solid cyan or fine underline. Inputs: visible labels, dark background and bottom rule. Feedback: inline readable status.

## Implemented review

The source implements this direction with local variable fonts, responsive rules at mobile/tablet/desktop, CSS semantic tokens, reusable components and reduced-motion fallbacks. Initial desktop and mobile reviews led to form/state and keyboard-focus refinements. Final screenshot review covers all major page types, with no horizontal overflow at 390, 768 or 1440 pixels.
