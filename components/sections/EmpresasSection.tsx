'use client'

import { motion } from 'framer-motion'
import { TrendingUp, PieChart, Building2, ArrowUpRight } from 'lucide-react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { staggerContainer, fadeInUp } from '@/lib/animations'

const empresas = [
    {
        icon: TrendingUp,
        label: 'Casa de Bolsa',
        description:
            'Compra y venta de valores en el mercado mexicano e internacional. Asesoría patrimonial, análisis de mercados y estrategias de inversión personalizadas.',
        href: '#',
    },
    {
        icon: PieChart,
        label: 'Fondos de Inversión',
        description:
            'Acceso a instrumentos diversificados con gestión profesional. Fondos de renta fija, variable y mixtos para diferentes perfiles de riesgo.',
        href: '#',
    },
    {
        icon: Building2,
        label: 'Arrendadora',
        description:
            'Soluciones de arrendamiento financiero y puro para empresas. Optimiza tu flujo de caja y moderniza tu equipamiento con condiciones competitivas.',
        href: '#',
    },
]

export default function EmpresasSection() {
    return (
        <section
            id="empresas"
            className="section-padding bg-ink"
            aria-label="Nuestras empresas"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <RevealOnScroll>
                        <span className="inline-block text-teal font-mono text-xs tracking-widest uppercase mb-4">
                            Grupo Value
                        </span>
                    </RevealOnScroll>
                    <RevealOnScroll delay={0.1}>
                        <h2
                            className="font-serif text-white leading-[1.1] tracking-[-0.025em]"
                            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                        >
                            Tres empresas, una sola visión
                        </h2>
                    </RevealOnScroll>
                    <RevealOnScroll delay={0.2}>
                        <p className="text-ash mt-4 max-w-xl mx-auto leading-relaxed">
                            Un ecosistema financiero completo para proteger y hacer crecer tu patrimonio en cada etapa de tu vida.
                        </p>
                    </RevealOnScroll>
                </div>

                {/* Cards grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {empresas.map((empresa) => (
                        <motion.article
                            key={empresa.label}
                            variants={fadeInUp}
                            className="group relative flex flex-col p-8 rounded bg-charcoal border border-white/5 hover:border-teal/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-teal-md"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 rounded bg-teal/10 border border-teal/20 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-5deg]">
                                <empresa.icon size={22} className="text-teal transition-colors duration-300" />
                            </div>

                            {/* Text */}
                            <h3 className="font-serif text-white text-xl mb-3 tracking-[-0.01em] group-hover:text-teal transition-colors duration-300">
                                {empresa.label}
                            </h3>
                            <p className="text-ash text-sm leading-relaxed flex-1 mb-6">
                                {empresa.description}
                            </p>

                            {/* Link */}
                            <a
                                href={empresa.href}
                                className="inline-flex items-center gap-2 text-teal text-sm font-medium hover:text-teal-light group/link"
                            >
                                Conocer más
                                <ArrowUpRight
                                    size={16}
                                    className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                                />
                            </a>

                            {/* Decorative gradient on hover */}
                            <div className="absolute inset-0 rounded bg-gradient-teal-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
