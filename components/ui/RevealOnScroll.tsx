'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeInUp } from '@/lib/animations'

interface RevealOnScrollProps {
    children: React.ReactNode
    delay?: number
    className?: string
    direction?: 'up' | 'left' | 'right' | 'scale'
}

export default function RevealOnScroll({
    children,
    delay = 0,
    className,
    direction = 'up',
}: RevealOnScrollProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    const variants = {
        up: {
            hidden: { opacity: 0, y: 32 },
            visible: { opacity: 1, y: 0 },
        },
        left: {
            hidden: { opacity: 0, x: -48 },
            visible: { opacity: 1, x: 0 },
        },
        right: {
            hidden: { opacity: 0, x: 48 },
            visible: { opacity: 1, x: 0 },
        },
        scale: {
            hidden: { opacity: 0, scale: 0.92 },
            visible: { opacity: 1, scale: 1 },
        },
    }

    return (
        <motion.div
            ref={ref}
            variants={variants[direction]}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.4, 0, 0.2, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
