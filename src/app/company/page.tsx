import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, BLADE_SERVERS } from "@/content/specs";
import { STORY } from "@/content/story";
import { GenesisTimeline } from "@/components/GenesisTimeline";
import { MarketGrid } from "@/components/MarketGrid";

export const metadata: Metadata = {
  title: "Genesis & Vision | FairView Semiconductor",
  description:
    "The story of FairView Semiconductor: formed at the tipping point of the AI revolution, carrying the mantle of Fairchild Semiconductor to pioneer 21st-century compute across blade servers, automotive, space, and beyond.",
};

export default function CompanyPage() {
  return (
    <>
      <header className="wrap page-hero">
        <p className="kicker" style={{ color: "var(--fv-vital-bright)" }}>
          Company Genesis &amp; Vision
        </p>
        <h1>{STORY.genesisTitle}</h1>
        <p className="lede">{STORY.whyNow}</p>
        <div className="hero-actions" style={{ marginTop: "1.5rem" }}>
          <a href="#fairchild-lineage" className="btn btn-vital">
            The Fairchild Lineage
          </a>
          <Link href="/systems" className="btn btn-primary">
            2027 Blade Server Systems
          </Link>
          <Link href="/design-in" className="btn btn-ghost">
            Design-in Access
          </Link>
        </div>
      </header>

      {/* Narrative Section */}
      <section className="section" id="fairchild-lineage" style={{ paddingTop: 0 }}>
        <div className="wrap two-col">
          <div className="stack-lg">
            <div>
              <p className="kicker" style={{ color: "var(--fv-vital-bright)" }}>The Historical Genesis</p>
              <h2>The Fairchild Heritage for the AI Century</h2>
              <p>{STORY.fairchildParallel}</p>
              <p>
                When Robert Noyce, Gordon Moore, and the legendary &ldquo;Traitorous Eight&rdquo; founded Fairchild Semiconductor in 1957,
                they recognized that vacuum tubes had reached an insurmountable thermal and physical limit. By inventing the planar process,
                Fairchild catalyzed the modern semiconductor industry and birthed Silicon Valley.
              </p>
              <p>
                Today, humanity stands at a comparable inflection point. Traditional computing architectures are throttled by the memory wall:
                GPUs spend critical clock cycles waiting for memory buses, and data center clusters drown in interconnect latency.
                FairView was created to solve this foundational bottleneck—unifying high-bandwidth HBM4 memory architecture and high-performance
                GPU compute dies into a single, cohesive silicon reality.
              </p>
            </div>

            <div>
              <h2>21st-Century Multi-Segment Expansion</h2>
              <p>{STORY.twentyFirstCenturyVision}</p>
              <p>
                Our 2027 book brings <strong>1U, 2U, and 3U form-factor high-density blade servers</strong> directly into enterprise and cloud data centers.
                Beyond the data center, our deterministic memory locks scale into Level 4/5 autonomous vehicles requiring instantaneous 360-degree sensor fusion,
                radiation-hardened orbital satellite constellations, and next-generation mobile creative workstations.
              </p>
            </div>

            <div>
              <h2>Global Reach &amp; Silicon Valley Presence</h2>
              <p>{STORY.origin}</p>
              <p>{STORY.valley}</p>
            </div>

            <div>
              <h2>Vibe, Vitality &amp; The Cinematic Spirit</h2>
              <p>{STORY.vibeStatement}</p>
            </div>

            <div>
              <h2>Export Compliance &amp; Standards Integrity</h2>
              <p>{STORY.export}</p>
            </div>
          </div>

          <aside className="stack">
            <figure className="media-frame" style={{ aspectRatio: "16 / 9" }}>
              <img src="/images/hero-package.webp" alt="FairView 2.5D CoWoS Package Architecture" />
            </figure>
            <p className="caption">FairView 2.5D CoWoS Package: Stallion GPU Die + Gallium HBM4 Memory Cubes.</p>

            <article className="feature" style={{ borderLeft: "3px solid var(--fv-vital-bright)" }}>
              <span className="badge-vital">Roadmap Focus</span>
              <h3>2027 Blade Server Systems</h3>
              <p>{BLADE_SERVERS.oneLiner}</p>
              <Link className="btn btn-vital" href="/systems" style={{ marginTop: "0.6rem" }}>
                View Blade Server Systems &rarr;
              </Link>
            </article>

            <article className="feature">
              <h3>Design-in Engineering</h3>
              <p>Partner cube configuration, Stallion GPU topology, and custom rack allocations. Empty knobs stay empty.</p>
              <Link className="btn btn-primary" href="/design-in" style={{ marginTop: "0.6rem" }}>
                Contact Silicon Architecture Team
              </Link>
            </article>
          </aside>
        </div>
      </section>

      {/* Epochs of Computing Timeline */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Historical Lineage</p>
            <h2>The Three Epochs of Silicon Genesis</h2>
            <p>From the birth of the planar transistor to the unified memory-compute architecture of the AI Century.</p>
          </div>
          <GenesisTimeline />
        </div>
      </section>

      {/* Markets Section */}
      <section className="section" id="markets">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">21st-Century Frontiers</p>
            <h2>Five Strategic Compute Pillars</h2>
            <p>First silicon is hyperscale AI. The company is engineered for every industry that will inherit this architecture.</p>
          </div>
          <MarketGrid />
        </div>
      </section>

      {/* Next Step Actions */}
      <section className="section">
        <div className="wrap stack">
          <div className="section-head">
            <p className="kicker">Engage with FairView</p>
            <h2>Build on the Next Genesis of Computing.</h2>
            <p>
              Whether you are architecting a hyperscale AI data center, sovereign cloud cluster, or 2027 blade server deployment,
              our silicon engineering team is ready to collaborate.
            </p>
          </div>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/design-in">
              Initiate Design-in Protocol
            </Link>
            <Link className="btn btn-vital" href="/systems">
              Explore 1U/2U/3U Blade Servers
            </Link>
            <Link className="btn btn-ghost" href="/specifications">
              Public Specifications
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
