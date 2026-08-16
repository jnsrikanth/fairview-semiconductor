import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SpecTable } from "@/components/SpecTable";
import { GALLIUM, galliumSku } from "@/content/specs";

type Params = { sku: string };

export function generateStaticParams() {
  return GALLIUM.skus.map((s) => ({ sku: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { sku } = await params;
  const found = GALLIUM.skus.find((s) => s.slug === sku);
  if (!found) return { title: "Gallium" };
  return {
    title: `${found.id} ${found.name}`,
    description: `${found.id} — ${found.role}`,
  };
}

export default async function GalliumSkuPage({ params }: { params: Promise<Params> }) {
  const { sku: slug } = await params;
  if (!GALLIUM.skus.some((s) => s.slug === slug)) notFound();
  const sku = galliumSku(slug);

  return (
    <article className="wrap page-hero stack-lg">
      <div>
        <p className="kicker">Gallium · {sku.id}</p>
        <h1>{sku.name}</h1>
        <p className="lede">{sku.role}</p>
        <p>
          <span className="pill live">{sku.status}</span>
        </p>
      </div>

      <figure className="media-frame" style={{ maxWidth: "52rem" }}>
        <img
          src={slug === "s4" ? "/images/lab-cube.webp" : "/images/gallium-cube.webp"}
          alt="Editorial render of a partner HBM cube stack. Not a pinout."
        />
      </figure>
      <p className="caption">Editorial 12-high partner cube. FairView does not claim the 1T1C array.</p>

      <SpecTable
        caption="Public product lock. Empty JEDEC timings are omitted on purpose."
        columns={[
          { key: "k", label: "Parameter" },
          { key: "v", label: "Value", numeric: true },
        ]}
        rows={[
          { k: "SKU", v: sku.id },
          { k: "Attach", v: sku.attach },
          { k: "Attach mode", v: sku.attachMode },
          { k: "External DQ", v: `${sku.dq} bits` },
          { k: "Pin / identity rate", v: sku.pin },
          { k: "Bandwidth / stack", v: `${sku.stackTBs} TB/s` },
          { k: "First package cubes", v: String(sku.firstCubes) },
          { k: "First package bandwidth", v: `${sku.aggTBs} TB/s` },
          { k: "Stack height", v: `${sku.hi}-hi` },
          { k: "Die density", v: `${sku.dieGb} Gb` },
          { k: "Capacity / cube", v: `${sku.cubeGB} GB  (= 12 × 24 / 8)` },
          { k: "Capacity / package", v: `${sku.packageGB} GB` },
          { k: "Channels / pseudo-channels", v: `${sku.channels} / ${sku.pc}` },
          { k: "tCK", v: sku.tck },
          { k: "tRFC / tREFI", v: "not in pack — do not invent" },
          { k: "VDDQ / VDDC", v: "legal option sets only; no selected rail" },
        ]}
      />

      <div className="callout">
        <h3>What this SKU is not</h3>
        <p>
          Not a Samsung 11.7 Gbps bin. Not 3.3 TB/s. Not a FairView DRAM factory. SPHBM4 46 GT/s is press-only
          and is not listed as a FairView lock.
        </p>
      </div>

      <div className="hero-actions">
        <Link className="btn btn-ghost" href="/products/gallium">
          All Gallium SKUs
        </Link>
        <Link className="btn btn-primary" href="/design-in">
          Design-in
        </Link>
      </div>
    </article>
  );
}
