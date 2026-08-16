import type { Metadata } from "next";
import Link from "next/link";
import { DualModeDiagram } from "@/components/diagrams/DualModeDiagram";
import { ChannelMap } from "@/components/diagrams/ChannelMap";
import { GALLIUM, FIRST_PACKAGE } from "@/content/specs";

export const metadata: Metadata = {
  title: "Gallium Series HBM4",
  description:
    "FairView Gallium is a JEDEC-compatible HBM4 chipset: host controller, dual-mode attach, RAS policy, and package roles.",
};

export default function GalliumPage() {
  return (
    <>
      <header className="wrap page-hero">
        <p className="kicker">Gallium Series</p>
        <h1>HBM4 as a chipset, not a slide.</h1>
        <p className="lede">{GALLIUM.oneLiner}</p>
        <p className="lede">{GALLIUM.notIdm}</p>
      </header>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <figure className="media-frame">
            <video autoPlay muted loop playsInline poster="/images/gallium-liquid.webp">
              <source src="/videos/gallium-halo.mp4" type="video/mp4" />
            </video>
          </figure>
          <p className="caption">
            Brand study — liquid-metal metaphor for Gallium. Not a pinout and not a physical stack photograph.
          </p>
          <dl className="metrics" style={{ marginTop: "1.5rem" }}>
            <div className="metric">
              <dt>First SKU</dt>
              <dd>
                FV-GL-H4
                <small>JESD270-4 · 2048-bit · 8.0 Gbps</small>
              </dd>
            </div>
            <div className="metric">
              <dt>Channels</dt>
              <dd>
                {FIRST_PACKAGE.cubes === 4 ? "32 / 64" : ""}
                <small>Independent channels / pseudo-channels</small>
              </dd>
            </div>
            <div className="metric">
              <dt>First package</dt>
              <dd>
                {FIRST_PACKAGE.aggTBs} TB/s
                <small>{FIRST_PACKAGE.packageGB} GB · 4 × 36 GB</small>
              </dd>
            </div>
            <div className="metric">
              <dt>Controller</dt>
              <dd>
                FV-GL-HX
                <small>Separate chiplet · dual-mode API frozen</small>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">SKU matrix</p>
            <h2>H4 first. S4 later. HX is the plane.</h2>
          </div>
          <div className="sku-grid">
            {GALLIUM.skus.map((sku) => (
              <Link href={`/products/gallium/${sku.slug}`} className="sku-card" key={sku.id}>
                <span className="id">{sku.id}</span>
                <h3>{sku.name}</h3>
                <p className="pill live">{sku.status}</p>
                <p>{sku.role}</p>
                <ul>
                  <li>
                    <span>Attach</span>
                    <span>{sku.attachMode}</span>
                  </li>
                  <li>
                    <span>External DQ</span>
                    <span>{sku.dq}-bit</span>
                  </li>
                  <li>
                    <span>Stack bandwidth</span>
                    <span>{sku.stackTBs} TB/s</span>
                  </li>
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap stack-lg">
          <div className="section-head">
            <p className="kicker">Dual-mode</p>
            <h2>One credit plane. Two PHY wrappers.</h2>
          </div>
          <DualModeDiagram />
          <ChannelMap />
        </div>
      </section>
    </>
  );
}
