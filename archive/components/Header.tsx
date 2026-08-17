"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandMark } from "./BrandMark";
import { PRIMARY_NAV } from "@/content/nav";

export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  const current = (href: string) =>
    href === "/" ? path === "/" : path === href || path.startsWith(`${href}/`);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <BrandMark />
          <span className="brand-word">
            <strong>FairView</strong>
            <span>Semiconductor</span>
          </span>
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          {PRIMARY_NAV.map((item) =>
            item.children ? (
              <div className="nav-flyout" key={item.href}>
                <Link
                  href={item.href}
                  className="nav-link"
                  aria-current={current(item.href) ? "page" : undefined}
                  aria-haspopup="true"
                >
                  {item.label}
                </Link>
                <div className="nav-panel" role="group" aria-label={item.label}>
                  {item.children.map((child) => (
                    <Link href={child.href} key={child.href}>
                      <strong>{child.label}</strong>
                      <span>{child.hint}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
                aria-current={current(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <Link href="/design-in" className="btn btn-primary header-cta">
          Design-in
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
        {PRIMARY_NAV.flatMap((item) => [
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>,
          ...(item.children ?? []).map((child) => (
            <Link key={child.href} href={child.href} onClick={() => setOpen(false)}>
              {child.label}
            </Link>
          )),
        ])}
        <Link href="/design-in" onClick={() => setOpen(false)}>
          Design-in
        </Link>
      </nav>
    </header>
  );
}
