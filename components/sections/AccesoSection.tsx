'use client'

import { ArrowUpRight } from 'lucide-react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import { motion } from 'framer-motion'

const accesoLinks = [
    {
        title: 'Casa de Bolsa',
        description: 'Accede a tu portafolio de inversiones, cuenta de valores y operaciones bursátiles.',
        href: 'https://www.valorcasadebolsa.com.mx/',
        tag: 'Mercado de Capitales',
    },
    {
        title: 'Arrendadora',
        description: 'Consulta tu contrato, estado de cuenta y realiza pagos de tu arrendamiento.',
        href: 'https://arrendadora.value.com.mx/',
        tag: 'Arrendamiento Financiero',
    },
]

export default function AccesoSection() {
    return (
        <section
            id="acceso"
            className="section-padding bg-ink"
            aria-label="Acceso rápido a plataformas"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <RevealOnScroll>
                        <span className="text-teal font-mono text-xs tracking-widest uppercase">
                            Plataformas Digitales
                        </span>
                    </RevealOnScroll>
                    <RevealOnScroll delay={0.1}>
                        <h2
                            className="font-mono font-light text-white mt-4 leading-[1.1] tracking-[-0.025em]"
                            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                        >
                            Accede directamente a tu cuenta
                        </h2>
                    </RevealOnScroll>
                    <RevealOnScroll delay={0.2}>
                        <p className="text-ash mt-3 max-w-md mx-auto text-sm leading-relaxed">
                            Gestiona tus inversiones y contratos desde cualquier dispositivo, cuando quieras.
                        </p>
                    </RevealOnScroll>
                </div>

                {/* Cards */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {accesoLinks.map((link) => (
                        <motion.a
                            key={link.title}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={fadeInUp}
                            className="group relative flex flex-col justify-between p-8 pb-6 rounded bg-charcoal border border-white/6 hover:border-teal/40 transition-all duration-400 overflow-hidden h-fit"
                            aria-label={`Ir a ${link.title}`}
                        >
                            {/* Hover gradient bg */}
                            <div className="absolute inset-0 bg-gradient-teal opacity-0 group-hover:opacity-[0.08] transition-opacity duration-400 rounded" />

                            {/* Content */}
                            <div className="relative z-10">
                                <span className="inline-block px-3 py-1 rounded border border-teal/20 bg-teal/10 text-teal text-xs font-mono tracking-wider mb-4">
                                    {link.tag}
                                </span>
                                <h3 className="font-mono font-light text-white text-2xl mb-2 group-hover:text-teal transition-colors duration-300">
                                    {link.title}
                                </h3>
                                <p className="text-ash text-sm leading-relaxed max-w-sm">
                                    {link.description}
                                </p>
                            </div>

                            {/* CTA arrow */}
                            <div className="relative z-10 flex items-center justify-between mt-6">
                                <span className="text-teal text-sm font-medium">
                                    Ir a mi cuenta
                                </span>
                                <div className="w-10 h-10 rounded-full border border-teal/30 flex items-center justify-center group-hover:bg-teal group-hover:border-teal transition-all duration-300">
                                    <ArrowUpRight
                                        size={18}
                                        className="text-teal group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
