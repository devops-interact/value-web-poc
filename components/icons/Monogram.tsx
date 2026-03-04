'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

interface MonogramProps {
    className?: string
}

export default function Monogram({ className }: MonogramProps) {
    return (
        <Image
            src="/value-poc-monogram.png"
            alt=""
            width={423}
            height={423}
            className={cn('w-auto', className)}
            aria-hidden="true"
        />
    )
}
