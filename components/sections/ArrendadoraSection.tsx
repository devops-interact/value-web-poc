'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Car, ShieldCheck, Clock } from 'lucide-react'
import Button from '@/components/ui/Button'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const fleet = [
    {
        id: 'suv-premium',
        name: 'SUV Premium',
        model: 'Range Rover Velar 2024',
        type: 'Ejecutivo',
        features: ['Híbrido MHEV', 'Asientos de Piel', 'Asistente de Carril'],
        image: 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?q=80&w=2674&auto=format&fit=crop', // Realistic placeholder for now
        price: 'Cotizar',
    },
    {
        id: 'sedan-ejecutivo',
        name: 'Sedán Ejecutivo',
        model: 'BMW Serie 3 2024',
        type: 'Corporativo',
        features: ['Transmisión Automática', 'Navegación GPS', 'Conectividad Premium'],
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2670&auto=format&fit=crop', // Realistic placeholder for now
        price: 'Cotizar',
    },
    {
        id: 'flotilla-comercial',
        name: 'Flotilla Comercial',
        model: 'Toyota Hiace 2024',
        type: 'Utilitario',
        features: ['Capacidad 15 Pasajeros', 'Motor Diésel', 'Mantenimiento Incluido'],
        image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2671&auto=format&fit=crop', // Realistic placeholder for now
        price: 'Cotizar',
    }
]

export default function ArrendadoraSection() {
    const sectionRef = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    })

    const y = useTransform(scrollYProgress, [0, 1], [100, -100])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

    return (
        <section
            id="arrendadora"
            ref={sectionRef}
            className="relative py-32 bg-charcoal overflow-hidden"
            aria-label="Value Arrendadora"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="max-w-2xl mb-20"
                >
                    <motion.div variants={fadeInUp} className="mb-6">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-teal/10 border border-teal/20 rounded text-teal text-xs font-mono tracking-wider">
                            <Car size={14} />
                            VALUE ARRENDADORA
                        </span>
                    </motion.div>

                    <motion.h2 variants={fadeInUp} className="font-mono font-light text-white mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                        Impulsa el crecimiento de tu negocio con nuestras <span className="text-teal">flotillas</span>.
                    </motion.h2>

                    <motion.p variants={fadeInUp} className="text-ash text-body-lg leading-relaxed">
                        Esquemas de arrendamiento puro diseñados para optimizar la carga fiscal de tu empresa y mantener tu parque vehicular siempre actualizado.
                    </motion.p>
                </motion.div>

                {/* Fleet Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {fleet.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                            viewport={{ once: true }}
                            className="group relative flex flex-col h-[560px] rounded border border-white/10 overflow-hidden transition-colors duration-500 hover:border-teal/50"
                        >
                            {/* Background Image & Gradient */}
                            <div className="absolute inset-0">
                                <motion.img
                                    src={item.image}
                                    alt={item.model}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                                <div className="absolute inset-0 bg-black/20" /> {/* Slight extra darkness for legibility */}
                            </div>

                            {/* Top Badge */}
                            <div className="absolute top-6 left-6 z-10">
                                <span className="inline-block px-3 py-1.5 bg-white/10 backdrop-blur-md rounded border border-white/10 text-white text-xs uppercase font-mono tracking-widest leading-none">
                                    {item.type}
                                </span>
                            </div>

                            {/* Content bottom-aligned */}
                            <div className="relative z-10 p-6 flex flex-col h-full justify-end">
                                <h3 className="font-mono font-light text-teal text-4xl mb-2 mt-auto">
                                    {item.name}
                                </h3>
                                <p className="text-ash/90 text-sm font-mono mb-8">{item.model}</p>

                                <ul className="space-y-4 mb-10">
                                    {item.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-base text-ash font-mono">
                                            <div className="w-1.5 h-1.5 rounded-full bg-teal" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <a href="#cotizar" className="flex items-center justify-between w-full px-6 py-3.5 rounded border border-teal text-teal font-mono text-lg transition-colors hover:bg-teal/10 group/btn">
                                    {item.price}
                                    <ArrowUpRight size={20} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA & Features */}
                <motion.div
                    style={{ y, opacity }}
                    className="mt-24 pt-12 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-12"
                >
                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded bg-teal/10 flex items-center justify-center shrink-0">
                            <ShieldCheck className="text-teal" size={24} />
                        </div>
                        <div>
                            <h4 className="text-white font-mono mb-2">Deducibilidad Fiscal</h4>
                            <p className="text-ash text-sm">Aprovecha al máximo los beneficios fiscales del arrendamiento puro (leasing).</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded bg-teal/10 flex items-center justify-center shrink-0">
                            <Clock className="text-teal" size={24} />
                        </div>
                        <div>
                            <h4 className="text-white font-mono mb-2">Aprobación Ágil</h4>
                            <p className="text-ash text-sm">Procesos optimizados para que adquieras tu flotilla en tiempo récord.</p>
                        </div>
                    </div>

                    <div className="flex items-center md:justify-end">
                        <Button variant="primary" size="lg">
                            Agendar Asesoría
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
