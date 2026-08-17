import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap page-hero stack">
      <p className="kicker">404</p>
      <h1>This path is not in the lock table.</h1>
      <p className="lede">The page does not exist. Return to the package or pick a series.</p>
      <div className="hero-actions">
        <Link className="btn btn-primary" href="/">
          Home
        </Link>
        <Link className="btn btn-ghost" href="/products">
          Products
        </Link>
      </div>
    </div>
  );
}
