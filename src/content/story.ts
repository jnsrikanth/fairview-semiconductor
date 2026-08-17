export const STORY = {
  heroTagline: "Purpose-Built Silicon for Advanced AI",
  genesisTitle: "Historical Lineage & Multi-Sector Roadmap",
  whyNow:
    "FairView Semiconductor unifies HBM4 memory architecture and GPU compute from individual silicon dies to full data center racks, eliminating memory bandwidth bottlenecks across frontier AI workloads.",
  fairchildParallel:
    "Rooted in the pioneering spirit of Silicon Valley that began with Fairchild in 1957, FairView Semiconductor builds the next generation of unified hardware architecture for data centers, autonomous systems, and aerospace.",
  memoryWallSolution:
    "Gallium HBM4 provides direct die-to-memory attach with 8.192+ TB/s of dedicated throughput, enabling continuous data feeding for large-scale training and inference.",
  bladeServerVision:
    "1U, 2U, and 3U server form factors delivering rack-scale compute density, direct-to-chip liquid cooling, and CXL 3.1 memory pooling for 2027 enterprise deployments.",
  origin:
    "Engineered with deep semiconductor expertise, FairView partners with tier-1 OEMs, foundries, and system integrators globally.",
  valley:
    "With engineering operations in Silicon Valley and global partners, FairView delivers scalable silicon and rack systems worldwide.",
  vibeStatement:
    "Combining hardware design rigor with high-performance silicon engineering to deliver reliable, high-bandwidth computing platforms.",
  export:
    "FairView operates in full compliance with international semiconductor export controls, node classifications, and trade standards.",
} as const;

export const HISTORICAL_GENESIS = [
  {
    era: "1957 – 1970s",
    name: "Epoch 1.0: Planar Silicon Foundations",
    description:
      "Fairchild Semiconductor pioneers the planar manufacturing process, establishing the silicon integrated circuit foundation of Silicon Valley.",
    tag: "Computing Epoch 1.0",
    color: "var(--fv-stallion)",
  },
  {
    era: "1980s – 2010s",
    name: "Epoch 2.0: Microprocessors & Distributed Cloud",
    description:
      "Discrete CPUs, early graphics accelerators, and distributed networks power the global expansion of digital infrastructure.",
    tag: "Computing Epoch 2.0",
    color: "var(--fv-cyan)",
  },
  {
    era: "2026 – 2027+",
    name: "Epoch 3.0: Unified Memory & Blade Systems",
    description:
      "FairView integrates 8.192 TB/s Gallium HBM4 memory directly with Stallion GPU compute dies across 2.5D packages and enterprise blade servers.",
    tag: "Computing Epoch 3.0",
    color: "var(--fv-cyan-bright)",
  },
] as const;

export const MARKETS = [
  {
    slug: "ai",
    title: "Hyperscale AI & Data Centers",
    badge: "First Silicon (2026)",
    highlight: "8.192+ TB/s HBM4 Bandwidth",
    body: "CoWoS 2.5D packages combining Gallium HBM4 and Stallion GPUs to accelerate foundation LLM training and real-time inference.",
  },
  {
    slug: "enterprise-blade",
    title: "Enterprise Computing & Blade Servers",
    badge: "2027 Delivery Roadmap",
    highlight: "1U · 2U · 3U Rack Systems",
    body: "High-density enterprise blade servers with direct-to-chip liquid cooling, up to 131 TB/s memory throughput, and CXL 3.1 pooling.",
  },
  {
    slug: "auto",
    title: "Automotive & Autonomous Mobility",
    badge: "Level 4/5 Compute",
    highlight: "Low-Latency Sensor Fusion",
    body: "Deterministic, high-bandwidth memory locks enabling real-time 360-degree neural network processing for autonomous vehicles.",
  },
  {
    slug: "space",
    title: "Satellite & Aerospace Communications",
    badge: "Orbital Edge Compute",
    highlight: "Radiation-Tolerant High-BW",
    body: "Space-hardened compute packages engineered for low Earth orbit satellite constellations and laser inter-satellite links.",
  },
  {
    slug: "mobile",
    title: "High-End Creative & Pro Workstations",
    badge: "Next-Gen Workstations",
    highlight: "Compact Unified Memory",
    body: "High-bandwidth unified memory architectures delivering workstation-class performance to compact professional systems.",
  },
] as const;
