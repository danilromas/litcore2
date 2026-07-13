const FORMULA = [
  {
    tag: 'Процесс',
    accent: 'text-silver/50',
    title: 'Администратор клиники отвечает и записывает вручную',
    note: 'вечером заявки теряются',
  },
  {
    tag: 'Автоматизация',
    accent: 'text-cyan',
    title: 'Бот-ресепшн: ответы, запись, напоминания',
    note: 'ядро A2 · WhatsApp / Telegram / сайт',
  },
  {
    tag: 'Результат',
    accent: 'text-electric',
    title: 'Запись 24/7, меньше неявок',
    note: '−N часов рутины в неделю',
  },
]

export function CoreSection() {
  return (
    <section id="core" className="relative overflow-hidden bg-darkness py-24 md:py-32">
      <div className="grid-optic-dark absolute inset-0 opacity-60" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <span className="mono-label text-cyan">Ядро litcore · линза процессов</span>
          <h2 className="mt-4 text-balance font-display text-4xl font-bold uppercase leading-[0.95] text-silver md:text-6xl">
            Не студия сайтов.
            <br />
            <span className="text-electric">Автоматизация</span> процессов с ИИ.
          </h2>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-silver/70">
            Клиент приходит не за «сайтом», а за освобождёнными часами и не потерянными
            заявками. Каждый оффер строится одной тройкой — синтаксис всего litcore.
          </p>
        </div>

        {/* формула процесс → автоматизация → результат */}
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {FORMULA.map((step, i) => (
            <div key={step.tag} className="glass-dark relative rounded-lg p-6">
              <div className="flex items-center justify-between">
                <span className={`mono-label ${step.accent}`}>{step.tag}</span>
                <span className="font-mono text-xs text-silver/40">0{i + 1}</span>
              </div>
              <p className="mt-6 text-balance text-xl font-semibold leading-snug text-silver">
                {step.title}
              </p>
              <p className="mt-3 text-sm text-silver/50">{step.note}</p>
              {i < FORMULA.length - 1 && (
                <span
                  aria-hidden
                  className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 font-mono text-cyan md:block"
                >
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        {/* нижняя линия-палитра */}
        <div className="mt-16 flex flex-wrap items-center gap-6 border-t border-white/10 pt-8">
          {[
            ['40–120', 'часов рутины / мес'],
            ['5,6×', 'разрыв адопции ИИ у МСП'],
            ['0', 'RU-конкурентов с ИИ локально'],
            ['02.08.26', 'маркировка ИИ · EU AI Act'],
          ].map(([big, small]) => (
            <div key={small} className="flex flex-col">
              <span className="font-display text-3xl font-bold text-silver">{big}</span>
              <span className="mono-label mt-1 text-silver/45">{small}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
