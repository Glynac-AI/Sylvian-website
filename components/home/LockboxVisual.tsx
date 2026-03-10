'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

function sleep(ms: number) {
    return new Promise(r => setTimeout(r, ms))
}

interface Pos { x: number; y: number }

interface Packet {
    id: number
    from: Pos
    to: Pos
    ctrl: Pos
    progress: number
    small: boolean
    speed: number
}

function bezier(p0: Pos, p1: Pos, p2: Pos, t: number): Pos {
    return {
        x: (1 - t) ** 2 * p0.x + 2 * (1 - t) * t * p1.x + t ** 2 * p2.x,
        y: (1 - t) ** 2 * p0.y + 2 * (1 - t) * t * p1.y + t ** 2 * p2.y,
    }
}

export default function LockboxVisual() {
    const wrapRef     = useRef<HTMLDivElement>(null)
    const propsRef    = useRef<HTMLDivElement>(null)
    const lockboxRef  = useRef<HTMLDivElement>(null)
    const investorRef = useRef<HTMLDivElement>(null)
    const sponsorRef  = useRef<HTMLDivElement>(null)

    const [active, setActive]   = useState(false)
    const [packets, setPackets] = useState<Packet[]>([])
    const [lines, setLines]     = useState({ pl: '', li: '', ls: '' })
    const pid    = useRef(0)
    const alive  = useRef(true)

    const center = useCallback((el: HTMLDivElement | null): Pos => {
        if (!el || !wrapRef.current) return { x: 0, y: 0 }
        const wr = wrapRef.current.getBoundingClientRect()
        const er = el.getBoundingClientRect()
        return { x: er.left + er.width / 2 - wr.left, y: er.top + er.height / 2 - wr.top }
    }, [])

    const recalcLines = useCallback(() => {
        const p = center(propsRef.current)
        const l = center(lockboxRef.current)
        const i = center(investorRef.current)
        const s = center(sponsorRef.current)
        // straight line props→lock, curved lock→investor, curved lock→sponsor
        const midX = l.x + (i.x - l.x) * 0.5
        setLines({
            pl: `M${p.x},${p.y} L${l.x},${l.y}`,
            li: `M${l.x},${l.y} Q${midX},${l.y} ${i.x},${i.y}`,
            ls: `M${l.x},${l.y} Q${midX},${l.y} ${s.x},${s.y}`,
        })
    }, [center])

    // speed: 1/72 ≈ 1200ms at 60fps, 1/84 ≈ 1400ms for sponsor
    const spawn = useCallback((fromEl: HTMLDivElement | null, toEl: HTMLDivElement | null, small = false, curve = false, speed = 1 / 72) => {
        const from = center(fromEl)
        const to   = center(toEl)
        const ctrl = curve
            ? { x: from.x + (to.x - from.x) * 0.5, y: from.y }
            : { x: (from.x + to.x) / 2, y: (from.y + to.y) / 2 }
        setPackets(prev => [...prev, { id: pid.current++, from, to, ctrl, progress: 0, small, speed }])
    }, [center])

    useEffect(() => {
        let raf: number
        let lastTick: number | null = null
        const tick = (now: number) => {
            const delta = lastTick === null ? 16 : Math.min(now - lastTick, 100)
            lastTick = now
            const step = delta / 16
            setPackets(prev => prev.map(p => ({ ...p, progress: p.progress + p.speed * step })).filter(p => p.progress < 1))
            raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(raf)
    }, [])

    // Sequence loop
    useEffect(() => {
        alive.current = true

        // wait for DOM then measure
        const initTimer = setTimeout(recalcLines, 80)
        window.addEventListener('resize', recalcLines)
        const ro = new ResizeObserver(recalcLines)
        if (wrapRef.current) ro.observe(wrapRef.current)

        async function loop() {
            while (alive.current) {
                if (document.hidden) { await sleep(500); continue }

                setPackets([])
                setActive(false)

                // props → lockbox: 2 packets at 0ms and 300ms (ref: same)
                spawn(propsRef.current, lockboxRef.current, false, false)
                await sleep(300)
                spawn(propsRef.current, lockboxRef.current, false, false)
                await sleep(1500)

                // lockbox glows
                setActive(true)
                await sleep(2500)

                // lockbox → investor: 3 packets at 0ms, 300ms, 600ms (ref: same)
                spawn(lockboxRef.current, investorRef.current, false, true)
                await sleep(300)
                spawn(lockboxRef.current, investorRef.current, false, true)
                await sleep(300)
                spawn(lockboxRef.current, investorRef.current, false, true)
                await sleep(2500)

                // lockbox → sponsor: 1 small packet (ref: cashSmall, duration 1400ms)
                spawn(lockboxRef.current, sponsorRef.current, true, true, 1 / 84)
                await sleep(3500)
            }
        }

        loop()

        return () => {
            alive.current = false
            clearTimeout(initTimer)
            window.removeEventListener('resize', recalcLines)
            ro.disconnect()
        }
    }, [recalcLines, spawn])

    return (
        <div className="relative w-full p-3 md:p-8 overflow-hidden select-none">

            {/* ── Node layout — this is the coordinate root for lines & packets ── */}
            <div ref={wrapRef} className="relative flex items-center justify-between gap-6 min-h-80">

            {/* SVG connector lines — inside wrapRef so coords match */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible', zIndex: 0 }}>
                <path d={lines.pl} fill="none" stroke="#D1D5DB" strokeWidth="1.5" strokeDasharray="6 5" />
                <path d={lines.li} fill="none" stroke="#D1D5DB" strokeWidth="1.5" strokeDasharray="6 5" />
                <path d={lines.ls} fill="none" stroke="#D1D5DB" strokeWidth="1.5" strokeDasharray="6 5" />
            </svg>

            {/* Animated cash packets — also inside wrapRef */}
            {packets.map(p => {
                const pos = bezier(p.from, p.ctrl, p.to, p.progress)
                const t = p.progress
                const scale = t < 0.1 ? t * 10 : t > 0.9 ? 1 - (t - 0.9) * 10 : 1
                const size = p.small ? 32 : 38
                return (
                    <div
                        key={p.id}
                        className="absolute flex items-center justify-center bg-white rounded-full border border-gray-200 shadow-md"
                        style={{
                            width: size, height: size,
                            left: pos.x - size / 2,
                            top: pos.y - size / 2,
                            transform: `scale(${scale})`,
                            zIndex: 40,
                            pointerEvents: 'none',
                        }}
                    >
                        <svg width={p.small ? 14 : 18} height={p.small ? 14 : 18} fill="none" viewBox="0 0 24 24" stroke="#0A3F28" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                )
            })}

                {/* LEFT — Portfolio Assets */}
                <div className="flex flex-col items-center gap-3 w-28 shrink-0 relative z-10">
                    <div ref={propsRef} className="w-16 h-16 rounded-full bg-[#F9FAFB] border-2 border-gray-200 flex items-center justify-center shadow-sm">
                        <svg className="w-7 h-7 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </div>
                    <div className="text-center">
                        <p className="font-semibold text-sm text-gray-800">Portfolio Assets</p>
                        <p className="text-xs text-gray-400 mt-0.5">Gross Revenue</p>
                    </div>
                </div>

                {/* CENTER — Lockbox */}
                <div className="flex flex-col items-center gap-4 shrink-0 relative z-10">
                    <div
                        ref={lockboxRef}
                        className="w-28 h-28 rounded-2xl flex flex-col items-center justify-center gap-1 bg-[#0A3F28] transition-all duration-500"
                        style={{
                            border: `2px solid ${active ? '#D9B44A' : '#0A3F28'}`,
                            boxShadow: active ? '0 0 32px rgba(217,180,74,0.25)' : '0 8px 24px rgba(10,63,40,0.2)',
                        }}
                    >
                        {/* Scales of justice icon */}
                        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                        <span className="text-[10px] uppercase tracking-widest text-white font-semibold">Lockbox</span>
                    </div>
                    <div className="text-center">
                        <p className="font-bold text-sm text-[#0A3F28]">Independent Lockbox</p>
                        <p className="text-xs text-gray-500 mt-0.5">Sponsor has 0 access</p>
                    </div>
                </div>

                {/* RIGHT — Investors + Sponsor stacked */}
                <div className="flex flex-col gap-10 w-28 shrink-0 relative z-10">

                    {/* Investor */}
                    <div className="flex flex-col items-center gap-3">
                        <div ref={investorRef} className="w-16 h-16 rounded-full bg-white border-2 border-[#0A3F28] flex items-center justify-center shadow-md relative">
                            <div className="absolute -top-2 -right-2 bg-white text-[#0A3F28] text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-[#0A3F28] shadow-sm leading-tight">
                                1st
                            </div>
                            <svg className="w-6 h-6 text-[#0A3F28]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div className="text-center">
                            <p className="font-semibold text-sm text-gray-800">Investors</p>
                            <p className="text-xs text-[#0A3F28] font-medium mt-0.5">Priority Distributions</p>
                        </div>
                    </div>

                    {/* Sponsor */}
                    <div className="flex flex-col items-center gap-3">
                        <div ref={sponsorRef} className="w-16 h-16 rounded-full bg-[#F9FAFB] border-2 border-gray-200 flex items-center justify-center shadow-sm relative">
                            <div className="absolute -top-2 -right-2 bg-white text-gray-500 text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-gray-200 shadow-sm leading-tight">
                                2nd
                            </div>
                            <svg className="w-6 h-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <div className="text-center">
                            <p className="font-semibold text-sm text-gray-800">Sponsor</p>
                            <p className="text-xs text-gray-400 mt-0.5">Subordinated Waterfall</p>
                        </div>
                    </div>

                </div>

            </div>{/* end wrapRef */}
        </div>
    )
}
