export function ControllerDiagram() {
  return (
    <figure className="diagram">
      <svg viewBox="0 0 1000 480" role="img" aria-labelledby="ctl-title">
        <title id="ctl-title">Gallium-HX logical blocks</title>
        <rect x="12" y="12" width="976" height="456" rx="14" fill="#0b0f15" stroke="rgba(180,210,230,0.16)" />
        <text x="36" y="44" fill="#6f7c8d" fontSize="12" letterSpacing="2">GALLIUM-HX · CREDIT SHELL · NO ANALOG PHY</text>
        {[
          [36, 80, 200, 70, "Stallion L2 / NoC", "#e8a04a"],
          [36, 180, 200, 70, "Hint port", "#e8a04a"],
          [36, 280, 200, 70, "Thermal sensors", "#8eb4ff"],
          [280, 80, 200, 70, "Ingress / PC buffers", "#5ee0d2"],
          [280, 180, 200, 70, "Refresh arbiter", "#5ee0d2"],
          [280, 280, 200, 70, "RAS policy", "#5ee0d2"],
          [524, 130, 200, 70, "Per-channel scheduler", "#5ee0d2"],
          [524, 230, 200, 70, "Shared credit QoS", "#5ee0d2"],
          [768, 80, 196, 70, "Virtual CH remap", "#5ee0d2"],
          [768, 170, 196, 70, "Attach mode mux", "#5ee0d2"],
          [768, 260, 196, 58, "270-4 2048b PHY-IF", "#5ee0d2"],
          [768, 332, 196, 58, "330-4 512b PHY-IF", "#5ee0d2"],
        ].map(([x, y, w, h, label, stroke]) => (
          <g key={String(label)}>
            <rect x={x} y={y} width={w} height={h} rx="10" fill="#121821" stroke={String(stroke)} />
            <text x={Number(x) + Number(w) / 2} y={Number(y) + Number(h) / 2 + 5} textAnchor="middle" fill="#e7eef6" fontSize="13">
              {label}
            </text>
          </g>
        ))}
        <path d="M236 115 H280" stroke="#e8a04a" strokeWidth="1.6" />
        <path d="M236 215 H280" stroke="#e8a04a" strokeWidth="1.6" />
        <path d="M236 315 H280" stroke="#8eb4ff" strokeWidth="1.6" />
        <path d="M480 115 H524 V165" stroke="#5ee0d2" strokeWidth="1.6" />
        <path d="M480 215 H524" stroke="#5ee0d2" strokeWidth="1.6" />
        <path d="M724 165 H768" stroke="#5ee0d2" strokeWidth="1.6" />
        <path d="M724 265 H768" stroke="#5ee0d2" strokeWidth="1.6" />
      </svg>
      <figcaption className="caption">
        Dual-mode mux changes pin muxing, not credit counters. Bank-conflict timing stays packed or empty — never invented.
      </figcaption>
    </figure>
  );
}
