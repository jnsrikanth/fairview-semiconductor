export function BrandMark({ className = "brand-mark" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <rect x="3" y="3" width="26" height="26" rx="4" fill="none" stroke="url(#fv-stroke)" strokeWidth="1.6" />
      <rect x="8" y="8" width="16" height="16" rx="2.2" fill="none" stroke="url(#fv-stroke)" strokeWidth="1.1" opacity="0.85" />
      <circle cx="16" cy="16" r="3.2" fill="none" stroke="url(#fv-stroke)" strokeWidth="1.3" />
      <defs>
        <linearGradient id="fv-stroke" x1="4" y1="4" x2="28" y2="28">
          <stop stopColor="#5ee0d2" />
          <stop offset="1" stopColor="#e8a04a" />
        </linearGradient>
      </defs>
    </svg>
  );
}
