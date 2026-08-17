import type { Metadata } from "next";
import { AttachDiagram } from "@/components/diagrams/AttachDiagram";
import { ChannelMap } from "@/components/diagrams/ChannelMap";
import { ControllerDiagram } from "@/components/diagrams/ControllerDiagram";
import { DualModeDiagram } from "@/components/diagrams/DualModeDiagram";
import { PackageDiagram } from "@/components/diagrams/PackageDiagram";
import { ThermalDiagram } from "@/components/diagrams/ThermalDiagram";
import { SpecTable } from "@/components/SpecTable";
import { ATTACH_PATHS } from "@/content/specs";

export const metadata: Metadata = {
  title: "Package architecture",
  description:
    "FairView Gallium + Stallion package: CoWoS-class 2.5D, dual-mode attach, UCIe sidecar, 32-channel map.",
};

export default function ArchitecturePage() {
  return (
    <>
      <header className="wrap page-hero">
        <p className="kicker">Architecture</p>
        <h1>Four cubes, three dies, two attaches, one QoS plane.</h1>
        <p className="lede">
          First Stallion package is four partner cubes on a CoWoS-class silicon interposer. Gallium-HX is its own
          chiplet. Six- and eight-cube SKUs are later memory-slot re-locks, not a second GPU bandwidth.
        </p>
      </header>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap stack-lg">
          <PackageDiagram />
          <AttachDiagram />
          <SpecTable
            caption="Three physically distinct attaches. Mixing their identities is forbidden."
            columns={[
              { key: "path", label: "Path" },
              { key: "protocol", label: "Protocol" },
              { key: "payload", label: "Payload" },
              { key: "owner", label: "Identity owner" },
            ]}
            rows={[...ATTACH_PATHS]}
          />
          <DualModeDiagram />
          <ChannelMap />
          <ControllerDiagram />
          <ThermalDiagram />
          <div className="callout">
            <h3>Encoding-naive PCIe is not HBM</h3>
            <p>
              PCIe Gen6 x16 is 16 × 64 / 8 = 128 GB/s raw, and lower after FLIT. It must never appear in the same
              sentence as Gallium TB/s without an explicit “different attach” clause.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
