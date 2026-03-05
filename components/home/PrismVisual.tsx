'use client'

import { useEffect, useRef } from 'react'

interface Pulse {
    lineIndex: number
    progress: number
    speed: number
}

const LINES = [
    { startYPct: 0.85, endYPct: 0.15 },
    { startYPct: 0.15, endYPct: 0.325 },
    { startYPct: 0.65, endYPct: 0.5 },
    { startYPct: 0.25, endYPct: 0.675 },
    { startYPct: 0.95, endYPct: 0.85 },
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
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

        let animId: number
        let cw = 0
        let ch = 0
        const pulses: Pulse[] = []

        function resize() {
            const parent = canvas.parentElement
            if (!parent) return
            const rect = parent.getBoundingClientRect()
            const dpr = window.devicePixelRatio || 1
            canvas.width = rect.width * dpr
            canvas.height = rect.height * dpr
            ctx.setTransform(1, 0, 0, 1, 0, 0)
            ctx.scale(dpr, dpr)
            canvas.style.width = `${rect.width}px`
            canvas.style.height = `${rect.height}px`
            cw = rect.width
            ch = rect.height
        }

        resize()
        const ro = new ResizeObserver(resize)
        if (canvas.parentElement) ro.observe(canvas.parentElement)

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

            LINES.forEach(line => {
                const startY = ch * line.startYPct
                const targetY = ch * line.endYPct

                // Left bezier path
                ctx.beginPath()
                ctx.moveTo(0, startY)
                ctx.bezierCurveTo(
                    centerX * 0.4, startY,
                    centerX * 0.6, targetY,
                    centerX, targetY
                )
                ctx.strokeStyle = '#E5E7EB'
                ctx.lineWidth = 1.5
                ctx.stroke()

                // Right straight path
                ctx.beginPath()
                ctx.moveTo(centerX, targetY)
                ctx.lineTo(cw, targetY)
                ctx.strokeStyle = `${RIGHT_COLOR}22`
                ctx.lineWidth = 1.5
                ctx.stroke()
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
                        { x: 0, y: startY },
                        { x: centerX * 0.4, y: startY },
                        { x: centerX * 0.6, y: targetY },
                        { x: centerX, y: targetY }
                    )
                    x = pos.x; y = pos.y
                    color = '#9CA3AF'
                    shadowColor = 'rgba(156,163,175,0.5)'
                    size = 2
                } else {
                    const t = (p.progress - 0.5) * 2
                    x = centerX + (cw - centerX) * t
                    y = targetY
                    color = RIGHT_COLOR
                    shadowColor = 'rgba(10,63,40,0.5)'
                    size = 2.5
                }

                // Tail
                if (p.progress > 0.02 && p.progress < 0.98) {
                    ctx.beginPath()
                    if (p.progress < 0.5) {
                        const tailT = Math.max(0, (p.progress - 0.05) * 2)
                        const tail = getBezierPoint(tailT,
                            { x: 0, y: startY },
                            { x: centerX * 0.4, y: startY },
                            { x: centerX * 0.6, y: targetY },
                            { x: centerX, y: targetY }
                        )
                        ctx.moveTo(tail.x, tail.y)
                    } else {
                        const tailT = Math.max(0, (p.progress - 0.05 - 0.5) * 2)
                        ctx.moveTo(centerX + (cw - centerX) * tailT, targetY)
                    }
                    ctx.lineTo(x, y)
                    ctx.strokeStyle = color
                    ctx.lineWidth = size * 1.5
                    ctx.globalAlpha = 0.3
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
        <div className="relative w-full bg-white rounded-3xl border border-gray-100 shadow-[0_20px_60px_-15px_rgba(10,63,40,0.08)] p-8 overflow-hidden">
            {/* Header */}
            <div className="text-center mb-8">
                <h3 className="text-lg font-medium text-[#0A3F28]">Translating Chaos into Comparability</h3>
            </div>

            {/* Processing stage */}
            <div className="relative w-full h-[320px] rounded-2xl bg-white overflow-hidden">
                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

                {/* Left — raw documents */}
                <div className="absolute left-2 top-0 bottom-0 py-8 flex flex-col justify-between z-10 pointer-events-none">
                    {[
                        'Q3_Rent_Roll_Final.xlsx',
                        'Trailing_12_Months.csv',
                        'Operating_Statement.pdf',
                        'Historical_Track_Record.xlsx',
                        'Schedule_of_REO.pdf',
                    ].map(name => (
                        <span
                            key={name}
                            className="text-[9px] font-mono text-gray-500 bg-white border border-gray-200 px-2 py-1 rounded shadow-sm whitespace-nowrap"
                        >
                            {name}
                        </span>
                    ))}
                </div>

                {/* Center engine */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-16 bg-[#0A3F28] border-[3px] border-[#D9B44A] rounded-lg shadow-[0_0_40px_rgba(10,63,40,0.15)] z-20 flex items-center justify-center">
                    <span
                        className="text-white text-[10px] font-bold tracking-[0.3em] uppercase"
                        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                    >
                        Sylvan Standard
                    </span>
                </div>

                {/* Right — standardized metrics */}
                <div className="absolute right-2 top-0 bottom-0 w-36 z-10 pointer-events-none">
                    {[
                        { label: 'On-Time Performance', topPct: 15 },
                        { label: 'Reserve Compliance',  topPct: 32.5 },
                        { label: 'Forecast Revision',   topPct: 50 },
                        { label: 'Cash Yield',          topPct: 67.5 },
                        { label: 'Defaults',            topPct: 85 },
                    ].map(m => (
                        <div
                            key={m.label}
                            className="absolute w-full h-8 bg-white border border-gray-200 border-l-[3px] border-l-[#0A3F28] shadow-sm rounded flex items-center px-2"
                            style={{ top: `calc(${m.topPct}% - 16px)` }}
                        >
                            <span className="text-[9px] font-bold uppercase tracking-wider text-[#0A3F28] leading-tight">
                                {m.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="text-center mt-5">
                <p className="text-sm text-gray-500 font-medium">
                    Make apples-to-apples comparisons instantly without digging through 10s of documents.
                </p>
            </div>
        </div>
    )
}
