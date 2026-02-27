'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react'
import LogoFull from '@/components/icons/LogoFull'
import { cn } from '@/lib/utils'

const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Casa de Bolsa', href: '#empresas' },
    { label: 'Fondos de Inversión', href: '#empresas' },
    { label: 'Arrendadora', href: '#empresas' },
]

const accesoLinks = [
    { label: 'Acceso Casa de Bolsa', href: 'https://www.valorcasadebolsa.com.mx/' },
    { label: 'Acceso Arrendadora', href: 'https://arrendadora.value.com.mx/' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [accesoOpen, setAccesoOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <a href="#main-content" className="skip-to-content">
                Ir al contenido principal
            </a>

            {/* Navbar pill */}
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
                className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
                role="banner"
            >
                <nav
                    className={cn(
                        'w-full max-w-5xl flex items-center justify-between px-6 rounded-full transition-all duration-500',
                        scrolled
                            ? 'py-3 bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl'
                            : 'py-4 bg-black/40 backdrop-blur-lg border border-white/6'
                    )}
                    aria-label="Navegación principal"
                >
                    {/* Logo */}
                    <a href="#inicio" className="flex items-center" aria-label="Value Grupo Financiero — Inicio">
                        <LogoFull lightMode className="h-7 w-auto" />
                    </a>

                    {/* Desktop links */}
                    <ul className="hidden lg:flex items-center gap-1" role="list">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="relative px-3 py-1.5 text-sm text-white/75 hover:text-white transition-colors duration-200 group"
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-teal scale-x-0 group-hover:scale-x-100 transition-transform duration-300 w-full origin-center" />
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Acceso CTA — desktop */}
                    <div className="hidden lg:block relative">
                        <button
                            onClick={() => setAccesoOpen((v) => !v)}
                            className="flex items-center gap-1.5 px-5 py-2 rounded-full border border-teal text-teal text-sm font-medium hover:bg-teal/10 transition-all duration-200"
                            aria-expanded={accesoOpen}
                            aria-haspopup="true"
                        >
                            Acceso
                            <ChevronDown
                                size={14}
                                className={cn('transition-transform duration-200', accesoOpen && 'rotate-180')}
                            />
                        </button>

                        <AnimatePresence>
                            {accesoOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                                    transition={{ duration: 0.18 }}
                                    className="absolute right-0 mt-2 w-56 bg-charcoal border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
                                >
                                    {accesoLinks.map((link) => (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between px-4 py-3 text-sm text-white/80 hover:bg-teal/10 hover:text-white transition-colors duration-150"
                                            onClick={() => setAccesoOpen(false)}
                                        >
                                            {link.label}
                                            <ArrowUpRight size={14} className="text-teal" />
                                        </a>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="lg:hidden p-2 text-white/75 hover:text-white transition-colors"
                        onClick={() => setMobileOpen(true)}
                        aria-label="Abrir menú"
                        aria-expanded={mobileOpen}
                    >
                        <Menu size={22} />
                    </button>
                </nav>
            </motion.header>

            {/* Mobile drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
                            onClick={() => setMobileOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
                            className="fixed top-0 right-0 bottom-0 w-72 bg-charcoal z-50 flex flex-col p-8"
                        >
                            <div className="flex items-center justify-between mb-10">
                                <LogoFull lightMode className="h-6 w-auto" />
                                <button
                                    onClick={() => setMobileOpen(false)}
                                    className="p-2 text-white/60 hover:text-white"
                                    aria-label="Cerrar menú"
                                >
                                    <X size={22} />
                                </button>
                            </div>

                            <nav aria-label="Menú móvil">
                                <ul className="space-y-1" role="list">
                                    {navLinks.map((link, i) => (
                                        <motion.li
                                            key={link.label}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.05 + 0.1 }}
                                        >
                                            <a
                                                href={link.href}
                                                onClick={() => setMobileOpen(false)}
                                                className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-colors text-sm font-medium"
                                            >
                                                {link.label}
                                            </a>
                                        </motion.li>
                                    ))}
                                </ul>
                            </nav>

                            <div className="mt-8 pt-8 border-t border-white/10 space-y-2">
                                <p className="text-xs text-ash font-mono tracking-widest mb-3">ACCESO</p>
                                {accesoLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between px-4 py-3 rounded-xl bg-teal/10 border border-teal/20 text-teal text-sm font-medium hover:bg-teal/20 transition-colors"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {link.label}
                                        <ArrowUpRight size={14} />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
