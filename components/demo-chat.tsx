'use client'

import { useEffect, useRef, useState } from 'react'
import { Send, Sparkles } from 'lucide-react'

type Msg = { role: 'bot' | 'user'; text: string }

const SCENARIOS: { q: string; a: string }[] = [
  {
    q: '¿Tienen cita libre mañana por la tarde?',
    a: 'Sí — mañana a las 17:30 o 18:15. ¿Le reservo una y le mando recordatorio por WhatsApp?',
  },
  {
    q: 'Хочу записаться на чистку зубов',
    a: 'Отлично! Ближайшее окно — четверг 12:00 или пятница 16:30. На чьё имя оформляем запись?',
  },
  {
    q: 'Сколько стоит консультация?',
    a: 'Первичная консультация — 30 €, входит осмотр и план лечения. Записать вас на удобное время?',
  },
]

const INITIAL: Msg[] = [
  { role: 'bot', text: 'litcore · бот-ресепшн клиники. Отвечаю за 3 секунды, 24/7. Спросите что-нибудь.' },
]

export function DemoChat() {
  const [messages, setMessages] = useState<Msg[]>(INITIAL)
  const [typing, setTyping] = useState(false)
  const [used, setUsed] = useState<number[]>([])
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, typing])

  function ask(i: number) {
    if (typing) return
    const { q, a } = SCENARIOS[i]
    setUsed((u) => [...u, i])
    setMessages((m) => [...m, { role: 'user', text: q }])
    setTyping(true)
    window.setTimeout(() => {
      setMessages((m) => [...m, { role: 'bot', text: a }])
      setTyping(false)
    }, 1100)
  }

  return (
    <div className="glass overflow-hidden rounded-xl">
      {/* окно-хром */}
      <div className="flex items-center gap-2 border-b border-graphite/10 bg-glass/60 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-display text-sm font-semibold text-graphite">
          litcore<span className="text-electric">.ai</span>
        </span>
        <span className="mono-label ml-auto flex items-center gap-1.5 text-graphite/50">
          <Sparkles className="h-3 w-3 text-electric" strokeWidth={2} />
          Вы общаетесь с ИИ
        </span>
      </div>

      {/* лента */}
      <div ref={scrollRef} className="h-80 space-y-3 overflow-y-auto bg-glass/40 p-4">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[80%] rounded-lg px-3.5 py-2.5 text-sm leading-relaxed ${
                m.role === 'user'
                  ? 'bg-electric text-primary-foreground'
                  : 'border border-graphite/10 bg-card text-graphite'
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
        {typing && (
          <div className="flex justify-start">
            <div className="flex items-center gap-1 rounded-lg border border-graphite/10 bg-card px-4 py-3">
              {[0, 1, 2].map((d) => (
                <span
                  key={d}
                  className="h-1.5 w-1.5 animate-bounce rounded-full bg-graphite/40"
                  style={{ animationDelay: `${d * 0.15}s` }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* быстрые вопросы */}
      <div className="border-t border-graphite/10 bg-glass/60 p-3">
        <div className="mb-2 flex flex-wrap gap-2">
          {SCENARIOS.map((s, i) => (
            <button
              key={i}
              type="button"
              onClick={() => ask(i)}
              disabled={used.includes(i) || typing}
              className="chroma rounded-full border border-graphite/20 bg-card px-3 py-1.5 text-xs font-medium text-graphite/80 transition-colors hover:border-electric hover:text-electric disabled:opacity-40"
            >
              {s.q.length > 34 ? s.q.slice(0, 32) + '…' : s.q}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 rounded-full border border-graphite/15 bg-card px-4 py-2.5">
          <span className="flex-1 truncate text-sm text-graphite/40">
            Нажмите вопрос выше — бот ответит…
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-electric text-primary-foreground">
            <Send className="h-4 w-4" strokeWidth={2} />
          </span>
        </div>
      </div>
    </div>
  )
}
