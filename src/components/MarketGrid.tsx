import { MARKETS } from "@/content/story";

export function MarketGrid() {
  return (
    <div className="market-grid-container">
      {MARKETS.map((market) => (
        <article className="market-card" key={market.slug}>
          <div className="market-card-top">
            <span className="market-badge">{market.badge}</span>
            <span className="market-timeline">{market.when}</span>
          </div>
          <h3 className="market-title">{market.title}</h3>
          <div className="market-highlight-box">
            <span className="highlight-label">Architectural Lock:</span>
            <span className="highlight-value">{market.highlight}</span>
          </div>
          <p className="market-body">{market.body}</p>
        </article>
      ))}
    </div>
  );
}
