import { LensDiagram } from '@/components/lens-diagram'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      <div className="grid-optic absolute inset-0 -z-10" aria-hidden />
      <div
        aria-hidden
        className="absolute -right-40 top-10 -z-10 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, color-mix(in srgb, var(--cyan) 55%, transparent), transparent 70%)',
        }}
      />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* верхняя техно-строка */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-graphite/15 pt-4">
          <span className="mono-label text-graphite/60">
            Направление 03 — «Спектр»
          </span>
          <span className="mono-label text-graphite/60">
            Территория: свет / оптика · LIT = освещённый
          </span>
        </div>

        <div className="grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr]">
          {/* левая колонка — заголовок */}
          <div>
            <h1 className="font-display text-[15vw] font-extrabold uppercase leading-[0.86] tracking-tight text-graphite sm:text-7xl md:text-8xl">
              <span className="chroma block">Свет</span>
              <span className="chroma block">сквозь</span>
              <span className="chroma block text-electric">процесс</span>
            </h1>

            <p className="mt-7 max-w-md text-pretty text-lg leading-relaxed text-graphite/80">
              Хаос заявок на входе — сфокусированный результат на выходе.
              Автоматизируем бизнес-процессы с ИИ:{' '}
              <span className="font-semibold text-graphite">
                ваш процесс → наша автоматизация → измеримый результат.
              </span>
            </p>
            <p className="mono-label mt-3 text-graphite/50">Del caos, al foco.</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#demo"
                className="chroma rounded-full bg-electric px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Probar el demo
              </a>
              <a
                href="#pricing"
                className="rounded-full border border-graphite/25 bg-glass px-6 py-3.5 text-sm font-semibold text-graphite transition-colors hover:border-graphite/50"
              >
                Ver precios
              </a>
            </div>
          </div>

          {/* правая колонка — линза */}
          <div className="glass relative rounded-xl p-4 md:p-6">
            <div className="flex items-center justify-between">
              <span className="mono-label text-graphite/55">Вход: ручной хаос</span>
              <span className="mono-label text-electric">Выход: результат 99,8%</span>
            </div>
            <LensDiagram className="mt-2 w-full" />
            <div className="mt-2 flex items-center justify-center gap-2 border-t border-graphite/10 pt-3">
              <span className="h-1.5 w-1.5 rounded-full bg-electric" />
              <span className="mono-label text-graphite/60">Ядро litcore — линза</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
