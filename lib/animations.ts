import { Variants } from 'framer-motion'

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
}

export const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    },
}

export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
}

export const staggerContainerFast: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.07, delayChildren: 0.05 },
    },
}

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    },
}

export const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -48 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
    },
}

export const slideInRight: Variants = {
    hidden: { opacity: 0, x: 48 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
    },
}

export const wordVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    },
}

export const wordContainer: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08, delayChildren: 0.3 },
    },
}
