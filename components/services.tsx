import {
  Workflow,
  Bot,
  MessageSquare,
  FileText,
  Network,
  Database,
  ArrowUpRight,
} from 'lucide-react'

const PILLARS = [
  {
    code: 'A0',
    icon: Workflow,
    title: 'Автоматизация процессов',
    desc: 'Найдём рутину в ваших процессах и снимем её с людей: аудит → внедрение → поддержка.',
    featured: true,
  },
  {
    code: 'A1',
    icon: Bot,
    title: 'ИИ-ассистенты и агенты',
    desc: 'Цифровые сотрудники под задачу: отвечают, готовят, проверяют — под вашим контролем.',
  },
  {
    code: 'A2',
    icon: MessageSquare,
    title: 'Боты: ресепшн / лиды / поддержка',
    desc: 'Заявки, запись и ответы 24/7 в WhatsApp, Telegram и на сайте. Ядро «бот-ресепшн».',
  },
  {
    code: 'A3',
    icon: FileText,
    title: 'Документы и документооборот',
    desc: 'Сметы, счета, письма и КП — за минуты вместо часов.',
  },
  {
    code: 'A4',
    icon: Network,
    title: 'Интеграции и RPA',
    desc: 'Свяжем сайт, мессенджеры, CRM и учёт — данные ходят сами, без ручного переноса.',
  },
  {
    code: 'A5',
    icon: Database,
    title: 'CRM / ERP / BPM',
    desc: 'Продажи, сервис и учёт в одной системе — внедряем под ваши процессы, а не наоборот.',
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="mono-label text-electric">Каталог · семейство A — ядро</span>
            <h2 className="mt-4 text-balance font-display text-4xl font-bold uppercase leading-[0.95] text-graphite md:text-6xl">
              Пиллары автоматизации
            </h2>
          </div>
          <p className="max-w-sm text-pretty leading-relaxed text-graphite/70">
            Сайты и приложения — каналы доставки. Контент и данные — топливо.
            Дизайн и 3D — усилитель. В центре — процессы.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p) => {
            const Icon = p.icon
            return (
              <article
                key={p.code}
                className={`group relative overflow-hidden rounded-lg border p-7 transition-transform duration-300 hover:-translate-y-1 ${
                  p.featured
                    ? 'border-transparent bg-electric text-primary-foreground'
                    : 'border-graphite/12 bg-card text-graphite'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-md ${
                      p.featured ? 'bg-white/15 text-white' : 'bg-graphite/5 text-electric'
                    }`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <span
                    className={`mono-label ${p.featured ? 'text-cyan' : 'text-graphite/40'}`}
                  >
                    {p.code}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-xl font-semibold leading-tight">
                  {p.title}
                </h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    p.featured ? 'text-white/80' : 'text-graphite/65'
                  }`}
                >
                  {p.desc}
                </p>

                <span
                  className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${
                    p.featured ? 'text-cyan' : 'text-electric'
                  }`}
                >
                  Подробнее
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2}
                  />
                </span>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
