export interface TickerItem {
    symbol: string
    name: string
    value: number
    change: number
    changePercent: number
}

export const marketData: TickerItem[] = [
    { symbol: 'IPC', name: 'IPC BMV', value: 52340.25, change: 224.8, changePercent: 0.43 },
    { symbol: 'NEMAK', name: 'Nemak', value: 13.20, change: -0.016, changePercent: -0.12 },
    { symbol: 'FEMSA', name: 'FEMSA UBD', value: 188.50, change: 1.2, changePercent: 0.64 },
    { symbol: 'AMX', name: 'América Móvil', value: 14.80, change: -0.08, changePercent: -0.54 },
    { symbol: 'GFNORTE', name: 'Banorte', value: 162.30, change: 0.9, changePercent: 0.56 },
    { symbol: 'WALMEX', name: 'Walmart México', value: 74.25, change: 0.55, changePercent: 0.75 },
    { symbol: 'CEMEX', name: 'Cemex', value: 7.84, change: -0.12, changePercent: -1.51 },
    { symbol: 'GMD', name: 'Grupo México', value: 109.60, change: 1.40, changePercent: 1.29 },
    { symbol: 'BIMBO', name: 'Grupo Bimbo', value: 84.12, change: -0.38, changePercent: -0.45 },
    { symbol: 'NASDAQ', name: 'NASDAQ', value: 16800.32, change: 98.4, changePercent: 0.59 },
    { symbol: 'NYSE', name: 'NYSE Comp.', value: 18524.10, change: -42.3, changePercent: -0.23 },
    { symbol: 'S&P500', name: 'S&P 500', value: 5188.76, change: 15.2, changePercent: 0.29 },
]
