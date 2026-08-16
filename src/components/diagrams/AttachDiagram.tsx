export function AttachDiagram() {
  return (
    <figure className="diagram">
      <svg viewBox="0 0 1000 280" role="img" aria-labelledby="at-title">
        <title id="at-title">Three physically distinct attaches</title>
        <rect x="12" y="12" width="976" height="256" rx="14" fill="#0b0f15" stroke="rgba(180,210,230,0.16)" />
        {[
          [40, "Host CPU"],
          [240, "I/O die"],
          [440, "Stallion"],
          [640, "Gallium-HX"],
          [840, "HBM cubes"],
        ].map(([x, label], i) => (
          <g key={String(label)}>
            <rect x={Number(x)} y="90" width="140" height="72" rx="10" fill="#121821" stroke={i >= 3 ? "#5ee0d2" : i === 2 ? "#e8a04a" : "#8eb4ff"} />
            <text x={Number(x) + 70} y="132" textAnchor="middle" fill="#e7eef6" fontSize="14">{label}</text>
            {i < 4 && <path d={`M${Number(x) + 140} 126 H${Number(x) + 200}`} stroke="#a7b4c4" strokeWidth="1.6" markerEnd="url(#arr)" />}
          </g>
        ))}
        <text x="180" y="80" textAnchor="middle" fill="#8eb4ff" fontSize="11">PCIe / CXL</text>
        <text x="380" y="80" textAnchor="middle" fill="#8eb4ff" fontSize="11">UCIe MMIO</text>
        <text x="580" y="80" textAnchor="middle" fill="#5ee0d2" fontSize="11">HBM data</text>
        <text x="780" y="80" textAnchor="middle" fill="#5ee0d2" fontSize="11">270-4 / 330-4</text>
        <path d="M510 162 C510 210 710 210 710 162" fill="none" stroke="#e8a04a" strokeWidth="1.5" strokeDasharray="5 4" />
        <text x="610" y="228" textAnchor="middle" fill="#e8a04a" fontSize="12">sidecar · credit / hint / therm / RAS</text>
        <defs>
          <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill="#a7b4c4" />
          </marker>
        </defs>
      </svg>
      <figcaption className="caption">
        Mixing these identities is the modern “PHY inside the ARM core” mistake. Aggregate TB/s is owned only by Gallium.
      </figcaption>
    </figure>
  );
}
