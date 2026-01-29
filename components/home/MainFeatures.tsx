// components/home/MainFeatures.tsx
'use client'

export default function MainFeatures() {
    return (
        <>
            {/* Section 01: Complete Operating Visibility */}
            <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-24 items-center border-b border-[#E5E7EB]">
                <div className="order-2 lg:order-1">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.15em]">01. Dimensions</span>
                        <div className="h-px bg-gray-200 w-12"></div>
                    </div>
                    <h2 className="text-4xl font-serif mb-6 text-[#111827]">Complete Operating Visibility</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        You see five dimensions of sponsor behavior tracked across every obligation: how reliably they pay and from what source, how they manage capital and reserves under pressure, how accurate their forecasts are against actual performance, how quickly they disclose problems, and whether these patterns hold consistent across multiple deals.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm font-medium">
                        Every metric is timestamped, contractually required, and captured uniformly, giving you the complete operating picture that references and pitch decks cannot provide.
                    </p>
                </div>
                <div className="order-1 lg:order-2 flex justify-center py-8 bg-white border border-[#E5E7EB] p-8 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] rounded">
                    <svg width="350" height="350" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="200" cy="200" r="150" fill="none" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4,4"/>
                        <circle cx="200" cy="200" r="100" fill="none" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4,4"/>
                        <circle cx="200" cy="200" r="50" fill="none" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4,4"/>

                        <line x1="200" y1="50" x2="200" y2="350" stroke="#E5E7EB" strokeWidth="1"/>
                        <line x1="50" y1="200" x2="350" y2="200" stroke="#E5E7EB" strokeWidth="1"/>

                        <path d="M200,60 L330,190 L280,310 L120,310 L70,190 Z" fill="#0A3F28" fillOpacity="0.05" stroke="#0A3F28" strokeWidth="2"/>

                        <circle cx="200" cy="60" r="5" fill="white" stroke="#0A3F28" strokeWidth="2"/>
                        <circle cx="330" cy="190" r="5" fill="white" stroke="#0A3F28" strokeWidth="2"/>
                        <circle cx="280" cy="310" r="5" fill="white" stroke="#0A3F28" strokeWidth="2"/>
                        <circle cx="120" cy="310" r="5" fill="white" stroke="#0A3F28" strokeWidth="2"/>
                        <circle cx="70" cy="190" r="5" fill="white" stroke="#0A3F28" strokeWidth="2"/>

                        <text x="200" y="35" fontFamily="Inter" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#111827" letterSpacing="1">RELIABILITY</text>
                        <text x="360" y="190" fontFamily="Inter" fontSize="10" fontWeight="bold" textAnchor="start" fill="#111827" letterSpacing="1">RESERVES</text>
                        <text x="300" y="340" fontFamily="Inter" fontSize="10" fontWeight="bold" textAnchor="start" fill="#111827" letterSpacing="1">DISCLOSURE</text>
                        <text x="100" y="340" fontFamily="Inter" fontSize="10" fontWeight="bold" textAnchor="end" fill="#111827" letterSpacing="1">FORECAST</text>
                        <text x="40" y="190" fontFamily="Inter" fontSize="10" fontWeight="bold" textAnchor="end" fill="#111827" letterSpacing="1">CONSISTENCY</text>
                    </svg>
                </div>
            </section>

            {/* Section 02: Lockbox Protected Payment Priority */}
            <section className="bg-gray-50 border-b border-[#E5E7EB]">
                <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-24 items-center">
                    <div className="order-1 flex justify-center">
                        <div className="bg-white p-10 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border border-[#E5E7EB] rounded w-full max-w-md">
                            <svg width="100%" height="320" viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg">
                                <rect x="60" y="10" width="200" height="40" rx="0" fill="white" stroke="#E5E7EB" strokeWidth="1"/>
                                <text x="160" y="35" fontFamily="Roboto Mono" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#6B7280" letterSpacing="1">TENANT RENT</text>

                                <line x1="160" y1="50" x2="160" y2="80" stroke="#0A3F28" strokeWidth="1.5"/>
                                <polygon points="156,80 164,80 160,86" fill="#0A3F28"/>

                                <rect x="30" y="90" width="260" height="80" rx="2" fill="#0A3F28" />
                                <text x="160" y="125" fontFamily="Playfair Display" fontSize="18" fill="white" textAnchor="middle">Sylvan Lockbox</text>
                                <text x="160" y="145" fontFamily="Inter" fontSize="9" textAnchor="middle" fill="#D9B44A" fontWeight="bold" letterSpacing="2">3RD PARTY ESCROW</text>

                                <path d="M160,170 L160,200 L80,200 L80,225" fill="none" stroke="#0A3F28" strokeWidth="1.5"/>
                                <path d="M160,170 L160,200 L240,200 L240,225" fill="none" stroke="#E5E7EB" strokeWidth="1.5" strokeDasharray="4,4"/>

                                <rect x="20" y="230" width="120" height="60" rx="0" fill="#F0FDF4" stroke="#0A3F28" strokeWidth="1"/>
                                <text x="80" y="255" fontFamily="Inter" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#0A3F28" letterSpacing="1">PRIORITY 1</text>
                                <text x="80" y="275" fontFamily="Inter" fontSize="12" textAnchor="middle" fill="#111827">Debt Service</text>

                                <rect x="180" y="230" width="120" height="60" rx="0" fill="white" stroke="#E5E7EB" strokeWidth="1"/>
                                <text x="240" y="255" fontFamily="Inter" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#9CA3AF" letterSpacing="1">RESIDUAL</text>
                                <text x="240" y="275" fontFamily="Inter" fontSize="12" textAnchor="middle" fill="#9CA3AF">Sponsor Profit</text>
                            </svg>
                        </div>
                    </div>

                    <div className="order-2">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.15em]">02. Mechanics</span>
                            <div className="h-px bg-gray-200 w-12"></div>
                        </div>
                        <h2 className="text-4xl font-serif mb-6 text-[#111827]">Lockbox Protected Payment Priority</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Rental income never touches the developer's accounts. Tenants pay directly into a third-party bank-controlled lockbox that functions like an independent escrow.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            The bank releases funds in strict order enforced by contract. Direct operational expenses are funded first, then Sylvan investors receive their distributions. The developer can only access net profits after your payments are complete.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 03: Standardized Comparability */}
            <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-24 items-center border-b border-[#E5E7EB]">
                <div className="order-2 lg:order-1">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.15em]">03. Standards</span>
                        <div className="h-px bg-gray-200 w-12"></div>
                    </div>
                    <h2 className="text-4xl font-serif mb-6 text-[#111827]">Standardized Comparability</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Every offering on Sylvan uses identical SPV structures, covenant frameworks, reserve requirements, and reporting templates. Sponsors cannot customize formats or negotiate exceptions. When comparing sponsors, each is evaluated against the same obligations, measurements, and standards.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm font-medium">
                        This level of structural standardization enables sponsor behavior to be compared consistently across different operators and asset types.
                    </p>
                </div>
                <div className="order-1 lg:order-2">
                    <div className="bg-white p-8 border border-[#E5E7EB] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] rounded">
                        <svg width="100%" height="220" viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0" y="30" width="400" height="150" fill="#F9FAFB" stroke="#E5E7EB"/>

                            <line x1="100" y1="30" x2="100" y2="180" stroke="#E5E7EB" strokeDasharray="4,2"/>
                            <line x1="200" y1="30" x2="200" y2="180" stroke="#E5E7EB" strokeDasharray="4,2"/>
                            <line x1="300" y1="30" x2="300" y2="180" stroke="#E5E7EB" strokeDasharray="4,2"/>

                            <text x="100" y="20" fontFamily="Roboto Mono" fontSize="8" fill="#9CA3AF" textAnchor="middle">Q1</text>
                            <text x="200" y="20" fontFamily="Roboto Mono" fontSize="8" fill="#9CA3AF" textAnchor="middle">Q2</text>
                            <text x="300" y="20" fontFamily="Roboto Mono" fontSize="8" fill="#9CA3AF" textAnchor="middle">Q3</text>

                            <text x="10" y="80" fontFamily="Inter" fontSize="10" fontWeight="bold" fill="#111827">ASSET A</text>
                            <rect x="70" y="70" width="300" height="15" rx="2" fill="#E5E7EB" />
                            <rect x="70" y="70" width="220" height="15" rx="2" fill="#0A3F28" />

                            <text x="10" y="120" fontFamily="Inter" fontSize="10" fontWeight="bold" fill="#111827">ASSET B</text>
                            <rect x="70" y="110" width="300" height="15" rx="2" fill="#E5E7EB" />
                            <rect x="70" y="110" width="280" height="15" rx="2" fill="#0A3F28" />

                            <text x="200" y="205" fontFamily="Inter" fontSize="9" fill="#9CA3AF" textAnchor="middle" letterSpacing="2" fontWeight="bold">UNIFORM MEASUREMENT STANDARD</text>
                        </svg>
                    </div>
                </div>
            </section>

            {/* Section 04: Risk Profile */}
            <section className="bg-gray-50 border-b border-[#E5E7EB]">
                <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-24 items-center">
                    <div className="order-1">
                        <div className="bg-white p-8 border border-[#E5E7EB] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] rounded">
                            <svg width="100%" height="250" viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
                                <line x1="40" y1="20" x2="40" y2="220" stroke="#D1D5DB" strokeWidth="1"/>
                                <text x="30" y="30" fontFamily="Roboto Mono" fontSize="8" fill="#9CA3AF" textAnchor="end">12%</text>
                                <text x="30" y="120" fontFamily="Roboto Mono" fontSize="8" fill="#9CA3AF" textAnchor="end">6%</text>
                                <text x="30" y="210" fontFamily="Roboto Mono" fontSize="8" fill="#9CA3AF" textAnchor="end">0%</text>

                                <line x1="40" y1="220" x2="380" y2="220" stroke="#D1D5DB" strokeWidth="1"/>
                                <text x="40" y="235" fontFamily="Roboto Mono" fontSize="8" fill="#9CA3AF">Y1</text>
                                <text x="380" y="235" fontFamily="Roboto Mono" fontSize="8" fill="#9CA3AF" textAnchor="end">Y10</text>

                                <line x1="40" y1="120" x2="380" y2="120" stroke="#F3F4F6" strokeWidth="1"/>
                                <line x1="40" y1="70" x2="380" y2="70" stroke="#F3F4F6" strokeWidth="1"/>
                                <line x1="40" y1="170" x2="380" y2="170" stroke="#F3F4F6" strokeWidth="1"/>

                                <polyline points="40,180 70,100 100,190 130,50 160,150 190,40 220,160 250,90 280,200 310,60 380,140"
                                          fill="none" stroke="#E5E7EB" strokeWidth="2" strokeLinejoin="round" />
                                <text x="380" y="130" fontFamily="Inter" fontSize="10" fill="#9CA3AF" textAnchor="end">Equity Volatility</text>

                                <polyline points="40,140 380,100"
                                          fill="none" stroke="#0A3F28" strokeWidth="3" />
                                <circle cx="380" cy="100" r="3" fill="#0A3F28"/>
                                <text x="380" y="90" fontFamily="Inter" fontSize="10" fontWeight="bold" fill="#0A3F28" textAnchor="end">SYLVAN YIELD</text>
                            </svg>
                        </div>
                    </div>

                    <div className="order-2">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.15em]">04. Risk Profile</span>
                            <div className="h-px bg-gray-200 w-12"></div>
                        </div>
                        <h2 className="text-4xl font-serif mb-6 text-[#111827]">Consistent Yield Without Equity Risk</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Taking debt positions on existing income producing properties lets you bypass the volatility of developer equity. You are buying into proven rental yields rather than betting on the operational success of a developer.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            This gives you direct exposure to the performance of the real estate asset itself with a clear and secure path to returns.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
