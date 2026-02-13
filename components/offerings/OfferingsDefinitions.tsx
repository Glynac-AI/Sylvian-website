import Reveal from '@/components/layout/Reveal'
import ArrowList from '@/components/ui/ArrowList'
import SectionHeading from '@/components/ui/SectionHeading'

export default function OfferingsDefinitions() {
    return (
        <section>
            <div className="section-inner">
                <Reveal>
                    <div className="mb-16 max-w-3xl">
                        <SectionHeading line1="Defined Access" line2="Paths" size="lg" className="mb-4" />
                        <p className="text-base text-slate-600 md:text-lg subtext">
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
                                <ArrowList
                                    items={[
                                        'Higher portion of net cash distributed currently',
                                        'Income reflects actual rent collected',
                                        'Distributions vary with operating performance',
                                        'No smoothing or targeting',
                                    ]}
                                    className="text-sm"
                                />
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
                                <ArrowList
                                    items={[
                                        'Lower current distributions',
                                        'Higher depreciation timing relative to cash',
                                        'Identical capital position and downside behavior as Core Income',
                                    ]}
                                    className="text-sm"
                                />
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
                                <ArrowList
                                    items={[
                                        'The DST is a legal wrapper, not a different investment',
                                        'Structure, leverage, and governance do not change',
                                        'DST availability does not alter asset risk or economics',
                                    ]}
                                    className="text-sm"
                                />
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