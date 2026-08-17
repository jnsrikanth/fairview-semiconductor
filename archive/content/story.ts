export const STORY = {
  genesisTitle: "The Fairchild Moment of the AI Century",
  whyNow:
    "We stand at a historic cusp and tipping point. The global transition into the Next Generation of AI and advanced computing has ignited a voracious, exponential demand for compute density and memory bandwidth. The traditional memory-compute separation has hit a physical wall. FairView Semiconductor was founded to break that wall—unifying HBM4 memory architecture and high-performance GPU compute into a single, cohesive silicon reality.",
  fairchildParallel:
    "In 1957, Fairchild Semiconductor transformed raw silicon physics into the planar transistor, igniting the genesis of Silicon Valley and the entire modern microelectronics era. Today, at the dawn of hyper-scale intelligence, FairView Semiconductor is formed in that exact same spirit: to become the genesis for the 21st-century compute revolution, creating the foundational silicon architecture upon which the next fifty years of technology will be built.",
  origin:
    "The engineering effort was forged at the intersection of deep-tier silicon capability and global ambition. From our foundational tape-out origins to our expanding presence in Silicon Valley, FairView builds for the global Tier-1 OEM, sovereign AI cluster, and hyperscale data center integrator.",
  valley:
    "With Silicon Valley roots and global operations, FairView operates where the world's most demanding compute clusters are designed, deployed, and scaled. We build tier-1 silicon and rack-level systems that speak the language of absolute physical performance.",
  twentyFirstCenturyVision:
    "While hyperscale AI data centers represent our first silicon tape-out, FairView's charter extends across the foundational pillars of 21st-century civilization. As computing demands surge, our unified GPU + HBM4 architecture scales into 1U/2U/3U enterprise blade servers, Level 4/5 autonomous vehicles, orbital satellite constellations, and ultra-dense personal workstation hardware.",
  bladeServerVision:
    "Entering 2027 and beyond, FairView is delivering next-generation 1U, 2U, and 3U form-factor blade servers powered by Stallion GPUs and Gallium HBM4 memory—delivering unprecedented compute density, direct-to-die liquid cooling, and ultra-high-throughput CXL 3.1 / PCIe Gen6 fabric for enterprise and cloud data centers.",
  vibeStatement:
    "Driven by the cinematic momentum of retro-futuristic vision—from the relentless flux energy of Back to the Future to the high-energy electric skyline pulse of classic Metro City cinema—FairView is fueled by an unmistakable tinge of ultraviolet purple vitality, representing pure power, virility, and the unstoppable drive toward the next computing epoch.",
  export:
    "Advanced HBM4 controllers, GPU packaging, and blade systems comply strictly with global trade and export standards. FairView adheres to international node, destination, and architectural regulations with unwavering transparency.",
} as const;

export const HISTORICAL_GENESIS = [
  {
    era: "1957 – 1970s",
    name: "The Fairchild Genesis",
    description:
      "Fairchild Semiconductor pioneers the planar manufacturing process and integrated circuit in Mountain View, creating the silicon foundation that sparked Silicon Valley and modern computing.",
    tag: "Computing Epoch 1.0",
    color: "var(--fv-stallion)",
  },
  {
    era: "1980s – 2010s",
    name: "The Microprocessor & Internet Boom",
    description:
      "Discrete CPUs, early GPUs, and distributed networking power personal computing and the mobile cloud revolution.",
    tag: "Computing Epoch 2.0",
    color: "var(--fv-gallium)",
  },
  {
    era: "2026 – 2027+",
    name: "The FairView Semiconductor Genesis",
    description:
      "At the tipping point of the Next-Gen AI Era, FairView unifies Gallium HBM4 (8.192+ TB/s) and Stallion GPU compute into CoWoS packages and 1U/2U/3U Blade Servers.",
    tag: "Computing Epoch 3.0",
    color: "var(--fv-vital)",
  },
] as const;

export const MARKETS = [
  {
    slug: "ai",
    title: "AI Acceleration & Hyperscale Data Centers",
    when: "First Silicon (2026)",
    badge: "Active Tape-out",
    highlight: "8.192 TB/s HBM4 Package",
    body: "First package combines Gallium HBM4 chipsets and Stallion S100 GPUs on CoWoS-class 2.5D packaging. Extreme memory bandwidth for mega-parameter LLMs and real-time diffusion models.",
  },
  {
    slug: "enterprise-blade",
    title: "Enterprise Computing & Blade Servers",
    when: "2027 Delivery Roadmap",
    badge: "1U · 2U · 3U Systems",
    highlight: "GPU + HBM4 Blade Chassis",
    body: "1U, 2U, and 3U form-factor high-density blade servers with modular Stallion GPU nodes, Gallium HBM4 memory, PCIe Gen6 / CXL 3.1 pooling, and advanced NVMe-oF storage fabrics.",
  },
  {
    slug: "auto",
    title: "Automotive & Autonomous Self-Driving",
    when: "2027+ Architecture",
    badge: "Level 4/5 Compute",
    highlight: "Low-Latency Sensor Fusion",
    body: "Automotive-grade silicon with deterministic memory locks and ultra-high memory bandwidth for real-time 360° multi-modal neural network processing in autonomous vehicles.",
  },
  {
    slug: "space",
    title: "Satellite & Deep Space Communications",
    when: "Advanced Book",
    badge: "Rad-Tolerant High-Bandwidth",
    highlight: "Orbital Edge Compute",
    body: "Space-hardened compute packages engineered for low Earth orbit (LEO) satellite constellations, real-time laser inter-satellite links, and deep space telemetry processing.",
  },
  {
    slug: "mobile",
    title: "Mobile & Personal High-End Compute",
    when: "Next-Gen Architecture",
    badge: "Personal Workstations",
    highlight: "Compact High-Bandwidth Die",
    body: "Scale-down Gallium S4 (JESD330-4 organic substrate) delivering high-bandwidth unified memory to next-generation creative workstations and edge AI systems.",
  },
] as const;
