import type { Metadata } from "next";
import { BrandMark } from "@/components/BrandMark";

export const metadata: Metadata = {
  title: "Brand kit",
  description: "FairView Semiconductor brand tokens, type, color, and usage.",
};

const SWATCHES = [
  { name: "Void", var: "--fv-void", hex: "#07060c" },
  { name: "Ink", var: "--fv-ink", hex: "#0c0914" },
  { name: "Slate", var: "--fv-slate", hex: "#16111f" },
  { name: "Paper", var: "--fv-paper", hex: "#e7eef6" },
  { name: "Mist", var: "--fv-mist", hex: "#a7b4c4" },
  { name: "Vital (Purple)", var: "--fv-vital", hex: "#c084fc" },
  { name: "Vital Deep", var: "--fv-vital-deep", hex: "#4c1d95" },
  { name: "Gallium", var: "--fv-gallium", hex: "#5ee0d2" },
  { name: "Gallium deep", var: "--fv-gallium-deep", hex: "#0c4f4a" },
  { name: "Stallion", var: "--fv-stallion", hex: "#e8a04a" },
  { name: "Stallion deep", var: "--fv-stallion-deep", hex: "#7a3d10" },
  { name: "Signal", var: "--fv-signal", hex: "#c084fc" },
];

export default function BrandPage() {
  return (
    <article className="wrap page-hero stack-lg">
      <div>
        <p className="kicker">Brand kit</p>
        <h1>Tokens first. Pages second.</h1>
        <p className="lede">
          All future site work must consume <code>src/styles/tokens.css</code>. Do not introduce a second palette.
          Full written guidelines live in <code>docs/BRAND.md</code>.
        </p>
      </div>

      <section className="stack">
        <h2>Mark</h2>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <BrandMark className="brand-mark" />
          <p>Aperture over a die. Gallium stroke to Stallion stroke. Never recolor independently of the dual gradient.</p>
        </div>
      </section>

      <section className="stack">
        <h2>Color</h2>
        <div className="swatch-row">
          {SWATCHES.map((s) => (
            <figure className="swatch" key={s.name}>
              <div className="chip" style={{ background: `var(${s.var})` }} />
              <figcaption>
                {s.name}
                <code>{s.hex}</code>
                <code>{s.var}</code>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="stack">
        <h2>Type</h2>
        <p style={{ fontFamily: "var(--fv-display)", fontSize: "var(--step-3)" }}>Fraunces — display</p>
        <p style={{ fontFamily: "var(--fv-sans)", fontSize: "var(--step-1)" }}>Plus Jakarta Sans — interface</p>
        <p style={{ fontFamily: "var(--fv-serif)", fontSize: "var(--step-1)" }}>Source Serif 4 — lede and long-form</p>
        <p className="eq">IBM Plex Mono — identities, SKUs, tables</p>
      </section>

      <section className="stack">
        <h2>Voice</h2>
        <p>
          Precise, adult, slightly severe. Prefer “compiled” over “up to.” Prefer “partner cubes” over “our HBM.”
          Never “world-class,” “revolutionary,” or a TB/s that the identity will not print. Purple is vitality, not
          decoration. India is origin, not the market sentence. Export control is a constraint, not a slogan.
        </p>
      </section>
    </article>
  );
}
