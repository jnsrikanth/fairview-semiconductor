export function PackageDiagram() {
  return (
    <figure className="diagram">
      <svg viewBox="0 0 1080 620" role="img" aria-labelledby="pkg-title pkg-desc">
        <title id="pkg-title">Flagship package block diagram</title>
        <desc id="pkg-desc">
          Host CPU connects over PCIe Gen6 and CXL 3.1 to the I/O die. UCIe carries
          MMIO to Stallion. Stallion L2 drives Gallium-HX. Gallium drives four partner HBM4 cubes.
          A sidecar carries command, credit, and telemetry only.
        </desc>
        <rect x="16" y="16" width="1048" height="588" rx="16" fill="#0b0f15" stroke="rgba(180,210,230,0.16)" />
        <text x="40" y="48" fill="#6f7c8d" fontSize="13" letterSpacing="2.4" fontFamily="ui-sans-serif, system-ui">
          PACKAGE · CoWoS-CLASS 2.5D · FIRST SILICON H4-ONLY
        </text>

        <g>
          <rect x="40" y="250" width="150" height="120" rx="10" fill="#121821" stroke="#8eb4ff" />
          <text x="115" y="302" textAnchor="middle" fill="#e7eef6" fontSize="16" fontFamily="ui-sans-serif">Host CPU</text>
          <text x="115" y="324" textAnchor="middle" fill="#a7b4c4" fontSize="12">board / CXL host</text>
        </g>

        <g>
          <rect x="230" y="168" width="210" height="284" rx="12" fill="#121821" stroke="#8eb4ff" />
          <text x="335" y="198" textAnchor="middle" fill="#8eb4ff" fontSize="12" letterSpacing="1.6">I/O DIE</text>
          <rect x="250" y="218" width="170" height="52" rx="8" fill="#0a0d12" stroke="rgba(142,180,255,0.4)" />
          <text x="335" y="249" textAnchor="middle" fill="#e7eef6" fontSize="14">PCIe Gen6 x16</text>
          <rect x="250" y="282" width="170" height="52" rx="8" fill="#0a0d12" stroke="rgba(142,180,255,0.4)" />
          <text x="335" y="313" textAnchor="middle" fill="#e7eef6" fontSize="14">CXL 3.1</text>
          <rect x="250" y="346" width="170" height="52" rx="8" fill="#0a0d12" stroke="rgba(142,180,255,0.4)" />
          <text x="335" y="377" textAnchor="middle" fill="#e7eef6" fontSize="14">UCIe-E → Stallion</text>
        </g>

        <g>
          <rect x="480" y="88" width="250" height="444" rx="12" fill="#1a140c" stroke="#e8a04a" />
          <text x="605" y="118" textAnchor="middle" fill="#e8a04a" fontSize="12" letterSpacing="1.6">STALLION COMPUTE</text>
          {[
            ["Command processor", 140],
            ["2D mesh NoC", 204],
            ["SM array", 268],
            ["Partitioned L2", 332],
            ["Refresh hint engine", 396],
            ["Sidecar APB / UCIe", 460],
          ].map(([label, y]) => (
            <g key={label}>
              <rect x="500" y={Number(y)} width="210" height="50" rx="8" fill="#0a0d12" stroke="rgba(232,160,74,0.4)" />
              <text x="605" y={Number(y) + 31} textAnchor="middle" fill="#e7eef6" fontSize="14">
                {label}
              </text>
            </g>
          ))}
        </g>

        <g>
          <rect x="770" y="88" width="250" height="280" rx="12" fill="#0c1a19" stroke="#5ee0d2" />
          <text x="895" y="118" textAnchor="middle" fill="#5ee0d2" fontSize="12" letterSpacing="1.6">GALLIUM-HX CHIPLET</text>
          {[
            ["Credit / QoS plane", 140],
            ["32-ch remap", 196],
            ["RAS / DRFM policy", 252],
            ["H4 PHY wrapper", 308],
          ].map(([label, y]) => (
            <g key={label}>
              <rect x="790" y={Number(y)} width="210" height="44" rx="8" fill="#0a0d12" stroke="rgba(94,224,210,0.4)" />
              <text x="895" y={Number(y) + 28} textAnchor="middle" fill="#e7eef6" fontSize="13">
                {label}
              </text>
            </g>
          ))}
        </g>

        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x={770 + i * 64} y="400" width="54" height="150" rx="6" fill="#121821" stroke="#5ee0d2" />
            <text x={797 + i * 64} y="480" textAnchor="middle" fill="#e7eef6" fontSize="12" writingMode="tb">
              cube {i}
            </text>
          </g>
        ))}

        <path d="M190 300 H230" stroke="#8eb4ff" strokeWidth="2" />
        <path d="M440 300 H480" stroke="#8eb4ff" strokeWidth="2" />
        <path d="M730 356 H770" stroke="#5ee0d2" strokeWidth="2.4" />
        <text x="748" y="346" fill="#5ee0d2" fontSize="11">HBM data</text>
        <path d="M730 484 H790" stroke="#e8a04a" strokeWidth="1.6" strokeDasharray="5 4" />
        <text x="736" y="508" fill="#e8a04a" fontSize="11">sidecar</text>
        <path d="M895 368 V400" stroke="#5ee0d2" strokeWidth="2" />
      </svg>
      <figcaption className="caption">
        Flagship attach. Gallium-HX is a separate chiplet. Cubes are partner DRAM stacks. UCIe never carries HBM beats.
      </figcaption>
      <div className="diagram-legend">
        <span><i style={{ background: "#8eb4ff" }} />Host / I/O</span>
        <span><i style={{ background: "#e8a04a" }} />Stallion</span>
        <span><i style={{ background: "#5ee0d2" }} />Gallium + cubes</span>
      </div>
    </figure>
  );
}
