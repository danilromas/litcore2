import { DemoChat } from '@/components/demo-chat'
import { Check } from 'lucide-react'

const POINTS = [
  'Отвечает за 3 секунды — днём, ночью и в выходные',
  'Записывает, квалифицирует и напоминает — без администратора',
  'Пишет в CRM: ни одна заявка не теряется',
  'ES / RU / EN — под вашу аудиторию',
]

export function DemoSection() {
  return (
    <section id="demo" className="relative overflow-hidden bg-darkness py-24 md:py-32">
      <div className="grid-optic-dark absolute inset-0 opacity-50" aria-hidden />
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -z-0 h-80 w-80 -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, color-mix(in srgb, var(--electric) 70%, transparent), transparent 70%)',
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
        <div>
          <span className="mono-label text-cyan">Живая витрина · показываем, а не обещаем</span>
          <h2 className="mt-4 text-balance font-display text-4xl font-bold uppercase leading-[0.95] text-silver md:text-6xl">
            Tu clínica responde en 3 segundos.
          </h2>
          <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-silver/70">
            Каждая заявка — в фокусе: бот отвечает, CRM помнит. Попробуйте демо прямо
            здесь — задайте вопрос от лица клиента.
          </p>

          <ul className="mt-8 space-y-3">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3 text-silver/85">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-electric text-primary-foreground">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-sm leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#pricing"
              className="chroma rounded-full bg-electric px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Разобрать ваш процесс за 20 минут
            </a>
            <a
              href="#core"
              className="rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-silver transition-colors hover:border-white/50"
            >
              Как работает линза
            </a>
          </div>
        </div>

        <DemoChat />
      </div>
    </section>
  )
}
