import { HISTORICAL_GENESIS } from "@/content/story";

export function GenesisTimeline() {
  return (
    <div className="genesis-timeline">
      <div className="timeline-track">
        {HISTORICAL_GENESIS.map((item, idx) => (
          <div className="timeline-node" key={item.era}>
            <div className="node-marker" style={{ borderColor: item.color }}>
              <span className="node-pulse" style={{ backgroundColor: item.color }}></span>
            </div>
            <div className="node-card">
              <div className="node-header">
                <span className="node-era" style={{ color: item.color }}>
                  {item.era}
                </span>
                <span className="node-tag">{item.tag}</span>
              </div>
              <h3 className="node-title">{item.name}</h3>
              <p className="node-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
