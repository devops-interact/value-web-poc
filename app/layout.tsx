import type { Metadata, Viewport } from 'next'
import './globals.css'
import CustomCursor from '@/components/ui/CustomCursor'

export const metadata: Metadata = {
    title: 'Value Grupo Financiero — Tu patrimonio, nuestra experiencia',
    description:
        'Value Grupo Financiero: 30 años de experiencia en los mercados financieros mexicanos. Casa de Bolsa, Fondos de Inversión y Arrendadora.',
    keywords: [
        'Value Grupo Financiero',
        'Casa de Bolsa',
        'Fondos de Inversión',
        'Arrendadora',
        'inversiones México',
        'mercado de capitales',
    ],
    openGraph: {
        title: 'Value Grupo Financiero',
        description: 'Tu patrimonio, nuestra experiencia.',
        type: 'website',
        locale: 'es_MX',
    },
    robots: { index: false, follow: false }, // POC — no indexing
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#08979C',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es-MX" className="scroll-smooth">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,300..600&family=JetBrains+Mono:wght@400;500&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="bg-black text-white font-sans antialiased">
                <CustomCursor />
                {children}
            </body>
        </html>
    )
}
