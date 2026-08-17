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
      { href: "/products/gallium", label: "Gallium Series", hint: "HBM4 memory chipset" },
      { href: "/products/gallium/h4", label: "FV-GL-H4", hint: "2048-bit first silicon" },
      { href: "/products/gallium/s4", label: "FV-GL-S4", hint: "SPHBM4 organic" },
      { href: "/products/gallium/hx", label: "FV-GL-HX", hint: "Dual-mode controller" },
      { href: "/products/stallion", label: "Stallion Series", hint: "GPU / accelerator" },
      { href: "/products/stallion/s100", label: "FV-ST-S100", hint: "Flagship 128 SM" },
      { href: "/products/stallion/s80i", label: "FV-ST-S80I", hint: "Inference 96 SM" },
    ],
  },
  {
    href: "/systems",
    label: "Systems & Blades",
    children: [
      { href: "/systems#blade-1u", label: "Apex 1U Blade", hint: "High-density inference (2027)" },
      { href: "/systems#blade-2u", label: "Sovereign 2U Blade", hint: "Enterprise training (2027)" },
      { href: "/systems#blade-3u", label: "Megascale 3U Engine", hint: "Foundation cluster rack (2027)" },
    ],
  },
  { href: "/architecture", label: "Architecture" },
  { href: "/technology", label: "Technology" },
  { href: "/specifications", label: "Specifications" },
  { href: "/company", label: "Genesis & Vision" },
];

export const FOOTER_NAV = {
  products: [
    { href: "/products/gallium", label: "Gallium HBM4" },
    { href: "/products/stallion", label: "Stallion GPU" },
    { href: "/systems", label: "Blade Servers (1U / 2U / 3U)" },
    { href: "/specifications", label: "Public specifications" },
  ],
  engineering: [
    { href: "/architecture", label: "Package architecture" },
    { href: "/technology", label: "Identities & policy" },
    { href: "/brand", label: "Brand kit" },
  ],
  company: [
    { href: "/company", label: "Fairchild Genesis & Vision" },
    { href: "/company#markets", label: "21st Century Markets" },
    { href: "/design-in", label: "Design-in" },
    { href: "/legal", label: "Public-facts notice" },
  ],
} as const;
