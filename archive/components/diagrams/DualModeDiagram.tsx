export function DualModeDiagram() {
  return (
    <figure className="diagram">
      <svg viewBox="0 0 980 360" role="img" aria-labelledby="dm-title">
        <title id="dm-title">Dual-mode attach with one credit plane</title>
        <rect x="12" y="12" width="956" height="336" rx="14" fill="#0b0f15" stroke="rgba(180,210,230,0.16)" />
        <rect x="40" y="120" width="160" height="90" rx="10" fill="#1a140c" stroke="#e8a04a" />
        <text x="120" y="172" textAnchor="middle" fill="#e7eef6" fontSize="16">Stallion</text>
        <rect x="260" y="108" width="210" height="114" rx="10" fill="#0c1a19" stroke="#5ee0d2" />
        <text x="365" y="152" textAnchor="middle" fill="#5ee0d2" fontSize="13">GALLIUM-HX</text>
        <text x="365" y="176" textAnchor="middle" fill="#e7eef6" fontSize="15">one credit / QoS</text>
        <text x="365" y="198" textAnchor="middle" fill="#a7b4c4" fontSize="12">32 logical channels</text>
        <rect x="560" y="48" width="380" height="100" rx="10" fill="#121821" stroke="#5ee0d2" />
        <text x="750" y="90" textAnchor="middle" fill="#e7eef6" fontSize="15">Mode 270-4 · 2048-bit interposer PHY</text>
        <text x="750" y="114" textAnchor="middle" fill="#a7b4c4" fontSize="12">8.0 Gbps · 2.048 TB/s/stack</text>
        <rect x="560" y="200" width="380" height="100" rx="10" fill="#121821" stroke="rgba(94,224,210,0.45)" />
        <text x="750" y="242" textAnchor="middle" fill="#e7eef6" fontSize="15">Mode 330-4 · 512-bit organic PHY</text>
        <text x="750" y="266" textAnchor="middle" fill="#a7b4c4" fontSize="12">4:1 · identity 32 GT/s ↔ 2.048 TB/s</text>
        <path d="M200 165 H260" stroke="#e8a04a" strokeWidth="2" />
        <path d="M470 150 H560" stroke="#5ee0d2" strokeWidth="2" />
        <path d="M470 180 H530 V250 H560" stroke="#5ee0d2" strokeWidth="2" strokeDasharray="5 4" />
        <text x="40" y="40" fill="#6f7c8d" fontSize="12" letterSpacing="2">ATTACH MUX · FIRST TAPE-OUT STRAPS H4</text>
      </svg>
      <figcaption className="caption">
        Dual-mode changes PHY-IF width and serialization only. The credit plane, remap, RAS, and hint ports stay the same.
      </figcaption>
    </figure>
  );
}
