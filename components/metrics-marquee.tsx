const ITEMS = [
  'T+3s ответ',
  '100% заявок учтено',
  '24/7 без выходных',
  '−60…80% времени на документах',
  'запись 24/7',
  'меньше неявок',
  'CRM помнит всё',
  'GDPR · EU AI Act',
  'ES / RU / EN',
  'setup + подписка',
]

export function MetricsMarquee() {
  return (
    <section aria-label="Ключевые показатели" className="border-y border-graphite/15 bg-darkness py-4">
      <div className="relative flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10" data-flow>
          {[...ITEMS, ...ITEMS].map((item, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="mono-label whitespace-nowrap text-silver/80">{item}</span>
              <span className="h-1 w-1 rounded-full bg-cyan" />
            </span>
          ))}
        </div>
        <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10" aria-hidden data-flow>
          {[...ITEMS, ...ITEMS].map((item, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="mono-label whitespace-nowrap text-silver/80">{item}</span>
              <span className="h-1 w-1 rounded-full bg-cyan" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
