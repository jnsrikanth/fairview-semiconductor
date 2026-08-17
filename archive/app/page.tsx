import Link from "next/link";
import { HaloStage } from "@/components/HaloStage";
import { PackageDiagram } from "@/components/diagrams/PackageDiagram";
import { BladeServerShowcase } from "@/components/BladeServerShowcase";
import { GenesisTimeline } from "@/components/GenesisTimeline";
import { MarketGrid } from "@/components/MarketGrid";
import { FIRST_PACKAGE, GALLIUM, STALLION, BLADE_SERVERS, DIFFERENTIATORS, COMPANY } from "@/content/specs";
import { STORY } from "@/content/story";

export default function HomePage() {
  const s100 = STALLION.skus[0];

  return (
    <>
      {/* Cinematic Hero */}
      <HaloStage
        videoSrc="/videos/hero-package.mp4"
        poster="/images/hero-package.webp"
        alt="Cinematic 3D view of a Stallion compute die and four Gallium partner HBM cubes in a violet halo"
      >
        <p className="kicker">FairView Semiconductor</p>
        <h1>The Genesis of 21st-Century Computing.</h1>
        <p className="lede">
          {COMPANY.manifesto}
        </p>
        <div className="hero-actions">
          <Link className="btn btn-gallium" href="/products/gallium">
            Gallium HBM4
          </Link>
          <Link className="btn btn-stallion" href="/products/stallion">
            Stallion GPU
          </Link>
          <Link className="btn btn-vital" href="/systems">
            1U · 2U · 3U Blade Systems
          </Link>
          <Link className="btn btn-ghost" href="/company">
            The Fairchild Story
          </Link>
        </div>
      </HaloStage>

      {/* Metrics Section */}
      <section className="section" aria-label="Compiled identities">
        <div className="wrap">
          <dl className="metrics">
            <div className="metric">
              <dt>Per stack · JESD270-4</dt>
              <dd>
                {FIRST_PACKAGE.stackTBs.toFixed(3)} TB/s
                <small>2048 × 8 / 8000 · HBM4 Physical Lock</small>
              </dd>
            </div>
            <div className="metric">
              <dt>First package</dt>
              <dd>
                {FIRST_PACKAGE.aggTBs.toFixed(3)} TB/s
                <small>4 cubes · 144 GB · 12-hi × 24 Gb</small>
              </dd>
            </div>
            <div className="metric">
              <dt>Stallion S100 FP32</dt>
              <dd>
                {s100.fp32Display} TFLOPS
                <small>128 SM × 128 ALU × 2 × 1.8 / 1000</small>
              </dd>
            </div>
            <div className="metric">
              <dt>3U Blade Peak HBM4</dt>
              <dd style={{ color: "var(--fv-vital-bright)" }}>
                131.072 TB/s
                <small>16 Nodes · 2.30 TB HBM4 (2027 Book)</small>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Genesis & The Fairchild Parallel */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap two-col">
          <div className="stack">
            <p className="kicker" style={{ color: "var(--fv-vital-bright)" }}>The Genesis Parallel</p>
            <h2>From Fairchild 1957 to FairView 2027.</h2>
            <p>{STORY.whyNow}</p>
            <p>{STORY.fairchildParallel}</p>
            <p>{STORY.valley}</p>
            <div style={{ marginTop: "0.5rem" }}>
              <Link className="btn btn-vital" href="/company">
                Read the Full Genesis Story →
              </Link>
            </div>
          </div>
          <figure className="media-frame">
            <img src="/images/hero-field.webp" alt="FairView Semiconductor Silicon Genesis" />
          </figure>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Evolution of Computing</p>
            <h2>Three Epochs of Silicon Genesis</h2>
            <p>
              How fundamental physics transformed into the modern computing infrastructure of civilization.
            </p>
          </div>
          <GenesisTimeline />
        </div>
      </section>

      {/* Product Families */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Core Silicon Families</p>
            <h2>Memory Chipset &amp; AI Compute</h2>
            <p>
              Aggregate HBM bandwidth is owned by Gallium. Stallion mirrors it for the compute roofline.
              Together, they form the foundation of next-gen packages and blade architectures.
            </p>
          </div>
          <div className="split">
            <Link href="/products/gallium" className="product-card gallium">
              <img src="/images/gallium-cube.webp" alt="Gallium HBM4 Memory Cube" />
              <div className="pad">
                <p className="kicker">Memory chipset</p>
                <h2>{GALLIUM.family}</h2>
                <p>{GALLIUM.oneLiner}</p>
              </div>
            </Link>
            <Link href="/products/stallion" className="product-card stallion">
              <img src="/images/stallion-die.webp" alt="Stallion AI Compute Die" />
              <div className="pad">
                <p className="kicker stallion">GPU / accelerator</p>
                <h2>{STALLION.family}</h2>
                <p>{STALLION.oneLiner}</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Blade Servers Preview Section (2027 Roadmap) */}
      <section className="section" id="systems">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker" style={{ color: "var(--fv-vital-bright)" }}>Enterprise Systems · 2027 Roadmap</p>
            <h2>1U, 2U, and 3U High-Density Blade Servers</h2>
            <p>{BLADE_SERVERS.oneLiner}</p>
          </div>
          <BladeServerShowcase />
          <p style={{ marginTop: "1.5rem" }}>
            <Link className="btn btn-ghost" href="/systems">
              View Detailed Blade Systems Specifications &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* 21st Century Multi-Segment Roadmap */}
      <section className="section" id="markets">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">21st-Century Horizons</p>
            <h2>AI First. Expanding to Every Critical Frontier.</h2>
            <p>{STORY.twentyFirstCenturyVision}</p>
          </div>
          <MarketGrid />
        </div>
      </section>

      {/* Architecture Section */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Package Architecture</p>
            <h2>A die set, not a slogan.</h2>
            <p>
              First silicon is four partner cubes on a CoWoS-class interposer, Gallium-HX as its own chiplet,
              Stallion as the compute die, and host I/O on PCIe 6 / CXL 3.1.
            </p>
          </div>
          <PackageDiagram />
          <p style={{ marginTop: "1.2rem" }}>
            <Link className="btn btn-ghost" href="/architecture">
              Inspect Full Architecture Map
            </Link>
          </p>
        </div>
      </section>

      {/* The Lock & Differentiators */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">The Lock</p>
            <h2>Differentiation that survives a JEDEC lawyer.</h2>
          </div>
          <div className="feature-grid">
            {DIFFERENTIATORS.map((d) => (
              <article className="feature" key={d.title}>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
              </article>
            ))}
            <article className="feature">
              <h3>Honest identities</h3>
              <p>
                Every number on this site is a public standard fact, a founder-locked SKU, or arithmetic.
                Empty knobs stay empty.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Design-in CTA */}
      <section className="section">
        <div className="wrap stack">
          <div className="section-head">
            <p className="kicker">Design-in</p>
            <h2>Tell us the attach. We will not invent a pin-rate.</h2>
            <p>
              FairView is not a DRAM IDM. Cubes are partnered known-good stacks. {STORY.export}
            </p>
          </div>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/design-in">
              Start a design-in
            </Link>
            <Link className="btn btn-vital" href="/systems">
              Explore 1U/2U/3U Blade Servers
            </Link>
            <Link className="btn btn-ghost" href="/specifications">
              Public specifications
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
