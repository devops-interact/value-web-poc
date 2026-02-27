'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, Eye, HeartHandshake } from 'lucide-react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import Button from '@/components/ui/Button'

const values = [
    { icon: Shield, label: 'Honestidad', desc: 'Actuamos con transparencia e integridad en cada operación.' },
    { icon: Eye, label: 'Transparencia', desc: 'Comunicación clara y directa con nuestros clientes.' },
    { icon: HeartHandshake, label: 'Servicio', desc: 'Compromiso total con el bienestar financiero de tu familia.' },
]

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
    const [count, setCount] = useState(0)
    const ref = useRef<HTMLSpanElement>(null)
    const started = useRef(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true
                    const duration = 1800
                    const start = performance.now()
                    const tick = (now: number) => {
                        const elapsed = now - start
                        const progress = Math.min(elapsed / duration, 1)
                        const eased = 1 - Math.pow(1 - progress, 3)
                        setCount(Math.round(eased * target))
                        if (progress < 1) requestAnimationFrame(tick)
                    }
                    requestAnimationFrame(tick)
                }
            },
            { threshold: 0.5 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [target])

    return (
        <span ref={ref} className="font-mono font-light text-[clamp(3rem,6vw,5rem)] text-teal leading-none">
            {count}{suffix}
        </span>
    )
}

export default function QuienesSomosSection() {
    return (
        <section
            id="quienes-somos"
            className="section-padding bg-black"
            aria-label="Quiénes somos"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image side */}
                    <RevealOnScroll direction="left">
                        <div className="relative h-[480px] lg:h-[580px] rounded overflow-hidden">
                            <div className="clip-diagonal h-full w-full relative">
                                {/* Placeholder image with teal overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-graphite to-charcoal" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-teal/20 to-transparent" />
                                <img
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1600&auto=format&fit=crop"
                                    alt="Value Grupo Financiero — ejecutivos estrechando manos"
                                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
                                />
                                {/* Counter overlay */}
                                <div className="absolute bottom-8 left-8 flex flex-col">
                                    <CountUp target={30} suffix="+" />
                                    <span className="text-white/70 text-sm font-mono tracking-widest uppercase mt-1">
                                        Años de experiencia
                                    </span>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Text side */}
                    <div>
                        <RevealOnScroll delay={0.1}>
                            <span className="inline-block text-teal font-mono text-xs tracking-widest uppercase mb-4">
                                Nuestra Historia
                            </span>
                        </RevealOnScroll>

                        <RevealOnScroll delay={0.2}>
                            <h2
                                className="font-mono font-light text-white mb-6 leading-[1.1] tracking-[-0.02em]"
                                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
                            >
                                Con más de 30 años de experiencia construyendo valor financiero
                            </h2>
                        </RevealOnScroll>

                        <RevealOnScroll delay={0.3}>
                            <p className="text-ash leading-relaxed mb-8">
                                Value Grupo Financiero es una institución mexicana comprometida con el crecimiento patrimonial de sus clientes. Con presencia en CDMX, Guadalajara, Monterrey y Chihuahua, ofrecemos servicios de la más alta calidad en los mercados de capitales.
                            </p>
                        </RevealOnScroll>

                        {/* Values list */}
                        <div className="space-y-4 mb-10">
                            {values.map((v, i) => (
                                <RevealOnScroll key={v.label} delay={0.35 + i * 0.1}>
                                    <div className="flex items-start gap-4 p-4 rounded bg-charcoal/60 border border-white/5 hover:border-teal/20 transition-colors duration-300">
                                        <div className="w-10 h-10 rounded bg-teal/10 border border-teal/20 flex items-center justify-center flex-shrink-0">
                                            <v.icon size={18} className="text-teal" />
                                        </div>
                                        <div>
                                            <p className="text-white text-sm font-medium mb-0.5">{v.label}</p>
                                            <p className="text-ash text-sm">{v.desc}</p>
                                        </div>
                                    </div>
                                </RevealOnScroll>
                            ))}
                        </div>

                        <RevealOnScroll delay={0.65}>
                            <Button as="a" href="#" variant="link" size="md">
                                Conoce nuestra historia
                            </Button>
                        </RevealOnScroll>
                    </div>
                </div>
            </div>
        </section>
    )
}
