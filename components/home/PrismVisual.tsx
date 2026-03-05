'use client'

import { useEffect, useRef } from 'react'

interface Pulse {
    lineIndex: number
    progress: number
    speed: number
}

const LINES = [
    { startYPct: 0.15,  endYPct: 0.5   },
    { startYPct: 0.325, endYPct: 0.15  },
    { startYPct: 0.5,   endYPct: 0.85  },
    { startYPct: 0.675, endYPct: 0.325 },
    { startYPct: 0.85,  endYPct: 0.675 },
]

const RIGHT_COLOR = '#0A3F28'

function getBezierPoint(
    t: number,
    p0: { x: number; y: number },
    p1: { x: number; y: number },
    p2: { x: number; y: number },
    p3: { x: number; y: number }
) {
    const u = 1 - t
    const tt = t * t
    const uu = u * u
    const uuu = uu * u
    const ttt = tt * t
    return {
        x: uuu * p0.x + 3 * uu * t * p1.x + 3 * u * tt * p2.x + ttt * p3.x,
        y: uuu * p0.y + 3 * uu * t * p1.y + 3 * u * tt * p2.y + ttt * p3.y,
    }
}

export default function PrismVisual() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const el = canvas  // stable non-null ref for inner functions
        const ctx = el.getContext('2d') as CanvasRenderingContext2D

        let animId: number
        let cw = 0
        let ch = 0
        const pulses: Pulse[] = []

        function resize() {
            const parent = el.parentElement
            if (!parent) return
            const rect = parent.getBoundingClientRect()
            const dpr = window.devicePixelRatio || 1
            el.width = rect.width * dpr
            el.height = rect.height * dpr
            ctx.setTransform(1, 0, 0, 1, 0, 0)
            ctx.scale(dpr, dpr)
            el.style.width = `${rect.width}px`
            el.style.height = `${rect.height}px`
            cw = rect.width
            ch = rect.height
        }

        resize()
        const ro = new ResizeObserver(resize)
        if (el.parentElement) ro.observe(el.parentElement)

        const interval = setInterval(() => {
            pulses.push({
                lineIndex: Math.floor(Math.random() * LINES.length),
                progress: 0,
                speed: 0.003 + Math.random() * 0.002,
            })
        }, 600)

        function draw() {
            ctx.clearRect(0, 0, cw, ch)

            const centerX = cw / 2
            const leftPad = cw * 0.28
            const rightPad = cw * 0.72

            LINES.forEach(line => {
                const startY = ch * line.startYPct
                const targetY = ch * line.endYPct

                // Left bezier path
                ctx.beginPath()
                ctx.moveTo(leftPad, startY)
                ctx.bezierCurveTo(
                    leftPad + (centerX - leftPad) * 0.6, startY,
                    leftPad + (centerX - leftPad) * 0.4, targetY,
                    centerX, targetY
                )
                ctx.strokeStyle = '#E5E7EB'
                ctx.lineWidth = 1.5
                ctx.stroke()

                // Left terminal node
                ctx.beginPath()
                ctx.arc(leftPad, startY, 2.5, 0, Math.PI * 2)
                ctx.fillStyle = '#D1D5DB'
                ctx.fill()

                // Right straight path
                ctx.beginPath()
                ctx.moveTo(centerX, targetY)
                ctx.lineTo(rightPad, targetY)
                ctx.strokeStyle = `${RIGHT_COLOR}22`
                ctx.lineWidth = 1.5
                ctx.stroke()

                // Right terminal node
                ctx.beginPath()
                ctx.arc(rightPad, targetY, 2.5, 0, Math.PI * 2)
                ctx.fillStyle = RIGHT_COLOR
                ctx.fill()
            })

            for (let i = pulses.length - 1; i >= 0; i--) {
                const p = pulses[i]
                p.progress += p.speed
                if (p.progress >= 1) { pulses.splice(i, 1); continue }

                const line = LINES[p.lineIndex]
                const startY = ch * line.startYPct
                const targetY = ch * line.endYPct

                let x: number, y: number, color: string, shadowColor: string, size: number

                if (p.progress < 0.5) {
                    const t = p.progress * 2
                    const pos = getBezierPoint(t,
                        { x: leftPad, y: startY },
                        { x: leftPad + (centerX - leftPad) * 0.6, y: startY },
                        { x: leftPad + (centerX - leftPad) * 0.4, y: targetY },
                        { x: centerX, y: targetY }
                    )
                    x = pos.x; y = pos.y
                    color = '#9CA3AF'
                    shadowColor = 'rgba(156,163,175,0.4)'
                    size = 2
                } else {
                    const t = (p.progress - 0.5) * 2
                    x = centerX + (rightPad - centerX) * t
                    y = targetY
                    color = RIGHT_COLOR
                    shadowColor = 'rgba(10,63,40,0.4)'
                    size = 2.5
                }

                // Tail
                if (p.progress > 0.02 && p.progress < 0.98) {
                    ctx.beginPath()
                    if (p.progress < 0.5) {
                        const tailT = Math.max(0, (p.progress - 0.05) * 2)
                        const tail = getBezierPoint(tailT,
                            { x: leftPad, y: startY },
                            { x: leftPad + (centerX - leftPad) * 0.6, y: startY },
                            { x: leftPad + (centerX - leftPad) * 0.4, y: targetY },
                            { x: centerX, y: targetY }
                        )
                        ctx.moveTo(tail.x, tail.y)
                    } else {
                        const tailT = Math.max(0, (p.progress - 0.05 - 0.5) * 2)
                        ctx.moveTo(centerX + (rightPad - centerX) * tailT, targetY)
                    }
                    ctx.lineTo(x, y)
                    ctx.strokeStyle = color
                    ctx.lineWidth = size * 1.5
                    ctx.globalAlpha = Math.sin(p.progress * Math.PI) * 0.4
                    ctx.stroke()
                    ctx.globalAlpha = 1
                }

                // Dot
                ctx.beginPath()
                ctx.arc(x, y, size, 0, Math.PI * 2)
                ctx.fillStyle = color
                ctx.shadowBlur = 8
                ctx.shadowColor = shadowColor
                ctx.fill()
                ctx.shadowBlur = 0
            }

            animId = requestAnimationFrame(draw)
        }

        draw()

        return () => {
            cancelAnimationFrame(animId)
            clearInterval(interval)
            ro.disconnect()
        }
    }, [])

    return (
        <div className="relative w-full p-8 md:p-12 overflow-hidden">
            {/* Header */}
            <div className="text-center mb-10">
                <h3 className="text-lg md:text-2xl font-medium text-[#111827]">Translating Chaos into Comparability</h3>
            </div>

            {/* Processing stage */}
            <div className="relative w-full h-[320px] md:h-[360px] flex items-center justify-center overflow-hidden">
                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

                {/* Left — raw documents (plain mono text, aligned to 28% canvas start) */}
                {[
                    { name: 'Trailing_12_Months.csv',   topPct: 15   },
                    { name: 'Track_Record_v3.xlsx',      topPct: 32.5 },
                    { name: 'Operating_Statement.pdf',   topPct: 50   },
                    { name: 'Q3_Rent_Roll_Final.xlsx',   topPct: 67.5 },
                    { name: 'Schedule_of_REO.pdf',       topPct: 85   },
                ].map(({ name, topPct }) => (
                    <div
                        key={name}
                        className="absolute left-0 w-[28%] pr-3 md:pr-5 flex items-center justify-end pointer-events-none z-10"
                        style={{ top: `${topPct}%`, transform: 'translateY(-50%)' }}
                    >
                        <span className="text-[9.5px] md:text-xs font-mono text-gray-400 tracking-tight truncate">
                            {name}
                        </span>
                    </div>
                ))}

                {/* Center engine */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-16 md:w-24 bg-[#0A3F28] border-2 border-[#D9B44A] rounded-md shadow-[0_0_30px_rgba(10,63,40,0.12)] z-20 flex items-center justify-center">
                    <span
                        className="text-white text-xs md:text-sm font-bold tracking-[0.3em] uppercase"
                        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                    >
                        Sylvan Standard
                    </span>
                </div>

                {/* Right — standardized metrics (plain text, aligned to 72% canvas end) */}
                {[
                    { label: 'On-Time Perf',  topPct: 15   },
                    { label: 'Reserve Comp',  topPct: 32.5 },
                    { label: 'Forecast Rev',  topPct: 50   },
                    { label: 'Cash Yield',    topPct: 67.5 },
                    { label: 'Defaults',      topPct: 85   },
                ].map(m => (
                    <div
                        key={m.label}
                        className="absolute left-[72%] w-[28%] pl-3 md:pl-5 flex items-center pointer-events-none z-10"
                        style={{ top: `${m.topPct}%`, transform: 'translateY(-50%)' }}
                    >
                        <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-widest text-[#111827]">
                            {m.label}
                        </span>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="text-center mt-8">
                <p className="text-[11px] text-gray-500 font-medium whitespace-nowrap">
                    Make apples-to-apples comparisons instantly without digging through 10s of documents.
                </p>
            </div>
        </div>
    )
}
