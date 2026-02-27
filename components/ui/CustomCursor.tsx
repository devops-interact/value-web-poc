'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)
    const dotX = useMotionValue(-100)
    const dotY = useMotionValue(-100)

    const springConfig = { damping: 28, stiffness: 220, mass: 0.5 }
    const springX = useSpring(cursorX, springConfig)
    const springY = useSpring(cursorY, springConfig)

    const dotSpringX = useSpring(dotX, { damping: 40, stiffness: 400, mass: 0.2 })
    const dotSpringY = useSpring(dotY, { damping: 40, stiffness: 400, mass: 0.2 })

    const scaleRef = useRef(1)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
            dotX.set(e.clientX)
            dotY.set(e.clientY)
        }

        const handleMouseEnterInteractive = () => {
            scaleRef.current = 3
            const el = document.getElementById('cursor-ring')
            if (el) el.style.transform = `scale(3)`
        }

        const handleMouseLeaveInteractive = () => {
            scaleRef.current = 1
            const el = document.getElementById('cursor-ring')
            if (el) el.style.transform = `scale(1)`
        }

        window.addEventListener('mousemove', handleMouseMove)

        const interactiveEls = document.querySelectorAll(
            'a, button, [role="button"], input, select, textarea, label'
        )
        interactiveEls.forEach((el) => {
            el.addEventListener('mouseenter', handleMouseEnterInteractive)
            el.addEventListener('mouseleave', handleMouseLeaveInteractive)
        })

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            interactiveEls.forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseEnterInteractive)
                el.removeEventListener('mouseleave', handleMouseLeaveInteractive)
            })
        }
    }, [cursorX, cursorY, dotX, dotY])

    return (
        <>
            {/* Outer ring */}
            <motion.div
                id="cursor-ring"
                className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
                style={{
                    x: springX,
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                <div
                    className="w-8 h-8 rounded-full border border-teal/60 transition-transform duration-300"
                    style={{ transform: `scale(${scaleRef.current})` }}
                />
            </motion.div>

            {/* Inner dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
                style={{
                    x: dotSpringX,
                    y: dotSpringY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                <div className="w-1.5 h-1.5 rounded-full bg-teal" />
            </motion.div>
        </>
    )
}
