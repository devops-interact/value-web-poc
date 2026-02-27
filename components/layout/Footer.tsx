import LogoFull from '@/components/icons/LogoFull'
import { MapPin, Phone, Clock, Instagram, Twitter, Linkedin } from 'lucide-react'

const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Quiénes Somos', href: '#quienes-somos' },
    { label: 'Empresas', href: '#empresas' },
    { label: 'Estadísticas', href: '#estadisticas' },
]

const serviceLinks = [
    { label: 'Casa de Bolsa', href: '#empresas' },
    { label: 'Fondos de Inversión', href: '#empresas' },
    { label: 'Arrendadora', href: '#empresas' },
    { label: 'Acceso a Cuentas', href: '#acceso' },
]

const legalLinks = [
    { label: 'Términos y Condiciones', href: '#' },
    { label: 'Aviso de Privacidad', href: '#' },
    { label: 'UNE', href: '#' },
    { label: 'Buró de Entidades Financieras', href: '#' },
    { label: 'Quejas y Reclamaciones', href: '#' },
    { label: 'Estados Financieros', href: '#' },
    { label: 'Bolsa de Trabajo', href: '#' },
]

const offices = [
    { city: 'CDMX', phone: '(55) 9177-7800' },
    { city: 'GDL', phone: '(33) 3648-6800' },
    { city: 'MTY', phone: '(81) 8399-2222' },
    { city: 'CHI', phone: '(614) 4399-400' },
]

export default function Footer() {
    return (
        <footer
            className="bg-black border-t border-white/8"
            role="contentinfo"
            aria-label="Pie de página"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                {/* Top grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/8">
                    {/* Brand column */}
                    <div className="lg:col-span-1">
                        <LogoFull lightMode className="h-8 w-auto mb-4" />
                        <p className="text-ash text-sm leading-relaxed max-w-xs">
                            30 años construyendo valor. Grupo financiero mexicano con presencia nacional en los mercados de capitales, fondos e instrumentos de arrendamiento.
                        </p>
                        <div className="flex items-center gap-3 mt-5">
                            <a
                                href="#"
                                className="w-8 h-8 rounded-full bg-white/5 border border-white/8 flex items-center justify-center text-ash hover:text-teal hover:border-teal/40 transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram size={14} />
                            </a>
                            <a
                                href="#"
                                className="w-8 h-8 rounded-full bg-white/5 border border-white/8 flex items-center justify-center text-ash hover:text-teal hover:border-teal/40 transition-colors"
                                aria-label="Twitter / X"
                            >
                                <Twitter size={14} />
                            </a>
                            <a
                                href="#"
                                className="w-8 h-8 rounded-full bg-white/5 border border-white/8 flex items-center justify-center text-ash hover:text-teal hover:border-teal/40 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={14} />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-white text-xs font-mono tracking-widest uppercase mb-4 text-teal">
                            Navegación
                        </h3>
                        <ul className="space-y-2.5" role="list">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-ash text-sm hover:text-white transition-colors duration-150"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white text-xs font-mono tracking-widest uppercase mb-4 text-teal">
                            Servicios
                        </h3>
                        <ul className="space-y-2.5" role="list">
                            {serviceLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-ash text-sm hover:text-white transition-colors duration-150"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white text-xs font-mono tracking-widest uppercase mb-4 text-teal">
                            Contacto
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-ash text-sm">
                                <Clock size={14} className="text-teal flex-shrink-0" />
                                <span>Lun – Vie · 9:00 – 18:00</span>
                            </div>
                            <div className="space-y-1.5">
                                {offices.map((o) => (
                                    <div key={o.city} className="flex items-center gap-2 text-ash text-sm">
                                        <MapPin size={14} className="text-teal flex-shrink-0" />
                                        <span className="text-white/60 font-mono">{o.city}</span>
                                        <span>{o.phone}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Legal links */}
                <div className="pt-8 pb-4 border-b border-white/8">
                    <div className="flex flex-wrap gap-x-5 gap-y-2">
                        {legalLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-ash text-xs hover:text-teal transition-colors duration-150"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <p className="text-ash text-xs">
                        © 2026 Value Grupo Financiero · Todos los derechos reservados
                    </p>
                    <p className="text-ash/50 text-xs">
                        POC hipotético — sin fines comerciales
                    </p>
                </div>
            </div>
        </footer>
    )
}
