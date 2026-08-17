# FairView Semiconductor brand kit

This is the written twin of `src/styles/tokens.css`. Change tokens first. Then this file. Then any page.

## Name

- **FairView** — capital V. One word in the wordmark.
- **FairView Semiconductor** — legal and first mention.
- Do not write Fairview, Fair View, or FV Semi in public copy.

## The Genesis Narrative

Fairchild Semiconductor in 1957 created the silicon planar process that sparked Silicon Valley. FairView Semiconductor is formed at the tipping point of the AI Century to become the genesis for the next compute revolution—unifying HBM4 memory architecture and GPU compute into single packages and 1U/2U/3U high-density blade servers.

## Product families

| Family | SKUs | Color | Role |
|---|---|---|---|
| Gallium Series | FV-GL-H4, FV-GL-S4, FV-GL-HX | `--fv-gallium` | HBM4 memory chipset (8.192+ TB/s) |
| Stallion Series | FV-ST-S100, FV-ST-S80I | `--fv-stallion` | GPU / accelerator compute die |
| Blade Server Series | FV-RACK-1U, FV-RACK-2U, FV-RACK-3U | `--fv-vital` | 1U, 2U, 3U Enterprise Rack Systems (2027 Book) |

SKU strings are monospaced. Never invent an undocumented SKU without an engineering lock.

## Color

Defined in `src/styles/tokens.css`.

- **Surfaces**: Void (`#07060c`), ink (`#0c0914`), slate (`#16111f`), and steel (`#1e1730`).
- **Typography**: Paper (`#e7eef6`), mist (`#a7b4c4`), mute (`#6f7c8d`).
- **Gallium Teal** (`#5ee0d2`): Represents memory bandwidth and physical interconnect.
- **Stallion Copper** (`#e8a04a`): Represents GPU compute, tensor execution, and ALU power.
- **Vital Purple** (`#c084fc`, `#9333ea`, `#4c1d95`): The royal electric purple of the house—representing virility, vitality, and advanced computing flux energy. Used for blade systems, genesis highlights, and hero status indicators.
- **Multi-accent Package Gradient**: Vital purple → Gallium teal → Stallion copper.

## Type

| Role | Face | Token |
|---|---|---|
| Display / H1–H3 | Fraunces | `--fv-display` |
| UI / nav / buttons | Plus Jakarta Sans | `--fv-sans` |
| Lede / long-form | Source Serif 4 | `--fv-serif` |
| Identities / SKUs / tables | IBM Plex Mono | `--fv-mono` |

Fluid steps `--step--1` … `--step-5` scale dynamically from mobile devices to ultra-wide displays.

## 21st-Century Multi-Segment Horizons

1. **AI Acceleration & Hyperscale Data Centers** (Active Tape-out / First Silicon)
2. **Enterprise Computing & Blade Servers** (1U, 2U, and 3U form factors on 2027 delivery book)
3. **Automotive & Autonomous Self-Driving** (Level 4/5 low-latency sensor fusion)
4. **Satellite & Space Communications** (Rad-tolerant orbital edge compute)
5. **Mobile & Personal Computing** (Compact SPHBM4 workstations)

## Voice

Compile. Do not hype. Tell the historical truth with uncompromising technical rigor.

Allowed: “compiled,” “public fact,” “partner cubes,” “first tape-out,” “2027 delivery,” “1U/2U/3U blade.”
Forbidden: invented tRFC / Vdd, vendor marketing bins as FairView numbers, “patented,” “world-class,” “up to 3.3 TB/s.”
