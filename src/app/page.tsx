import Link from "next/link";
import { HaloStage } from "@/components/HaloStage";
import { PackageDiagram } from "@/components/diagrams/PackageDiagram";
import { FIRST_PACKAGE, GALLIUM, STALLION, DIFFERENTIATORS } from "@/content/specs";

export default function HomePage() {
  const s100 = STALLION.skus[0];

  return (
    <>
      <HaloStage
        videoSrc="/videos/hero-package.mp4"
        poster="/images/hero-package.webp"
        alt="Cinematic 3D view of a Stallion compute die with four Gallium partner HBM cubes on a silicon interposer, teal and copper halo lighting"
      >
        <p className="kicker">FairView Semiconductor</p>
        <h1>The memory lock. The GPU lock. One package.</h1>
        <p className="lede">
          Gallium is the HBM4 chipset. Stallion is the GPU. Bandwidth is compiled, never sampled.
          UCIe carries command and telemetry. It is not HBM.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-gallium" href="/products/gallium">
            Gallium HBM4
          </Link>
          <Link className="btn btn-stallion" href="/products/stallion">
            Stallion GPU
          </Link>
          <Link className="btn btn-ghost" href="/architecture">
            Package architecture
          </Link>
        </div>
      </HaloStage>

      <section className="section" aria-label="Compiled identities">
        <div className="wrap">
          <dl className="metrics">
            <div className="metric">
              <dt>Per stack · JESD270-4</dt>
              <dd>
                {FIRST_PACKAGE.stackTBs.toFixed(3)} TB/s
                <small>2048 × 8 / 8000</small>
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
              <dt>DDR clock</dt>
              <dd>
                0.250 ns
                <small>tCK = 2 / 8 Gbps · not 250 ns</small>
              </dd>
            </div>
            <div className="metric">
              <dt>Stallion S100 FP32</dt>
              <dd>
                {s100.fp32Display} TFLOPS
                <small>128 SM × 128 ALU × 2 × 1.8 / 1000</small>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Product families</p>
            <h2>Two series. One binder rule.</h2>
            <p>
              Aggregate HBM bandwidth is owned only by Gallium. Stallion may mirror it for the roofline.
              Equal TB/s is not equal geometry.
            </p>
          </div>
          <div className="split">
            <Link href="/products/gallium" className="product-card gallium">
              <img src="/images/gallium-liquid.webp" alt="" />
              <video autoPlay muted loop playsInline poster="/images/gallium-liquid.webp" aria-hidden="true">
                <source src="/videos/gallium-halo.mp4" type="video/mp4" />
              </video>
              <div className="pad">
                <p className="kicker">Memory chipset</p>
                <h2>{GALLIUM.family}</h2>
                <p>{GALLIUM.oneLiner}</p>
              </div>
            </Link>
            <Link href="/products/stallion" className="product-card stallion">
              <img src="/images/stallion-die.webp" alt="" />
              <video autoPlay muted loop playsInline poster="/images/stallion-die.webp" aria-hidden="true">
                <source src="/videos/stallion-die.mp4" type="video/mp4" />
              </video>
              <div className="pad">
                <p className="kicker stallion">GPU / accelerator</p>
                <h2>{STALLION.family}</h2>
                <p>{STALLION.oneLiner}</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Architecture</p>
            <h2>A die set, not a slogan.</h2>
            <p>
              First silicon is four partner cubes on a CoWoS-class interposer, Gallium-HX as its own chiplet,
              Stallion as the compute die, host I/O on PCIe 6 / CXL 3.1.
            </p>
          </div>
          <PackageDiagram />
          <p style={{ marginTop: "1.2rem" }}>
            <Link className="btn btn-ghost" href="/architecture">
              Full attach map
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Why FairView</p>
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
                Empty knobs — tRFC, selected Vdd, vendor marketing bins — stay empty.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap stack">
          <div className="section-head">
            <p className="kicker">Design-in</p>
            <h2>Controller IP, attach, and a GPU that will not lie about bandwidth.</h2>
            <p>
              FairView is not a DRAM IDM. We ship the chipset and the Stallion contract. Cubes are partnered.
            </p>
          </div>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/design-in">
              Start a design-in
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
