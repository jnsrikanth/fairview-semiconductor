# FairView Semiconductor brand kit

This is the written twin of `src/styles/tokens.css`. Change tokens first. Then this file. Then any page.

## Name

- **FairView** — capital V. One word in the wordmark.
- **FairView Semiconductor** — legal and first mention.
- Do not write Fairview, Fair View, or FV Semi in public copy.

## Product names

| Family | SKUs | Color |
|---|---|---|
| Gallium Series | FV-GL-H4, FV-GL-S4, FV-GL-HX | `--fv-gallium` |
| Stallion Series | FV-ST-S100, FV-ST-S80I | `--fv-stallion` |

SKU strings are monospaced. Never invent a third family without a lock.

## Color

Defined in `src/styles/tokens.css`.

- Void / ink / slate are surfaces. Paper / mist / mute are type.
- Gallium teal is memory. Stallion copper is compute. Signal blue is host I/O.
- Dual-accent gradient (teal → copper) is reserved for the mark and for “package” moments.
- Do not use NVIDIA green, AMD red, or a third hero accent.

Contrast: paper on void, mist on slate. Gallium and Stallion text must sit on deep companions (`--fv-gallium-deep`, `--fv-stallion-deep`) when used as fills.

## Type

| Role | Face | Token |
|---|---|---|
| Display / H1–H3 | Fraunces | `--fv-display` |
| UI / nav / buttons | Plus Jakarta Sans | `--fv-sans` |
| Lede / long-form | Source Serif 4 | `--fv-serif` |
| Identities / SKUs / tables | IBM Plex Mono | `--fv-mono` |

Fluid steps `--step--1` … `--step-5` scale from phone to 34″ and larger. Do not set fixed `px` type in pages.

## Layout

- `--gutter` and `--page-max` expand at 1440 / 1800 / 2200 / 2800.
- Prefer CSS Grid for page chassis and product matrices. Flex for nav, actions, and metric interiors.
- Prose column stays `--prose-max`. Ultrawide adds columns; it does not stretch a paragraph to 80 rem.

## Motion

- Halo breathe and Ken Burns loops are decoration.
- Honor `prefers-reduced-motion: reduce`: no hero video, no halo animation, no hover translate.
- Every moving media control must have a pause control.

## Voice

Compile. Do not hype.

Allowed: “compiled,” “public fact,” “partner cubes,” “first tape-out,” “not in pack.”
Forbidden: invented tRFC / Vdd, vendor marketing bins as FairView numbers, “patented,” “world-class,” “up to 3.3 TB/s.”

## Accessibility

- Skip link, visible focus, 44 px minimum targets, labeled form fields, live regions on submit.
- Do not convey meaning by color alone (Gallium/Stallion always carry a name).
- Captions on editorial renders: “not a pinout.”

## User journey

1. **Discover** — home hero states the two families and the honesty rule.
2. **Choose** — Gallium vs Stallion product cards.
3. **Specify** — SKU pages + `/specifications`.
4. **Understand attach** — `/architecture` diagrams.
5. **Trust the empty knobs** — `/technology` and `/legal`.
6. **Design-in** — `/design-in`.

Do not send a first-time visitor into Nexus, teaching locks, or counsel packets.

## Files

- Tokens: `src/styles/tokens.css`
- Components: consume tokens only
- Mark: `public/brand/mark.svg`
- Public kit page: `/brand`
