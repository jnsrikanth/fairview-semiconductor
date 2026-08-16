import type { Metadata } from "next";
import { SpecTable } from "@/components/SpecTable";
import { DIFFERENTIATORS, MUST_NOT, SIDECAR_OPS } from "@/content/specs";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "FairView identities, dual-mode QoS, GPU-scheduled refresh, channel virtualization, and UCIe sidecar rules.",
};

export default function TechnologyPage() {
  return (
    <>
      <header className="wrap page-hero">
        <p className="kicker">Technology</p>
        <h1>Compile structure. Retrieve law. Leave empty knobs empty.</h1>
        <p className="lede">
          Bandwidth is an identity, not a marketing sample. The formulas on this page are the same ones the
          product lock is required to print.
        </p>
      </header>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap two-col">
          <div className="stack-lg">
            <div>
              <h2>Identities</h2>
              <p className="eq" style={{ marginTop: "0.8rem" }}>
                B_stack = (W_DQ × R_pin) / 8000 TB/s
              </p>
              <p className="eq" style={{ marginTop: "0.55rem" }}>
                B_agg = B_stack × N_stacks
              </p>
              <p className="eq" style={{ marginTop: "0.55rem" }}>
                t_CK = 2 / R_pin ns &nbsp; (DDR; 8 Gbps ⇒ 0.250 ns)
              </p>
              <p className="eq" style={{ marginTop: "0.55rem" }}>
                C_GB = N_hi × D_die,Gb / 8
              </p>
              <p className="eq" style={{ marginTop: "0.55rem" }}>
                P_FP32 = N_SM × N_ALU × 2 × f_GHz / 1000 TFLOPS
              </p>
            </div>
            <div className="callout">
              <h3>Worked first package</h3>
              <p>
                2048 × 8 / 8000 = 2.048 TB/s per stack. Four stacks = 8.192 TB/s. 12-hi × 24 Gb / 8 = 36 GB.
                Four cubes = 144 GB. 8 × 1024-bit at 8 Gbps is also 8.192 TB/s and is not this card.
              </p>
            </div>
            <div>
              <h2>SPHBM4 identity match</h2>
              <p>
                Same DRAM stacks, 512-bit external interface, 4:1 serialization. 512 × 32 / 8000 = 2.048 TB/s
                if and only if the external rate is the 4×8 identity. That is arithmetic, not a datasheet bin.
              </p>
            </div>
          </div>
          <aside className="stack">
            <article className="feature">
              <h3>What we will not write</h3>
              <ul className="stack" style={{ paddingLeft: "1.1rem", color: "var(--fv-mist)" }}>
                {MUST_NOT.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </article>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="wrap stack-lg">
          <div className="section-head">
            <p className="kicker">FairView policy</p>
            <h2>Five mechanisms. Not granted patents.</h2>
            <p>
              These are product architectures and counsel claim directions. They are not filed, not allowed, and
              not a promise that any office will issue patents. JEDEC maps, DRFM, and UCIe itself are not ours.
            </p>
          </div>
          <div className="feature-grid">
            {DIFFERENTIATORS.map((d) => (
              <article className="feature" key={d.title}>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
              </article>
            ))}
          </div>
          <SpecTable
            caption="Sidecar opcode classes. There is no data-beat type. Sidecar FIFO width × rate is not B_stack."
            columns={[
              { key: "op", label: "Opcode" },
              { key: "dir", label: "Direction" },
              { key: "payload", label: "Payload" },
            ]}
            rows={[...SIDECAR_OPS]}
          />
        </div>
      </section>
    </>
  );
}
