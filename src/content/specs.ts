/**
 * Public product identities for FairView Semiconductor.
 *
 * Source of truth: FV-ARCH-HBM4-001 (2026-08-16, approved).
 * Every quantitative claim here is either a JEDEC / consortium public fact,
 * a founder-locked SKU, or arithmetic from those two. Empty knobs stay empty.
 *
 * Do not invent tRFC, tREFI, a selected VDDQ, vendor marketing pin-rates
 * (10 / 11.7 / 13 Gbps), SPHBM4 46 GT/s, or a second HBM bandwidth on Stallion.
 */

export const COMPANY = {
  name: "FairView Semiconductor",
  short: "FairView",
  legal: "FairView Semiconductor",
  tagline: "A clear view through the package.",
  manifesto:
    "Fairchild made the transistor a product and a valley grew around it. Today, as the world stands at the tipping point into next-generation AI and voracious computing, FairView Semiconductor is formed to become the genesis for the 21st-century compute era—unifying HBM4 memory and GPU compute on single packages and 1U/2U/3U blade servers.",
  email: "design-in@fairviewsemi.com",
  press: "press@fairviewsemi.com",
} as const;

/** Compiler identities. B = W × R / 8000 TB/s. tCK = 2 / R ns (DDR). */
export const LAW = {
  dqH4: 2048,
  dqS4: 512,
  pinGbps: 8.0,
  sphbm4IdentityGt: 32,
  serialization: 4,
  channels: 32,
  pseudoChannels: 64,
  bitsPerChannel: 64,
  stackTBs: 2.048,
  tckNs: 0.25,
  hiOptions: [4, 8, 12, 16] as const,
  dieGbOptions: [24, 32] as const,
  vddq: [0.7, 0.75, 0.8, 0.9] as const,
  vddc: [1.0, 1.05] as const,
  stacksMin: 1,
  stacksMax: 8,
} as const;

export function hbmTBs(dq: number, gbps: number, stacks: number) {
  const per = (dq * gbps) / 8000;
  return { per, agg: per * stacks };
}

export function capacityGB(hi: number, dieGb: number) {
  return (hi * dieGb) / 8;
}

export const FIRST_PACKAGE = {
  cubes: 4,
  hi: 12,
  dieGb: 24,
  cubeGB: 36,
  packageGB: 144,
  dq: 2048,
  pinGbps: 8.0,
  stackTBs: 2.048,
  aggTBs: 8.192,
  tckNs: 0.25,
  attach: "jesd270_4" as const,
} as const;

export const GALLIUM = {
  family: "Gallium Series",
  role: "HBM4 memory chipset",
  oneLiner:
    "Host controller, dual-mode attach, RAS policy, and package roles — JEDEC-compatible, GPU-aware.",
  notIdm:
    "FairView is not a DRAM IDM on day one. Cubes are partnered known-good stacks. Differentiation is the controller, the attach, and the Stallion contract.",
  skus: [
    {
      id: "FV-GL-H4",
      slug: "h4",
      name: "Gallium H4",
      status: "First tape-out",
      attach: "JESD270-4 silicon interposer",
      attachMode: "jesd270_4",
      dq: 2048,
      pin: "8.0 Gbps JEDEC baseline",
      stackTBs: 2.048,
      firstCubes: 4,
      aggTBs: 8.192,
      hi: 12,
      dieGb: 24,
      cubeGB: 36,
      packageGB: 144,
      channels: 32,
      pc: 64,
      tck: "0.250 ns",
      role: "Flagship HBM4 attach. First silicon populates this PHY only.",
    },
    {
      id: "FV-GL-S4",
      slug: "s4",
      name: "Gallium S4",
      status: "Scale-down SKU",
      attach: "JESD330-4 organic substrate",
      attachMode: "jesd330_4",
      dq: 512,
      pin: "4:1 serialization. Identity rate 32 GT/s ↔ 2.048 TB/s",
      stackTBs: 2.048,
      firstCubes: 4,
      aggTBs: 8.192,
      hi: 12,
      dieGb: 24,
      cubeGB: 36,
      packageGB: 144,
      channels: 32,
      pc: 64,
      tck: "n/a (serialized attach)",
      role: "Same partner cubes, organic package. Not first silicon.",
    },
    {
      id: "FV-GL-HX",
      slug: "hx",
      name: "Gallium HX",
      status: "Controller chiplet",
      attach: "Dual-mode · one credit / QoS plane",
      attachMode: "dual",
      dq: 2048,
      pin: "Mode selects width. First die straps H4.",
      stackTBs: 2.048,
      firstCubes: 4,
      aggTBs: 8.192,
      hi: 12,
      dieGb: 24,
      cubeGB: 36,
      packageGB: 144,
      channels: 32,
      pc: 64,
      tck: "Follows strapped 270-4 pin rate",
      role: "Separate chiplet. 330-4 wrapper is a stub on first tape-out.",
    },
  ],
} as const;

