'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import { wordContainer, wordVariant, fadeInUp, staggerContainer } from '@/lib/animations'

const GlassObject = dynamic(() => import('@/components/ui/GlassObject'), { ssr: false })

const headline = 'Tu patrimonio, nuestra experiencia.'
const words = headline.split(' ')

export default function HeroSection() {
    return (
        <section
            id="inicio"
            className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black"
            aria-label="Hero — Value Grupo Financiero"
        >
            {/* 3D Glass Object — desktop right side */}
            <div className="absolute inset-0 pointer-events-none z-20 hidden lg:flex items-center justify-end">
                <div className="w-[48%] h-[90%] pointer-events-auto pr-4">
                    <GlassObject />
                </div>
            </div>

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none lg:w-3/5 lg:via-black/70" />
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24 w-full">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="max-w-lg"
                >
                    {/* Badge */}
                    <motion.div variants={fadeInUp} className="mb-8">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded border border-teal/30 bg-teal/5 text-teal text-xs font-mono tracking-widest uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
                            Grupo Financiero · Desde 1994
                        </span>
                    </motion.div>

                    {/* Headline — word stagger */}
                    <motion.h1
                        className="font-serif text-white leading-[1.05] tracking-[-0.03em] mb-6"
                        style={{ fontSize: 'clamp(2.75rem, 5vw, 4.5rem)' }}
                        variants={wordContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        {words.map((word, i) => (
                            <motion.span
                                key={i}
                                variants={wordVariant}
                                className="inline-block mr-[0.25em]"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        variants={fadeInUp}
                        className="text-ash text-body-lg max-w-sm mb-10 leading-relaxed"
                    >
                        30 años de trayectoria en los mercados financieros mexicanos. Casa de Bolsa, Fondos de Inversión y Arrendadora al servicio de tu patrimonio.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-wrap items-center gap-4"
                    >
                        <Button
                            as="a"
                            href="#acceso"
                            variant="primary"
                            size="lg"
                        >
                            Acceder a mi cuenta
                        </Button>
                        <Button
                            as="a"
                            href="#empresas"
                            variant="ghost"
                            size="lg"
                            className="group"
                        >
                            Conoce nuestros servicios
                            <ArrowUpRight
                                size={16}
                                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll hint — centered */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
            >
                <span className="text-ash text-xs font-mono tracking-widest">SCROLL</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-px h-8 bg-gradient-to-b from-teal to-transparent"
                />
            </motion.div>
        </section>
    )
}
