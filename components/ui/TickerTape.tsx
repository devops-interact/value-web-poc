'use client'

import React from 'react'

const indices = [
    { symbol: 'IPC', value: '57,230.15', change: '+0.42%', positive: true },
    { symbol: 'BIVA', value: '1,180.40', change: '+0.31%', positive: true },
    { symbol: 'SP500', value: '5,088.80', change: '+0.03%', positive: true },
    { symbol: 'NASDAQ', value: '15,996.82', change: '-0.28%', positive: false },
    { symbol: 'DJIA', value: '39,131.53', change: '+0.16%', positive: true },
    { symbol: 'FEMSA', value: '188.50', change: '+0.64%', positive: true },
    { symbol: 'AMX', value: '14.80', change: '-0.54%', positive: false },
    { symbol: 'GFNORTE', value: '162.30', change: '+0.56%', positive: true },
    { symbol: 'WALMEX', value: '74.25', change: '+0.75%', positive: true },
    { symbol: 'CEMEX', value: '7.84', change: '-1.51%', positive: false },
]

export default function TickerTape() {
    // Duplicate the array to create a seamless infinite loop
    const doubledIndices = [...indices, ...indices, ...indices]

    return (
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden border-t border-white/10 bg-black/60 backdrop-blur-md z-30">
            <div className="flex w-max animate-marquee py-3">
                {doubledIndices.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex items-center gap-3 px-8 border-r border-white/10 last:border-r-0 whitespace-nowrap"
                    >
                        <span className="font-mono text-xs font-semibold text-teal tracking-wider">
                            {item.symbol}
                        </span>
                        <span className="font-mono text-xs text-white">
                            {item.value}
                        </span>
                        <span
                            className={`flex items-center gap-1 font-mono text-xs ${item.positive ? 'text-success' : 'text-danger'
                                }`}
                        >
                            {item.positive ? (
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg>
                            ) : (
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 7L7 17M7 17H17M7 17V7" />
                                </svg>
                            )}
                            {item.change}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