export const STALLION = {
  family: "Stallion Series",
  role: "GPU / accelerator compute die",
  oneLiner:
    "On-package AI GPU. HBM bandwidth is mirrored from Gallium — Stallion does not invent a second TB/s.",
  topology: "Host → command processor → 2D mesh NoC → SM → L1 → partitioned L2 → Gallium → cubes",
  skus: [
    {
      id: "FV-ST-S100",
      slug: "s100",
      name: "Stallion S100",
      status: "Flagship",
      sms: 128,
      warpsPerSm: 64,
      threadsPerWarp: 32,
      threadsInFlight: 262_144,
      clockGHz: 1.8,
      alus: 128,
      tensorOps: 2048,
      fp32Exact: 58.9824,
      fp32Display: "59.0",
      tensorDisplay: "471.9",
      imin: "7.20",
      l1KiB: 128,
      l2MiB: 96,
      tdpW: 800,
      node: "2 nm GAAFET nanosheet",
      package: "CoWoS-class 2.5D",
      host: "PCIe Gen6 x16 + CXL 3.1",
      noc: "2D mesh",
      ucie: "32 GT/s die-to-die (sidecar / I/O, not HBM)",
      cubes: 4,
      hi: 12,
      dq: 2048,
      aggTBs: 8.192,
      packageGB: 144,
      role: "Training-class flagship. Consumes Gallium-H4.",
    },
    {
      id: "FV-ST-S80I",
      slug: "s80i",
      name: "Stallion S80I",
      status: "Inference",
      sms: 96,
      warpsPerSm: 64,
      threadsPerWarp: 32,
      threadsInFlight: 196_608,
      clockGHz: 1.6,
      alus: 64,
      tensorOps: 4096,
      fp32Exact: 19.6608,
      fp32Display: "19.7",
      tensorDisplay: "629.1",
      imin: "2.40",
      l1KiB: 128,
      l2MiB: 64,
      tdpW: 600,
      node: "2 nm GAAFET nanosheet",
      package: "CoWoS-class 2.5D",
      host: "PCIe Gen6 x16 + CXL 3.1",
      noc: "2D mesh",
      ucie: "32 GT/s die-to-die (sidecar / I/O, not HBM)",
      cubes: 4,
      hi: 12,
      dq: 2048,
      aggTBs: 8.192,
      packageGB: 144,
      role: "Inference SKU. Fatter MMA, same Gallium geometry.",
    },
  ],
} as const;

export const BANDWIDTH_ROWS = [
  { w: 2048, r: 8.0, tck: "0.250", stack: 2.048, n4: 8.192, n6: 12.288, n8: 16.384, note: "Gallium-H4 lock" },
  { w: 512, r: 32, tck: "n/a", stack: 2.048, n4: 8.192, n6: 12.288, n8: 16.384, note: "Gallium-S4 identity (4×8)" },
] as const;

export const CAPACITY_ROWS = [
  { hi: 4, d24: 12, d32: 16 },
  { hi: 8, d24: 24, d32: 32 },
  { hi: 12, d24: 36, d32: 48 },
  { hi: 16, d24: 48, d32: 64 },
] as const;

