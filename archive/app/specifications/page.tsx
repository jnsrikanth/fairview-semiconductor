import type { Metadata } from "next";
import { SpecTable } from "@/components/SpecTable";
import {
  BANDWIDTH_ROWS,
  CAPACITY_ROWS,
  GALLIUM,
  LAW,
  STALLION,
} from "@/content/specs";

export const metadata: Metadata = {
  title: "Public specifications",
  description:
    "Public FairView Gallium and Stallion specifications compiled from JEDEC baseline facts and founder-locked SKUs.",
};

export default function SpecificationsPage() {
  return (
    <>
      <header className="wrap page-hero">
        <p className="kicker">Specifications</p>
        <h1>Public datasheet. Empty knobs stay empty.</h1>
        <p className="lede">
          Pin-rate lock is 8.0 Gbps, the JESD270-4 public baseline. 6.4 and 9.6 exist only as compiler options,
          not as FairView production promises. Vendor 10 / 11.7 / 13 Gbps rows are omitted on purpose.
        </p>
      </header>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap stack-lg">
          <h2>Bandwidth workbook</h2>
          <SpecTable
            caption="B = W × R / 8000 TB/s. Six- and eight-cube columns are legal later re-locks, not first silicon."
            columns={[
              { key: "w", label: "W_DQ", numeric: true },
              { key: "r", label: "R", numeric: true },
              { key: "tck", label: "tCK (ns)", numeric: true },
              { key: "stack", label: "B stack", numeric: true },
              { key: "n4", label: "N = 4", numeric: true },
              { key: "n6", label: "N = 6", numeric: true },
              { key: "n8", label: "N = 8", numeric: true },
              { key: "note", label: "Note" },
            ]}
            rows={BANDWIDTH_ROWS.map((r) => ({
              w: r.w,
              r: r.r,
              tck: r.tck,
              stack: r.stack,
              n4: r.n4,
              n6: r.n6,
              n8: r.n8,
              note: r.note,
            }))}
          />

          <h2>Capacity workbook</h2>
          <SpecTable
            caption="C_GB = N_hi × D_Gb / 8. First product BOM is 12-hi × 24 Gb = 36 GB/cube. Teaching max 16-hi is not bring-up."
            columns={[
              { key: "hi", label: "Height", numeric: true },
              { key: "d24", label: "24 Gb die (GB)", numeric: true },
              { key: "d32", label: "32 Gb die (GB)", numeric: true },
            ]}
            rows={CAPACITY_ROWS.map((r) => ({ hi: `${r.hi}-hi`, d24: r.d24, d32: r.d32 }))}
          />

          <h2>Gallium SKUs</h2>
          <SpecTable
            columns={[
              { key: "id", label: "SKU" },
              { key: "attach", label: "Attach" },
              { key: "dq", label: "DQ", numeric: true },
              { key: "b", label: "B stack", numeric: true },
              { key: "pkg", label: "First package" },
              { key: "status", label: "Status" },
            ]}
            rows={GALLIUM.skus.map((s) => ({
              id: s.id,
              attach: s.attach,
              dq: s.dq,
              b: `${s.stackTBs} TB/s`,
              pkg: `${s.firstCubes} × ${s.cubeGB} GB`,
              status: s.status,
            }))}
          />

          <h2>Stallion SKUs</h2>
          <SpecTable
            columns={[
              { key: "id", label: "SKU" },
              { key: "sms", label: "SM", numeric: true },
              { key: "clk", label: "Clock", numeric: true },
              { key: "fp32", label: "FP32", numeric: true },
              { key: "ten", label: "Tensor", numeric: true },
              { key: "hbm", label: "HBM (mirrored)", numeric: true },
              { key: "tdp", label: "TDP", numeric: true },
            ]}
            rows={STALLION.skus.map((s) => ({
              id: s.id,
              sms: s.sms,
              clk: `${s.clockGHz.toFixed(2)} GHz`,
              fp32: `${s.fp32Display} TFLOPS`,
              ten: `${s.tensorDisplay} TFLOPS`,
              hbm: `${s.aggTBs} TB/s`,
              tdp: `${s.tdpW} W`,
            }))}
          />

          <h2>Legal voltage option sets</h2>
          <SpecTable
            caption="JESD270-4 public option sets. Not a FairView-selected rail. SPHBM4 0.75 V I/O is press-only and is not packed."
            columns={[
              { key: "k", label: "Rail" },
              { key: "v", label: "Legal set", numeric: true },
            ]}
            rows={[
              { k: "VDDQ", v: LAW.vddq.map((n) => `${n} V`).join(" · ") },
              { k: "VDDC", v: LAW.vddc.map((n) => `${n} V`).join(" · ") },
              { k: "Selected", v: "null until a partner pack cites one" },
            ]}
          />

          <div className="callout warn">
            <h3>Standards cited, not extracted</h3>
            <p>
              JESD270-4 (April 2025; 270-4A Dec 2025), JESD330-4 document handle, UCIe, CXL 3.1, PCIe 6.0. This
              page is not a JEDEC extract and not a foundry PDK.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
