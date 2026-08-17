export type NavChild = { href: string; label: string; hint: string };

export type NavItem = {
  href: string;
  label: string;
  children?: NavChild[];
};

export const PRIMARY_NAV: NavItem[] = [
  {
    href: "/products",
    label: "Products",
    children: [
      { href: "/products/gallium", label: "Gallium HBM4 Series", hint: "8.192+ TB/s memory architecture" },
      { href: "/products/stallion", label: "Stallion GPU Series", hint: "High-density AI compute die" },
      { href: "/systems", label: "Blade Server Systems", hint: "1U, 2U, and 3U enterprise racks" },
    ],
  },
  {
    href: "/systems",
    label: "Blade Systems",
    children: [
      { href: "/systems#blade-1u", label: "Apex 1U Blade", hint: "High-density AI inference" },
      { href: "/systems#blade-2u", label: "Sovereign 2U Blade", hint: "Enterprise LLM training" },
      { href: "/systems#blade-3u", label: "Megascale 3U Engine", hint: "Frontier supercomputing cluster" },
    ],
  },
  { href: "/company", label: "The Genesis" },
  { href: "/architecture", label: "Architecture" },
  { href: "/specifications", label: "Specifications" },
];

export const FOOTER_NAV = {
  products: [
    { href: "/products/gallium", label: "Gallium HBM4" },
    { href: "/products/stallion", label: "Stallion GPU" },
    { href: "/systems", label: "1U / 2U / 3U Blade Servers" },
    { href: "/specifications", label: "Engineering Datasheets" },
  ],
  architecture: [
    { href: "/architecture", label: "2.5D CoWoS Package" },
    { href: "/technology", label: "Memory Wall Breakthrough" },
    { href: "/brand", label: "Brand Kit & Design System" },
  ],
  company: [
    { href: "/company", label: "The Fairchild Genesis" },
    { href: "/company#markets", label: "21st-Century Horizons" },
    { href: "/design-in", label: "OEM Early Access & Design-In" },
    { href: "/legal", label: "Public Facts Notice" },
  ],
} as const;
