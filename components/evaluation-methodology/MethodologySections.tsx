// components/evaluation-methodology/MethodologySections.tsx
'use client'

export default function MethodologySections() {
    return (
        <>
            {/* Section 01: Standardized Structures */}
            <section className="bg-white border-b border-[#E5E7EB]">
                <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-24 items-center">
                    <div className="order-2 lg:order-1">
                        <span className="text-[#0A3F28] font-bold text-[10px] uppercase tracking-[0.1em] mb-4 block">01. Framework</span>
                        <h2 className="text-2xl lg:text-3xl font-serif text-[#111827] mb-6">Standardized <br /><span className="italic">Structures</span></h2>
                        <h3 className="text-lg text-[#4B5563] mb-6 font-medium">Every obligation follows the same framework</h3>

                        <p className="text-[#4B5563] mb-6 leading-relaxed">
                            All offerings on Sylvan use identical structural foundations. Sponsors cannot customize structures or negotiate exceptions. This ensures behavior is observed under the same rules across sponsors and assets.
                        </p>

                        <div className="bg-white border border-[#E5E7EB] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] rounded">
                            <div className="flex justify-between items-center px-6 py-4 border-b border-[#E5E7EB]">
                                <h4 className="font-serif text-base text-[#111827]">Standardized Framework</h4>
                                <div className="border border-[#0A3F28] px-2 py-1">
                                    <span className="text-[8px] font-bold text-[#0A3F28] uppercase tracking-widest">Uniform Terms</span>
                                </div>
                            </div>
                            <div className="divide-y divide-[#E5E7EB]">
                                <div className="flex items-center gap-4 px-6 py-4">
                                    <div className="w-8 h-8 rounded-full bg-[#0A3F28] flex items-center justify-center flex-shrink-0">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium text-[#111827]">Ring-fenced SPVs</span>
                                </div>
                                <div className="flex items-center gap-4 px-6 py-4">
                                    <div className="w-8 h-8 rounded-full bg-[#0A3F28] flex items-center justify-center flex-shrink-0">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium text-[#111827]">Standard covenant packages</span>
                                </div>
                                <div className="flex items-center gap-4 px-6 py-4">
                                    <div className="w-8 h-8 rounded-full bg-[#0A3F28] flex items-center justify-center flex-shrink-0">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium text-[#111827]">Uniform reserve requirements</span>
                                </div>
                                <div className="flex items-center gap-4 px-6 py-4">
                                    <div className="w-8 h-8 rounded-full bg-[#0A3F28] flex items-center justify-center flex-shrink-0">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium text-[#111827]">Defined payment mechanics</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 flex justify-center">
                        <div className="relative w-full max-w-md aspect-square">
                            <div className="absolute inset-0 chart-grid opacity-50"></div>

                            <svg width="100%" height="100%" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                                <g transform="translate(100, 80)">
                                    <path d="M0,30 L50,0 L100,30 L50,60 Z" fill="#F9FAFB" stroke="#0A3F28" strokeWidth="1"/>
                                    <path d="M0,30 L0,90 L50,120 L50,60 Z" fill="#FFFFFF" stroke="#0A3F28" strokeWidth="1"/>
                                    <path d="M100,30 L100,90 L50,120 L50,60 Z" fill="#F3F4F6" stroke="#0A3F28" strokeWidth="1"/>
                                    <path d="M50,40 L30,52 L30,80 L70,80 L70,52 Z" fill="none" stroke="#D9B44A" strokeWidth="1"/>
                                    <text x="50" y="140" fontFamily="Roboto Mono" fontSize="8" fill="#0A3F28" textAnchor="middle">SPV_UNIT_01</text>
                                </g>

                                <g transform="translate(220, 80)">
                                    <path d="M0,30 L50,0 L100,30 L50,60 Z" fill="#F9FAFB" stroke="#0A3F28" strokeWidth="1"/>
                                    <path d="M0,30 L0,90 L50,120 L50,60 Z" fill="#FFFFFF" stroke="#0A3F28" strokeWidth="1"/>
                                    <path d="M100,30 L100,90 L50,120 L50,60 Z" fill="#F3F4F6" stroke="#0A3F28" strokeWidth="1"/>
                                    <path d="M50,40 L30,52 L30,80 L70,80 L70,52 Z" fill="none" stroke="#D9B44A" strokeWidth="1"/>
                                    <text x="50" y="140" fontFamily="Roboto Mono" fontSize="8" fill="#0A3F28" textAnchor="middle">SPV_UNIT_02</text>
                                </g>

                                <g transform="translate(100, 220)">
                                    <path d="M0,30 L50,0 L100,30 L50,60 Z" fill="#F9FAFB" stroke="#0A3F28" strokeWidth="1"/>
                                    <path d="M0,30 L0,90 L50,120 L50,60 Z" fill="#FFFFFF" stroke="#0A3F28" strokeWidth="1"/>
                                    <path d="M100,30 L100,90 L50,120 L50,60 Z" fill="#F3F4F6" stroke="#0A3F28" strokeWidth="1"/>
                                    <path d="M50,40 L30,52 L30,80 L70,80 L70,52 Z" fill="none" stroke="#D9B44A" strokeWidth="1"/>
                                    <text x="50" y="140" fontFamily="Roboto Mono" fontSize="8" fill="#0A3F28" textAnchor="middle">SPV_UNIT_03</text>
                                </g>

                                <g transform="translate(220, 220)">
                                    <path d="M0,30 L50,0 L100,30 L50,60 Z" fill="#F9FAFB" stroke="#0A3F28" strokeWidth="1"/>
                                    <path d="M0,30 L0,90 L50,120 L50,60 Z" fill="#FFFFFF" stroke="#0A3F28" strokeWidth="1"/>
                                    <path d="M100,30 L100,90 L50,120 L50,60 Z" fill="#F3F4F6" stroke="#0A3F28" strokeWidth="1"/>
                                    <path d="M50,40 L30,52 L30,80 L70,80 L70,52 Z" fill="none" stroke="#D9B44A" strokeWidth="1"/>
                                    <text x="50" y="140" fontFamily="Roboto Mono" fontSize="8" fill="#0A3F28" textAnchor="middle">SPV_UNIT_04</text>
                                </g>

                                <text x="200" y="380" fontFamily="Inter" fontSize="10" fill="#9CA3AF" textAnchor="middle" letterSpacing="2">ISOLATED LEGAL STRUCTURES</text>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 02: Mandatory Uniform Reporting */}
            <section className="bg-[#F3F4F1] border-b border-[#E5E7EB]">
                <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <span className="text-[#0A3F28] font-bold text-[10px] uppercase tracking-[0.1em] mb-4 block">02. Requirements</span>
                        <h2 className="text-2xl lg:text-3xl font-serif text-[#111827] mb-6">Mandatory Uniform <br /><span className="italic">Reporting</span></h2>
                        <h3 className="text-lg text-[#4B5563] mb-6 font-medium">Transparency is not optional</h3>
                        <p className="text-[#4B5563] mb-8 leading-relaxed">
                            Sponsors report on fixed schedules using standardized templates required by Sylvan. Custom sponsor formats are not permitted.
                        </p>
                        <div className="p-6 border-l-2 border-[#D9B44A] bg-[#F9FAFB]">
                            <p className="text-sm font-serif italic text-[#111827]">
                                "Reporting is a contractual requirement, not a courtesy."
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="bg-white p-6 border border-[#E5E7EB] shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] w-full max-w-md">
                            <div className="flex items-center justify-between mb-4 border-b border-[#E5E7EB] pb-2">
                                <span className="text-[10px] font-bold uppercase text-[#9CA3AF]">Input Source</span>
                                <span className="text-[10px] font-bold uppercase text-[#9CA3AF]">Sylvan Output</span>
                            </div>

                            <div className="flex gap-4 items-center">
                                <div className="w-1/3 space-y-2 opacity-50 grayscale">
                                    <div className="h-16 border border-gray-300 bg-gray-50 p-2 relative transform rotate-[-2deg]">
                                        <div className="w-full h-1 bg-gray-300 mb-1"></div>
                                        <div className="w-2/3 h-1 bg-gray-300"></div>
                                        <span className="absolute bottom-1 right-1 text-[8px] font-mono">.XLS</span>
                                    </div>
                                    <div className="h-16 border border-gray-300 bg-gray-50 p-2 relative transform rotate-[3deg] translate-y-[-10px]">
                                        <div className="w-full h-1 bg-gray-300 mb-1"></div>
                                        <div className="w-1/2 h-1 bg-gray-300"></div>
                                        <span className="absolute bottom-1 right-1 text-[8px] font-mono">.PDF</span>
                                    </div>
                                </div>

                                <div className="w-1/6 flex justify-center">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A3F28" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7"/>
                                    </svg>
                                </div>

                                <div className="w-1/2 border border-[#0A3F28] bg-white shadow-sm">
                                    <div className="bg-[#0A3F28] h-2 w-full"></div>
                                    <div className="p-2 space-y-2">
                                        <div className="flex justify-between border-b border-gray-100 pb-1">
                                            <span className="text-[8px] font-mono text-gray-500">METRIC</span>
                                            <span className="text-[8px] font-mono text-gray-500">VAL</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-[9px] font-bold text-[#111827]">DSCR_YTD</span>
                                            <span className="text-[9px] font-mono text-[#111827]">1.25x</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-[9px] font-bold text-[#111827]">NOI_ACT</span>
                                            <span className="text-[9px] font-mono text-[#111827]">$4.2M</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-[9px] font-bold text-[#111827]">EXP_RATIO</span>
                                            <span className="text-[9px] font-mono text-[#111827]">32.0%</span>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-1 text-center">
                                        <div className="text-[7px] text-[#0A3F28] font-bold uppercase tracking-widest">Standardized</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 03: Platform-Tracked Events */}
            <section className="bg-white border-b border-[#E5E7EB]">
                <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <span className="text-[#0A3F28] font-bold text-[10px] uppercase tracking-[0.1em] mb-4 block">03. Observation</span>
                        <h2 className="text-2xl lg:text-3xl font-serif text-[#111827] mb-6">Platform<br /><span className="italic">Tracked Events</span></h2>
                        <h3 className="text-lg text-[#4B5563] mb-6 font-medium">Behavior is captured as it happens</h3>
                        <p className="text-[#4B5563] mb-8 leading-relaxed">
                            Sylvan records and timestamps payment events, reserve compliance, and disclosure timing. Evidence is captured consistently, not summarized after the fact.
                        </p>
                        <ul className="space-y-3 text-sm text-[#4B5563]">
                            <li className="flex items-start gap-2">
                                <span className="text-[#4B5563] mt-0.5">↳</span>
                                <span>Payment events and delinquencies</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#4B5563] mt-0.5">↳</span>
                                <span>Source of payments (Cash vs Capital)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#4B5563] mt-0.5">↳</span>
                                <span>Reporting revisions and restatements</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex justify-center">
                        <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)] w-full max-w-md p-8 relative">
                            <div className="absolute inset-0 bg-white opacity-90"></div>

                            <div className="relative z-10">
                                <div className="border-b-2 border-[#111827] pb-2 mb-4 flex justify-between items-end">
                                    <h4 className="font-serif text-xl text-[#111827]">Event Audit Log</h4>
                                    <span className="text-[10px] font-mono text-[#9CA3AF]">REF: 2024-LOG-A</span>
                                </div>

                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="border-b border-gray-200">
                                            <th className="pb-2 text-[9px] font-bold uppercase text-[#9CA3AF] tracking-wider">Timestamp (UTC)</th>
                                            <th className="pb-2 text-[9px] font-bold uppercase text-[#9CA3AF] tracking-wider">Event Type</th>
                                            <th className="pb-2 text-[9px] font-bold uppercase text-[#9CA3AF] tracking-wider text-right">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="font-mono text-[10px] text-[#4B5563]">
                                        <tr className="border-b border-gray-100">
                                            <td className="py-3">2026-01-14 09:00</td>
                                            <td className="py-3">PAYMENT_DISTRIBUTION</td>
                                            <td className="py-3 text-right text-[#0A3F28] font-bold">CLEARED</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="py-3">2026-01-15 14:30</td>
                                            <td className="py-3">RESERVE_TEST_Q4</td>
                                            <td className="py-3 text-right text-[#0A3F28] font-bold">PASS</td>
                                        </tr>
                                        <tr className="border-b border-gray-100 bg-red-50/50">
                                            <td className="py-3 text-red-800">2026-02-01 10:15</td>
                                            <td className="py-3 text-red-800">DISCLOSURE_DELAY</td>
                                            <td className="py-3 text-right text-red-600 font-bold">FLAGGED</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3">2026-02-02 08:00</td>
                                            <td className="py-3">CURE_NOTICE_SENT</td>
                                            <td className="py-3 text-right text-[#9CA3AF]">PENDING</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="mt-6 flex justify-end">
                                    <div className="border border-[#0A3F28] px-2 py-1 inline-block transform -rotate-6">
                                        <span className="text-[8px] font-bold text-[#0A3F28] uppercase tracking-widest">Immutable Record</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 04: Enforcement and Accountability */}
            <section className="bg-[#F3F4F1] border-b border-[#E5E7EB]">
                <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-24 items-center">
                    <div className="order-2 lg:order-1 flex justify-center">
                        <div className="relative py-10 pl-10 pr-4">
                            <div className="absolute left-[59px] top-0 bottom-0 w-px bg-gray-300"></div>

                            <div className="space-y-12">
                                <div className="relative flex items-center gap-6">
                                    <div className="absolute -left-[30px] w-4 h-4 rounded-full bg-white border-2 border-[#0A3F28] z-10"></div>
                                    <div className="bg-white border border-[#E5E7EB] p-4 w-64 shadow-sm">
                                        <span className="text-[9px] font-mono text-[#9CA3AF] block mb-1">STAGE 01</span>
                                        <h4 className="text-sm font-bold text-[#111827]">Compliance Notice</h4>
                                        <p className="text-xs text-[#4B5563] mt-1">Platform definition issue.</p>
                                    </div>
                                </div>

                                <div className="relative flex items-center gap-6">
                                    <div className="absolute -left-[30px] w-4 h-4 rounded-full bg-[#D9B44A] border-2 border-white z-10 shadow-sm"></div>
                                    <div className="bg-white border-l-4 border-[#D9B44A] p-4 w-64 shadow-sm">
                                        <span className="text-[9px] font-mono text-[#D9B44A] block mb-1">STAGE 02</span>
                                        <h4 className="text-sm font-bold text-[#111827]">Heightened Monitoring</h4>
                                        <p className="text-xs text-[#4B5563] mt-1">Daily liquidity checks.</p>
                                    </div>
                                </div>

                                <div className="relative flex items-center gap-6">
                                    <div className="absolute -left-[30px] w-4 h-4 rounded-full bg-[#111827] border-2 border-white z-10 shadow-sm"></div>
                                    <div className="bg-[#111827] text-white p-4 w-64 shadow-md">
                                        <span className="text-[9px] font-mono text-gray-400 block mb-1">STAGE 03</span>
                                        <h4 className="text-sm font-bold text-white">Suspension & Removal</h4>
                                        <p className="text-xs text-gray-400 mt-1">Contractual default trigger.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <span className="text-[#0A3F28] font-bold text-[10px] uppercase tracking-[0.1em] mb-4 block">04. Accountability</span>
                        <h2 className="text-2xl lg:text-3xl font-serif text-[#111827] mb-6">Enforcement<br /><span className="italic"> and Accountability</span></h2>
                        <h3 className="text-lg text-[#4B5563] mb-6 font-medium">Standards are maintained over time</h3>
                        <p className="text-[#4B5563] mb-6 leading-relaxed">
                            Reporting failures are treated first as platform compliance matters. Persistent or material non-compliance escalates under the governing documents.
                        </p>
                        <div className="p-6 border-l-2 border-[#D9B44A] bg-[#F9FAFB]">
                            <p className="text-sm font-serif italic text-[#111827]">
                                 "The integrity and consistency of sponsor operating evidence take precedence over platform volume."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 05: Auditability and Record Integrity */}
            <section className="bg-white border-b border-[#E5E7EB]">
                <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <span className="text-[#0A3F28] font-bold text-[10px] uppercase tracking-[0.1em] mb-4 block">05. Integrity</span>
                        <h2 className="text-2xl lg:text-3xl font-serif text-[#111827] mb-6">Auditability <br /><span className="italic">and Record Integrity</span></h2>
                        <h3 className="text-lg text-[#4B5563] mb-6 font-medium">Evidence is durable and reviewable</h3>
                        <p className="text-[#4B5563] mb-8 leading-relaxed">
                            Sylvan maintains timestamped event logs, version-controlled reporting history, and preserved disclosure timelines.
                        </p>
                        <p className="text-xs font-bold text-[#9CA3AF] uppercase tracking-widest">
                            Sponsor operating records are suitable for fiduciary documentation.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <div className="relative w-full max-w-sm">
                            <div className="absolute top-2 left-2 w-full h-full border border-gray-200 bg-white shadow-sm z-0"></div>
                            <div className="absolute top-4 left-4 w-full h-full border border-gray-200 bg-white shadow-sm z-10"></div>

                            <div className="relative z-20 w-full h-full border border-[#E5E7EB] bg-white shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] p-8">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-[#0A3F28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                        </svg>
                                        <span className="text-xs font-bold uppercase text-[#111827]">Record Locked</span>
                                    </div>
                                    <div className="w-16 h-px bg-[#E5E7EB]"></div>
                                </div>

                                <div className="space-y-4 font-mono text-[10px] text-[#4B5563]">
                                    <div className="flex justify-between">
                                        <span className="text-[#9CA3AF]">SHA-256 HASH</span>
                                        <span>a1b2c3...d4e5</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-[#9CA3AF]">CREATED</span>
                                        <span>2026-01-24 14:02:11</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-[#9CA3AF]">MODIFIED</span>
                                        <span>-- NULL --</span>
                                    </div>
                                    <div className="flex justify-between border-t border-[#E5E7EB] pt-4 mt-4">
                                        <span className="text-[#9CA3AF]">VERIFICATION</span>
                                        <span className="text-[#0A3F28] font-bold">VALID</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
