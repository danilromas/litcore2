/** Знак litcore — линза: ядро, что фокусирует свет процесса. */
export function LitcoreMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16" cy="16" r="6.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M0 16H9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M22.5 16H32" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="16" cy="16" r="1.8" fill="currentColor" />
    </svg>
  )
}
