import type { Metadata } from "next";
import Link from "next/link";
import { BladeServerShowcase } from "@/components/BladeServerShowcase";

export const metadata: Metadata = {
  title: "Enterprise Systems & Blade Servers | FairView Semiconductor",
  description:
    "1U, 2U, and 3U high-density blade servers with Stallion GPU and Gallium HBM4 memory. Turnkey AI rack supercomputing for 2027 and beyond.",
};

export default function SystemsPage() {
  return (
    <>
      <header className="wrap page-hero">
        <p className="kicker">Systems &amp; Blade Architecture · 2027 Roadmap</p>
        <h1>1U, 2U, and 3U Blade Servers Powered by HBM4.</h1>
        <p className="lede">
          AI training clusters, sovereign enterprise clouds, and high-throughput inference systems can no longer afford
          memory starvation. FairView is delivering next-generation rack-scale blade systems engineered with unified
          Stallion GPUs and Gallium HBM4 memory—delivering up to 131 TB/s of aggregate memory bandwidth in a single chassis.
        </p>
        <div className="hero-actions" style={{ marginTop: "1.5rem" }}>
          <a href="#blade-configurator" className="btn btn-vital">
            Explore Blade Configurator
          </a>
          <Link href="/design-in" className="btn btn-primary">
            Request Early Access Allocation
          </Link>
          <Link href="/specifications" className="btn btn-ghost">
            View Technical Datasheets
          </Link>
        </div>
      </header>

      {/* Interactive Blade Configurator */}
      <section className="section" id="blade-configurator" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Interactive Blade Configurator</p>
            <h2>Turnkey AI Supercomputing Form Factors</h2>
            <p>
              Select a form factor to inspect compute node density, unified HBM4 memory throughput, thermal dissipation,
              and networking bandwidth.
            </p>
          </div>
          <BladeServerShowcase />
        </div>
      </section>

      {/* 4 Key Rack-Scale Innovations */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Rack-Scale Architecture</p>
            <h2>Engineered from Silicon to Rack Spine</h2>
            <p>
              Traditional servers treat memory, GPUs, storage, and networking as disjoint plug-in cards. FairView Blade
              Systems unify them through high-speed coherent fabric and direct thermal coupling.
            </p>
          </div>

          <div className="feature-grid">
            <article className="feature" id="blade-1u">
              <span className="badge-vital">1U Apex Density</span>
              <h3>Sub-Millisecond Inference &amp; Edge Clusters</h3>
              <p>
                Houses up to 4x GPU accelerator nodes and 576 GB of unified HBM4 memory. Delivers 32.7 TB/s of memory
                bandwidth with direct PCIe Gen6 / CXL 3.1 pooling for ultra-low latency inference.
              </p>
            </article>

            <article className="feature" id="blade-2u">
              <span className="badge-vital">2U Sovereign Training</span>
              <h3>Enterprise LLM Fine-Tuning &amp; Sovereign Clouds</h3>
              <p>
                Deploying 8x GPU nodes with 1.15 TB of unified HBM4 memory at 65.5 TB/s bandwidth and 16x hot-swap Gen5
                NVMe storage arrays for high-throughput checkpointing.
              </p>
            </article>

            <article className="feature" id="blade-3u">
              <span className="badge-vital">3U Megascale Engine</span>
              <h3>Frontier Supercomputing &amp; Foundation Models</h3>
              <p>
                Modular 3U supercomputing blade integrating 16x hybrid compute dies, 2.30 TB HBM4 memory, 131.0 TB/s
                aggregate memory bandwidth, and octal 800GbE OSFP networking.
              </p>
            </article>

            <article className="feature">
              <span className="badge-vital">Thermal Engineering</span>
              <h3>Direct-to-Chip Liquid Cooling</h3>
              <p>
                Custom micro-channel cold plates mounted directly over the 2.5D CoWoS packages, extracting up to 8,500W
                per chassis with whisper-quiet data center PUE &lt; 1.08.
              </p>
            </article>

            <article className="feature">
              <span className="badge-vital">Coherent Fabric</span>
              <h3>CXL 3.1 Zero-Copy Memory Pooling</h3>
              <p>
                Seamless memory sharing across blade nodes. CPU host and GPU accelerator share a unified, coherent address
                space without DDR bottlenecks or PCIe latency overheads.
              </p>
            </article>

            <article className="feature">
              <span className="badge-vital">Storage Acceleration</span>
              <h3>Gen5 NVMe-oF High-Speed Storage</h3>
              <p>
                Integrated storage acceleration for high-throughput checkpointing and instant dataset streaming directly
                to Gallium HBM4 memory buffers.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Side-by-Side Comparison Matrix */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Comparative Specifications</p>
            <h2>Blade Systems Overview</h2>
          </div>

          <div className="table-wrap">
            <table className="spec-table">
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col">FV-RACK-1U</th>
                  <th scope="col">FV-RACK-2U</th>
                  <th scope="col">FV-RACK-3U</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Target Role</th>
                  <td>High-Density Inference</td>
                  <td>Enterprise Sovereign AI</td>
                  <td>Megascale Pre-Training</td>
                </tr>
                <tr>
                  <th scope="row">Compute Configuration</th>
                  <td>4x Accelerator Nodes</td>
                  <td>8x Accelerator Nodes</td>
                  <td>16x Hybrid Compute Nodes</td>
                </tr>
                <tr>
                  <th scope="row">Unified HBM4 Capacity</th>
                  <td className="mono">576 GB</td>
                  <td className="mono">1,152 GB (1.15 TB)</td>
                  <td className="mono">2,304 GB (2.30 TB)</td>
                </tr>
                <tr>
                  <th scope="row">Aggregate Memory Bandwidth</th>
                  <td className="mono" style={{ color: "var(--fv-vital-bright)" }}>32.768 TB/s</td>
                  <td className="mono" style={{ color: "var(--fv-vital-bright)" }}>65.536 TB/s</td>
                  <td className="mono" style={{ color: "var(--fv-vital-bright)" }}>131.072 TB/s</td>
                </tr>
                <tr>
                  <th scope="row">Host Fabric</th>
                  <td>Dual PCIe 6 + CXL 3.1</td>
                  <td>Quad PCIe 6 + CXL 3.1</td>
                  <td>Octal PCIe 6 + CXL 3.1</td>
                </tr>
                <tr>
                  <th scope="row">Networking</th>
                  <td>Dual 800GbE OSFP</td>
                  <td>Quad 800GbE OSFP</td>
                  <td>Octal 800GbE OSFP</td>
                </tr>
                <tr>
                  <th scope="row">Thermal Solution</th>
                  <td>Liquid Ready / High Air</td>
                  <td>Modular Cold Plate</td>
                  <td>Full Direct Immersion Ready</td>
                </tr>
                <tr>
                  <th scope="row">Delivery Target</th>
                  <td><strong>2027 Delivery Book</strong></td>
                  <td><strong>2027 Delivery Book</strong></td>
                  <td><strong>2027 Delivery Book</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="hero-actions" style={{ marginTop: "2rem" }}>
            <Link className="btn btn-primary" href="/design-in">
              Request 2027 Blade Server Allocation
            </Link>
            <Link className="btn btn-ghost" href="/specifications">
              Inspect Deep Engineering Datasheets &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
