import Link from "next/link";
import { PackageDiagram } from "@/components/diagrams/PackageDiagram";
import { HISTORICAL_GENESIS } from "@/content/story";

export default function HomePage() {
  return (
    <>
      {/* Hero Viewport */}
      <section className="hero-viewport">
        <div className="wrap hero-content">
          <div className="hero-badge">
            <span>&bull;</span> SILICON GENESIS &mdash; EPOCH 3.0
          </div>
          <h1 className="hero-title">
            The Genesis of<br />
            <span className="gradient-text-cyan">21st-Century</span><br />
            Computing.
          </h1>
          <p className="hero-desc">
            FairView Semiconductor is redefining the frontier of compute and memory &mdash; unifying Gallium HBM4
            and Stallion GPU architectures into a single silicon package that shatters the AI memory wall.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-cyan" href="/products">
              Explore Products <span className="btn-arrow">&rarr;</span>
            </Link>
            <Link className="btn btn-dark" href="/design-in">
              Request Design-In Access
            </Link>
          </div>
          <div className="hero-scroll-cue">
            <span>SCROLL</span>
            <div className="hero-scroll-line"></div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar-section" aria-label="Key Performance Metrics">
        <div className="wrap">
          <div className="stats-grid">
            <div className="stat-block">
              <div className="stat-num">
                8.192<span className="stat-unit">TB/s</span>
              </div>
              <div className="stat-title">HBM4 Memory Bandwidth</div>
            </div>
            <div className="stat-block">
              <div className="stat-num">
                471.9<span className="stat-unit">TFLOPS</span>
              </div>
              <div className="stat-title">Stallion Tensor Compute</div>
            </div>
            <div className="stat-block">
              <div className="stat-num">
                131<span className="stat-unit">TB/s</span>
              </div>
              <div className="stat-title">3U Rack-Scale Throughput</div>
            </div>
            <div className="stat-block">
              <div className="stat-num">2027</div>
              <div className="stat-title">Blade Systems Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Ecosystem Section */}
      <section className="section" id="products">
        <div className="wrap">
          <div className="section-center-head">
            <p className="section-kicker">Product Ecosystem</p>
            <h2>From Silicon Dies to Turnkey Rack Systems.</h2>
          </div>

          {/* Gallium Series Row */}
          <div className="product-row">
            <div className="product-copy">
              <span className="product-pill-badge">Memory Chipset</span>
              <h3 className="product-heading">Break the AI Memory Wall.</h3>
              <p className="product-description">
                The Gallium HBM4 chipset delivers over 8.192 TB/s of pure memory bandwidth directly to the GPU compute
                plane &mdash; eliminating data starvation in every AI workload at scale.
              </p>
              <div className="spec-tiles-grid">
                <div className="spec-tile">
                  <span className="spec-tile-label">Bandwidth</span>
                  <span className="spec-tile-value">8.192+ TB/s</span>
                </div>
                <div className="spec-tile">
                  <span className="spec-tile-label">Technology</span>
                  <span className="spec-tile-value">HBM4 Stacked</span>
                </div>
                <div className="spec-tile">
                  <span className="spec-tile-label">Cubes</span>
                  <span className="spec-tile-value">4-Stack Flagship</span>
                </div>
                <div className="spec-tile">
                  <span className="spec-tile-label">Interface</span>
                  <span className="spec-tile-value">CoWoS 2.5D</span>
                </div>
              </div>
              <Link href="/products/gallium" className="product-link">
                Request Engineering Datasheet <span>&rarr;</span>
              </Link>
            </div>
            <div className="product-media-card">
              <img src="/images/gallium-cube-3d.jpg" alt="Gallium HBM4 3D Memory Cube" />
              <div className="media-card-caption">
                <strong>Gallium Series</strong>
                <span>Memory Architecture</span>
              </div>
            </div>
          </div>

          {/* Stallion Series Row */}
          <div className="product-row reverse">
            <div className="product-copy">
              <span className="product-pill-badge crimson">GPU Accelerator</span>
              <h3 className="product-heading">Massive AI Compute Density.</h3>
              <p className="product-description">
                On-package Stallion compute die with 128 streaming multiprocessors and high-efficiency tensor arrays,
                directly attached to the Gallium HBM4 memory bus for maximum throughput.
              </p>
              <div className="spec-tiles-grid">
                <div className="spec-tile">
                  <span className="spec-tile-label">Compute</span>
                  <span className="spec-tile-value">59.0 TFLOPS FP32</span>
                </div>
                <div className="spec-tile">
                  <span className="spec-tile-label">Tensor Ops</span>
                  <span className="spec-tile-value">471.9 TFLOPS</span>
                </div>
                <div className="spec-tile">
                  <span className="spec-tile-label">Interconnect</span>
                  <span className="spec-tile-value">PCIe 6 / CXL 3.1</span>
                </div>
                <div className="spec-tile">
                  <span className="spec-tile-label">Process Node</span>
                  <span className="spec-tile-value">2nm GAAFET</span>
                </div>
              </div>
              <Link href="/products/stallion" className="product-link">
                Request Engineering Datasheet <span>&rarr;</span>
              </Link>
            </div>
            <div className="product-media-card">
              <img src="/images/stallion-gpu-3d.jpg" alt="Stallion AI GPU Die" />
              <div className="media-card-caption">
                <strong>Stallion Series</strong>
                <span>GPU Compute Die</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Systems (Blade Servers) Section */}
      <section className="section" id="systems" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-center-head">
            <p className="section-kicker">Enterprise Systems &middot; 2027 Roadmap</p>
            <h2>1U, 2U &amp; 3U High-Density Blade Servers.</h2>
          </div>

          {/* Large Hero Datacenter Rack Banner */}
          <div className="systems-hero-banner">
            <img src="/images/blade-datacenter.jpg" alt="FairView Blade Server Datacenter Rack" />
            <div className="systems-banner-overlay">
              <span className="systems-banner-badge">FairView Systems &middot; 2027 Delivery</span>
              <h3 className="systems-banner-title">FV-RACK Series</h3>
              <p className="systems-banner-sub">Unified GPU + HBM4 Compute Matrix</p>
            </div>
          </div>

          {/* 3-Column Blade Cards */}
          <div className="blade-cards-grid">
            {/* 1U Apex */}
            <div className="blade-server-card">
              <div className="blade-card-top">
                <div>
                  <div className="blade-card-name">1U</div>
                  <div className="blade-card-sub">Apex</div>
                </div>
                <div className="blade-card-bw">
                  <div className="blade-card-bw-num">32.768 TB/s</div>
                  <span className="blade-card-bw-label">Aggregate BW</span>
                </div>
              </div>
              <ul className="blade-specs-list">
                <li>
                  <span>Compute</span>
                  <span>4x Stallion S80I</span>
                </li>
                <li>
                  <span>Use Case</span>
                  <span>High-Density Inference &amp; Edge</span>
                </li>
                <li>
                  <span>Cooling</span>
                  <span>High-Static Air</span>
                </li>
                <li>
                  <span>Network</span>
                  <span>Dual 800GbE OSFP</span>
                </li>
              </ul>
              <Link href="/design-in" className="btn btn-dark" style={{ width: "100%" }}>
                Request Early Access
              </Link>
            </div>

            {/* 2U Sovereign (Most Popular) */}
            <div className="blade-server-card popular">
              <span className="popular-tag">Most Popular</span>
              <div className="blade-card-top">
                <div>
                  <div className="blade-card-name">2U</div>
                  <div className="blade-card-sub">Sovereign</div>
                </div>
                <div className="blade-card-bw">
                  <div className="blade-card-bw-num" style={{ color: "var(--fv-cyan)" }}>65.536 TB/s</div>
                  <span className="blade-card-bw-label">Aggregate BW</span>
                </div>
              </div>
              <ul className="blade-specs-list">
                <li>
                  <span>Compute</span>
                  <span>8x Stallion S80I</span>
                </li>
                <li>
                  <span>Use Case</span>
                  <span>LLM Training &amp; Hyperscale AI</span>
                </li>
                <li>
                  <span>Cooling</span>
                  <span>Direct-to-Chip Liquid</span>
                </li>
                <li>
                  <span>Network</span>
                  <span>Quad 800GbE OSFP</span>
                </li>
              </ul>
              <Link href="/design-in" className="btn btn-cyan" style={{ width: "100%" }}>
                Request Early Access
              </Link>
            </div>

            {/* 3U Megascale */}
            <div className="blade-server-card">
              <div className="blade-card-top">
                <div>
                  <div className="blade-card-name">3U</div>
                  <div className="blade-card-sub">Megascale</div>
                </div>
                <div className="blade-card-bw">
                  <div className="blade-card-bw-num">131.072 TB/s</div>
                  <span className="blade-card-bw-label">Aggregate BW</span>
                </div>
              </div>
              <ul className="blade-specs-list">
                <li>
                  <span>Compute</span>
                  <span>16x Stallion S80I</span>
                </li>
                <li>
                  <span>Use Case</span>
                  <span>Rack-Scale Supercomputing</span>
                </li>
                <li>
                  <span>Cooling</span>
                  <span>Full Liquid Immersion</span>
                </li>
                <li>
                  <span>Network</span>
                  <span>8x 800GbE OSFP</span>
                </li>
              </ul>
              <Link href="/design-in" className="btn btn-dark" style={{ width: "100%" }}>
                Request Early Access
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Package Architecture Section */}
      <section className="section" id="architecture">
        <div className="wrap">
          <div className="section-center-head">
            <p className="section-kicker">Silicon Architecture</p>
            <h2>The Unified CoWoS 2.5D Package.</h2>
            <p style={{ marginTop: "0.5rem" }}>
              Host CPU &rarr; I/O Die &rarr; Stallion Compute &rarr; Gallium Controller &rarr; 4x HBM4 Memory Cubes.
            </p>
          </div>
          <PackageDiagram />
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <Link href="/architecture" className="product-link">
              View Detailed Architecture Specifications <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Vision & Historical Lineage */}
      <section className="section" id="vision" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-center-head">
            <p className="section-kicker">The Lineage &amp; Vision</p>
            <h2>Three Epochs of Silicon Genesis.</h2>
            <p style={{ marginTop: "0.5rem" }}>
              In 1957, Fairchild Semiconductor created the planar transistor that birthed Silicon Valley. Today, FairView
              Semiconductor breaks the memory wall to ignite the AI Century.
            </p>
          </div>
          <div className="timeline-grid">
            {HISTORICAL_GENESIS.map((item) => (
              <div className="timeline-card" key={item.era}>
                <span className="timeline-era">{item.era}</span>
                <h3 className="timeline-title">{item.name}</h3>
                <p className="timeline-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion CTA Section */}
      <section className="cta-section" id="contact">
        <div className="wrap cta-box">
          <p className="section-kicker">Get Started</p>
          <h2>Build on the Next Genesis of Computing.</h2>
          <p>
            Connect with our systems architecture and engineering teams for 2027 enterprise blade server allocations
            and custom silicon design-in.
          </p>
          <div className="hero-actions" style={{ marginTop: "0.8rem" }}>
            <Link className="btn btn-cyan" href="/design-in">
              Request Early Access <span className="btn-arrow">&rsaquo;</span>
            </Link>
            <Link className="btn btn-dark" href="/specifications">
              Inspect Engineering Datasheets
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
