// components/home/ProductStructures.tsx
'use client'

export default function ProductStructures() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-32 border-b border-[#E5E7EB]">
            <div className="text-center mb-20 max-w-2xl mx-auto">
                <h2 className="text-4xl font-serif text-[#111827] mb-6">Three Standardized Product Structures</h2>
                <p className="text-gray-600">
                    Sylvan offers a small, fixed set of standardized structured-income products. Each structure serves a distinct purpose while operating under the same contractual, reporting, and disclosure framework.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="flex justify-center">
                    <svg width="400" height="500" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
                        <path d="M70,40 L40,40 L40,460 L70,460" fill="none" stroke="#D1D5DB" strokeWidth="1.5"/>
                        <text x="30" y="250" fontFamily="Roboto Mono" fontSize="10" fill="#9CA3AF" transform="rotate(-90 30,250)" textAnchor="middle">UNIFIED COVENANT FRAMEWORK</text>

                        <g transform="translate(80, 40)">
                            <rect x="0" y="0" width="280" height="110" rx="2" fill="#F9FAFB" stroke="#0A3F28" strokeWidth="2" strokeDasharray="8,4" />
                            <text x="140" y="50" fontFamily="Inter" fontSize="16" fontWeight="bold" fill="#0A3F28" textAnchor="middle">Completion Notes</text>
                            <text x="140" y="75" fontFamily="Inter" fontSize="12" fill="#6B7280" textAnchor="middle">Construction & Stabilization</text>
                        </g>

                        <line x1="220" y1="150" x2="220" y2="180" stroke="#E5E7EB" strokeWidth="2"/>

                        <g transform="translate(80, 180)">
                            <rect x="0" y="0" width="280" height="110" rx="2" fill="#E8F5E9" stroke="#0A3F28" strokeWidth="1" />
                            <text x="140" y="50" fontFamily="Inter" fontSize="16" fontWeight="bold" fill="#0A3F28" textAnchor="middle">Bridge & Refinance</text>
                            <text x="140" y="75" fontFamily="Inter" fontSize="12" fill="#145A3C" textAnchor="middle">Transitional Execution</text>
                        </g>

                        <line x1="220" y1="290" x2="220" y2="320" stroke="#E5E7EB" strokeWidth="2"/>

                        <g transform="translate(60, 320)">
                            <rect x="10" y="10" width="320" height="140" rx="2" fill="#E5E7EB" />
                            <rect x="0" y="0" width="320" height="140" rx="2" fill="#0A3F28" />
                            <text x="160" y="65" fontFamily="Playfair Display" fontSize="22" fill="#FFFFFF" textAnchor="middle">Senior Secured</text>
                            <text x="160" y="95" fontFamily="Inter" fontSize="10" fontWeight="bold" fill="#D9B44A" textAnchor="middle" letterSpacing="2">STABILIZED ASSET BASE</text>
                        </g>
                    </svg>
                </div>

                <div className="space-y-12">
                    <div className="group hover:bg-gray-50 p-6 rounded transition cursor-default">
                        <h3 className="font-serif text-2xl text-[#111827] mb-3 group-hover:text-[#0A3F28] transition">
                            Completion and Construction-to-Stabilization Notes
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            Designed for late-stage development or completion phases where capital is required to deliver or stabilize an asset. These notes reflect higher return expectations due to construction, budget, and delivery risk, with defined milestones and duration.
                        </p>
                    </div>
                    <div className="h-px bg-gray-100 w-full"></div>
                    <div className="group hover:bg-gray-50 p-6 rounded transition cursor-default">
                        <h3 className="font-serif text-2xl text-[#111827] mb-3 group-hover:text-[#0A3F28] transition">
                            Bridge and Refinance Notes
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            Designed for assets undergoing refinancing, repositioning, or interim execution steps. These notes carry higher return potential than stabilized notes, reflecting increased timing and execution risk over a defined transition period.
                        </p>
                    </div>
                    <div className="h-px bg-gray-100 w-full"></div>
                    <div className="group hover:bg-gray-50 p-6 rounded transition cursor-default">
                        <h3 className="font-serif text-2xl text-[#111827] mb-3 group-hover:text-[#0A3F28] transition">
                            Asset-Level Senior Secured Notes
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            Designed for stabilized or near-stabilized assets with predictable cash flow. These notes prioritize capital preservation and current income through senior security, defined payment priority, and shorter to moderate duration.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
