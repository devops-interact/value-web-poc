'use client'

import { marketData } from '@/lib/market-data'
import type { TickerItem } from '@/lib/market-data'
import { TrendingUp, TrendingDown } from 'lucide-react'

function TickerCard({ item }: { item: TickerItem }) {
    const isPositive = item.change >= 0
    return (
        <span className="inline-flex items-center gap-3 px-6">
            <span className="font-mono text-xs text-teal font-medium tracking-wider">{item.symbol}</span>
            <span className="font-mono text-xs text-white/85">
                {item.value.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
            <span
                className={`inline-flex items-center gap-1 font-mono text-xs ${isPositive ? 'text-[#34C759]' : 'text-[#FF3B30]'
                    }`}
            >
                {isPositive ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                {isPositive ? '+' : ''}{item.changePercent.toFixed(2)}%
            </span>
            <span className="text-white/15 mx-1">·</span>
        </span>
    )
}

export default function TickerBand() {
    const doubled = [...marketData, ...marketData]

    return (
        <div
            className="bg-charcoal border-y border-white/6 py-3 overflow-hidden"
            aria-label="Datos de mercado en tiempo real"
        >
            <div className="ticker-wrapper">
                <div className="ticker-track">
                    {doubled.map((item, i) => (
                        <TickerCard key={`${item.symbol}-${i}`} item={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}
