import type { Metadata } from "next";
import Link from "next/link";
import { GALLIUM, STALLION } from "@/content/specs";

export const metadata: Metadata = {
  title: "Products",
  description: "Gallium HBM4 memory chipset and Stallion GPU series from FairView Semiconductor.",
};

export default function ProductsPage() {
  return (
    <div className="wrap page-hero">
      <p className="kicker">Products</p>
      <h1>Two families. One package contract.</h1>
      <p className="lede">
        Gallium is the memory lock. Stallion is the GPU lock. Host I/O is a third die. Bandwidth is never
        invented twice.
      </p>
      <div className="split" style={{ marginTop: "2rem" }}>
        <Link href="/products/gallium" className="product-card gallium">
          <img src="/images/gallium-cube.webp" alt="Twelve-high partner HBM cube with teal halo" />
          <div className="pad">
            <p className="kicker">Memory</p>
            <h2>{GALLIUM.family}</h2>
            <p>{GALLIUM.oneLiner}</p>
          </div>
        </Link>
        <Link href="/products/stallion" className="product-card stallion">
          <img src="/images/stallion-die.webp" alt="Stallion compute die with copper halo" />
          <div className="pad">
            <p className="kicker stallion">Compute</p>
            <h2>{STALLION.family}</h2>
            <p>{STALLION.oneLiner}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
