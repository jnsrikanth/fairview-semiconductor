export function ChannelMap() {
  return (
    <figure className="diagram">
      <svg viewBox="0 0 980 420" role="img" aria-labelledby="ch-title">
        <title id="ch-title">JESD270-4 channel and pseudo-channel map</title>
        <rect x="12" y="12" width="956" height="396" rx="14" fill="#0b0f15" stroke="rgba(180,210,230,0.16)" />
        <text x="40" y="44" fill="#6f7c8d" fontSize="12" letterSpacing="2">ONE PARTNER CUBE · 32 × 64 b = 2048 b · 64 PSEUDO-CHANNELS</text>
        <rect x="40" y="70" width="180" height="300" rx="12" fill="#0c1a19" stroke="#5ee0d2" />
        <text x="130" y="230" textAnchor="middle" fill="#e7eef6" fontSize="16">HBM4 cube</text>
        {[
          ["CH0 64b", 80],
          ["CH1 64b", 170],
          ["CH2–CH30", 260],
          ["CH31 64b", 350],
        ].map(([label, y]) => (
          <g key={label}>
            <rect x="260" y={y} width="160" height="62" rx="8" fill="#121821" stroke="#5ee0d2" />
            <text x="340" y={Number(y) + 36} textAnchor="middle" fill="#e7eef6" fontSize="14">{label}</text>
            <path d={`M220 220 V${Number(y) + 31} H260`} stroke="#5ee0d2" strokeWidth="1.4" />
          </g>
        ))}
        {[
          [80, "PC0", "PC1"],
          [170, "PC0", "PC1"],
          [350, "PC0", "PC1"],
        ].map(([y, a, b]) => (
          <g key={String(y)}>
            <rect x="470" y={Number(y)} width="110" height="28" rx="6" fill="#0a0d12" stroke="rgba(94,224,210,0.35)" />
            <rect x="470" y={Number(y) + 34} width="110" height="28" rx="6" fill="#0a0d12" stroke="rgba(94,224,210,0.35)" />
            <text x="525" y={Number(y) + 19} textAnchor="middle" fill="#a7b4c4" fontSize="12">{a}</text>
            <text x="525" y={Number(y) + 53} textAnchor="middle" fill="#a7b4c4" fontSize="12">{b}</text>
            <path d={`M420 ${Number(y) + 31} H470`} stroke="#5ee0d2" strokeWidth="1.2" />
          </g>
        ))}
        <rect x="640" y="150" width="300" height="140" rx="10" fill="#121821" stroke="rgba(180,210,230,0.2)" />
        <text x="790" y="190" textAnchor="middle" fill="#e7eef6" fontSize="14">Virtualization sits above</text>
        <text x="790" y="216" textAnchor="middle" fill="#a7b4c4" fontSize="13">virt_ch → {"{"}cube, phys_ch{"}"}</text>
        <text x="790" y="242" textAnchor="middle" fill="#a7b4c4" fontSize="13">Stack always sees CH0–CH31</text>
        <text x="790" y="268" textAnchor="middle" fill="#6f7c8d" fontSize="12">JEDEC map is not a FairView claim</text>
      </svg>
      <figcaption className="caption">
        Per-channel independence is a JEDEC property. Cross-channel stalls are legal only for cube-level refresh, thermal, and RAS.
      </figcaption>
    </figure>
  );
}
