import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import QuienesSomosSection from '@/components/sections/QuienesSomosSection'
import EmpresasSection from '@/components/sections/EmpresasSection'
import StatsSection from '@/components/sections/StatsSection'
import AccesoSection from '@/components/sections/AccesoSection'

export default function HomePage() {
    return (
        <>
            <Navbar />
            <main id="main-content">
                <HeroSection />
                <QuienesSomosSection />
                <EmpresasSection />
                <StatsSection />
                <AccesoSection />
            </main>
            <Footer />
        </>
    )
}
