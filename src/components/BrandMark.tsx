export function BrandMark({ className = "brand-mark" }: { className?: string }) {
  return (
    <div className={`brand-mark-box ${className}`}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect width="24" height="24" rx="5" fill="#0088ff" />
        <circle cx="12" cy="12" r="5.5" stroke="#ffffff" strokeWidth="2" strokeDasharray="16 4" />
        <circle cx="12" cy="12" r="2.2" fill="#ffffff" />
      </svg>
    </div>
  );
}
