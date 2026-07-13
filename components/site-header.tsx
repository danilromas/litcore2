import { LitcoreMark } from '@/components/litcore-mark'

const NAV = [
  { label: 'Автоматизация', href: '#core' },
  { label: 'Услуги', href: '#services' },
  { label: 'Отрасли', href: '#industries' },
  { label: 'Демо', href: '#demo' },
  { label: 'Цены', href: '#pricing' },
]

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <a
          href="#top"
          className="glass flex items-center gap-2.5 rounded-full px-4 py-2"
          aria-label="litcore.ai — на главную"
        >
          <LitcoreMark className="h-5 w-5 text-electric" />
          <span className="font-display text-sm font-bold tracking-tight text-graphite">
            litcore<span className="text-electric">.ai</span>
          </span>
        </a>

        <nav className="glass hidden items-center gap-1 rounded-full px-2 py-1.5 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="chroma rounded-full px-4 py-1.5 text-sm font-medium text-graphite/70 transition-colors hover:text-graphite"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <span className="mono-label glass hidden rounded-full px-3 py-2.5 text-graphite/60 md:inline-block">
            ES · RU · EN
          </span>
          <a
            href="#demo"
            className="chroma group flex items-center gap-2 rounded-full bg-electric px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Probar el demo
            <span className="mono-label text-cyan opacity-80 transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>
      </div>
    </header>
  )
}
