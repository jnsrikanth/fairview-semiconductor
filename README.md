# FairView Semiconductor

Public website for **FairView Semiconductor** — Gallium Series HBM4 memory chipset and Stallion Series GPU.

- Production: https://fairview-semiconductor.vercel.app
- Source: https://github.com/jnsrikanth/fairview-semiconductor

Attach the FairView domain later in the Vercel project. Set `NEXT_PUBLIC_SITE_URL` to the canonical origin.

Product numbers are taken from the approved architecture packet `FV-ARCH-HBM4-001`. This repo does not invent JEDEC timings, selected Vdd, or vendor marketing bins.

## Stack

- Next.js 15 App Router, React 19, TypeScript
- Brand tokens in `src/styles/tokens.css` — see `docs/BRAND.md` and `/brand`
- Product identities in `src/content/specs.ts` (single source of truth)
- Widescreen fluid type and expanding `--page-max`
- Hero media: AI-generated 3D stills plus cinematic Ken Burns loops (`public/videos`)

## Develop

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm start
```

Custom domain can be attached later in Vercel. Set `NEXT_PUBLIC_SITE_URL` to the canonical origin.

## Honesty rules

- Gallium owns aggregate HBM TB/s. Stallion may only mirror it.
- UCIe is not HBM.
- First package is 4 × 2048-bit × 8.0 Gbps = 8.192 TB/s and 144 GB.
- Equal TB/s is not equal geometry.
