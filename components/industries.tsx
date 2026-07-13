import {
  Stethoscope,
  Building2,
  Scale,
  Utensils,
  ShoppingCart,
  Truck,
  GraduationCap,
  Calculator,
  Hammer,
  Scissors,
  House,
  LayoutGrid,
} from 'lucide-react'

const INDUSTRIES = [
  { icon: Stethoscope, name: 'Медицина и стоматология', auto: 'бот-ресепшн · запись' },
  { icon: Building2, name: 'Недвижимость / PropTech', auto: 'бот + мини-CRM' },
  { icon: Scale, name: 'Юристы и миграция', auto: 'документооборот' },
  { icon: Utensils, name: 'Рестораны и HoReCa', auto: 'заказы · аллергены' },
  { icon: ShoppingCart, name: 'E-commerce и ритейл', auto: 'карточки · поддержка' },
  { icon: Truck, name: 'Логистика и сервис', auto: 'обработка документов' },
  { icon: GraduationCap, name: 'Образование', auto: 'запись · напоминания' },
  { icon: Calculator, name: 'Бухгалтерия (gestorías)', auto: 'извлечение из счетов' },
  { icon: Hammer, name: 'Строительство и ремонт', auto: 'сметы · КП · нормы' },
  { icon: Scissors, name: 'Бьюти и здоровье', auto: 'запись · отзывы' },
  { icon: House, name: 'Гостиницы и туризм', auto: 'реестры · SES' },
  { icon: LayoutGrid, name: 'Релокейт-услуги', auto: 'боты + CRM + контент' },
]

export function Industries() {
  return (
    <section id="industries" className="relative overflow-hidden bg-silver py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <span className="mono-label text-electric">Витрина · маркетплейс автоматизаций</span>
          <h2 className="mt-4 text-balance font-display text-4xl font-bold uppercase leading-[0.95] text-graphite md:text-6xl">
            Под каждую отрасль — своя автоматизация
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-graphite/70">
            Стройке — сметы, юристам — документооборот, клиникам — бот-ресепшн,
            ритейлу — карточки и поддержка, логистике — документы.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-graphite/12 bg-graphite/10 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon
            return (
              <div
                key={ind.name}
                className="group flex items-center gap-4 bg-card p-6 transition-colors hover:bg-glass"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-graphite/5 text-graphite transition-colors group-hover:bg-electric group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <div className="min-w-0">
                  <p className="truncate font-semibold text-graphite">{ind.name}</p>
                  <p className="mono-label mt-1 text-graphite/50">{ind.auto}</p>
                </div>
              </div>
            )
          })}
        </div>

        <p className="mono-label mt-6 text-graphite/50">
          ES 12+1 · RU сокращённый 9+1 · EN лайт 4+1 · FinTech / GovTech / IoT — решение по запросу
        </p>
      </div>
    </section>
  )
}
