'use client'

import { useEffect, useRef, useState } from 'react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

const stats = [
    { value: 30, suffix: '+', label: 'Años de experiencia', sublabel: 'En los mercados financieros mexicanos' },
    { value: 3, suffix: '', label: 'Empresas del grupo', sublabel: 'Un ecosistema financiero completo' },
    { value: 4, suffix: '', label: 'Ciudades en México', sublabel: 'CDMX · GDL · MTY · CHI' },
]

function StatCounter({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0)
    const ref = useRef<HTMLDivElement>(null)
    const started = useRef(false)

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true
                    const duration = 1600
                    const start = performance.now()
                    const tick = (now: number) => {
                        const elapsed = now - start
                        const progress = Math.min(elapsed / duration, 1)
                        const eased = 1 - Math.pow(1 - progress, 3)
                        setCount(Math.round(eased * value))
                        if (progress < 1) requestAnimationFrame(tick)
                    }
                    requestAnimationFrame(tick)
                }
            },
            { threshold: 0.5 }
        )
        if (ref.current) obs.observe(ref.current)
        return () => obs.disconnect()
    }, [value])

    return (
        <div ref={ref} className="font-serif text-teal leading-none" style={{ fontSize: 'clamp(3.5rem, 7vw, 5.5rem)' }}>
            {count}{suffix}
        </div>
    )
}

export default function StatsSection() {
    return (
        <section
            id="estadisticas"
            className="grain-overlay relative section-padding bg-black overflow-hidden"
            aria-label="Estadísticas de Value Grupo Financiero"
        >
            {/* Background teal glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-teal/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <RevealOnScroll>
                        <span className="text-teal font-mono text-xs tracking-widest uppercase">
                            En números
                        </span>
                    </RevealOnScroll>
                    <RevealOnScroll delay={0.1}>
                        <h2
                            className="font-serif text-white mt-4 leading-[1.1] tracking-[-0.025em]"
                            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                        >
                            La confianza se construye con trayectoria
                        </h2>
                    </RevealOnScroll>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {stats.map((stat, i) => (
                        <RevealOnScroll key={stat.label} delay={i * 0.12}>
                            <div className="text-center p-8 rounded bg-charcoal/40 border border-white/6">
                                <StatCounter value={stat.value} suffix={stat.suffix} />
                                <p className="text-white font-medium mt-4 mb-1">{stat.label}</p>
                                <p className="text-ash text-sm font-mono">{stat.sublabel}</p>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    )
}
