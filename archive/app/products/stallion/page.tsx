import type { Metadata } from "next";
import Link from "next/link";
import { STALLION, FIRST_PACKAGE } from "@/content/specs";

export const metadata: Metadata = {
  title: "Stallion GPU Series",
  description:
    "FairView Stallion is the on-package AI GPU. HBM bandwidth is mirrored from Gallium. Topology is L1 → L2 → HBM.",
};

export default function StallionPage() {
  return (
    <>
      <header className="wrap page-hero">
        <p className="kicker stallion">Stallion Series</p>
        <h1>Compute that cannot invent a second HBM.</h1>
        <p className="lede">{STALLION.oneLiner}</p>
        <p className="lede">
          Topology is non-negotiable: {STALLION.topology}. HBM never feeds L1.
        </p>
      </header>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <figure className="media-frame">
            <video autoPlay muted loop playsInline poster="/images/stallion-die.webp">
              <source src="/videos/stallion-die.mp4" type="video/mp4" />
            </video>
          </figure>
          <p className="caption">Editorial Stallion die with copper halo. Not a metal layer plot.</p>
          <div className="sku-grid" style={{ marginTop: "2rem", gridTemplateColumns: undefined }}>
            {STALLION.skus.map((sku) => (
              <Link href={`/products/stallion/${sku.slug}`} className="sku-card stallion" key={sku.id}>
                <span className="id">{sku.id}</span>
                <h3>{sku.name}</h3>
                <p className="pill later">{sku.status}</p>
                <p>{sku.role}</p>
                <ul>
                  <li>
                    <span>SMs</span>
                    <span>{sku.sms}</span>
                  </li>
                  <li>
                    <span>Peak FP32</span>
                    <span>{sku.fp32Display} TFLOPS</span>
                  </li>
                  <li>
                    <span>Tensor path</span>
                    <span>{sku.tensorDisplay} TFLOPS</span>
                  </li>
                  <li>
                    <span>HBM (from Gallium)</span>
                    <span>{sku.aggTBs} TB/s</span>
                  </li>
                  <li>
                    <span>TDP island</span>
                    <span>{sku.tdpW} W</span>
                  </li>
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="callout warn">
            <h3>Roofline is why the width matters</h3>
            <p>
              S100 peak FP32 is 58.9824 TFLOPS, displayed 59.0. At Gallium-H4 {FIRST_PACKAGE.aggTBs} TB/s the
              intensity to leave the memory roof is 7.20 FLOP/B. A 1024-bit lock at the same clock would invert
              every roofline sentence.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
