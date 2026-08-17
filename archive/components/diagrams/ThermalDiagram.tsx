export function ThermalDiagram() {
  return (
    <figure className="diagram">
      <svg viewBox="0 0 980 340" role="img" aria-labelledby="th-title">
        <title id="th-title">Fused thermal class across cube, controller, and GPU</title>
        <rect x="12" y="12" width="956" height="316" rx="14" fill="#0b0f15" stroke="rgba(180,210,230,0.16)" />
        {[
          [40, 80, "Cube sensor"],
          [40, 160, "Controller sensor"],
          [40, 240, "Stallion SM sensor"],
        ].map(([x, y, label]) => (
          <g key={String(label)}>
            <rect x={x} y={y} width="200" height="56" rx="10" fill="#121821" stroke="#8eb4ff" />
            <text x={Number(x) + 100} y={Number(y) + 34} textAnchor="middle" fill="#e7eef6" fontSize="14">{label}</text>
            <path d={`M240 ${Number(y) + 28} H320`} stroke="#8eb4ff" strokeWidth="1.5" />
          </g>
        ))}
        <rect x="320" y="132" width="170" height="80" rx="10" fill="#121821" stroke="#5ee0d2" />
        <text x="405" y="178" textAnchor="middle" fill="#e7eef6" fontSize="15">Thermal fuse</text>
        <rect x="540" y="132" width="170" height="80" rx="10" fill="#0c1a19" stroke="#5ee0d2" />
        <text x="625" y="168" textAnchor="middle" fill="#5ee0d2" fontSize="13">CLASS 0–3</text>
        <text x="625" y="190" textAnchor="middle" fill="#e7eef6" fontSize="14">cool → hot</text>
        <rect x="760" y="48" width="180" height="56" rx="10" fill="#121821" stroke="#5ee0d2" />
        <text x="850" y="82" textAnchor="middle" fill="#e7eef6" fontSize="13">Refresh weight</text>
        <rect x="760" y="128" width="180" height="56" rx="10" fill="#121821" stroke="#5ee0d2" />
        <text x="850" y="162" textAnchor="middle" fill="#e7eef6" fontSize="13">QoS demote</text>
        <rect x="760" y="208" width="180" height="56" rx="10" fill="#1a140c" stroke="#e8a04a" />
        <text x="850" y="242" textAnchor="middle" fill="#e7eef6" fontSize="13">Stallion clock req</text>
        <path d="M490 172 H540" stroke="#5ee0d2" strokeWidth="1.6" />
        <path d="M710 172 H760" stroke="#5ee0d2" strokeWidth="1.6" />
        <path d="M710 172 V76 H760" stroke="#5ee0d2" strokeWidth="1.4" />
        <path d="M710 172 V236 H760" stroke="#e8a04a" strokeWidth="1.4" />
      </svg>
      <figcaption className="caption">
        Class 3 requests a Stallion clock re-lock. It is not a silent Vdd change and not a numeric Tj max.
      </figcaption>
    </figure>
  );
}
