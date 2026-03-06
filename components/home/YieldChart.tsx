'use client'

import { useEffect, useRef } from 'react'

export default function YieldChart() {
    const volatileRef = useRef<SVGPathElement>(null)
    const stableRef   = useRef<SVGPathElement>(null)
    const vLabelRef   = useRef<SVGGElement>(null)
    const sLabelRef   = useRef<SVGGElement>(null)
    const alive       = useRef(true)

    useEffect(() => {
        alive.current = true

        const volatile = volatileRef.current
        const stable   = stableRef.current
        const vLabel   = vLabelRef.current
        const sLabel   = sLabelRef.current
        if (!volatile || !stable || !vLabel || !sLabel) return

        // Measure exact path lengths from the DOM — bulletproof, no guessing
        const vLen = volatile.getTotalLength()
        const sLen = stable.getTotalLength()

        // Set dasharray to exact length so one dash = full path
        volatile.style.strokeDasharray = String(vLen)
        stable.style.strokeDasharray   = String(sLen)

        function reset() {
            volatile.style.transition = 'none'
            stable.style.transition   = 'none'
            volatile.style.strokeDashoffset = String(vLen)
            stable.style.strokeDashoffset   = String(sLen)
            vLabel.style.transition = 'none'
            sLabel.style.transition = 'none'
            vLabel.style.opacity = '0'
            sLabel.style.opacity = '0'
        }

        async function sleep(ms: number) {
            return new Promise<void>(r => setTimeout(r, ms))
        }

        async function runCycle() {
            reset()
            await sleep(50) // let reset paint before transitions begin

            // Draw volatile line
            volatile.style.transition = `stroke-dashoffset 1.6s cubic-bezier(0.4,0,0.2,1)`
            volatile.style.strokeDashoffset = '0'
            await sleep(1700)

            // Fade in volatile label
            vLabel.style.transition = 'opacity 0.4s ease'
            vLabel.style.opacity = '1'
            await sleep(700)

            // Draw stable Sylvan line
            stable.style.transition = `stroke-dashoffset 1s cubic-bezier(0.2,0.8,0.2,1)`
            stable.style.strokeDashoffset = '0'
            await sleep(1100)

            // Fade in stable label
            sLabel.style.transition = 'opacity 0.4s ease'
            sLabel.style.opacity = '1'

            // Hold finished state for 4s before looping
            await sleep(4000)
        }

        async function loop() {
            while (alive.current) {
                if (document.hidden) { await sleep(500); continue }
                await runCycle()
            }
        }

        loop()

        return () => { alive.current = false }
    }, [])

    return (
        <div className="bg-white p-6 border border-[#E5E7EB] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] rounded overflow-hidden">
            <svg
                width="100%"
                height="auto"
                viewBox="0 0 560 320"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: 'block' }}
            >
                {/* Grid lines */}
                <g stroke="#F3F4F6" strokeWidth="1">
                    <line x1="40" y1="60"  x2="480" y2="60"  />
                    <line x1="40" y1="120" x2="480" y2="120" />
                    <line x1="40" y1="180" x2="480" y2="180" />
                    <line x1="40" y1="240" x2="480" y2="240" />
                </g>
                {/* Axes */}
                <line x1="40" y1="280" x2="480" y2="280" stroke="#E5E7EB" strokeWidth="1" />
                <line x1="40" y1="280" x2="40"  y2="40"  stroke="#E5E7EB" strokeWidth="1" />
                {/* Y-axis labels */}
                <g fill="#D1D5DB" fontFamily="'Roboto Mono', monospace" fontSize="9" textAnchor="end">
                    <text x="34" y="63">12%</text>
                    <text x="34" y="123">8%</text>
                    <text x="34" y="183">4%</text>
                    <text x="34" y="243">0%</text>
                </g>
                {/* X-axis labels */}
                <g fill="#D1D5DB" fontFamily="'Roboto Mono', monospace" fontSize="9">
                    <text x="40"  y="294" textAnchor="middle">Y1</text>
                    <text x="480" y="294" textAnchor="middle">Y10</text>
                </g>
                {/* Volatile equity line — dasharray/offset set by useEffect via getTotalLength() */}
                <path
                    ref={volatileRef}
                    fill="none"
                    stroke="#9CA3AF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M 40 220 L 80 160 L 120 200 L 170 100 L 210 155 L 255 80 L 295 140 L 340 65 L 375 130 L 415 75 L 450 120 L 480 95"
                />
                {/* Stable Sylvan line */}
                <path
                    ref={stableRef}
                    fill="none"
                    stroke="#0A3F28"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ filter: 'drop-shadow(0 2px 4px rgba(10,63,40,0.25))' }}
                    d="M 40 240 L 480 130"
                />
                {/* Volatile label */}
                <g ref={vLabelRef} style={{ opacity: 0 }}>
                    <text x="488" y="91"  fontFamily="'Roboto Mono', monospace" fontSize="9" fill="#9CA3AF">Equity</text>
                    <text x="488" y="103" fontFamily="'Roboto Mono', monospace" fontSize="9" fill="#9CA3AF">Yield</text>
                    <circle cx="480" cy="95" r="3" fill="#9CA3AF" />
                </g>
                {/* Stable label */}
                <g ref={sLabelRef} style={{ opacity: 0 }}>
                    <text x="488" y="127" fontFamily="'Roboto Mono', monospace" fontSize="9" fill="#0A3F28" fontWeight="600">Sylvan</text>
                    <text x="488" y="139" fontFamily="'Roboto Mono', monospace" fontSize="9" fill="#0A3F28" fontWeight="600">Yield</text>
                    <circle cx="480" cy="130" r="4" fill="#0A3F28" />
                </g>
            </svg>
        </div>
    )
}
