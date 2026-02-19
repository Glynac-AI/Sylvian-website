'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
    LineChart, Line, ReferenceArea,
    BarChart, Bar,
    PieChart, Pie, Cell,
    XAxis, Legend,
    ResponsiveContainer, YAxis,
} from 'recharts'
import { SponsorOperatingRecord } from '@/data/mockSponsors'

// ─── Types ────────────────────────────────────────────────────────────────────

interface Props {
    operatingRecord: SponsorOperatingRecord
}

type TabId = 'overview' | 'performance' | 'risk'
type PillVariant = 'safe' | 'warn' | 'risk'
type HealthStatus = 'healthy' | 'watch' | 'critical'

// ─── Primitive Components ─────────────────────────────────────────────────────

function RingChart({
    pct,
    color = '#1A3C34',
    trailColor = '#E5E7EB',
    size = 112,
}: {
    pct: number
    color?: string
    trailColor?: string
    size?: number
}) {
    const half = size / 2
    const innerRadius = Math.round(size * 0.32)
    const outerRadius = Math.round(size * 0.45)
    const data = [{ value: pct }, { value: 100 - pct }]
    return (
        <PieChart width={size} height={size}>
            <Pie
                data={data}
                cx={half}
                cy={half}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={90}
                endAngle={-270}
                dataKey="value"
                strokeWidth={0}
            >
                <Cell fill={color} />
                <Cell fill={trailColor} />
            </Pie>
        </PieChart>
    )
}

// ─── Label components for Recharts (receive viewBox via cloneElement) ─────────

type ViewBox = { x: number; y: number; width: number; height: number }

// Both labels mirror each other — bottom-right of their respective zone
function ZoneLabel({
    viewBox, text, color,
}: {
    viewBox?: ViewBox
    text: string
    color: string
}) {
    if (!viewBox) return null
    return (
        <text
            x={viewBox.x + viewBox.width - 12}
            y={viewBox.y + viewBox.height - 12}
            textAnchor="end"
            fill={color}
            fontSize={10}
            fontWeight={700}
            letterSpacing="0.1em"
            style={{ fontFamily: 'var(--font-sans), "Inter", sans-serif' }}
        >
            {text}
        </text>
    )
}

// ─── Chart ────────────────────────────────────────────────────────────────────

function WaterlineChart({ historicalAdequacy }: { historicalAdequacy: number[] }) {
    const chartData = historicalAdequacy.map(v => ({ v }))
    const YMIN = 84, YMAX = 122, THRESHOLD = 100

    return (
        <ResponsiveContainer width="100%" height={276}>
            <LineChart data={chartData} margin={{ top: 32, right: 8, bottom: 16, left: 8 }}>
                <YAxis domain={[YMIN, YMAX]} hide />

                {/* Upper zone — transparent, carries the EXCESS CAPITAL label */}
                <ReferenceArea
                    y1={THRESHOLD} y2={YMAX}
                    fillOpacity={0}
                    strokeOpacity={0}
                    label={<ZoneLabel text="EXCESS CAPITAL" color="#1A3C34" />}
                />

                {/* Lower breach zone — soft rose fill, carries the BREACH ZONE label */}
                <ReferenceArea
                    y1={YMIN} y2={THRESHOLD}
                    fill="#FEF2F2"
                    strokeOpacity={0}
                    label={<ZoneLabel text="BREACH ZONE" color="#DC2626" />}
                />

                {/* Smooth monotone line with hollow dots */}
                <Line
                    type="monotone"
                    dataKey="v"
                    stroke="#1A3C34"
                    strokeWidth={2}
                    dot={{ fill: 'white', stroke: '#1A3C34', strokeWidth: 2, r: 4 }}
                    activeDot={false}
                    isAnimationActive={false}
                />
            </LineChart>
        </ResponsiveContainer>
    )
}

