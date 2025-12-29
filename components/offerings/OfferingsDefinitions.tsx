import Reveal from '@/components/layout/Reveal'

export default function OfferingsDefinitions() {
    return (
        <section className="bg-white px-6 py-24 lg:py-32">
            <div className="mx-auto max-w-[1280px]">
                <Reveal>
                    <div className="mb-16 max-w-3xl">
                        <h2 className="text-3xl font-bold text-slate-900">Defined Access Paths</h2>
                        <p className="mt-4 text-xl text-slate-600">
                            All offerings use the same standardized structure. What differs is how income and depreciation show up, and whether a DST wrapper is used.
                        </p>
                    </div>
                </Reveal>

                <div className="grid gap-12 lg:grid-cols-3">
                    {/* Core Income */}
                    <Reveal delay={100}>
                        <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-8">
                            <h3 className="mb-4 text-2xl font-bold text-slate-900">Core Income</h3>
                            <p className="mb-6 font-semibold text-blue-600">Higher Current Cash Flow</p>
                            <div className="space-y-4 text-slate-700 flex-grow">
                                <p>Designed for investors prioritizing current income.</p>
                                <ul className="list-disc pl-5 space-y-2 text-sm">
                                    <li>Higher portion of net cash distributed currently</li>
                                    <li>Income reflects actual rent collected</li>
                                    <li>Distributions vary with operating performance</li>
                                    <li>No smoothing or targeting</li>
                                </ul>
                                
                                <div className="mt-6 border-t border-slate-200 pt-6">
                                    <p className="mb-3 text-sm font-bold text-slate-900">Illustrative Parameters (Sample):</p>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li className="flex justify-between"><span>Target Duration:</span> <span className="font-medium text-slate-900">5-7 Years</span></li>
                                        <li className="flex justify-between"><span>Senior Debt:</span> <span className="font-medium text-slate-900">60% LTV</span></li>
                                        <li className="flex justify-between"><span>Sponsor Equity:</span> <span className="font-medium text-slate-900">~28% (First Loss)</span></li>
                                        <li className="flex justify-between"><span>Est. Dist:</span> <span className="font-medium text-slate-900">~6.5-7.0%</span></li>
                                    </ul>
                                </div>
                            </div>
                            <p className="pt-6 text-sm italic text-slate-500">
                                Core Income does not increase leverage, change risk position, or modify governance rules. It reflects timing of cash, not risk.
                            </p>
                        </div>
                    </Reveal>

                    {/* Offset Income */}
                    <Reveal delay={200}>
                        <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-8">
                            <h3 className="mb-4 text-2xl font-bold text-slate-900">Offset Income</h3>
                            <p className="mb-6 font-semibold text-slate-500">Timing Difference, Not Risk Difference</p>
                            <div className="space-y-4 text-slate-700 flex-grow">
                                <p>Designed for investors who prefer lower current cash flow with higher depreciation timing.</p>
                                <ul className="list-disc pl-5 space-y-2 text-sm">
                                    <li>Lower current distributions</li>
                                    <li>Higher depreciation timing relative to cash</li>
                                    <li>Identical capital position and downside behavior as Core Income</li>
                                </ul>

                                <div className="mt-6 border-t border-slate-200 pt-6">
                                    <p className="mb-3 text-sm font-bold text-slate-900">Illustrative Parameters (Sample):</p>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li className="flex justify-between"><span>Target Duration:</span> <span className="font-medium text-slate-900">5-7 Years</span></li>
                                        <li className="flex justify-between"><span>Senior Debt:</span> <span className="font-medium text-slate-900">65% LTV</span></li>
                                        <li className="flex justify-between"><span>Sponsor Equity:</span> <span className="font-medium text-slate-900">~23-25% (First Loss)</span></li>
                                        <li className="flex justify-between"><span>Est. Dist:</span> <span className="font-medium text-slate-900">~4.5-5.0%</span></li>
                                    </ul>
                                </div>
                            </div>
                            <p className="pt-6 text-sm italic text-slate-500">
                                Offset refers to timing, not tax outcomes or risk mitigation. It is the same structure with different timing characteristics.
                            </p>
                        </div>
                    </Reveal>

                    {/* DST Access */}
                    <Reveal delay={300}>
                        <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-8">
                            <h3 className="mb-4 text-2xl font-bold text-slate-900">DST Access</h3>
                            <p className="mb-6 font-semibold text-slate-500">Optional Legal Wrapper</p>
                            <div className="space-y-4 text-slate-700 flex-grow">
                                <p>Available through a Delaware Statutory Trust (DST) to accommodate 1031 exchanges.</p>
                                <ul className="list-disc pl-5 space-y-2 text-sm">
                                    <li>The DST is a legal wrapper, not a different investment</li>
                                    <li>Structure, leverage, and governance do not change</li>
                                    <li>DST availability does not alter asset risk or economics</li>
                                </ul>

                                <div className="mt-6 border-t border-slate-200 pt-6">
                                    <p className="mb-3 text-sm font-bold text-slate-900">Illustrative Parameters (Sample):</p>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li className="flex justify-between"><span>Wrapper:</span> <span className="font-medium text-slate-900">DST</span></li>
                                        <li className="flex justify-between"><span>Target Duration:</span> <span className="font-medium text-slate-900">5-7 Years</span></li>
                                        <li className="flex justify-between"><span>Senior Debt:</span> <span className="font-medium text-slate-900">~60% LTV</span></li>
                                        <li className="flex justify-between"><span>Est. Dist:</span> <span className="font-medium text-slate-900">~6.0-6.5%</span></li>
                                    </ul>
                                </div>
                            </div>
                            <p className="pt-6 text-sm italic text-slate-500">
                                Sylvan does not provide tax advice. DST suitability depends on an investor&apos;s circumstances.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}