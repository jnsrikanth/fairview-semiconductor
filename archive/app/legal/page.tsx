import type { Metadata } from "next";
import { MUST_NOT } from "@/content/specs";

export const metadata: Metadata = {
  title: "Public-facts notice",
  description: "FairView public site classification and what this material is not.",
};

export default function LegalPage() {
  return (
    <article className="wrap page-hero stack-lg">
      <div>
        <p className="kicker">Legal</p>
        <h1>Public facts only.</h1>
        <p className="lede">
          This website is a public product overview. It is not a JEDEC extract, not a foundry PDK, not a
          datasheet guarantee, and not a patent grant.
        </p>
      </div>
      <div className="stack">
        <p>
          Numbers that are not in a cited public source or a founder-locked SKU are left empty. Vendor marketing
          pin-rates are labeled as such and are not FairView locks. Invention-disclosure families A–E are claim
          directions for counsel. They are not filed patents.
        </p>
        <p>
          Export control: an HBM4 controller plus a GPU attach is likely ECCN-sensitive. This site is not a
          classification, a license, or advice on how to ship restricted items. Design-in and any eventual silicon
          follow the export-control laws that apply to the customer, the node, and the destination. We will not
          market around those rules.
        </p>
        <h2>Must not claim</h2>
        <ul style={{ paddingLeft: "1.2rem", color: "var(--fv-mist)", display: "grid", gap: "0.45rem" }}>
          {MUST_NOT.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
