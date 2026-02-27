'use client'

import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'ghost' | 'link'
    size?: 'sm' | 'md' | 'lg'
    as?: 'button' | 'a'
    href?: string
    children: React.ReactNode
}

export default function Button({
    variant = 'primary',
    size = 'md',
    as: Tag = 'button',
    href,
    children,
    className,
    ...props
}: ButtonProps) {
    const base =
        'inline-flex items-center gap-2 font-sans font-medium rounded transition-all duration-300 focus-visible:outline-2 focus-visible:outline-teal focus-visible:outline-offset-4'

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-sm',
        lg: 'px-8 py-4 text-base',
    }

    const variants = {
        primary:
            'bg-teal text-white hover:bg-teal-light hover:scale-[1.02] hover:shadow-teal-md active:scale-[0.98]',
        ghost:
            'border border-teal text-teal hover:bg-teal/10 hover:border-teal-light active:scale-[0.98]',
        link: 'text-teal hover:text-teal-light group p-0',
    }

    if (Tag === 'a') {
        return (
            <a
                href={href}
                className={cn(base, sizes[size], variants[variant], className)}
            >
                {children}
                {variant === 'link' && (
                    <ArrowRight
                        size={16}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                )}
            </a>
        )
    }

    return (
        <button className={cn(base, sizes[size], variants[variant], className)} {...props}>
            {children}
            {variant === 'link' && (
                <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                />
            )}
        </button>
    )
}
