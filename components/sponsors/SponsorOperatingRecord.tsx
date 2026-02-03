// components/sponsors/SponsorOperatingRecord.tsx
'use client'

import { motion } from 'framer-motion'
import { SponsorOperatingRecord } from '@/data/mockSponsors'

interface SponsorOperatingRecordProps {
    operatingRecord: SponsorOperatingRecord
}

export default function SponsorOperatingRecordSection({ operatingRecord }: SponsorOperatingRecordProps) {
    const { paymentBehavior, reserveDiscipline, forecastAccuracy, disclosureBehavior, consistencyOverTime } = operatingRecord

    return (
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="w-16 h-1 bg-[#D9B44A] mx-auto mb-6"></div>
                    <h2 className="text-4xl lg:text-5xl font-serif text-[#111827] mb-4">
                        Operating Record
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Observable behavior captured across live financial obligations
                    </p>
                </div>

                {/* 01. Payment Behavior */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 border-b border-[#E5E7EB] pb-20"
                >
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-5">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-px bg-[#D9B44A]"></div>
                                <span className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.15em]">01. Reliability</span>
                            </div>
                            <h3 className="text-4xl font-serif text-[#111827] mb-6">Payment Behavior</h3>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-[#E8F5E9] p-4 rounded border border-[#0A3F28]/20">
                                    <p className="text-xs text-[#0A3F28] uppercase tracking-widest mb-1">On-Time Rate</p>
                                    <p className="text-3xl font-bold text-[#0A3F28]">{paymentBehavior.onTimeRate}%</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded border border-gray-200">
                                    <p className="text-xs text-gray-600 uppercase tracking-widest mb-1">Total Payments</p>
                                    <p className="text-3xl font-bold text-[#111827]">{paymentBehavior.totalPayments}</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded border border-gray-200">
                                    <p className="text-xs text-gray-600 uppercase tracking-widest mb-1">Late Payments</p>
                                    <p className="text-3xl font-bold text-[#111827]">{paymentBehavior.latePayments}</p>
                                </div>
                                <div className="bg-[#FEF3C7] p-4 rounded border border-[#D9B44A]/30">
                                    <p className="text-xs text-[#92400E] uppercase tracking-widest mb-1">Injections</p>
                                    <p className="text-3xl font-bold text-[#92400E]">{paymentBehavior.sponsorInjections}</p>
                                </div>
                            </div>

                            <p className="text-xs font-bold text-[#0A3F28] uppercase tracking-wide border-t border-[#E5E7EB] pt-4">
                                Consistently reliable payment performance with minimal intervention required
                            </p>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="bg-white border border-[#E5E7EB] p-8 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] rounded">
                                <div className="flex justify-between items-end mb-8 border-b border-[#E5E7EB] pb-4">
                                    <h4 className="font-serif text-lg text-[#111827]">Payment History Log (Last 12 Months)</h4>
                                    <div className="flex gap-4 text-[10px] font-mono uppercase text-gray-400">
                                        <span className="flex items-center gap-1">
                                            <div className="w-2 h-2 bg-[#0A3F28] rounded-full"></div> On-Time
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <div className="w-2 h-2 bg-[#D9B44A] rounded-full"></div> Injection
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <div className="w-2 h-2 bg-[#DC2626] rounded-full"></div> Late
                                        </span>
                                    </div>
                                </div>

                                <svg width="100%" height="200" viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="50" y1="100" x2="750" y2="100" stroke="#E5E7EB" strokeWidth="2"/>

                                    {paymentBehavior.last12Months.map((payment, index) => {
                                        const x = 50 + (index * 58.3)
                                        let color = '#0A3F28'
                                        let strokeColor = 'white'
                                        let radius = 6

                                        if (payment.status === 'injection') {
                                            color = '#D9B44A'
                                            radius = 8
                                        } else if (payment.status === 'late') {
                                            color = '#DC2626'
                                        }

                                        return (
                                            <g key={index}>
                                                <text x={x} y="130" fontFamily="Roboto Mono" fontSize="10" fill="#9CA3AF" textAnchor="middle">
                                                    {payment.month}
                                                </text>
                                                <circle cx={x} cy="100" r={radius} fill={color} stroke={strokeColor} strokeWidth="2"/>

                                                {payment.status === 'on-time' && (
                                                    <>
                                                        <line x1={x} y1="100" x2={x} y2="70" stroke={color} strokeWidth="1" strokeDasharray="2,2"/>
                                                        <rect x={x - 15} y="50" width="30" height="20" rx="2" fill="#E8F5E9"/>
                                                        <text x={x} y="63" fontFamily="Inter" fontSize="9" fill={color} textAnchor="middle" fontWeight="bold">OK</text>
                                                    </>
                                                )}

                                                {payment.status === 'injection' && payment.amount && (
                                                    <>
                                                        <line x1={x} y1="100" x2={x} y2="150" stroke={color} strokeWidth="1" strokeDasharray="2,2"/>
                                                        <rect x={x - 25} y="150" width="50" height="20" rx="2" fill="#FEF3C7"/>
                                                        <text x={x} y="163" fontFamily="Inter" fontSize="8" fill="#92400E" textAnchor="middle" fontWeight="bold">{payment.amount}</text>
                                                    </>
                                                )}

                                                {payment.status === 'late' && payment.daysLate && (
                                                    <>
                                                        <line x1={x} y1="100" x2={x} y2="70" stroke={color} strokeWidth="1" strokeDasharray="2,2"/>
                                                        <rect x={x - 20} y="50" width="40" height="20" rx="2" fill="#FEE2E2"/>
                                                        <text x={x} y="63" fontFamily="Inter" fontSize="9" fill="#991B1B" textAnchor="middle" fontWeight="bold">+{payment.daysLate}D</text>
                                                    </>
                                                )}
                                            </g>
                                        )
                                    })}
                                </svg>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 02. Reserve Discipline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 bg-gray-50 -mx-6 px-6 py-16 border-b border-[#E5E7EB]"
                >
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-12 gap-16 items-center">
                            <div className="lg:col-span-7 order-2 lg:order-1">
                                <div className="bg-white border border-[#E5E7EB] p-8 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] rounded">
                                    <div className="flex justify-between items-center mb-6">
                                        <h4 className="font-serif text-lg text-[#111827]">Reserve Adequacy Monitor</h4>
                                        <span className="text-[10px] font-mono text-gray-400 uppercase">
                                            REQ: {reserveDiscipline.requiredReserves} | ACT: {reserveDiscipline.actualReserves}
                                        </span>
                                    </div>

                                    <svg width="100%" height="180" viewBox="0 0 600 180" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="50" y="40" width="500" height="100" rx="4" fill="#F9FAFB" stroke="#E5E7EB"/>

                                        <rect x="50" y="40" width="100" height="100" fill="#FEE2E2" opacity="0.3"/>
                                        <line x1="150" y1="40" x2="150" y2="140" stroke="#EF4444" strokeWidth="1" strokeDasharray="4,2"/>
                                        <text x="100" y="130" fontFamily="Inter" fontSize="9" fill="#DC2626" textAnchor="middle" fontWeight="bold">CRITICAL</text>

                                        <line x1="300" y1="20" x2="300" y2="160" stroke="#111827" strokeWidth="1" strokeDasharray="4,2"/>
                                        <text x="300" y="15" fontFamily="Roboto Mono" fontSize="10" fill="#111827" textAnchor="middle" fontWeight="bold">REQUIRED THRESHOLD</text>

                                        <rect x="50" y="70" width="280" height="40" rx="2" fill="#0A3F28" opacity="0.1"/>
                                        <rect x="50" y="70" width="365" height="40" rx="2" fill="#0A3F28"/>
                                        <path d="M300,90 L365,90" stroke="white" strokeWidth="1"/>
                                        <text x="420" y="95" fontFamily="Inter" fontSize="11" fill="#0A3F28" fontWeight="bold">{reserveDiscipline.bufferAmount} BUFFER</text>
                                    </svg>

                                    <div className="mt-4 grid grid-cols-2 gap-4 border-t border-[#E5E7EB] pt-4">
                                        <div>
                                            <span className="block text-[10px] text-gray-400 uppercase tracking-widest">Injections (LTM)</span>
                                            <span className="block text-xl font-mono text-[#111827]">{reserveDiscipline.injectionsLTM}</span>
                                        </div>
                                        <div>
                                            <span className="block text-[10px] text-gray-400 uppercase tracking-widest">Management Style</span>
                                            <span className="block text-sm font-bold text-[#0A3F28]">{reserveDiscipline.managementStyle}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-5 order-1 lg:order-2">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-8 h-px bg-[#D9B44A]"></div>
                                    <span className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.15em]">02. Discipline</span>
                                </div>
                                <h3 className="text-4xl font-serif text-[#111827] mb-6">Capital & Reserve Discipline</h3>

                                <div className="bg-white p-6 rounded border border-[#E5E7EB] shadow-sm mb-6">
                                    <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">Reserve Adequacy</p>
                                    <p className="text-4xl font-bold text-[#0A3F28]">{reserveDiscipline.currentAdequacy}%</p>
                                    <p className="text-xs text-gray-600 mt-2">Consistently above required thresholds</p>
                                </div>

                                <p className="text-xs font-bold text-[#0A3F28] uppercase tracking-wide border-t border-gray-200 pt-4">
                                    Proactive capital management with strong liquidity buffers maintained
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 03. Forecast Accuracy */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 border-b border-[#E5E7EB] pb-20"
                >
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-5">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-px bg-[#D9B44A]"></div>
                                <span className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.15em]">03. Accuracy</span>
                            </div>
                            <h3 className="text-4xl font-serif text-[#111827] mb-6">Forecast Accuracy</h3>

                            <div className="bg-white p-6 rounded border border-[#E5E7EB] shadow-sm mb-6">
                                <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">Average Variance</p>
                                <p className="text-4xl font-bold text-[#0A3F28]">{forecastAccuracy.averageVariance}%</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className={`text-xs font-bold uppercase px-2 py-1 rounded ${
                                        forecastAccuracy.varianceTrend === 'improving' ? 'bg-green-100 text-green-800' :
                                        forecastAccuracy.varianceTrend === 'stable' ? 'bg-blue-100 text-blue-800' :
                                        'bg-yellow-100 text-yellow-800'
                                    }`}>
                                        {forecastAccuracy.varianceTrend}
                                    </span>
                                </div>
                            </div>

                            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                {forecastAccuracy.reforecastFrequency}
                            </p>

                            <p className="text-xs font-bold text-[#0A3F28] uppercase tracking-wide border-t border-[#E5E7EB] pt-4">
                                Disciplined forecasting with timely adjustments when market conditions change
                            </p>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="bg-white border border-[#E5E7EB] p-8 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] rounded">
                                <h4 className="font-serif text-lg text-[#111827] mb-6">Variance Analysis</h4>
                                <svg width="100%" height="220" viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="50" y1="20" x2="50" y2="180" stroke="#E5E7EB"/>
                                    <line x1="50" y1="180" x2="550" y2="180" stroke="#E5E7EB"/>

                                    <path d="M50,150 C150,130 300,80 550,50" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeDasharray="4,4"/>
                                    <text x="500" y="45" fontFamily="Inter" fontSize="9" fill="#9CA3AF" fontWeight="bold">ORIGINAL PRO FORMA</text>

                                    <path d="M50,150 C150,140 300,105 400,115" fill="none" stroke="#0A3F28" strokeWidth="2"/>
                                    <circle cx="400" cy="115" r="4" fill="#0A3F28"/>

                                    <path d="M400,115 L550,120" fill="none" stroke="#D9B44A" strokeWidth="2"/>
                                    <text x="460" y="110" fontFamily="Inter" fontSize="9" fill="#D9B44A" fontWeight="bold">RE-FORECAST ADJ.</text>

                                    <line x1="400" y1="115" x2="400" y2="75" stroke="#EF4444" strokeWidth="1"/>
                                    <rect x="410" y="85" width="80" height="20" rx="2" fill="#FEE2E2"/>
                                    <text x="450" y="98" fontFamily="Roboto Mono" fontSize="10" fill="#B91C1C" textAnchor="middle">{forecastAccuracy.lastVariance}% VAR</text>
                                </svg>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 04. Disclosure Behavior */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 bg-gray-50 -mx-6 px-6 py-16 border-b border-[#E5E7EB]"
                >
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-12 gap-16 items-center">
                            <div className="lg:col-span-7 order-2 lg:order-1">
                                <div className="bg-white border border-[#E5E7EB] p-8 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] rounded">
                                    <h4 className="font-serif text-lg text-[#111827] mb-6">Issue Response Timeline</h4>

                                    <svg width="100%" height="150" viewBox="0 0 600 150" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="50" y1="75" x2="550" y2="75" stroke="#E5E7EB" strokeWidth="2"/>

                                        <circle cx="100" cy="75" r="8" fill="#EF4444"/>
                                        <text x="100" y="50" fontFamily="Inter" fontSize="10" fill="#EF4444" fontWeight="bold" textAnchor="middle">ISSUE EVENT</text>
                                        <text x="100" y="100" fontFamily="Roboto Mono" fontSize="9" fill="#6B7280" textAnchor="middle">T-0</text>

                                        <path d="M100,85 L100,90 L180,90 L180,85" fill="none" stroke="#111827" strokeWidth="1"/>
                                        <text x="140" y="105" fontFamily="Roboto Mono" fontSize="10" fill="#111827" textAnchor="middle" fontWeight="bold">4 HOURS</text>

                                        <circle cx="180" cy="75" r="8" fill="#0A3F28"/>
                                        <text x="180" y="50" fontFamily="Inter" fontSize="10" fill="#0A3F28" fontWeight="bold" textAnchor="middle">INVESTOR NOTICE</text>

                                        <circle cx="320" cy="75" r="5" fill="#E5E7EB" stroke="#6B7280" strokeWidth="2"/>
                                        <text x="320" y="50" fontFamily="Inter" fontSize="10" fill="#6B7280" fontWeight="bold" textAnchor="middle">PLAN UPLOADED</text>
                                        <text x="320" y="100" fontFamily="Roboto Mono" fontSize="9" fill="#6B7280" textAnchor="middle">T+18h</text>
                                    </svg>

                                    {disclosureBehavior.exampleEvent && (
                                        <div className="bg-[#E8F5E9] p-4 rounded border border-[#145A3C]/20 flex gap-4 items-start mt-6">
                                            <div className="w-2 h-2 rounded-full bg-[#0A3F28] mt-1 flex-shrink-0"></div>
                                            <div>
                                                <p className="text-xs text-[#0A3F28] font-bold mb-1">Recent Example:</p>
                                                <p className="text-xs text-[#0A3F28]">{disclosureBehavior.exampleEvent.issue}</p>
                                                <p className="text-xs text-[#0A3F28] mt-2 italic">{disclosureBehavior.exampleEvent.resolution}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="lg:col-span-5 order-1 lg:order-2">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-8 h-px bg-[#D9B44A]"></div>
                                    <span className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.15em]">04. Transparency</span>
                                </div>
                                <h3 className="text-4xl font-serif text-[#111827] mb-6">Disclosure Behavior</h3>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="bg-white p-6 rounded border border-[#E5E7EB] shadow-sm col-span-2">
                                        <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">Avg. Disclosure Time</p>
                                        <p className="text-4xl font-bold text-[#0A3F28]">{disclosureBehavior.averageDisclosureTime}</p>
                                    </div>
                                    <div className="bg-white p-4 rounded border border-[#E5E7EB] shadow-sm">
                                        <p className="text-xs text-gray-600 uppercase tracking-widest mb-1">Rating</p>
                                        <p className="text-lg font-bold text-[#0A3F28]">{disclosureBehavior.transparencyRating}</p>
                                    </div>
                                    <div className="bg-white p-4 rounded border border-[#E5E7EB] shadow-sm">
                                        <p className="text-xs text-gray-600 uppercase tracking-widest mb-1">Issues (LTM)</p>
                                        <p className="text-lg font-bold text-[#111827]">{disclosureBehavior.issueCount}</p>
                                    </div>
                                </div>

                                <p className="text-xs font-bold text-[#0A3F28] uppercase tracking-wide border-t border-gray-200 pt-4">
                                    Exceptional transparency with immediate disclosure of material events
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 05. Consistency Over Time */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-5">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-px bg-[#D9B44A]"></div>
                                <span className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.15em]">05. History</span>
                            </div>
                            <h3 className="text-4xl font-serif text-[#111827] mb-6">Consistency Over Time</h3>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-white p-6 rounded border border-[#E5E7EB] shadow-sm col-span-2">
                                    <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">Active Obligations</p>
                                    <p className="text-4xl font-bold text-[#0A3F28]">{consistencyOverTime.activeDealCount}</p>
                                </div>
                                <div className="bg-white p-4 rounded border border-[#E5E7EB] shadow-sm">
                                    <p className="text-xs text-gray-600 uppercase tracking-widest mb-1">Consistency</p>
                                    <p className="text-sm font-bold text-[#0A3F28]">{consistencyOverTime.consistencyRating}</p>
                                </div>
                                <div className="bg-white p-4 rounded border border-[#E5E7EB] shadow-sm">
                                    <p className="text-xs text-gray-600 uppercase tracking-widest mb-1">Trend</p>
                                    <p className="text-sm font-bold text-[#111827]">{consistencyOverTime.trend}</p>
                                </div>
                            </div>

                            <p className="text-xs font-bold text-[#0A3F28] uppercase tracking-wide border-t border-[#E5E7EB] pt-4">
                                Stable, consistent performance across all obligations
                            </p>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="bg-white border border-[#E5E7EB] p-8 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] rounded">
                                <h4 className="font-serif text-lg text-[#111827] mb-6">Cross-Asset Consistency Map</h4>

                                <div className="grid grid-cols-4 gap-2 mb-2">
                                    {consistencyOverTime.dealPerformance.slice(0, 4).map((deal, index) => (
                                        <div key={index} className="text-[10px] font-mono text-gray-400 text-center">
                                            {deal.dealName}
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-2">
                                    <div className="grid grid-cols-4 gap-2">
                                        {consistencyOverTime.dealPerformance.slice(0, 4).map((deal, index) => (
                                            <div key={index} className={`h-10 rounded flex items-center justify-center text-[10px] font-bold ${
                                                deal.status === 'OK' ? 'bg-[#0A3F28] text-white' :
                                                deal.status === 'LATE' ? 'bg-yellow-100 text-yellow-800' :
                                                deal.status === 'INJECTION' ? 'bg-[#FEF3C7] text-[#92400E]' :
                                                'bg-red-100 text-red-800'
                                            }`}>
                                                {deal.status}
                                            </div>
                                        ))}
                                    </div>

                                    {consistencyOverTime.dealPerformance.length > 4 && (
                                        <div className="grid grid-cols-4 gap-2">
                                            {consistencyOverTime.dealPerformance.slice(4, 8).map((deal, index) => (
                                                <div key={index} className={`h-10 rounded flex items-center justify-center text-[10px] font-bold ${
                                                    deal.status === 'OK' ? 'bg-[#0A3F28] text-white' :
                                                    deal.status === 'LATE' ? 'bg-yellow-100 text-yellow-800' :
                                                    deal.status === 'INJECTION' ? 'bg-[#FEF3C7] text-[#92400E]' :
                                                    'bg-red-100 text-red-800'
                                                }`}>
                                                    {deal.status}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="mt-6 text-center text-xs text-gray-500 italic border-t border-[#E5E7EB] pt-4">
                                    "Strong consistency across all obligations. Isolated injection in Deal G during market stress, quickly stabilized."
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
