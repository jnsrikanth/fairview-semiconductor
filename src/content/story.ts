export const STORY = {
  heroTagline: "The New Frontier of Advanced Computing",
  genesisTitle: "Carrying the Mantle of Silicon Valley's Genesis",
  whyNow:
    "We stand at a historic tipping point. The global transition into Next-Generation AI and advanced computing has triggered an insatiable, exponential demand for compute density and memory throughput. Traditional architectures have hit the Memory Wall—where GPUs spend most of their time waiting for data. FairView Semiconductor was formed to eliminate this bottleneck, unifying ultra-fast HBM4 memory and high-performance GPU compute onto a single, cohesive silicon architecture.",
  fairchildParallel:
    "In 1957, Fairchild Semiconductor transformed raw silicon into the planar transistor, igniting the genesis of Silicon Valley and modern computing. Today, at the dawn of the AI Century, FairView Semiconductor is formed in that exact same spirit: to become the genesis for the next 50 years of computing infrastructure—delivering unprecedented performance for data centers, enterprise blade systems, and autonomous frontiers.",
  memoryWallSolution:
    "Memory bandwidth is the scarce resource of our century. FairView's Gallium HBM4 chipset delivers over 8.192 TB/s of pure memory bandwidth directly to the GPU compute plane, unlocking 4x higher compute efficiency and eliminating data starvation in massive AI workloads.",
  bladeServerVision:
    "In 2027, FairView delivers 1U, 2U, and 3U high-density enterprise blade servers powered by Stallion GPUs and Gallium HBM4 memory—delivering up to 131 TB/s of aggregate memory bandwidth with direct-to-chip liquid cooling and zero-copy CXL 3.1 fabric.",
  origin:
    "Engineered with global ambition and deep-tier semiconductor expertise, FairView operates where the world's most demanding compute clusters are designed, deployed, and scaled.",
  valley:
    "With roots expanding into Silicon Valley, FairView partners with tier-1 OEMs, foundries, and hyperscale cloud integrators worldwide.",
  vibeStatement:
    "Driven by the cinematic momentum of retro-futuristic vision—from the relentless flux energy of Back to the Future to the high-energy electric pulse of classic Metro City cinema—FairView is fueled by an unmistakable tinge of ultraviolet purple vitality, representing pure power, virility, and the unstoppable drive toward the next computing epoch.",
  export:
    "FairView operates with strict adherence to international export controls, trade regulations, and silicon integrity standards.",
} as const;

export const HISTORICAL_GENESIS = [
  {
    era: "1957 – 1970s",
    name: "Epoch 1.0: The Fairchild Genesis",
    description:
      "Fairchild Semiconductor invents the planar manufacturing process, sparking the birth of Silicon Valley and modern microelectronics.",
    tag: "Computing Epoch 1.0",
    color: "var(--fv-stallion)",
  },
  {
    era: "1980s – 2010s",
    name: "Epoch 2.0: The PC & Internet Era",
    description:
      "Discrete microprocessors, graphics chips, and distributed cloud networking power the digital transformation of society.",
    tag: "Computing Epoch 2.0",
    color: "var(--fv-gallium)",
  },
  {
    era: "2026 – 2027+",
    name: "Epoch 3.0: The FairView Genesis",
    description:
      "Breaking the AI Memory Wall with unified Gallium HBM4 (8.192+ TB/s) and Stallion GPUs across packages and 1U/2U/3U Blade Servers.",
    tag: "Computing Epoch 3.0",
    color: "var(--fv-vital)",
  },
] as const;

export const MARKETS = [
  {
    slug: "ai",
    title: "Hyperscale AI & Data Centers",
    badge: "First Silicon (2026)",
    highlight: "8.192+ TB/s HBM4 Bandwidth",
    body: "CoWoS-class 2.5D packages combining Gallium HBM4 and Stallion GPUs to accelerate foundation LLM training and real-time inference.",
  },
  {
    slug: "enterprise-blade",
    title: "Enterprise Computing & Blade Servers",
    badge: "2027 Delivery Roadmap",
    highlight: "1U · 2U · 3U Rack Systems",
    body: "High-density enterprise blade servers with direct-to-chip liquid cooling, up to 131 TB/s memory throughput, and CXL 3.1 memory pooling.",
  },
  {
    slug: "auto",
    title: "Automotive & Autonomous Self-Driving",
    badge: "Level 4/5 Compute",
    highlight: "Real-Time Sensor Fusion",
    body: "Ultra-high bandwidth memory locks enabling low-latency 360-degree neural network processing for autonomous vehicle safety.",
  },
  {
    slug: "space",
    title: "Satellite & Deep Space Communications",
    badge: "Orbital Edge Compute",
    highlight: "Radiation-Tolerant High-BW",
    body: "Space-hardened compute packages engineered for low Earth orbit satellite constellations, laser inter-satellite links, and deep space telemetry.",
  },
  {
    slug: "mobile",
    title: "Mobile & Creative Pro Workstations",
    badge: "Next-Gen Workstations",
    highlight: "Compact Unified Memory",
    body: "Scale-down organic substrate packages delivering high-bandwidth unified memory to next-generation creative workstations and edge systems.",
  },
] as const;
