import type { Metadata } from "next";
import Link from "next/link";
import { BladeServerShowcase } from "@/components/BladeServerShowcase";

export const metadata: Metadata = {
  title: "Enterprise Blade Systems | FairView Semiconductor",
  description:
    "1U, 2U, and 3U high-density blade servers powered by Stallion GPUs and Gallium HBM4 memory for 2027 enterprise deployments.",
};

export default function SystemsPage() {
  return (
    <>
      <header className="wrap page-hero" style={{ padding: "clamp(3rem, 6vw, 5rem) 0 2rem" }}>
        <p className="section-kicker">Enterprise Systems &middot; 2027 Roadmap</p>
        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", marginBottom: "1rem" }}>
          1U, 2U &amp; 3U High-Density Blade Servers.
        </h1>
        <p className="hero-desc" style={{ textAlign: "left", margin: 0, maxWidth: "48rem" }}>
          Turnkey enterprise rack systems powered by Stallion GPUs and Gallium HBM4 memory, delivering up to 131 TB/s
          aggregate memory bandwidth with direct-to-chip liquid cooling and CXL 3.1 pooling.
        </p>
        <div className="hero-actions" style={{ justifyContent: "flex-start", marginTop: "1.5rem" }}>
          <a href="#blade-configurator" className="btn btn-cyan">
            Explore Blade Configurator &rsaquo;
          </a>
          <Link href="/design-in" className="btn btn-dark">
            Request Early Allocation
          </Link>
          <Link href="/specifications" className="btn btn-dark">
            Technical Datasheets
          </Link>
        </div>
      </header>

      {/* Interactive Blade Configurator */}
      <section className="section" id="blade-configurator" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-center-head" style={{ textAlign: "left", margin: "0 0 2rem 0" }}>
            <p className="section-kicker">Form Factors</p>
            <h2>Turnkey AI Supercomputing Chassis.</h2>
          </div>
          <BladeServerShowcase />
        </div>
      </section>

      {/* Comparative Matrix Table */}
      <section className="section">
        <div className="wrap">
          <div className="section-center-head" style={{ textAlign: "left", margin: "0 0 2rem 0" }}>
            <p className="section-kicker">System Matrix</p>
            <h2>Comparative Blade Specifications.</h2>
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
                  <td>Enterprise Training</td>
                  <td>Megascale Pre-Training</td>
                </tr>
                <tr>
                  <th scope="row">Compute Nodes</th>
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
                  <th scope="row">Memory Bandwidth</th>
                  <td className="mono" style={{ color: "var(--fv-cyan)" }}>32.768 TB/s</td>
                  <td className="mono" style={{ color: "var(--fv-cyan)" }}>65.536 TB/s</td>
                  <td className="mono" style={{ color: "var(--fv-cyan)" }}>131.072 TB/s</td>
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
                  <td>High-Static Air</td>
                  <td>Direct Liquid Cooling</td>
                  <td>Full Liquid Immersion</td>
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
            <Link className="btn btn-cyan" href="/design-in">
              Request 2027 Blade Server Allocation &rsaquo;
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
