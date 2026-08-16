import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SpecTable } from "@/components/SpecTable";
import { STALLION, stallionSku } from "@/content/specs";

type Params = { sku: string };

export function generateStaticParams() {
  return STALLION.skus.map((s) => ({ sku: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { sku } = await params;
  const found = STALLION.skus.find((s) => s.slug === sku);
  if (!found) return { title: "Stallion" };
  return { title: `${found.id} ${found.name}`, description: found.role };
}

export default async function StallionSkuPage({ params }: { params: Promise<Params> }) {
  const { sku: slug } = await params;
  if (!STALLION.skus.some((s) => s.slug === slug)) notFound();
  const sku = stallionSku(slug);

  return (
    <article className="wrap page-hero stack-lg">
      <div>
        <p className="kicker stallion">Stallion · {sku.id}</p>
        <h1>{sku.name}</h1>
        <p className="lede">{sku.role}</p>
        <p>
          <span className="pill later">{sku.status}</span>
        </p>
      </div>

      <figure className="media-frame" style={{ maxWidth: "52rem" }}>
        <img src="/images/stallion-die.webp" alt="Stallion compute die, editorial 3D view with copper halo" />
      </figure>

      <dl className="metrics">
        <div className="metric">
          <dt>Peak FP32</dt>
          <dd>
            {sku.fp32Display} TFLOPS
            <small>{sku.fp32Exact} exact</small>
          </dd>
        </div>
        <div className="metric">
          <dt>Tensor path</dt>
          <dd>
            {sku.tensorDisplay} TFLOPS
            <small>design-target MMA rate, not a memory identity</small>
          </dd>
        </div>
        <div className="metric">
          <dt>I min (FP32)</dt>
          <dd>
            {sku.imin} FLOP/B
            <small>at {sku.aggTBs} TB/s Gallium-H4</small>
          </dd>
        </div>
        <div className="metric">
          <dt>Threads in flight</dt>
          <dd>
            {sku.threadsInFlight.toLocaleString()}
            <small>
              {sku.sms} × {sku.warpsPerSm} × {sku.threadsPerWarp}
            </small>
          </dd>
        </div>
      </dl>

      <SpecTable
        caption="GPU lock. HBM geometry is mirrored from the bound Gallium card."
        columns={[
          { key: "k", label: "Parameter" },
          { key: "v", label: "Value", numeric: true },
        ]}
        rows={[
          { k: "SKU", v: sku.id },
          { k: "SMs", v: String(sku.sms) },
          { k: "Warps / SM", v: `${sku.warpsPerSm} (dual-issue)` },
          { k: "SM clock", v: `${sku.clockGHz.toFixed(2)} GHz` },
          { k: "FP32 ALUs / SM", v: String(sku.alus) },
          { k: "MMA elements / clk / SM", v: String(sku.tensorOps) },
          { k: "L1 + shared / SM", v: `${sku.l1KiB} KiB` },
          { k: "L2 (partitioned)", v: `${sku.l2MiB} MiB` },
          { k: "NoC", v: sku.noc },
          { k: "Host", v: sku.host },
          { k: "UCIe-E", v: sku.ucie },
          { k: "Package / node", v: `${sku.package} · ${sku.node}` },
          { k: "TDP island", v: `${sku.tdpW} W` },
          { k: "Bound Gallium cubes", v: `${sku.cubes} × ${sku.hi}-hi × ${sku.dq}-bit` },
          { k: "Mirrored HBM bandwidth", v: `${sku.aggTBs} TB/s` },
          { k: "Package capacity", v: `${sku.packageGB} GB` },
        ]}
      />

      <div className="callout warn">
        <h3>Stallion does not own B_agg</h3>
        <p>
          The GPU may print Gallium’s compiled aggregate for roofline. A different stack count, width, or attach
          mode is an error, not a richer-TB/s win.
        </p>
      </div>

      <div className="hero-actions">
        <Link className="btn btn-ghost" href="/products/stallion">
          All Stallion SKUs
        </Link>
        <Link className="btn btn-primary" href="/design-in">
          Design-in
        </Link>
      </div>
    </article>
  );
}
