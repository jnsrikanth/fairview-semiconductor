import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const paths = [
  "/",
  "/products",
  "/products/gallium",
  "/products/gallium/h4",
  "/products/gallium/s4",
  "/products/gallium/hx",
  "/products/stallion",
  "/products/stallion/s100",
  "/products/stallion/s80i",
  "/systems",
  "/architecture",
  "/technology",
  "/specifications",
  "/company",
  "/design-in",
  "/legal",
  "/brand",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return paths.map((path) => ({
    url: new URL(path, SITE_URL).toString(),
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