function Pill({ variant, children }: { variant: PillVariant; children: React.ReactNode }) {
    const styles: Record<PillVariant, string> = {
        safe: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        warn: 'bg-amber-50 text-amber-700 border-amber-200',
        risk: 'bg-red-50 text-red-700 border-red-200',
    }
    return (
        <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${styles[variant]}`}>
            {children}
        </span>
    )
}

function MetricCard({
    children,
    className = '',
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className={`bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col ${className}`}
        >
            {children}
        </motion.div>
    )
}

function CardHeader({ title, subtitle, badge }: { title: string; subtitle?: string; badge?: React.ReactNode }) {
    return (
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 flex-shrink-0">
            <div>
                <span className="font-serif text-[#1A3C34] font-bold text-base">{title}</span>
                {subtitle && <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>}
            </div>
            {badge}
        </div>
    )
}

const SYSTEMIC_COLORS: Record<'red' | 'orange' | 'green', string> = {
    red:    '#DC2626',
    orange: '#D97706',
    green:  '#10B981',
}

const SYSTEMIC_STATUS_COLORS: Record<'red' | 'orange' | 'green', string> = {
    red:    'text-red-600',
    orange: 'text-amber-600',
    green:  'text-emerald-500',
}

// ─── Tab Content: Overview ────────────────────────────────────────────────────

function OverviewTab({ record }: { record: SponsorOperatingRecord }) {
    const { paymentBehavior, reserveDiscipline, forecastAccuracy, disclosureBehavior, systemicRecurrence } = record

    const onTimeCount = paymentBehavior.totalPayments - paymentBehavior.latePayments

    const injectionRatePct = ((paymentBehavior.sponsorInjections / paymentBehavior.totalPayments) * 100).toFixed(1)

    const proactivePct =
        disclosureBehavior.transparencyRating === 'TOP TIER' ? 96 :
        disclosureBehavior.transparencyRating === 'STRONG' ? 88 : 72

    // Quarterly aggregation — percentage based so sliver sizes are accurate
    const quarters = [
        { label: 'Q1', months: paymentBehavior.last12Months.slice(0, 3) },
        { label: 'Q2', months: paymentBehavior.last12Months.slice(3, 6) },
        { label: 'Q3', months: paymentBehavior.last12Months.slice(6, 9) },
        { label: 'Q4', months: paymentBehavior.last12Months.slice(9, 12) },
    ].map(q => {
        const injectionCount = q.months.filter(m => m.status === 'injection').length
        const lateCount = q.months.filter(m => m.status === 'late').length
        const injectionPct = injectionCount > 0 ? 15 : 0
        const latePct = lateCount > 0 ? 10 : 0
        return {
            label: q.label,
            prompt: 100 - injectionPct - latePct,
            injection: injectionPct,
            late: latePct,
        }
    })

    const reserveHealth: HealthStatus =
        reserveDiscipline.currentAdequacy >= 105 ? 'healthy' :
        reserveDiscipline.currentAdequacy >= 100 ? 'watch' : 'critical'


    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

            {/* 1 ── On-Time Performance */}
            <MetricCard>
                <CardHeader
                    title="On-Time Performance (OTP)"
                    badge={<Pill variant="safe">Institutional Standard</Pill>}
                />
                <div className="p-8 flex items-center gap-8">
                    <div className="w-28 h-28 flex-shrink-0">
                        <RingChart pct={paymentBehavior.onTimeRate} />
                    </div>
                    <div>
                        <p className="font-serif text-5xl font-semibold text-[#1A3C34] leading-none">
                            {paymentBehavior.onTimeRate}%
                        </p>
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mt-2">
                            Reliability Score
                        </p>
                        <p className="text-xs text-gray-500 mt-2">
                            {onTimeCount} of {paymentBehavior.totalPayments} payments on-time
                        </p>
                    </div>
                </div>
            </MetricCard>

            {/* 2 ── Sponsor Dependency Rate */}
            <MetricCard>
                <CardHeader
                    title="Sponsor Dependency Rate"
                    badge={
                        <Pill variant={paymentBehavior.sponsorInjections > 3 ? 'warn' : 'safe'}>
                            {paymentBehavior.sponsorInjections > 3 ? 'Watchlist' : 'Within Range'}
                        </Pill>
                    }
                />
                <div className="p-8 flex flex-col items-center justify-center text-center">
                    <p className="font-serif text-5xl font-semibold text-[#1A3C34]">{injectionRatePct}%</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mt-2">
                        Defensive Injections / Total Obligations
                    </p>
                    <p className="text-xs text-gray-500 mt-3 max-w-xs leading-relaxed">
                        Sponsor made{' '}
                        <strong>{paymentBehavior.sponsorInjections} defensive injection{paymentBehavior.sponsorInjections !== 1 ? 's' : ''}</strong>{' '}
                        across {paymentBehavior.totalPayments} total obligations.
                    </p>
                </div>
            </MetricCard>

            {/* 3 ── Reserve Compliance Waterline (full width) */}
            <MetricCard className="lg:col-span-2">
                <CardHeader
                    title="Reserve Compliance Waterline"
                    badge={
                        <Pill variant={reserveHealth === 'healthy' ? 'safe' : reserveHealth === 'watch' ? 'warn' : 'risk'}>
                            {reserveHealth === 'healthy'
                                ? `✓ ${reserveDiscipline.currentAdequacy - 100}% Safety Cushion`
                                : reserveHealth === 'watch' ? 'At Threshold' : 'Below Required'}
                        </Pill>
                    }
                />
                <div className="pb-4">
                    <WaterlineChart historicalAdequacy={reserveDiscipline.historicalAdequacy} />
                </div>
            </MetricCard>

            {/* 4 ── Payment Status Tiers */}
            <MetricCard>
                <CardHeader title="Payment Status Tiers" />
                <div className="px-4 pt-4 pb-2 flex-1">
                    <ResponsiveContainer width="100%" height={260}>
                        <BarChart
                            data={quarters}
                            margin={{ top: 8, right: 8, left: -20, bottom: 0 }}
                            barCategoryGap="30%"
                        >
                            <XAxis
                                dataKey="label"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 11, fill: '#9CA3AF' }}
                            />
                            <YAxis hide />
                            <Legend
                                iconType="circle"
                                iconSize={8}
                                wrapperStyle={{ fontSize: 11, paddingTop: 12 }}
                                formatter={(value) => (
                                    <span style={{ color: '#4B5563' }}>{value}</span>
                                )}
                            />
                            <Bar dataKey="prompt" name="Tier 1 – Prompt" stackId="a" fill="#0A3F28" radius={[0, 0, 4, 4]} />
                            <Bar dataKey="injection" name="Tier 2 – Injection" stackId="a" fill="#D9B44A" radius={[0, 0, 0, 0]} />
                            <Bar dataKey="late" name="Tier 3 – Delinquent" stackId="a" fill="#F87171" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </MetricCard>

            {/* 5 ── Liquidity Response Ledger */}
            <MetricCard>
                <CardHeader
                    title="Liquidity Response Ledger"
                    badge={
                        <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-bold text-emerald-700 border border-emerald-200 bg-emerald-50">
                            {paymentBehavior.avgResponseDays} DAY AVG
                        </span>
                    }
                />
                <div className="overflow-x-auto flex-1">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className="text-left px-6 py-3 text-gray-400 uppercase tracking-wider font-semibold text-[11px]">Date</th>
                                <th className="text-left px-6 py-3 text-gray-400 uppercase tracking-wider font-semibold text-[11px]">Event</th>
                                <th className="text-left px-6 py-3 text-gray-400 uppercase tracking-wider font-semibold text-[11px]">Amount</th>
                                <th className="text-right px-6 py-3 text-gray-400 uppercase tracking-wider font-semibold text-[11px]">Speed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paymentBehavior.liquidityEvents.map((e, i) => (
                                <tr key={i} className="border-b border-gray-100 last:border-0">
                                    <td className="px-6 py-4 text-gray-700">{e.date}</td>
                                    <td className="px-6 py-4 text-gray-700">{e.event}</td>
                                    <td className="px-6 py-4 text-gray-700">{e.amount}</td>
                                    <td className={`px-6 py-4 text-right font-semibold ${e.speedDays <= 2 ? 'text-emerald-600' : e.speedDays <= 4 ? 'text-amber-500' : 'text-amber-600'}`}>
                                        {e.speedDays} {e.speedDays === 1 ? 'Day' : 'Days'}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </MetricCard>

            {/* 6 ── Forecast Revision Impact (full width) */}
            <MetricCard className="lg:col-span-2">
                <CardHeader
                    title="Forecast Revision Impact"
                    badge={
                        <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-bold text-red-600 border border-red-200 bg-red-50">
                            {forecastAccuracy.revisionEvents.length} MATERIAL EVENTS
                        </span>
                    }
                />
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className="text-left px-6 py-3 text-gray-400 uppercase tracking-wider font-semibold text-[11px]">Date</th>
                                <th className="text-left px-6 py-3 text-gray-400 uppercase tracking-wider font-semibold text-[11px]">Rationale</th>
                                <th className="text-left px-6 py-3 text-gray-400 uppercase tracking-wider font-semibold text-[11px]">NOI Impact</th>
                                <th className="text-left px-6 py-3 text-gray-400 uppercase tracking-wider font-semibold text-[11px]">IRR Impact</th>
                                <th className="text-left px-6 py-3 text-gray-400 uppercase tracking-wider font-semibold text-[11px]">Analyst Note</th>
                            </tr>
                        </thead>
                        <tbody>
                            {forecastAccuracy.revisionEvents.map((e, i) => (
                                <tr key={i} className="border-b border-gray-100 last:border-0">
                                    <td className="px-6 py-4 text-gray-600">{e.date}</td>
                                    <td className="px-6 py-4 font-semibold text-gray-800">{e.rationale}</td>
                                    <td className="px-6 py-4 font-semibold text-red-500">
                                        {e.noiImpact ? <>▼ {e.noiImpact}</> : <span className="text-gray-400">--</span>}
                                    </td>
                                    <td className={`px-6 py-4 font-semibold ${e.irrImpactBps <= -100 ? 'text-red-500' : 'text-amber-500'}`}>
                                        ▼ {Math.abs(e.irrImpactBps)} bps
                                    </td>
                                    <td className="px-6 py-4 text-gray-400">{e.analystNote}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </MetricCard>

            {/* 7 ── Disclosure Latency */}
            <MetricCard>
                <CardHeader
                    title="Avg. Disclosure Latency"
                    badge={<span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Speed of Negative Information Flow</span>}
                />
                <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                        <div>
                            <p className="font-serif text-6xl font-semibold text-[#0A3F28] leading-none">
                                {disclosureBehavior.avgDays} Bus. Days
                            </p>
                            <div className="mt-3">
                                <Pill variant="safe">✓ Inst. Standard (&lt;2 Business Days)</Pill>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold mb-1">Worst Instance</p>
                            <p className="font-serif text-3xl font-bold text-amber-500">{disclosureBehavior.worstInstanceDays} Bus. Days</p>
                            <p className="text-xs text-gray-400 mt-1">Occurred {disclosureBehavior.worstInstanceQuarter}</p>
                        </div>
                    </div>
                    <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={disclosureBehavior.quarterlyTrend} margin={{ top: 16, right: 16, bottom: 0, left: 0 }}>
                            <XAxis
                                dataKey="label"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 11, fill: '#9CA3AF' }}
                            />
                            <YAxis hide />
                            <Line
                                type="monotone"
                                dataKey="days"
                                stroke="#0A3F28"
                                strokeWidth={2.5}
                                dot={{ fill: 'white', stroke: '#0A3F28', strokeWidth: 2, r: 5 }}
                                activeDot={false}
                                isAnimationActive={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </MetricCard>

            {/* 8 ── Transparency Ratio */}
            <MetricCard>
                <CardHeader title="Transparency Ratio" />
                <div className="flex-1 flex items-center justify-center gap-10 px-8 py-6">
                    <div className="shrink-0">
                        <RingChart
                            pct={Math.round((disclosureBehavior.proactiveCount / disclosureBehavior.totalEvents) * 100)}
                            color="#0A3F28"
                            trailColor="#EF4444"
                            size={180}
                        />
                    </div>
                    <div>
                        <p className="font-serif text-5xl font-semibold text-[#0A3F28] leading-none">
                            {Math.round((disclosureBehavior.proactiveCount / disclosureBehavior.totalEvents) * 100)}%
                        </p>
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mt-2">Self-Reported</p>
                        <p className="text-sm text-gray-600 mt-2">
                            {disclosureBehavior.proactiveCount} of {disclosureBehavior.totalEvents} Events Proactive
                        </p>
                    </div>
                </div>
            </MetricCard>

            {/* 9 ── Behavioral Volatility Index (full width) */}
            <MetricCard className="lg:col-span-2">
                <CardHeader
                    title="Behavioral Volatility Index"
                    badge={
                        <div className="text-right">
                            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Data Confidence</p>
                            <p className="font-semibold text-gray-800 text-sm">{forecastAccuracy.dataConfidence}</p>
                        </div>
                    }
                />
                <div className="p-6 flex gap-8 items-center">
                    {/* Left stat */}
                    <div className="w-52 shrink-0 flex flex-col items-center text-center">
                        <p className="font-serif text-6xl font-semibold text-[#0A3F28] leading-none mb-3">
                            {forecastAccuracy.volatilityIndex}
                        </p>
                        <Pill variant={forecastAccuracy.volatilityIndex < 5 ? 'safe' : 'warn'}>
                            {forecastAccuracy.volatilityIndex < 5 ? '✓ Institutional Stable' : 'Monitor Variance'}
                        </Pill>
                        <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                            Sponsor performance is tightly clustered. 95% of reporting periods fall within
                            ±{forecastAccuracy.volatilityIndex} std dev of baseline.
                        </p>
                    </div>
                    {/* Right chart */}
                    <div className="flex-1">
                        <ResponsiveContainer width="100%" height={220}>
                            <LineChart
                                data={forecastAccuracy.volatilityTrend}
                                margin={{ top: 16, right: 16, bottom: 0, left: 8 }}
                            >
                                <XAxis
                                    dataKey="label"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 11, fill: '#9CA3AF' }}
                                />
                                <YAxis
                                    domain={[-3, 3]}
                                    ticks={[-3, -2, -1, 0, 1, 2, 3]}
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 11, fill: '#9CA3AF' }}
                                    width={28}
                                />
                                {/* Gray band between -3 and 3 */}
                                <ReferenceArea y1={-3} y2={3} fill="#F3F4F6" strokeOpacity={0} />
                                <Line
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#0A3F28"
                                    strokeWidth={2.5}
                                    dot={{ fill: '#0A3F28', stroke: '#0A3F28', strokeWidth: 0, r: 5 }}
                                    activeDot={false}
                                    isAnimationActive={false}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </MetricCard>

            {/* 10 ── Systemic Recurrence Rate (full width) */}
            <MetricCard className="lg:col-span-2">
                <CardHeader
                    title="Systemic Recurrence Rate"
                    subtitle="Operational Health Indicators"
                    badge={
                        systemicRecurrence.riskDetected
                            ? <Pill variant="risk">⚠ Systemic Risk Detected</Pill>
                            : <Pill variant="safe">✓ No Systemic Risk</Pill>
                    }
                />
                <div className="p-8">
                    {systemicRecurrence.metrics.map((metric) => {
                        const fillColor = SYSTEMIC_COLORS[metric.color]
                        const statusColor = SYSTEMIC_STATUS_COLORS[metric.color]
                        return (
                            <div
                                key={metric.label}
                                className="grid items-center gap-6 mb-6 last:mb-0"
                                style={{ gridTemplateColumns: '180px 1fr 110px' }}
                            >
                                <span className="text-sm font-semibold text-gray-800">{metric.label}</span>
                                {/* Progress bar track */}
                                <div className="h-4 bg-gray-100 overflow-hidden">
                                    <div
                                        className="h-full transition-all duration-500"
                                        style={{ width: `${metric.fillPct}%`, backgroundColor: fillColor }}
                                    />
                                </div>
                                <span className={`text-xs font-bold uppercase text-right tracking-wide ${statusColor}`}>
                                    {metric.statusLabel}
                                </span>
                            </div>
                        )
                    })}
                    <p className="text-xs text-gray-500 mt-5 pt-4 border-t border-gray-100">
                        <strong>Analyst Note:</strong> {systemicRecurrence.analystNote}
                    </p>
                </div>
            </MetricCard>

        </div>
    )
}

// ─── Tab Content: Placeholder ─────────────────────────────────────────────────

function PlaceholderTab({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
    return (
        <div className="flex flex-col items-center justify-center py-28 text-center">
            <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-5 text-gray-400">
                {icon}
            </div>
            <h3 className="font-serif text-xl font-semibold text-[#1A3C34] mb-2">{title}</h3>
            <p className="text-sm text-gray-500 max-w-sm leading-relaxed">{description}</p>
        </div>
    )
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function SponsorDetailsTab({ operatingRecord }: Props) {
    const [activeTab, setActiveTab] = useState<TabId>('overview')

    const tabs: { id: TabId; label: string }[] = [
        { id: 'overview', label: 'Overview' },
        { id: 'performance', label: 'Performance' },
        { id: 'risk', label: 'Risk' },
    ]

    return (
        <section className="bg-[#F9FAFB] py-16">
            <div className="max-w-7xl mx-auto px-6">

                {/* Tab Navigation */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm mb-8 overflow-hidden">
                    <nav className="flex border-b border-gray-100">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-7 py-4 text-sm font-semibold transition-all duration-200 border-b-2 -mb-px
                                    ${activeTab === tab.id
                                        ? 'text-[#1A3C34] border-[#1A3C34] bg-white'
                                        : 'text-gray-500 border-transparent hover:text-[#1A3C34] hover:bg-gray-50'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Tab Panels */}
                {activeTab === 'overview' && <OverviewTab record={operatingRecord} />}

                {activeTab === 'performance' && (
                    <PlaceholderTab
                        title="Performance Analytics"
                        description="Historical returns, IRR tracking, cash-on-cash performance, and deal-by-deal attribution will appear here."
                        icon={
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        }
                    />
                )}

                {activeTab === 'risk' && (
                    <PlaceholderTab
                        title="Risk Assessment"
                        description="Concentration risk, leverage analysis, covenant tracking, and stress-test scenarios will appear here."
                        icon={
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        }
                    />
                )}

            </div>
        </section>
    )
}
