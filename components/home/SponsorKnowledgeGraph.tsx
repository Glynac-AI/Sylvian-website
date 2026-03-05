'use client'

import { useEffect, useRef } from 'react'

interface Node {
    id: string
    label: string
    radius: number
    color: string
    parentId: string | null
    baseXOffset: number
    baseYOffset: number
    timeOffset: number
    floatSpeed: number
    floatRangeX: number
    floatRangeY: number
    x: number
    y: number
}

interface Edge {
    source: string
    target: string
    isMain: boolean
}

interface Particle {
    source: string
    target: string
    progress: number
    speed: number
    size: number
}

const COLORS = {
    darkGreen: '#0A3F28',
    gold: '#D9B44A',
    slate: '#64748B',
    line: 'rgba(10, 63, 40, 0.12)',
    textMuted: '#4B5563',
}

function createNode(
    id: string,
    label: string,
    xOffset: number,
    yOffset: number,
    radius: number,
    color: string,
    parentId: string | null = null
): Node {
    return {
        id, label, radius, color, parentId,
        baseXOffset: xOffset,
        baseYOffset: yOffset,
        timeOffset: Math.random() * 1000,
        floatSpeed: 0.0004 + Math.random() * 0.0003,
        floatRangeX: 6 + Math.random() * 10,
        floatRangeY: 6 + Math.random() * 10,
        x: 0, y: 0,
    }
}

function buildGraph(): { nodes: Node[]; edges: Edge[] } {
    const nodes: Node[] = []
    const edges: Edge[] = []

    nodes.push(createNode('center', 'Sponsor Behavioral Profile', 0, 0, 14, COLORS.darkGreen))

    const categories = [
        { id: 'pay', label: 'Payment Reliability',   angle: Math.PI * 0.3,  dist: 170, color: COLORS.gold,      children: 4 },
        { id: 'cap', label: 'Capital Discipline',    angle: Math.PI * 0.7,  dist: 160, color: COLORS.slate,     children: 3 },
        { id: 'for', label: 'Forecast Accuracy',     angle: Math.PI * 1.1,  dist: 180, color: COLORS.darkGreen, children: 5 },
        { id: 'dis', label: 'Disclosure Patterns',   angle: Math.PI * 1.5,  dist: 150, color: COLORS.slate,     children: 3 },
        { id: 'con', label: 'Consistency Over Time', angle: Math.PI * 1.9,  dist: 170, color: COLORS.gold,      children: 4 },
    ]

    categories.forEach(cat => {
        const cx = Math.cos(cat.angle) * cat.dist
        const cy = Math.sin(cat.angle) * cat.dist
        nodes.push(createNode(cat.id, cat.label, cx, cy, 7, cat.color, 'center'))
        edges.push({ source: cat.id, target: 'center', isMain: true })

        for (let i = 0; i < cat.children; i++) {
            const childAngle = cat.angle + (Math.random() - 0.5) * 1.2
            const childDist = cat.dist + 45 + Math.random() * 35
            const childId = `${cat.id}_child_${i}`
            nodes.push(createNode(
                childId, '',
                Math.cos(childAngle) * childDist,
                Math.sin(childAngle) * childDist,
                2.5, COLORS.slate, cat.id
            ))
            edges.push({ source: childId, target: cat.id, isMain: false })
        }
    })

    edges.push({ source: 'pay_child_0', target: 'con_child_1', isMain: false })
    edges.push({ source: 'cap_child_2', target: 'for_child_0', isMain: false })

    return { nodes, edges }
}

