"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandMark } from "./BrandMark";

export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <BrandMark />
          <span className="brand-wordmark">
            <span className="brand-fairview">FairView</span>
            <span className="brand-semi">Semi</span>
          </span>
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          <Link href="/products" className="nav-link">
            Products
          </Link>
          <Link href="/architecture" className="nav-link">
            Architecture
          </Link>
          <Link href="/systems" className="nav-link">
            Systems
          </Link>
          <Link href="/company" className="nav-link">
            Vision
          </Link>
          <Link href="/design-in" className="nav-link">
            Contact
          </Link>
        </nav>

        <Link href="/design-in" className="btn btn-cyan header-cta">
          Request Access <span className="btn-arrow">&rsaquo;</span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
            {open ? (
              <path d="M4 4 L16 16 M16 4 L4 16" stroke="currentColor" strokeWidth="1.6" />
            ) : (
              <path d="M3 5.5 H17 M3 10 H17 M3 14.5 H17" stroke="currentColor" strokeWidth="1.6" />
            )}
          </svg>
        </button>
      </div>

      <nav id="mobile-nav" className={`nav-mobile${open ? " open" : ""}`} aria-label="Mobile">
        <Link href="/products" onClick={() => setOpen(false)}>
          Products
        </Link>
        <Link href="/architecture" onClick={() => setOpen(false)}>
          Architecture
        </Link>
        <Link href="/systems" onClick={() => setOpen(false)}>
          Systems
        </Link>
        <Link href="/company" onClick={() => setOpen(false)}>
          Vision
        </Link>
        <Link href="/design-in" onClick={() => setOpen(false)}>
          Contact
        </Link>
        <Link href="/design-in" className="btn btn-cyan" onClick={() => setOpen(false)} style={{ marginTop: "0.5rem" }}>
          Request Access &rsaquo;
        </Link>
      </nav>
    </header>
  );
}
