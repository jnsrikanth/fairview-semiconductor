import type { Metadata } from "next";
import Link from "next/link";
import { BLADE_SERVERS } from "@/content/specs";
import { BladeServerShowcase } from "@/components/BladeServerShowcase";

export const metadata: Metadata = {
  title: "Enterprise Systems & Blade Servers | FairView Semiconductor",
  description:
    "1U, 2U, and 3U form-factor blade servers with Stallion GPU and Gallium HBM4 memory. High-density compute architectures for 2027 and beyond.",
};

export default function SystemsPage() {
  return (
    <>
      <header className="wrap page-hero">
        <p className="kicker">Systems & Blade Architecture · 2027 Roadmap</p>
        <h1>1U, 2U, and 3U Blade Servers Powered by HBM4.</h1>
        <p className="lede">
          AI training clusters, enterprise sovereign clouds, and edge inference systems cannot afford memory starvation
          or stranded GPU cycles. FairView is delivering next-generation rack-scale blade systems engineered with
          unified Stallion GPUs and Gallium HBM4 memory—delivering up to 131 TB/s of memory bandwidth in a single chassis.
        </p>
        <div className="hero-actions" style={{ marginTop: "1.5rem" }}>
          <a href="#blade-configurator" className="btn btn-primary">
            Explore Blade Configurator
          </a>
          <Link href="/design-in" className="btn btn-ghost">
            Request Rack Deployment Brief
          </Link>
        </div>
      </header>

      <section className="section" id="blade-configurator" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Interactive Blade Configurator</p>
            <h2>Form Factors Engineered for 2027 & Beyond</h2>
            <p>
              Select a form factor to inspect compute topology, unified HBM4 memory throughput, power profiles, and
              interconnect standards.
            </p>
          </div>
          <BladeServerShowcase />
        </div>
      </section>

      {/* Systems Architecture Highlights */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Rack-Scale Innovations</p>
            <h2>Engineered from Silicon Package to Rack Spine</h2>
            <p>
              Traditional servers treat memory, GPUs, storage, and networking as disjoint plug-in cards. FairView Blade
              Systems unify them through high-speed coherent fabric and direct thermal coupling.
            </p>
          </div>

          <div className="feature-grid">
            <article className="feature" id="blade-1u">
              <span className="pill live">1U Apex Density</span>
              <h3>Sub-Millisecond Inference & Edge Nodes</h3>
              <p>
                Dense 1U form factor houses up to 4x Stallion S80I accelerators and 576 GB of Gallium HBM4 memory.
                Delivers 32.7 TB/s of memory throughput with ultra-fast direct PCIe Gen6 / CXL 3.1 pooling.
              </p>
            </article>

            <article className="feature" id="blade-2u">
              <span className="pill live">2U Sovereign Training</span>
              <h3>Enterprise Scale LLM Fine-Tuning</h3>
              <p>
                2U chassis optimized for enterprise data centers, deploying 8x Stallion S100 nodes with 1.15 TB of unified
                HBM4 memory at 65.5 TB/s bandwidth and 16x hot-swap Gen5 NVMe storage arrays.
              </p>
            </article>

            <article className="feature" id="blade-3u">
              <span className="pill live">3U Megascale Engine</span>
              <h3>Frontier AI Cluster Foundation</h3>
              <p>
                Modular 3U supercomputing blade integrating 16x hybrid compute dies, 2.3 TB HBM4 memory, 131.0 TB/s aggregate
                memory bandwidth, and octal 800GbE OSFP networking with direct-liquid immersion readiness.
              </p>
            </article>

            <article className="feature">
              <span className="pill live">Coherent Fabric</span>
              <h3>CXL 3.1 & UCIe-E Memory Pooling</h3>
              <p>
                Zero-copy memory sharing across blade nodes. CPU host and GPU accelerator share a unified, coherent address
                space without DDR bottlenecks or PCIe protocol overheads.
              </p>
            </article>

            <article className="feature">
              <span className="pill live">Thermal Engineering</span>
              <h3>Direct-to-Die Liquid Cooling</h3>
              <p>
                Custom micro-channel cold plates mounted directly over the 2.5D CoWoS package, extracting up to 8,500W per
                blade chassis with whisper-quiet data center PUE efficiency &lt; 1.08.
              </p>
            </article>

            <article className="feature">
              <span className="pill live">Storage & I/O</span>
              <h3>Gen5 NVMe-oF Low Latency Storage</h3>
              <p>
                Integrated hardware storage acceleration for high-throughput checkpointing and instant dataset streaming
                directly to Gallium HBM4 memory buffers.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Blade Systems Matrix</p>
            <h2>Comparative Blade Architecture Specifications</h2>
          </div>

          <div className="table-wrap">
            <table className="spec-table">
              <thead>
                <tr>
                  <th scope="col">Parameter</th>
                  <th scope="col">FV-RACK-1U</th>
                  <th scope="col">FV-RACK-2U</th>
                  <th scope="col">FV-RACK-3U</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Target Role</th>
                  <td>High-Density Inference</td>
                  <td>Enterprise Sovereign Cloud</td>
                  <td>Megascale Pre-Training</td>
                </tr>
                <tr>
                  <th scope="row">Compute Configuration</th>
                  <td>4x Stallion S80I / S100</td>
                  <td>8x Stallion S100</td>
                  <td>16x Stallion Hybrid Dies</td>
                </tr>
                <tr>
                  <th scope="row">Unified HBM4 Capacity</th>
                  <td className="mono">576 GB</td>
                  <td className="mono">1,152 GB (1.15 TB)</td>
                  <td className="mono">2,304 GB (2.30 TB)</td>
                </tr>
                <tr>
                  <th scope="row">HBM4 Memory Bandwidth</th>
                  <td className="mono" style={{ color: "var(--fv-vital)" }}>32.768 TB/s</td>
                  <td className="mono" style={{ color: "var(--fv-vital)" }}>65.536 TB/s</td>
                  <td className="mono" style={{ color: "var(--fv-vital)" }}>131.072 TB/s</td>
                </tr>
                <tr>
                  <th scope="row">Host / Fabric Links</th>
                  <td>Dual PCIe 6 + CXL 3.1</td>
                  <td>Quad PCIe 6 + CXL 3.1</td>
                  <td>Octal PCIe 6 + CXL 3.1</td>
                </tr>
                <tr>
                  <th scope="row">High-Speed Networking</th>
                  <td>Dual 800GbE OSFP</td>
                  <td>Quad 800GbE OSFP</td>
                  <td>Octal 800GbE OSFP</td>
                </tr>
                <tr>
                  <th scope="row">Storage Bay Capacity</th>
                  <td>8x NVMe Gen5 E1.S</td>
                  <td>16x NVMe Gen5 U.2</td>
                  <td>24x NVMe Gen5 U.2 Hot-Swap</td>
                </tr>
                <tr>
                  <th scope="row">Thermal Architecture</th>
                  <td>Liquid Ready / Air Assisted</td>
                  <td>Modular Cold Plate Liquid</td>
                  <td>Full Immersion &amp; Dual Loop</td>
                </tr>
                <tr>
                  <th scope="row">Peak Power Rating</th>
                  <td className="mono">1,800W Redundant</td>
                  <td className="mono">4,200W Dual Titanium</td>
                  <td className="mono">8,500W 3-Phase Smart</td>
                </tr>
                <tr>
                  <th scope="row">Delivery Target</th>
                  <td><strong>2027 Book</strong></td>
                  <td><strong>2027 Book</strong></td>
                  <td><strong>2027 Book</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="hero-actions" style={{ marginTop: "2rem" }}>
            <Link className="btn btn-primary" href="/design-in">
              Inquire for Early OEM &amp; Integrator Allocation
            </Link>
            <Link className="btn btn-ghost" href="/architecture">
              Inspect Package Architecture
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