export const MUST_NOT = [
  "Invent unpublished JEDEC timings (tRFC, tREFI, tRCD, tRP, tRAS, tFAW, tCCD).",
  "Select a FairView VDDQ or VDDC. The legal sets are vendor-specific options.",
  "Lock Samsung 11.7 Gbps, SK hynix 10 GT/s, or SPHBM4 46 GT/s as FairView numbers.",
  "Claim FairView owns the 1T1C DRAM array or a secret cell process.",
  "Treat UCIe, CXL.mem, or optical I/O as on-package HBM bandwidth.",
  "Write 128 GB/s PCIe as if it were Gallium TB/s.",
  "Claim granted patents. Five families are invention-disclosure directions only.",
  "Quote 2 TB/s from a 1024-bit teaching lock, or confuse 8×1024 with 4×2048.",
] as const;

export const DIFFERENTIATORS = [
  {
    title: "Dual-mode, one QoS plane",
    body: "JESD270-4 (2048-bit interposer) and JESD330-4 (512-bit organic, 4:1) present the same 32 logical channels and the same credit plane to Stallion. First tape-out is H4-only; the S4 wrapper is a stub.",
  },
  {
    title: "GPU-scheduled refresh",
    body: "Stallion issues idle-window credits from wavefront drain, barriers, and L2 miss-queue occupancy. Gallium prefers those windows for refresh and directed refresh. Periodic refresh still fires if credits do not arrive.",
  },
  {
    title: "Channel virtualization",
    body: "A firmware remap table isolates MIG tenants or a second Stallion die. The stack always sees legal CH0–CH31. Remap is drain-then-commit — never mid-burst.",
  },
  {
    title: "UCIe sidecar, not the data path",
    body: "Command, credit, thermal class, and RAS events ride a closed opcode set. There is no data-beat type. HBM read/write never rides UCIe.",
  },
  {
    title: "Fused thermal class",
    body: "Cube, controller, and SM sensors fuse into four discrete classes. Class raises refresh weight, demotes unhinted QoS, and at class 3 requests a Stallion clock re-lock. No invented junction-temperature datasheet.",
  },
] as const;

export const ATTACH_PATHS = [
  {
    path: "Host ↔ I/O die",
    protocol: "PCIe 6.0 x16 / CXL 3.1",
    payload: "Commands, page traffic, pooling",
    owner: "I/O die",
  },
  {
    path: "I/O ↔ Stallion",
    protocol: "UCIe-E",
    payload: "MMIO, interrupts, sidecar",
    owner: "I/O die",
  },
  {
    path: "Stallion ↔ Gallium sidecar",
    protocol: "UCIe-E or on-die APB",
    payload: "Credit, refresh hints, thermal, RAS",
    owner: "Sidecar",
  },
  {
    path: "Stallion L2 ↔ cubes",
    protocol: "JESD270-4 or JESD330-4",
    payload: "All HBM data",
    owner: "Gallium memory lock",
  },
] as const;

export const SIDECAR_OPS = [
  { op: "CREDIT_UPD", dir: "Gallium → Stallion", payload: "Per-PC / per-class credits" },
  { op: "HINT_WINDOW", dir: "Stallion → Gallium", payload: "Idle-cycle grant, urgency" },
  { op: "THERM_BIN", dir: "Both", payload: "Discrete thermal class 0–3" },
  { op: "RAS_EVENT", dir: "Gallium → Stallion", payload: "Poison, replay, channel down" },
  { op: "MAP_COMMIT", dir: "Stallion → Gallium", payload: "Remap table CRC" },
  { op: "LINK_HB", dir: "Both", payload: "Heartbeat" },
] as const;

