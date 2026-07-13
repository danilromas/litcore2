export function Manifesto() {
  return (
    <section className="relative overflow-hidden bg-electric py-24 text-primary-foreground md:py-32">
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, color-mix(in srgb, var(--cyan) 80%, transparent), transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.5), transparent 45%)',
        }}
      />
      <div className="relative mx-auto max-w-5xl px-5 text-center md:px-8">
        <span className="mono-label text-cyan">La rutina, para la IA · El negocio, para ti</span>
        <h2 className="mt-6 text-balance font-display text-4xl font-extrabold uppercase leading-[0.92] md:text-7xl">
          Рутину — ИИ.
          <br />
          Бизнес — вам.
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-pretty text-lg leading-relaxed text-white/85">
          Цифровая крепость: стены — надёжная инженерия, гарнизон — ИИ-агенты на вахте 24/7,
          ворота — сайты и боты. Всё под одной стеной.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="#demo"
            className="chroma rounded-full bg-glass px-7 py-4 text-sm font-bold text-graphite transition-transform hover:-translate-y-0.5"
          >
            Probar el demo
          </a>
          <a
            href="#pricing"
            className="rounded-full border border-white/40 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Посчитать снятые часы
          </a>
        </div>
      </div>
    </section>
  )
}
