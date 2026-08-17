import type { Metadata } from "next";
import Link from "next/link";
import { STORY } from "@/content/story";
import { GenesisTimeline } from "@/components/GenesisTimeline";
import { MarketGrid } from "@/components/MarketGrid";

export const metadata: Metadata = {
  title: "Vision & Lineage | FairView Semiconductor",
  description:
    "Rooted in the pioneering spirit of Silicon Valley, FairView Semiconductor unifies HBM4 memory and GPU compute across packages and enterprise blade servers.",
};

export default function CompanyPage() {
  return (
    <>
      <header className="wrap page-hero" style={{ padding: "clamp(3rem, 6vw, 5rem) 0 2rem" }}>
        <p className="section-kicker">Vision &amp; Lineage</p>
        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", marginBottom: "1rem" }}>{STORY.genesisTitle}</h1>
        <p className="hero-desc" style={{ textAlign: "left", margin: 0, maxWidth: "48rem" }}>{STORY.whyNow}</p>
        <div className="hero-actions" style={{ justifyContent: "flex-start", marginTop: "1.5rem" }}>
          <Link href="/systems" className="btn btn-cyan">
            Explore Blade Systems &rsaquo;
          </Link>
          <Link href="/design-in" className="btn btn-dark">
            Request Early Access
          </Link>
        </div>
      </header>

      {/* Narrative Section */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap two-col" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem" }}>
          <div style={{ display: "grid", gap: "1.5rem", maxWidth: "48rem" }}>
            <div>
              <h2 style={{ fontSize: "1.8rem", marginBottom: "0.6rem" }}>Semiconductor Heritage</h2>
              <p>{STORY.fairchildParallel}</p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.8rem", marginBottom: "0.6rem" }}>Multi-Sector Roadmap</h2>
              <p>
                From hyperscale AI clusters to enterprise blade racks, autonomous mobility, and orbital communications,
                FairView delivers scalable hardware architectures designed for high-throughput computing.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.8rem", marginBottom: "0.6rem" }}>Global Operations</h2>
              <p>{STORY.origin} {STORY.valley}</p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.8rem", marginBottom: "0.6rem" }}>Standards &amp; Export Compliance</h2>
              <p>{STORY.export}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Epochs Timeline */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-center-head" style={{ textAlign: "left", margin: "0 0 2rem 0" }}>
            <p className="section-kicker">Three Epochs</p>
            <h2>The Evolution of Compute Architecture.</h2>
          </div>
          <GenesisTimeline />
        </div>
      </section>

      {/* Markets Section */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-center-head" style={{ textAlign: "left", margin: "0 0 2rem 0" }}>
            <p className="section-kicker">Target Markets</p>
            <h2>Key Deployment Verticals.</h2>
          </div>
          <MarketGrid />
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="wrap cta-box">
          <h2>Request Early Access &amp; Technical Documentation.</h2>
          <p>
            Connect with our engineering team for design-in specifications and 2027 hardware availability.
          </p>
          <div className="hero-actions" style={{ marginTop: "0.8rem" }}>
            <Link className="btn btn-cyan" href="/design-in">
              Request Early Access &rsaquo;
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