export const BLADE_SERVERS = {
  family: "Blade Server Series",
  role: "Enterprise & Hyperscale Rack Systems (2027 Book)",
  oneLiner:
    "1U, 2U, and 3U form-factor high-density blade servers powered by Stallion GPUs and Gallium HBM4 memory for 2027 and beyond.",
  skus: [
    {
      id: "FV-RACK-1U",
      slug: "1u",
      name: "Apex 1U Compute Blade",
      formFactor: "1U Rack-Mount Blade Chassis",
      delivery: "2027 Delivery",
      computeConfig: "4x Stallion S80I or 2x Stallion S100 Modules",
      tflopsFP32: "118.0 TFLOPS FP32 / 943.8 Tensor TFLOPS",
      memoryHBM4: "576 GB Unified HBM4",
      memoryBandwidth: "32.768 TB/s Aggregate",
      interconnect: "Dual PCIe Gen6 x16 + CXL 3.1 Memory Pooling",
      storage: "8x Hot-Swap NVMe Gen5 (E1.S / U.2)",
      networking: "Dual 800GbE OSFP (RDMA / RoCEv2)",
      cooling: "Direct-to-Chip Liquid or High-Static Air",
      powerDraw: "1,800W Peak / Redundant 80-Plus Titanium",
      primaryRole: "High-Density Inference, Real-Time Edge Processing & Financial Modeling",
    },
    {
      id: "FV-RACK-2U",
      slug: "2u",
      name: "Sovereign 2U AI Blade",
      formFactor: "2U Enterprise Scalable Chassis",
      delivery: "2027 Delivery",
      computeConfig: "8x Stallion S100 Training & Compute Nodes",
      tflopsFP32: "471.9 TFLOPS FP32 / 3,775.2 Tensor TFLOPS",
      memoryHBM4: "1,152 GB (1.15 TB) Unified HBM4",
      memoryBandwidth: "65.536 TB/s Aggregate",
      interconnect: "Quad PCIe Gen6 x16 with CXL 3.1 & UCIe-E Switch Fabric",
      storage: "16x Hot-Swap NVMe Gen5 U.2 Storage Bays",
      networking: "Quad 800GbE OSFP with Ultra-Low Latency Fabric",
      cooling: "Liquid-Assisted Cold Plate Modular Cooling",
      powerDraw: "4,200W Peak / Dual Redundant Titanium",
      primaryRole: "Frontier LLM Fine-Tuning, Sovereign Enterprise Clouds & Multi-Modal Models",
    },
    {
      id: "FV-RACK-3U",
      slug: "3u",
      name: "Megascale 3U Cluster Engine",
      formFactor: "3U Modular High-Density Rack Engine",
      delivery: "2027 Delivery",
      computeConfig: "16x Stallion S100/S80I Hybrid Die Matrix",
      tflopsFP32: "943.7 TFLOPS FP32 / 7,550.4 Tensor TFLOPS",
      memoryHBM4: "2,304 GB (2.30 TB) Unified HBM4",
      memoryBandwidth: "131.072 TB/s Aggregate",
      interconnect: "Octal PCIe Gen6 x16 + CXL 3.1 Dynamic Memory Expansion",
      storage: "24x Hot-Swap NVMe Gen5 Hot-Swap Carrier",
      networking: "Octal 800GbE OSFP / NDR InfiniBand Compatible",
      cooling: "Full Direct Liquid Immersion & Dual Cold-Plate Loop",
      powerDraw: "8,500W Peak / 3-Phase Smart Power Delivery",
      primaryRole: "Mega-Scale Foundation Model Pre-Training & Supercomputing Clusters",
    },
  ],
} as const;

export function galliumSku(slug: string) {
  const sku = GALLIUM.skus.find((s) => s.slug === slug);
  if (!sku) throw new Error(`Unknown Gallium SKU ${slug}`);
  return sku;
}

export function stallionSku(slug: string) {
  const sku = STALLION.skus.find((s) => s.slug === slug);
  if (!sku) throw new Error(`Unknown Stallion SKU ${slug}`);
  return sku;
}

export function bladeSku(slug: string) {
  const sku = BLADE_SERVERS.skus.find((s) => s.slug === slug);
  if (!sku) throw new Error(`Unknown Blade Server SKU ${slug}`);
  return sku;
}

