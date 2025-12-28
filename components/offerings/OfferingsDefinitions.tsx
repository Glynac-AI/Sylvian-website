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
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
                            <h3 className="mb-4 text-2xl font-bold text-slate-900">Core Income</h3>
                            <p className="mb-6 font-semibold text-blue-600">Higher Current Cash Flow</p>
                            <div className="space-y-4 text-slate-700">
                                <p>Designed for investors prioritizing current income.</p>
                                <ul className="list-disc pl-5 space-y-2 text-sm">
                                    <li>Higher portion of net cash distributed currently</li>
                                    <li>Income reflects actual rent collected</li>
                                    <li>Distributions vary with operating performance</li>
                                    <li>No smoothing or targeting</li>
                                </ul>
                                <p className="pt-4 text-sm italic text-slate-500">
                                    Core Income does not increase leverage, change risk position, or modify governance rules. It reflects timing of cash, not risk.
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    {/* Offset Income */}
                    <Reveal delay={200}>
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
                            <h3 className="mb-4 text-2xl font-bold text-slate-900">Offset Income</h3>
                            <p className="mb-6 font-semibold text-slate-500">Timing Difference, Not Risk Difference</p>
                            <div className="space-y-4 text-slate-700">
                                <p>Designed for investors who prefer lower current cash flow with higher depreciation timing.</p>
                                <ul className="list-disc pl-5 space-y-2 text-sm">
                                    <li>Lower current distributions</li>
                                    <li>Higher depreciation timing relative to cash</li>
                                    <li>Identical capital position and downside behavior as Core Income</li>
                                </ul>
                                <p className="pt-4 text-sm italic text-slate-500">
                                    Offset refers to timing, not tax outcomes or risk mitigation. It is the same structure with different timing characteristics.
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    {/* DST Access */}
                    <Reveal delay={300}>
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
                            <h3 className="mb-4 text-2xl font-bold text-slate-900">DST Access</h3>
                            <p className="mb-6 font-semibold text-slate-500">Optional Legal Wrapper</p>
                            <div className="space-y-4 text-slate-700">
                                <p>Available through a Delaware Statutory Trust (DST) to accommodate 1031 exchanges.</p>
                                <ul className="list-disc pl-5 space-y-2 text-sm">
                                    <li>The DST is a legal wrapper, not a different investment</li>
                                    <li>Structure, leverage, and governance do not change</li>
                                    <li>DST availability does not alter asset risk or economics</li>
                                </ul>
                                <p className="pt-4 text-sm italic text-slate-500">
                                    Sylvan does not provide tax advice. DST suitability depends on an investor&apos;s circumstances.
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}