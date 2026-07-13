import { LitcoreMark } from '@/components/litcore-mark'

const PALETTE = [
  { name: 'Серебро', hex: '#E9EBEE', text: '#0E1116' },
  { name: 'Стекло', hex: '#FFFFFF', text: '#0E1116' },
  { name: 'Графит', hex: '#0E1116', text: '#E9EBEE' },
  { name: 'Электрик', hex: '#2333E0', text: '#FFFFFF' },
  { name: 'Циан', hex: '#39D5E8', text: '#0B0D12' },
  { name: 'Тьма', hex: '#0B0D12', text: '#E9EBEE' },
]

const COLS = [
  {
    title: 'Автоматизация',
    links: ['Процессы с ИИ', 'Ассистенты и агенты', 'Боты ресепшн', 'Документы', 'Интеграции / RPA', 'CRM / ERP'],
  },
  {
    title: 'Отрасли',
    links: ['Клиники', 'Недвижимость', 'Юристы', 'Рестораны', 'E-commerce', 'Релокейт'],
  },
  {
    title: 'Компания',
    links: ['О litcore', 'Демо', 'Цены', 'Кейсы', 'Блог', 'Контакты'],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-darkness text-silver">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        {/* палитра-стайлборд */}
        <div className="grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-6">
          {PALETTE.map((c) => (
            <div key={c.name} className="p-4" style={{ background: c.hex, color: c.text }}>
              <span className="mono-label block text-[0.6rem] opacity-80">{c.name}</span>
              <span className="mono-label mt-6 block text-[0.6rem]">{c.hex}</span>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <LitcoreMark className="h-6 w-6 text-cyan" />
              <span className="font-display text-lg font-bold">
                litcore<span className="text-electric">.ai</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-silver/60">
              Автоматизируем бизнес-процессы с ИИ. Испания + русскоязычные релоканты.
              Ваш процесс → наша автоматизация → измеримый результат.
            </p>
            <p className="mono-label mt-5 text-silver/40">FIT: RELO + EN / премиум</p>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h3 className="mono-label text-cyan">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-silver/65 transition-colors hover:text-silver"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="mono-label text-silver/40">
            litcore.ai — стайл-борд · 03 СПЕКТР · кириллица и контраст AA
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {['Privacidad', 'Cookies', 'Aviso legal'].map((l) => (
              <a key={l} href="#" className="mono-label text-silver/50 transition-colors hover:text-silver">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
