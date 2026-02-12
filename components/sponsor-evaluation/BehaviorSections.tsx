// components/sponsor-evaluation/BehaviorSections.tsx
'use client'

export default function BehaviorSections() {
    return (
        <>
            {/* Section 01: Payment Behavior */}
            <section className="bg-white max-w-7xl mx-auto px-6 py-24 border-b border-[#E5E7EB]">
                <div className="grid lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-5">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-px bg-[#D9B44A]"></div>
                            <span className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.15em]">01. Reliability</span>
                        </div>
                        <h2 className="text-4xl font-serif text-[#111827] mb-6">Payment Behavior</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Sylvan shows whether payments are made on time, consistently, and from what source.
                        </p>
                        <ul className="space-y-4 mb-8 text-sm text-gray-700">
                            <li className="flex gap-3 items-start">
                                <span className="text-[#0A3F28] font-bold">↳</span>
                                On-time and late payment history
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="text-[#0A3F28] font-bold">↳</span>
                                Payment patterns across multiple obligations
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="text-[#0A3F28] font-bold">↳</span>
                                Whether payments are funded by asset cash flow or sponsor capital
                            </li>
                        </ul>
                        <p className="text-xs font-bold text-[#0A3F28] uppercase tracking-wide border-t border-[#E5E7EB] pt-4">
                            Payment reliability is a baseline expectation. Payment source reveals capital strength and operating stress.
                        </p>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="bg-white border border-[#E5E7EB] p-8 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] rounded">
                            <div className="flex justify-between items-end mb-8 border-b border-[#E5E7EB] pb-4">
                                <h3 className="font-serif text-lg text-[#111827]">Payment History Log</h3>
                                <div className="flex gap-4 text-[10px] font-mono uppercase text-gray-400">
                                    <span className="flex items-center gap-1">
                                        <div className="w-2 h-2 bg-[#0A3F28] rounded-full"></div> Asset Cash Flow
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <div className="w-2 h-2 bg-[#D9B44A] rounded-full"></div> Sponsor Injection
                                    </span>
                                </div>
                            </div>

                            <svg width="100%" height="200" viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
                                <line x1="50" y1="100" x2="550" y2="100" stroke="#E5E7EB" strokeWidth="2"/>

                                <text x="50" y="125" fontFamily="Roboto Mono" fontSize="10" fill="#9CA3AF" textAnchor="middle">JAN</text>
                                <text x="150" y="125" fontFamily="Roboto Mono" fontSize="10" fill="#9CA3AF" textAnchor="middle">FEB</text>
                                <text x="250" y="125" fontFamily="Roboto Mono" fontSize="10" fill="#9CA3AF" textAnchor="middle">MAR</text>
                                <text x="350" y="125" fontFamily="Roboto Mono" fontSize="10" fill="#9CA3AF" textAnchor="middle">APR</text>
                                <text x="450" y="125" fontFamily="Roboto Mono" fontSize="10" fill="#9CA3AF" textAnchor="middle">MAY</text>
                                <text x="550" y="125" fontFamily="Roboto Mono" fontSize="10" fill="#9CA3AF" textAnchor="middle">JUN</text>

                                <circle cx="50" cy="100" r="6" fill="#0A3F28" stroke="white" strokeWidth="2"/>
                                <line x1="50" y1="100" x2="50" y2="70" stroke="#0A3F28" strokeWidth="1" strokeDasharray="2,2"/>
                                <rect x="30" y="50" width="40" height="20" rx="2" fill="#E8F5E9"/>
                                <text x="50" y="63" fontFamily="Inter" fontSize="9" fill="#0A3F28" textAnchor="middle" fontWeight="bold">OK</text>

                                <circle cx="150" cy="100" r="6" fill="#0A3F28" stroke="white" strokeWidth="2"/>

                                <circle cx="250" cy="100" r="8" fill="#D9B44A" stroke="white" strokeWidth="2"/>
                                <line x1="250" y1="100" x2="250" y2="150" stroke="#D9B44A" strokeWidth="1" strokeDasharray="2,2"/>
                                <rect x="210" y="150" width="80" height="20" rx="2" fill="#FEF3C7"/>
                                <text x="250" y="163" fontFamily="Inter" fontSize="9" fill="#92400E" textAnchor="middle" fontWeight="bold">INJECTION</text>

                                <circle cx="350" cy="100" r="6" fill="#0A3F28" stroke="white" strokeWidth="2"/>

                                <circle cx="450" cy="100" r="6" fill="#DC2626" stroke="white" strokeWidth="2"/>
                                <line x1="450" y1="100" x2="450" y2="70" stroke="#DC2626" strokeWidth="1" strokeDasharray="2,2"/>
                                <rect x="430" y="50" width="40" height="20" rx="2" fill="#FEE2E2"/>
                                <text x="450" y="63" fontFamily="Inter" fontSize="9" fill="#991B1B" textAnchor="middle" fontWeight="bold">+2 DAYS</text>

                                <circle cx="550" cy="100" r="6" fill="#0A3F28" stroke="white" strokeWidth="2"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 02: Capital and Reserve Discipline */}
            <section className="bg-[#F3F4F1] border-b border-[#E5E7EB]">
                <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-7 order-2 lg:order-1">
                        <div className="bg-white border border-[#E5E7EB] p-8 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] rounded">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-serif text-lg text-[#111827]">Reserve Adequacy Monitor</h3>
                                <span className="text-[10px] font-mono text-gray-400 uppercase">REQ: $250k | ACT: $280k</span>
                            </div>

                            <svg width="100%" height="180" viewBox="0 0 600 180" xmlns="http://www.w3.org/2000/svg">
                                <rect x="50" y="40" width="500" height="100" rx="4" fill="#F9FAFB" stroke="#E5E7EB"/>

                                <rect x="50" y="40" width="100" height="100" fill="#FEE2E2" opacity="0.3"/>
                                <line x1="150" y1="40" x2="150" y2="140" stroke="#EF4444" strokeWidth="1" strokeDasharray="4,2"/>
                                <text x="100" y="130" fontFamily="Inter" fontSize="9" fill="#DC2626" textAnchor="middle" fontWeight="bold">CRITICAL</text>

                                <line x1="300" y1="20" x2="300" y2="160" stroke="#111827" strokeWidth="1" strokeDasharray="4,2"/>
                                <text x="300" y="15" fontFamily="Roboto Mono" fontSize="10" fill="#111827" textAnchor="middle" fontWeight="bold">REQUIRED THRESHOLD</text>

                                <rect x="50" y="70" width="280" height="40" rx="2" fill="#0A3F28" opacity="0.1"/>
                                <rect x="50" y="70" width="350" height="40" rx="2" fill="#0A3F28"/>
                                <path d="M300,90 L350,90" stroke="white" strokeWidth="1"/>
                                <text x="400" y="95" fontFamily="Inter" fontSize="11" fill="#0A3F28" fontWeight="bold">+ $50k BUFFER</text>
                            </svg>

                            <div className="mt-4 grid grid-cols-2 gap-4 border-t border-[#E5E7EB] pt-4">
                                <div>
                                    <span className="block text-[10px] text-gray-400 uppercase tracking-widest">Injections (LTM)</span>
                                    <span className="block text-xl font-mono text-[#111827]">0</span>
                                </div>
                                <div>
                                    <span className="block text-[10px] text-gray-400 uppercase tracking-widest">Management Style</span>
                                    <span className="block text-sm font-bold text-[#0A3F28]">PROACTIVE</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 order-1 lg:order-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-px bg-[#D9B44A]"></div>
                            <span className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.15em]">02. Discipline</span>
                        </div>
                        <h2 className="text-4xl font-serif text-[#111827] mb-6">Capital and Reserve Discipline</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Sylvan shows how sponsors manage required reserves and liquidity under real constraints.
                        </p>
                        <ul className="space-y-4 mb-8 text-sm text-gray-700">
                            <li className="flex gap-3 items-start">
                                <span className="text-[#0A3F28] font-bold">↳</span>
                                Reserve balances versus required thresholds
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="text-[#0A3F28] font-bold">↳</span>
                                Frequency and size of sponsor capital injections
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="text-[#0A3F28] font-bold">↳</span>
                                Patterns of proactive buffer management versus reactive support
                            </li>
                        </ul>
                        <p className="text-xs font-bold text-[#0A3F28] uppercase tracking-wide border-t border-gray-200 pt-4">
                            This reveals whether a sponsor plans for volatility or runs assets lean until intervention is required.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 03: Forecast Accuracy */}
            <section className="bg-white max-w-7xl mx-auto px-6 py-24 border-b border-[#E5E7EB]">
                <div className="grid lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-5">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-px bg-[#D9B44A]"></div>
                            <span className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.15em]">03. Accuracy</span>
                        </div>
                        <h2 className="text-4xl font-serif text-[#111827] mb-6">Forecast Accuracy</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Sylvan shows how closely projected performance matches actual results, and how sponsors respond when it does not.
                        </p>
                        <ul className="space-y-4 mb-8 text-sm text-gray-700">
                            <li className="flex gap-3 items-start">
                                <span className="text-[#0A3F28] font-bold">↳</span>
                                Forecast versus actual performance trends
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="text-[#0A3F28] font-bold">↳</span>
                                Magnitude and frequency of variances
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="text-[#0A3F28] font-bold">↳</span>
                                Reforecast behavior when conditions change
                            </li>
                        </ul>
                        <p className="text-xs font-bold text-[#0A3F28] uppercase tracking-wide border-t border-[#E5E7EB] pt-4">
                            This distinguishes disciplined operators from sponsors who maintain optimistic projections too long.
                        </p>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="bg-white border border-[#E5E7EB] p-8 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] rounded">
                            <h3 className="font-serif text-lg text-[#111827] mb-6">Variance Analysis</h3>
                            <svg width="100%" height="220" viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
                                <line x1="50" y1="20" x2="50" y2="180" stroke="#E5E7EB"/>
                                <line x1="50" y1="180" x2="550" y2="180" stroke="#E5E7EB"/>

                                <path d="M50,150 C150,130 300,80 550,50" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeDasharray="4,4"/>
                                <text x="500" y="45" fontFamily="Inter" fontSize="9" fill="#9CA3AF" fontWeight="bold">ORIGINAL PRO FORMA</text>

                                <path d="M50,150 C150,135 300,100 400,110" fill="none" stroke="#0A3F28" strokeWidth="2"/>
                                <circle cx="400" cy="110" r="4" fill="#0A3F28"/>

                                <path d="M400,110 L550,120" fill="none" stroke="#D9B44A" strokeWidth="2"/>
                                <text x="460" y="105" fontFamily="Inter" fontSize="9" fill="#D9B44A" fontWeight="bold">RE-FORECAST ADJ.</text>

                                <line x1="400" y1="110" x2="400" y2="70" stroke="#EF4444" strokeWidth="1"/>
                                <rect x="410" y="80" width="80" height="20" rx="2" fill="#FEE2E2"/>
                                <text x="450" y="93" fontFamily="Roboto Mono" fontSize="10" fill="#B91C1C" textAnchor="middle">-12% VAR</text>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 04: Disclosure Behavior */}
            <section className="bg-[#F3F4F1] border-b border-[#E5E7EB]">
                <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-7 order-2 lg:order-1">
                        <div className="bg-white border border-[#E5E7EB] p-8 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] rounded">
                            <h3 className="font-serif text-lg text-[#111827] mb-6">Issue Response Timeline</h3>

                            <svg width="100%" height="150" viewBox="0 0 600 150" xmlns="http://www.w3.org/2000/svg">
                                <line x1="50" y1="75" x2="550" y2="75" stroke="#E5E7EB" strokeWidth="2"/>

                                <circle cx="100" cy="75" r="8" fill="#EF4444"/>
                                <text x="100" y="50" fontFamily="Inter" fontSize="10" fill="#EF4444" fontWeight="bold" textAnchor="middle">ISSUE EVENT</text>
                                <text x="100" y="100" fontFamily="Roboto Mono" fontSize="9" fill="#6B7280" textAnchor="middle">T-0</text>

                                <path d="M100,85 L100,90 L200,90 L200,85" fill="none" stroke="#111827" strokeWidth="1"/>
                                <text x="150" y="105" fontFamily="Roboto Mono" fontSize="10" fill="#111827" textAnchor="middle" fontWeight="bold">4 HOURS</text>

                                <circle cx="200" cy="75" r="8" fill="#0A3F28"/>
                                <text x="200" y="50" fontFamily="Inter" fontSize="10" fill="#0A3F28" fontWeight="bold" textAnchor="middle">INVESTOR NOTICE</text>

                                <circle cx="350" cy="75" r="5" fill="#E5E7EB" stroke="#6B7280" strokeWidth="2"/>
                                <text x="350" y="50" fontFamily="Inter" fontSize="10" fill="#6B7280" fontWeight="bold" textAnchor="middle">PLAN UPLOADED</text>
                                <text x="350" y="100" fontFamily="Roboto Mono" fontSize="9" fill="#6B7280" textAnchor="middle">T+24h</text>
                            </svg>

                            <div className="bg-[#E8F5E9] p-4 rounded border border-[#145A3C]/20 flex gap-4 items-center">
                                <div className="w-2 h-2 rounded-full bg-[#0A3F28]"></div>
                                <p className="text-xs text-[#0A3F28] font-medium">Sponsor disclosed HVAC failure and capex requirement immediately. Full resolution plan provided within 24 hours.</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 order-1 lg:order-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-px bg-[#D9B44A]"></div>
                            <span className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.15em]">04. Transparency</span>
                        </div>
                        <h2 className="text-4xl font-serif text-[#111827] mb-6">Disclosure Behavior</h2>
                        <h3 className="text-lg italic font-serif text-gray-500 mb-6">How problems are communicated</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Sylvan shows how sponsors disclose issues when they occur, not after the fact.
                        </p>
                        <ul className="space-y-4 mb-8 text-sm text-gray-700">
                            <li className="flex gap-3 items-start">
                                <span className="text-[#0A3F28] font-bold">↳</span>
                                Time from issue occurrence to disclosure
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="text-[#0A3F28] font-bold">↳</span>
                                Disclosure completeness and follow-up
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="text-[#0A3F28] font-bold">↳</span>
                                Frequency of revisions and restatements
                            </li>
                        </ul>
                        <p className="text-xs font-bold text-[#0A3F28] uppercase tracking-wide border-t border-gray-200 pt-4">
                            Timely disclosure is often a stronger signal than performance itself.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 05: Consistency Over Time */}
            <section className="bg-white max-w-7xl mx-auto px-6 py-24 border-b border-[#E5E7EB]">
                <div className="grid lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-5">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-px bg-[#D9B44A]"></div>
                            <span className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.15em]">05. History</span>
                        </div>
                        <h2 className="text-4xl font-serif text-[#111827] mb-6">Consistency Over Time</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Sylvan aggregates behavior across all obligations to show whether operating patterns hold.
                        </p>
                        <ul className="space-y-4 mb-8 text-sm text-gray-700">
                            <li className="flex gap-3 items-start">
                                <span className="text-[#0A3F28] font-bold">↳</span>
                                Stability or volatility in behavior across deals
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="text-[#0A3F28] font-bold">↳</span>
                                Improvement or deterioration over time
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="text-[#0A3F28] font-bold">↳</span>
                                Whether issues are isolated or systemic
                            </li>
                        </ul>
                        <p className="text-xs font-bold text-[#0A3F28] uppercase tracking-wide border-t border-[#E5E7EB] pt-4">
                            This turns isolated experiences into an operating history.
                        </p>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="bg-white border border-[#E5E7EB] p-8 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] rounded">
                            <h3 className="font-serif text-lg text-[#111827] mb-6">Cross-Asset Consistency Map</h3>

                            <div className="grid grid-cols-4 gap-2 mb-2">
                                <div className="text-[10px] font-mono text-gray-400 text-center">DEAL A</div>
                                <div className="text-[10px] font-mono text-gray-400 text-center">DEAL B</div>
                                <div className="text-[10px] font-mono text-gray-400 text-center">DEAL C</div>
                                <div className="text-[10px] font-mono text-gray-400 text-center">DEAL D</div>
                            </div>

                            <div className="space-y-2">
                                <div className="grid grid-cols-4 gap-2">
                                    <div className="h-8 bg-[#0A3F28] rounded flex items-center justify-center text-white text-[10px]">OK</div>
                                    <div className="h-8 bg-[#0A3F28] rounded flex items-center justify-center text-white text-[10px]">OK</div>
                                    <div className="h-8 bg-[#0A3F28] rounded flex items-center justify-center text-white text-[10px]">OK</div>
                                    <div className="h-8 bg-[#0A3F28] rounded flex items-center justify-center text-white text-[10px]">OK</div>
                                </div>
                                <div className="grid grid-cols-4 gap-2">
                                    <div className="h-8 bg-[#0A3F28] rounded flex items-center justify-center text-white text-[10px]">OK</div>
                                    <div className="h-8 bg-[#0A3F28] rounded flex items-center justify-center text-white text-[10px]">OK</div>
                                    <div className="h-8 bg-yellow-100 rounded flex items-center justify-center text-yellow-800 text-[10px] font-bold">LATE</div>
                                    <div className="h-8 bg-[#0A3F28] rounded flex items-center justify-center text-white text-[10px]">OK</div>
                                </div>
                                <div className="grid grid-cols-4 gap-2">
                                    <div className="h-8 bg-[#0A3F28] rounded flex items-center justify-center text-white text-[10px]">OK</div>
                                    <div className="h-8 bg-[#0A3F28] rounded flex items-center justify-center text-white text-[10px]">OK</div>
                                    <div className="h-8 bg-[#0A3F28] rounded flex items-center justify-center text-white text-[10px]">OK</div>
                                    <div className="h-8 bg-[#0A3F28] rounded flex items-center justify-center text-white text-[10px]">OK</div>
                                </div>
                            </div>
                            <div className="mt-4 text-center text-xs text-gray-500 italic">
                                "Isolated issue in Deal C, quickly resolved. No systemic pattern detected."
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