export default function SponsorKnowledgeGraph() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

        let animationId: number
        let time = 0
        let introProgress = 0
        let canvasWidth = 0
        let canvasHeight = 0

        const { nodes, edges } = buildGraph()
        const particles: Particle[] = []
        const mouse = { x: -1000, y: -1000 }
        const el = canvas  // stable non-null ref for inner functions

        function resize() {
            const parent = el.parentElement
            if (!parent) return
            const rect = parent.getBoundingClientRect()
            const dpr = window.devicePixelRatio || 1
            el.width = rect.width * dpr
            el.height = rect.height * dpr
            ctx.scale(dpr, dpr)
            el.style.width = `${rect.width}px`
            el.style.height = `${rect.height}px`
            canvasWidth = rect.width
            canvasHeight = rect.height
        }

        resize()

        const resizeObserver = new ResizeObserver(resize)
        if (el.parentElement) resizeObserver.observe(el.parentElement)

        const particleInterval = setInterval(() => {
            if (introProgress < 0.8) return
            const edge = edges[Math.floor(Math.random() * edges.length)]
            particles.push({
                source: edge.source,
                target: edge.target,
                progress: 0,
                speed: 0.005 + Math.random() * 0.005,
                size: edge.isMain ? 2 : 1.2,
            })
        }, 400)

        function onMouseMove(e: MouseEvent) {
            const rect = el.getBoundingClientRect()
            mouse.x = e.clientX - rect.left
            mouse.y = e.clientY - rect.top
        }
        function onMouseLeave() { mouse.x = -1000; mouse.y = -1000 }
        el.addEventListener('mousemove', onMouseMove)
        el.addEventListener('mouseleave', onMouseLeave)

        function animate() {
            time += 16
            const centerX = canvasWidth / 2
            const centerY = canvasHeight / 2
            const scale = Math.min(1.3, canvasWidth / 600)

            introProgress += (1 - introProgress) * 0.04
            const easedIntro = 1 - Math.pow(1 - introProgress, 3)

            ctx.clearRect(0, 0, canvasWidth, canvasHeight)

            // Update node positions
            nodes.forEach(node => {
                const currentBaseX = node.baseXOffset * scale * easedIntro
                const currentBaseY = node.baseYOffset * scale * easedIntro

                let targetX = centerX + currentBaseX + Math.sin(time * node.floatSpeed + node.timeOffset) * node.floatRangeX
                let targetY = centerY + currentBaseY + Math.cos(time * node.floatSpeed + node.timeOffset) * node.floatRangeY

                const dx = mouse.x - targetX
                const dy = mouse.y - targetY
                const dist = Math.sqrt(dx * dx + dy * dy)
                const maxRepelDist = 120 * scale

                if (dist < maxRepelDist && dist > 0) {
                    const force = Math.pow((maxRepelDist - dist) / maxRepelDist, 2)
                    targetX -= (dx / dist) * force * 20
                    targetY -= (dy / dist) * force * 20
                }

                if (node.x === 0 && node.y === 0) {
                    node.x = centerX; node.y = centerY
                } else {
                    node.x += (targetX - node.x) * 0.08
                    node.y += (targetY - node.y) * 0.08
                }
            })

            // Draw edges
            ctx.globalAlpha = easedIntro
            edges.forEach(edge => {
                const src = nodes.find(n => n.id === edge.source)
                const tgt = nodes.find(n => n.id === edge.target)
                if (!src || !tgt) return
                ctx.beginPath()
                ctx.moveTo(src.x, src.y)
                ctx.lineTo(tgt.x, tgt.y)
                ctx.strokeStyle = edge.target === 'center' ? 'rgba(10, 63, 40, 0.25)' : COLORS.line
                ctx.lineWidth = edge.target === 'center' ? 1.2 : 0.6
                ctx.stroke()
            })

            // Draw particles
            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i]
                p.progress += p.speed
                if (p.progress >= 1) { particles.splice(i, 1); continue }

                const src = nodes.find(n => n.id === p.source)
                const tgt = nodes.find(n => n.id === p.target)
                if (!src || !tgt) continue

                const px = src.x + (tgt.x - src.x) * p.progress
                const py = src.y + (tgt.y - src.y) * p.progress
                const pAlpha = Math.sin(p.progress * Math.PI)

                ctx.beginPath()
                ctx.arc(px, py, p.size, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(217, 180, 74, ${pAlpha * 0.8})`
                ctx.shadowBlur = 6
                ctx.shadowColor = COLORS.gold
                ctx.fill()
                ctx.shadowBlur = 0
            }

            // Draw nodes
            nodes.forEach(node => {
                const currentRadius = node.radius * scale * (0.2 + 0.8 * easedIntro)

                ctx.globalAlpha = easedIntro
                ctx.shadowBlur = node.id === 'center' ? 15 : 5
                ctx.shadowColor = 'rgba(0, 0, 0, 0.12)'
                ctx.shadowOffsetY = 2
                ctx.beginPath()
                ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2)
                ctx.fillStyle = node.color
                ctx.fill()
                ctx.shadowBlur = 0
                ctx.shadowOffsetY = 0

                if (node.label && easedIntro > 0.5) {
                    ctx.shadowColor = 'white'
                    ctx.shadowBlur = 8
                    ctx.fillStyle = node.id === 'center' ? COLORS.darkGreen : COLORS.textMuted
                    const fontSize = (node.id === 'center' ? 15 : 13) * Math.max(0.85, scale)
                    ctx.font = `${node.id === 'center' ? '600' : '500'} ${fontSize}px Inter`
                    ctx.textAlign = 'center'

                    const labelYOffset = node.id === 'center'
                        ? -currentRadius - 16 * scale
                        : node.y > centerY
                            ? currentRadius + 20 * scale
                            : -currentRadius - 12 * scale

                    ctx.globalAlpha = Math.min(1, (easedIntro - 0.5) * 2)
                    ctx.fillText(node.label, node.x, node.y + labelYOffset)
                    ctx.globalAlpha = 1
                    ctx.shadowBlur = 0
                }
            })

            animationId = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            cancelAnimationFrame(animationId)
            clearInterval(particleInterval)
            resizeObserver.disconnect()
            el.removeEventListener('mousemove', onMouseMove)
            el.removeEventListener('mouseleave', onMouseLeave)
        }
    }, [])

    return (
        <div className="relative w-full h-[520px] cursor-crosshair">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        </div>
    )
}