import { Check } from 'lucide-react'

const PLANS = [
  {
    name: 'Старт',
    tagline: 'Первый цифровой сотрудник',
    price: 'от 490 €',
    period: 'setup + от 150 €/мес',
    features: [
      'Один бот-ресепшн (WhatsApp / TG / сайт)',
      'Сценарии под вашу отрасль',
      'Запись и напоминания',
      'Метка ИИ по EU AI Act',
    ],
    featured: false,
  },
  {
    name: 'Бизнес',
    tagline: 'Автоматизация процессов',
    price: 'от 1 500 €',
    period: 'setup + от 300 €/мес',
    features: [
      'Всё из «Старт»',
      'Интеграция с CRM и учётом',
      'Генерация документов / КП / смет',
      'Аналитика и дашборд',
      'Поддержка и развитие',
    ],
    featured: true,
  },
  {
    name: 'Крепость',
    tagline: 'Полный цикл под ключ',
    price: 'по запросу',
    period: 'выделенная команда',
    features: [
      'Всё из «Бизнес»',
      'ИИ-агенты и RPA',
      'ERP / BPM внедрение',
      'White-label и dedicated team',
      'SLA · GDPR by-design',
    ],
    featured: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="grid-optic absolute inset-0 -z-10" aria-hidden />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <span className="mono-label text-electric">Цены и пакеты · ИИ = setup + подписка</span>
          <h2 className="mt-4 text-balance font-display text-4xl font-bold uppercase leading-[0.95] text-graphite md:text-6xl">
            Старт · Бизнес · Крепость
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-graphite/70">
            Считаем в снятых часах и не потерянных заявках, а не в страницах.
            Гранты — «проверим софинансирование», не гарантия.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-xl border p-8 ${
                plan.featured
                  ? 'border-transparent bg-graphite text-silver shadow-2xl lg:-translate-y-4'
                  : 'border-graphite/12 bg-card text-graphite'
              }`}
            >
              {plan.featured && (
                <span className="mono-label absolute -top-3 left-8 rounded-full bg-electric px-3 py-1 text-primary-foreground">
                  Популярный
                </span>
              )}
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-2xl font-bold">{plan.name}</h3>
              </div>
              <p
                className={`mt-1 text-sm ${plan.featured ? 'text-silver/60' : 'text-graphite/55'}`}
              >
                {plan.tagline}
              </p>

              <div className="mt-6">
                <span className="font-display text-4xl font-extrabold">{plan.price}</span>
                <p
                  className={`mono-label mt-2 ${
                    plan.featured ? 'text-cyan' : 'text-graphite/50'
                  }`}
                >
                  {plan.period}
                </p>
              </div>

              <ul className="mt-7 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        plan.featured ? 'text-cyan' : 'text-electric'
                      }`}
                      strokeWidth={2.5}
                    />
                    <span className={plan.featured ? 'text-silver/85' : 'text-graphite/75'}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#demo"
                className={`chroma mt-8 rounded-full px-6 py-3.5 text-center text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                  plan.featured
                    ? 'bg-electric text-primary-foreground'
                    : 'border border-graphite/25 text-graphite hover:border-graphite/50'
                }`}
              >
                Обсудить проект
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
