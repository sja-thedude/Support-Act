export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <rect width="32" height="32" rx="9" fill="var(--ink)" />
      <path d="M7 22c4-1 5-9 9-9s5 6 9 4" fill="none" stroke="var(--accent)" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="7" cy="22" r="2.4" fill="var(--paper)" />
      <circle cx="16" cy="13" r="2.4" fill="var(--paper)" />
      <circle cx="25" cy="17" r="2.4" fill="var(--accent)" />
    </svg>
  );
}
