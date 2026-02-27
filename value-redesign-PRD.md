# PRD + Executive Prompt — Value Grupo Financiero · Rediseño Web (POC Hipotético)

> **Aviso:** Este documento es una prueba de concepto hipotética sin fines comerciales, elaborada exclusivamente con propósitos de exploración de diseño e interfaz.

---

## 1. Executive Summary

Rediseño conceptual del sitio web de **Value Grupo Financiero** (value.com.mx), preservando la estructura, secciones y contenido existentes, pero aplicando una identidad visual completamente renovada: minimalista, elegante, animada e interactiva. El proyecto toma como referencia estética a [B2Bizz](https://b2bizz-wbs.framer.website/) y se ancla en el nuevo branding de Value (logo + monograma SVG adjuntos).

**Stack recomendado:** Next.js 14 (App Router) + Tailwind CSS + Framer Motion + TypeScript

---

## 2. Contexto y Análisis del Sitio Actual

### 2.1 Estructura actual de value.com.mx

| Sección | Descripción |
|---|---|
| **Navbar** | Logo + Nav links: Inicio, Casa de Bolsa, Fondos de Inversión, Arrendadora, Acceso (dropdown) |
| **Hero / Banners** | Carrusel con banners promocionales |
| **Cards de servicios rápidos** | Índices y Acciones / Analice su presupuesto |
| **Quiénes somos** | Bloque con imagen + copy "30 años de experiencia" + descripción valores |
| **IPC / Ticker de mercado** | Sección con cotizaciones en tiempo real del IPC mexicano |
| **Empresas (3 pilares)** | Casa de Bolsa / Fondos de Inversión / Arrendadora — cards con descripción |
| **Footer** | Horarios, teléfonos por ciudad, links legales, redes sociales, logos regulatorios |

### 2.2 Referencia de diseño — B2Bizz (framer.website)

Características clave a replicar/adaptar:
- Navbar flotante con pill/cápsula redondeada, fondo blur
- Hero con video de fondo o ilustración animada + headline bold
- Ticker/marquee horizontal animado (logos de clientes o datos de mercado)
- Secciones con asimetría, overlap de elementos, imágenes con clip-path
- Cards de servicios interactivas con hover reveal
- Contador/estadísticas animadas (count-up on scroll)
- Proceso en 3 pasos con línea conectora animada
- CTA final de gran impacto con fondo imagen/dark
- Footer limpio en 2 columnas con separadores finos

---

## 3. Paleta de Colores

Extraída del logo SVG proporcionado (`fill="#08979C"` como color principal del monograma, `fill="black"` para el wordmark).

```css
:root {
  /* Brand Core */
  --color-teal:        #08979C;   /* Color principal — monograma Value */
  --color-teal-light:  #0FBEC5;   /* Hover states, acentos brillantes */
  --color-teal-dark:   #056B6E;   /* Texto sobre fondos claros, shadows */
  --color-teal-muted:  #E6F7F7;   /* Fondos suaves, badges, chips */

  /* Neutrals */
  --color-black:       #0A0A0A;   /* Fondo principal dark mode */
  --color-ink:         #111111;   /* Texto principal */
  --color-charcoal:    #1C1C1E;   /* Cards oscuras, nav dark */
  --color-graphite:    #3A3A3C;   /* Texto secundario dark */
  --color-ash:         #6E6E73;   /* Placeholders, metadata */
  --color-smoke:       #F2F2F7;   /* Fondos secciones claras */
  --color-white:       #FFFFFF;

  /* Semantic */
  --color-accent:      #08979C;   /* CTA primario */
  --color-success:     #34C759;   /* Variaciones positivas IPC */
  --color-danger:      #FF3B30;   /* Variaciones negativas IPC */
}
```

**Modo dominante:** Dark (#0A0A0A base) con secciones alternadas en light (#F2F2F7). El teal funciona como el único color de acento en ambos modos, creando coherencia y contraste.

---

## 4. Sistema Tipográfico

```css
/* Display / Headlines */
font-family: 'Instrument Serif', Georgia, serif;
/* — Elegante, fino, serio. Contraste intencional con UI sans-serif */

/* UI / Body / Nav */
font-family: 'DM Sans', sans-serif;
/* — Moderno, legible, joven. Variable font para peso flexible */

/* Monoespaciado (tickers, cotizaciones, datos financieros) */
font-family: 'JetBrains Mono', monospace;
/* — Preciso, técnico, diferenciador en datos numéricos */
```

**Importación (Google Fonts / Fontsource):**
```html
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

**Escala tipográfica (Tailwind custom):**
```js
// tailwind.config.ts
fontSize: {
  'display-2xl': ['clamp(3rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
  'display-xl':  ['clamp(2.25rem, 4vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
  'display-lg':  ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
  'body-lg':     ['1.125rem', { lineHeight: '1.7' }],
  'body':        ['1rem', { lineHeight: '1.6' }],
  'label':       ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.08em' }],
}
```

---

## 5. Sistema de Diseño — Componentes Globales

### 5.1 Navbar

```
[ Monograma SVG ] ····· [ Inicio · Casa de Bolsa · Fondos · Arrendadora ] ····· [ Acceso ↗ ]
```

- **Estilo:** Pill flotante centrado, `backdrop-filter: blur(20px)`, borde `1px solid rgba(255,255,255,0.08)`
- **Behavior:** `position: fixed`, se encoge on scroll (padding reduce), background darkens
- **Hover en links:** Underline animado desde center-out, color teal
- **CTA "Acceso":** Botón outlined teal con arrow icon animado en hover
- **Mobile:** Hamburger → drawer slide-in desde derecha, full screen overlay oscuro

### 5.2 Botones

```jsx
// Primario
<Button variant="primary">  // bg-teal, text-white, rounded-full, hover: scale(1.02) + shadow-teal
// Secundario
<Button variant="ghost">    // border-1 border-teal, text-teal, rounded-full, hover: bg-teal/10
// Texto/Link
<Button variant="link">     // text-teal + arrow →, hover: gap increases (gap animation)
```

### 5.3 Cards

- Border radius: `rounded-2xl`
- Fondo oscuro: `bg-charcoal` con border `border-white/5`
- Hover: `translateY(-4px)` + border color teal + shadow `0 20px 60px rgba(8,151,156,0.15)`
- Transición: `transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`

### 5.4 Sección Wrapper Pattern

```jsx
<Section>
  <SectionLabel>// "UPPERCASE LABEL" — font-mono text-teal text-xs tracking-widest
  <SectionTitle>// Instrument Serif display-xl
  <SectionBody>  // DM Sans body-lg text-ash max-w-2xl
```

---

## 6. Especificaciones por Sección — Homepage

### SECCIÓN 1: Hero

**Concepto:** "30 años construyendo valor" — Headline tipo editorial con monograma animado como elemento decorativo de fondo.

```
┌─────────────────────────────────────────────────────┐
│  [Navbar flotante]                                   │
│                                                     │
│  ·· Tu patrimonio,        [Monograma gigante        │
│     nuestra                en bg, rotando lento,   │
│     experiencia. ··        opacity 0.04]            │
│                                                     │
│  [Label: GRUPO FINANCIERO · DESDE 1994]             │
│                                                     │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━             │
│  [Ticker: IPC · NASDAQ · NYSE · BMV →]  (marquee)  │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━             │
│                                                     │
│  [Acceder a tu cuenta →]  [Conoce nuestros         │
│                            servicios ↓]             │
└─────────────────────────────────────────────────────┘
```

**Animaciones:**
- Headline: stagger word-by-word reveal con `opacity: 0 → 1` + `translateY(20px → 0)`
- Monograma BG: `rotate(0 → 360deg)` infinito, `duration: 120s`, linear
- Ticker: marquee CSS animado, pausa on hover
- CTA buttons: fade-in delay tras headline

**Detalles técnicos:**
```jsx
// Framer Motion — headline stagger
const words = headline.split(' ')
<motion.div variants={container} initial="hidden" animate="visible">
  {words.map(word => (
    <motion.span variants={wordVariant} key={word}>{word} </motion.span>
  ))}
</motion.div>
```

---

### SECCIÓN 2: Ticker / Mercado (IPC + datos en vivo)

**Concepto:** Band oscura de datos financieros en movimiento — señal de vida del mercado.

```
┌─ IPC  ·  52,340.25  ▲ +0.43%  ──  NEMAK  ·  13.20  ▼ -0.12%  ──  FEMSA  ··· ─┐
```

- Fondo: `bg-charcoal` full-width
- Fuente: JetBrains Mono, text-sm
- Valores positivos: `text-success` (`#34C759`)
- Valores negativos: `text-danger` (`#FF3B30`)
- Animación: CSS `@keyframes marquee` continuo, duplicado para seamless loop
- **Dato real:** Conectar a API pública de la BMV o usar datos mock actualizables

---

### SECCIÓN 3: Quiénes Somos

**Concepto:** Split layout asimétrico — imagen a la izquierda con clip-path, texto derecha.

```
┌──────────────────────┬──────────────────────────────┐
│                      │  LABEL: NUESTRA HISTORIA     │
│  [Imagen editorial   │                              │
│   con clip-path      │  "Con más de 30 años de      │
│   diagonal, overlay  │   experiencia..."            │
│   teal gradient]     │                              │
│                      │  ▶ Honestidad                │
│                      │  ▶ Transparencia             │
│                      │  ▶ Servicio                  │
│                      │                              │
│                      │  [Conoce nuestra historia →] │
└──────────────────────┴──────────────────────────────┘
```

**Animación:**
- Imagen: `scale(1.05 → 1.0)` on scroll reveal + clip-path diagonal animado
- Items de valores: stagger reveal on scroll (Intersection Observer)
- Counter decorativo: "30+" con count-up animation al entrar en viewport

---

### SECCIÓN 4: Las 3 Empresas (Casa de Bolsa / Fondos / Arrendadora)

**Concepto:** Cards horizontales en grid 3 columnas, hover reveal con descripción expandida.

```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│              │  │              │  │              │
│  Casa de     │  │  Fondos de   │  │  Arrendadora │
│  Bolsa       │  │  Inversión   │  │              │
│              │  │              │  │              │
│  Icono       │  │  Icono       │  │  Icono       │
│              │  │              │  │              │
│  [Descripción]  │  [Descripción]  │  [Descripción]│
│              │  │              │  │              │
│  [Entrar →]  │  │  [Entrar →]  │  │  [Entrar →]  │
└──────────────┘  └──────────────┘  └──────────────┘
```

**Hover behavior:**
```css
.card:hover {
  background: linear-gradient(135deg, #1C1C1E 0%, rgba(8,151,156,0.08) 100%);
  border-color: rgba(8,151,156,0.4);
  transform: translateY(-6px);
}
.card:hover .card-icon { color: var(--color-teal); transform: scale(1.1) rotate(-5deg); }
```

---

### SECCIÓN 5: Estadísticas / Social Proof

**Concepto:** Band con números grandes animados sobre fondo dark — confianza a través de datos.

```
      30+                    3                     4
  Años de                Empresas              Ciudades
  experiencia           del Grupo             en México
```

- Count-up animation con `react-countup` o implementación manual con `requestAnimationFrame`
- Fondo: full-width `bg-black` con ruido de grano sutil (CSS `filter: url(#grain)`)
- Números: Instrument Serif, `display-2xl`, color teal
- Labels: DM Sans, `label` size, `text-ash`

---

### SECCIÓN 6: Acceso Rápido a Cuentas

**Concepto:** Cards de acción directa — no informativas, funcionales. Login rápido.

```
┌─────────────────────────────┐  ┌─────────────────────────────┐
│  Acceso Casa de Bolsa       │  │  Acceso Arrendadora         │
│                             │  │                             │
│  [Ir a mi cuenta  ↗]        │  │  [Ir a mi cuenta  ↗]        │
└─────────────────────────────┘  └─────────────────────────────┘
```

- Layout: 2 columnas, `aspect-ratio: 2/1`
- Hover: fondo cambia de `bg-charcoal` a teal gradient
- Arrow icon: animación `translateX(4px) rotate(-45deg)` en hover

---

### SECCIÓN 7: Footer

```
┌─────────────────────────────────────────────────────┐
│  [Logo Value completo]                              │
│                                                     │
│  Casa de Bolsa  ·  Fondos  ·  Arrendadora           │
│                                                     │
│  ────────────────────────────────────────────────   │
│  Horarios: Lun–Vie 9:00–18:00                       │
│  MX (55) 9177-7800  ·  GDL (33) 3648-6800           │
│  MTY (81) 8399-2222  ·  CHI (614) 4399-400          │
│                                                     │
│  [Ubicaciones]  [Contacto]  [Normatividad]          │
│  [Quejas]  [Bolsa de Trabajo]  [Estados Fin.]       │
│                                                     │
│  ────────────────────────────────────────────────   │
│  [Logo Buró]  Términos · Privacidad · UNE · Buró    │
│  © 2026 Value Grupo Financiero                      │
└─────────────────────────────────────────────────────┘
```

- Fondo: `bg-black`
- Separadores: `border-t border-white/8`
- Links legales: `text-ash text-xs` con hover teal
- Logo: versión blanca/light del SVG

---

## 7. Animaciones & Interactividad — Guía Global

### 7.1 Principios de animación

| Principio | Valor |
|---|---|
| **Easing default** | `cubic-bezier(0.4, 0, 0.2, 1)` (ease-in-out suave) |
| **Duration base** | `300ms` micro, `500ms` transiciones, `800ms` reveals |
| **Reduced motion** | Siempre respetar `prefers-reduced-motion` |
| **Performance** | Solo `transform` y `opacity` en animaciones (no layout properties) |

### 7.2 Scroll reveal pattern (Framer Motion)

```jsx
// Componente reutilizable
const RevealOnScroll = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
  >
    {children}
  </motion.div>
)
```

### 7.3 Cursor personalizado (desktop)

```jsx
// Cursor dot teal que sigue el mouse con lag suave
// Se expande (scale 3x) al hacer hover sobre elementos interactivos
// Implementar con useMousePosition + framer-motion spring
```

### 7.4 Page transitions

```jsx
// Layout wrapper con AnimatePresence
// Slide up + fade out / fade in + slide up
// Duration: 400ms
```

### 7.5 Hover states globales

```css
/* Links de navegación */
a:hover { color: var(--color-teal); transition: color 200ms; }

/* Cards interactivas */
.interactive-card {
  transition: transform 300ms cubic-bezier(0.4,0,0.2,1),
              box-shadow 300ms,
              border-color 300ms;
}
.interactive-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 64px rgba(8, 151, 156, 0.12);
}
```

---

## 8. Assets & Brand

### 8.1 Logo y Monograma

Los SVGs adjuntos deben ser embebidos inline para poder aplicar:
- Cambio de color con CSS (`fill: currentColor` o variables CSS)
- Animaciones SVG (ej. `stroke-dasharray` / `stroke-dashoffset` draw-on effect)

```jsx
// Logo completo — para navbar y footer
import LogoFull from '@/assets/value-poc-logo.svg'
// Monograma — para hero background, favicon, loading screen
import Monogram from '@/assets/value-poc-monogram.svg'
```

**Usos del Monograma:**
- Hero: gigante en background, opacity 0.04–0.06, animación rotation lenta
- Loading/Splash screen: centered, draw-on SVG animation
- Favicon: 32×32
- OG Image decorativo

### 8.2 Imágenes

Para el POC usar imágenes placeholder de alta calidad de:
- **Unsplash Source** — búsquedas sugeridas: "finance mexico", "stock market", "business meeting"
- O placeholders de `https://picsum.photos/` con dimensiones específicas

Implementar con `next/image` para optimización automática.

### 8.3 Iconos

Usar **Lucide React** (`lucide-react`) — consistente, moderno, thin stroke.

```jsx
import { TrendingUp, Building2, PieChart, MapPin, Phone, ArrowUpRight } from 'lucide-react'
```

---

## 9. Estructura de Archivos del Proyecto

```
value-poc/
├── app/
│   ├── layout.tsx              # Root layout, fuentes, metadata
│   ├── page.tsx                # Homepage
│   ├── casa-de-bolsa/
│   │   └── page.tsx
│   ├── fondos-de-inversion/
│   │   └── page.tsx
│   ├── arrendadora/
│   │   └── page.tsx
│   └── globals.css             # CSS variables, reset, base styles
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── RevealOnScroll.tsx
│   │   └── CustomCursor.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── TickerBand.tsx
│   │   ├── QuienesSomosSection.tsx
│   │   ├── EmpresasSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── AccesoSection.tsx
│   │   └── IPCSection.tsx
│   └── icons/
│       ├── LogoFull.tsx        # SVG inline
│       └── Monogram.tsx        # SVG inline
│
├── lib/
│   ├── animations.ts           # Framer Motion variants reutilizables
│   └── market-data.ts          # Mock o fetcher de datos IPC/BMV
│
├── public/
│   └── fonts/ (si se hospedan localmente)
│
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 10. Configuración Técnica

### 10.1 package.json — Dependencias clave

```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.400.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.3.0"
  },
  "devDependencies": {
    "typescript": "^5.4.0",
    "@types/react": "^18.3.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  }
}
```

### 10.2 tailwind.config.ts

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#08979C',
          light: '#0FBEC5',
          dark: '#056B6E',
          muted: '#E6F7F7',
        },
        charcoal: '#1C1C1E',
        graphite: '#3A3A3C',
        ash: '#6E6E73',
        smoke: '#F2F2F7',
        ink: '#111111',
      },
      fontFamily: {
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'spin-slow': 'spin 120s linear infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-teal': 'linear-gradient(135deg, #08979C 0%, #056B6E 100%)',
        'gradient-dark': 'linear-gradient(180deg, #111111 0%, #0A0A0A 100%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}

export default config
```

### 10.3 Framer Motion — Variants globales (lib/animations.ts)

```ts
export const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
}

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } }
}

export const slideInLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } }
}
```

---

## 11. Responsive Design

| Breakpoint | Width | Cambios clave |
|---|---|---|
| `sm` | 640px | Stack columnas, nav hamburguer |
| `md` | 768px | Grid 2 cols en empresas |
| `lg` | 1024px | Grid 3 cols, hero split layout |
| `xl` | 1280px | Max width contenido principal |
| `2xl` | 1536px | Padding lateral generoso |

**Max content width:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

**Hero headline:** `clamp(2.5rem, 5vw, 4.5rem)` — escala fluida

---

## 12. Accesibilidad

- **Contraste mínimo:** 4.5:1 para texto normal, 3:1 para texto grande (WCAG AA)
- **Focus visible:** `outline: 2px solid var(--color-teal); outline-offset: 4px`
- **Reducción de movimiento:** Envolver todas las animaciones en `@media (prefers-reduced-motion: no-preference)`
- **ARIA labels** en todos los elementos interactivos sin texto visible
- **Semántica HTML:** `<nav>`, `<main>`, `<section aria-label="">`, `<footer>`
- **Skip to content link** visible on focus

---

## 13. Executive Prompt para Cursor AI

> Copia y pega este prompt directamente en Cursor para iniciar el desarrollo:

---

```
Eres un experto en desarrollo frontend moderno con Next.js 14, Tailwind CSS y Framer Motion.

Vas a construir una prueba de concepto de rediseño hipotético (sin fines comerciales) para Value Grupo Financiero (value.com.mx). 

## OBJETIVO
Recrear la estructura y contenido del sitio actual con un diseño completamente nuevo: minimalista, elegante, animado, interactivo y joven. Inspiración visual: https://b2bizz-wbs.framer.website/

## STACK
- Next.js 14 con App Router y TypeScript
- Tailwind CSS con config personalizada (ver tailwind.config.ts en el PRD)
- Framer Motion para animaciones
- Lucide React para iconos

## PALETA DE COLORES (extraída del logo SVG)
- Teal principal: #08979C (color del monograma)
- Teal hover: #0FBEC5
- Teal dark: #056B6E
- Negro base: #0A0A0A
- Charcoal cards: #1C1C1E
- Texto secundario: #6E6E73
- Fondo claro: #F2F2F7

## TIPOGRAFÍA
- Display/Titulos: Instrument Serif (Google Fonts)
- UI/Body/Nav: DM Sans (Google Fonts)
- Datos financieros/números: JetBrains Mono (Google Fonts)

## LOGO ASSETS
El logo completo y el monograma están en /public/assets/ como SVGs.
- El monograma (solo el símbolo teal) úsalo como elemento decorativo en el hero background (gigante, opacity ~0.05, rotación lenta)
- El logo completo úsalo en navbar y footer

## SECCIONES A CONSTRUIR (homepage)

1. **Navbar**
   - Pill flotante con backdrop-blur
   - Links: Inicio, Casa de Bolsa, Fondos de Inversión, Arrendadora
   - CTA "Acceso" dropdown (Casa de Bolsa / Arrendadora)
   - Se encoge on scroll
   - Hamburger menu en mobile

2. **Hero**
   - Headline grande en Instrument Serif: "Tu patrimonio, nuestra experiencia."
   - Subheadline en DM Sans
   - 2 CTAs: "Acceder a mi cuenta" (botón teal) + "Conoce nuestros servicios" (ghost)
   - Monograma gigante en background, rotación lenta, baja opacidad
   - Label badge: "GRUPO FINANCIERO · DESDE 1994"
   - Animación: words stagger reveal on mount con Framer Motion

3. **Ticker Band**
   - Fondo oscuro #1C1C1E, full-width
   - Datos mock: IPC, NASDAQ, NYSE, BMV con valores positivos (verde) y negativos (rojo)
   - Fuente JetBrains Mono
   - Animación marquee CSS continua, pausa on hover

4. **Quiénes Somos**
   - Split layout: imagen izquierda con clip-path diagonal, texto derecha
   - "Con más de 30 años de experiencia"
   - Valores: Honestidad, Transparencia, Servicio (con iconos Lucide)
   - Counter animado "30+" on scroll reveal

5. **Las 3 Empresas**
   - Grid 3 columnas (1 en mobile)
   - Cards con hover elevación + border teal + icon rotate
   - Casa de Bolsa / Fondos de Inversión / Arrendadora
   - Cada card con descripción corta y link "Conocer más →"

6. **Estadísticas**
   - Band full-width oscura
   - 3 stats con count-up: "30+ años", "3 empresas", "4 ciudades"
   - Instrument Serif gigante, color teal
   - Fondo con textura grano sutil

7. **Acceso Rápido**
   - 2 cards horizontales: Casa de Bolsa / Arrendadora
   - Hover: bg teal gradient
   - Links externos a las plataformas de acceso

8. **Footer**
   - Fondo black
   - Logo Value completo (versión clara)
   - 4 columnas: navegación, servicios, contacto, legal
   - Horarios y teléfonos por ciudad (CDMX, GDL, MTY, CHI)
   - Links legales: Términos, Privacidad, UNE, Buró
   - Logo Buró de Entidades Financieras
   - © 2026 Value Grupo Financiero

## ANIMACIONES REQUERIDAS
- Scroll reveal: fade-up con Framer Motion `whileInView`, `once: true`
- Stagger children en listas y grids
- Count-up en estadísticas al entrar viewport
- Marquee ticker continuo
- Hover en cards: translateY(-6px) + shadow teal
- Hero headline: word-by-word stagger on mount
- Cursor personalizado (desktop): dot teal que sigue mouse, escala en hover

## ACCESIBILIDAD
- Respetar prefers-reduced-motion
- Focus visible con outline teal
- ARIA labels en elementos interactivos
- HTML semántico (nav, main, section, footer)

## INSTRUCCIONES DE IMPLEMENTACIÓN
1. Crea primero la estructura de carpetas y archivos del proyecto
2. Configura tailwind.config.ts con la paleta y tipografía indicada
3. Crea globals.css con CSS custom properties
4. Implementa componentes UI base (Button, Card, RevealOnScroll)
5. Construye secciones de abajo hacia arriba comenzando por Footer y Navbar
6. Añade animaciones como última capa
7. Verifica responsive en todos los breakpoints

Todo el código debe ser TypeScript estricto, componentes funcionales, sin any. Usa clsx y tailwind-merge para clases condicionales.
```

---

## 14. Criterios de Éxito del POC

| Criterio | Métrica |
|---|---|
| Performance | Lighthouse score > 90 en Performance |
| Accesibilidad | Lighthouse Accessibility > 95 |
| Responsive | Sin scroll horizontal en 320px–1920px |
| Animaciones | 60fps constante, sin janks |
| Fidelidad brand | Paleta teal + negro aplicada consistentemente |
| Contenido | 100% del contenido original preservado |

---

*Documento generado como PRD + Executive Prompt para desarrollo en Cursor.*  
*POC hipotético sin fines comerciales. Todos los derechos de contenido pertenecen a Value Grupo Financiero.*
