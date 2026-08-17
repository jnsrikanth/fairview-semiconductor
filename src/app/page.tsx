import Link from "next/link";
import { HaloStage } from "@/components/HaloStage";
import { PackageDiagram } from "@/components/diagrams/PackageDiagram";
import { BladeServerShowcase } from "@/components/BladeServerShowcase";
import { GenesisTimeline } from "@/components/GenesisTimeline";
import { MarketGrid } from "@/components/MarketGrid";
import { GALLIUM, STALLION, BLADE_SERVERS, COMPANY } from "@/content/specs";
import { STORY } from "@/content/story";

export default function HomePage() {
  return (
    <>
      {/* Cinematic Hero */}
      <HaloStage
        videoSrc="/videos/hero-package.mp4"
        poster="/images/hero-package.webp"
        alt="Cinematic 3D view of a Stallion compute die and Gallium HBM4 memory cubes in a royal purple halo"
      >
        <p className="kicker">FairView Semiconductor · Silicon Genesis</p>
        <h1>The Genesis of 21st-Century Computing.</h1>
        <p className="lede">
          {COMPANY.manifesto}
        </p>
        <div className="hero-actions">
          <Link className="btn btn-vital" href="/systems">
            Explore 2027 Blade Systems
          </Link>
          <Link className="btn btn-gallium" href="/products/gallium">
            Gallium HBM4
          </Link>
          <Link className="btn btn-stallion" href="/products/stallion">
            Stallion GPU
          </Link>
          <Link className="btn btn-ghost" href="/company">
            The Fairchild Lineage
          </Link>
        </div>
      </HaloStage>

      {/* High-Impact Headline Metrics (Clean & Formula-Free) */}
      <section className="section" aria-label="Key Breakthrough Metrics">
        <div className="wrap">
          <dl className="metrics">
            <div className="metric">
              <dt>Next-Gen HBM4 Bandwidth</dt>
              <dd style={{ color: "var(--fv-gallium)" }}>
                8.192 TB/s
                <small>4-Cube Flagship Silicon Package</small>
              </dd>
            </div>
            <div className="metric">
              <dt>Peak 3U Blade Memory</dt>
              <dd style={{ color: "var(--fv-vital-bright)" }}>
                131.072 TB/s
                <small>16-Node Rack-Scale Supercomputing</small>
              </dd>
            </div>
            <div className="metric">
              <dt>Stallion S100 AI Compute</dt>
              <dd style={{ color: "var(--fv-stallion)" }}>
                59.0 TFLOPS
                <small>FP32 Density · 471.9 Tensor TFLOPS</small>
              </dd>
            </div>
            <div className="metric">
              <dt>Turnkey Systems Delivery</dt>
              <dd>
                2027 Book
                <small>1U · 2U · 3U Enterprise Blade Series</small>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* The Core Breakthrough: Solving the Memory Wall */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap two-col">
          <div className="stack">
            <p className="kicker" style={{ color: "var(--fv-vital-bright)" }}>The Architectural Breakthrough</p>
            <h2>Shattering the AI Memory Wall.</h2>
            <p>{STORY.whyNow}</p>
            <p>{STORY.memoryWallSolution}</p>
            <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
              <Link className="btn btn-vital" href="/products/gallium">
                Explore Gallium HBM4 &rarr;
              </Link>
              <Link className="btn btn-ghost" href="/architecture">
                Inspect 2.5D Package
              </Link>
            </div>
          </div>
          <figure className="media-frame">
            <img src="/images/hero-field.webp" alt="FairView Semiconductor Advanced Silicon Architecture" />
          </figure>
        </div>
      </section>

      {/* Product Families Showcase (Silicon to Systems) */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Product Ecosystem</p>
            <h2>From Silicon Dies to Turnkey Rack Systems</h2>
            <p>
              An integrated portfolio engineered to power every level of the AI compute stack with uncompromising memory throughput.
            </p>
          </div>
          <div className="split">
            <Link href="/products/gallium" className="product-card gallium">
              <img src="/images/gallium-cube.webp" alt="Gallium HBM4 Memory Cube" />
              <div className="pad">
                <p className="kicker">Memory Architecture</p>
                <h2>{GALLIUM.family}</h2>
                <p>8.192+ TB/s HBM4 memory chipset delivering the fastest data attach in the industry.</p>
              </div>
            </Link>
            <Link href="/products/stallion" className="product-card stallion">
              <img src="/images/stallion-die.webp" alt="Stallion AI Compute Die" />
              <div className="pad">
                <p className="kicker stallion">AI Accelerator</p>
                <h2>{STALLION.family}</h2>
                <p>High-density GPU compute die with unified access to the HBM4 memory plane.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive 2027 Enterprise Blade Systems Showcase */}
      <section className="section" id="systems">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker" style={{ color: "var(--fv-vital-bright)" }}>Enterprise Systems · 2027 Roadmap</p>
            <h2>1U, 2U, and 3U High-Density Blade Servers</h2>
            <p>{BLADE_SERVERS.oneLiner}</p>
          </div>
          <BladeServerShowcase />
          <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link className="btn btn-vital" href="/systems">
              Explore Full Blade Server Lineup &rarr;
            </Link>
            <Link className="btn btn-ghost" href="/design-in">
              Request OEM Early Access Brief
            </Link>
          </div>
        </div>
      </section>

      {/* The Fairchild Genesis & Historical Lineage */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">The Lineage</p>
            <h2>{STORY.genesisTitle}</h2>
            <p>{STORY.fairchildParallel}</p>
          </div>
          <GenesisTimeline />
          <div style={{ marginTop: "1.25rem" }}>
            <Link className="btn btn-ghost" href="/company">
              Read the Full Genesis Story &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 21st-Century Multi-Segment Horizons */}
      <section className="section" id="markets">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">21st-Century Horizons</p>
            <h2>Built for the Next Fifty Years of Computing</h2>
            <p>From hyperscale AI clusters to autonomous mobility, orbital satellites, and personal workstations.</p>
          </div>
          <MarketGrid />
        </div>
      </section>

      {/* Silicon Package Architecture Preview */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Package Architecture</p>
            <h2>Unified 2.5D CoWoS Silicon Packaging</h2>
            <p>
              Four partner HBM4 memory cubes, Gallium controller chiplet, and Stallion compute die united over an advanced silicon interposer.
            </p>
          </div>
          <PackageDiagram />
          <p style={{ marginTop: "1.2rem" }}>
            <Link className="btn btn-ghost" href="/architecture">
              Inspect Full Architecture Map &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section">
        <div className="wrap stack">
          <div className="section-head">
            <p className="kicker">Engage with FairView</p>
            <h2>Build the Future of Computing with Us.</h2>
            <p>
              Connect with our silicon and systems architecture teams for 2027 enterprise blade allocations and custom package design-in.
            </p>
          </div>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/design-in">
              Request Design-In Allocation
            </Link>
            <Link className="btn btn-vital" href="/systems">
              Explore Blade Servers
            </Link>
            <Link className="btn btn-ghost" href="/specifications">
              Engineering Datasheets
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
