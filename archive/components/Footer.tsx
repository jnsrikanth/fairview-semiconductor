import Link from "next/link";
import { BrandMark } from "./BrandMark";
import { FOOTER_NAV } from "@/content/nav";
import { COMPANY } from "@/content/specs";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <Link href="/" className="brand">
            <BrandMark />
            <span className="brand-word">
              <strong>FairView</strong>
              <span>Semiconductor</span>
            </span>
          </Link>
          <p className="muted" style={{ marginTop: "1rem", maxWidth: "22rem" }}>
            {COMPANY.tagline} Gallium holds the bandwidth. Stallion spends it. UCIe is not HBM.
          </p>
        </div>
        <div>
          <h2>Products</h2>
          <ul>
            {FOOTER_NAV.products.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Engineering</h2>
          <ul>
            {FOOTER_NAV.engineering.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Company</h2>
          <ul>
            {FOOTER_NAV.company.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="wrap footer-note">
        <p>© {new Date().getFullYear()} {COMPANY.legal}. Public facts only. Not a JEDEC extract, not a PDK, not a patent grant.</p>
        <p>
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
        </p>
      </div>
    </footer>
  );
}
