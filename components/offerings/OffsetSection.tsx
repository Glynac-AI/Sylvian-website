import Reveal from '@/components/layout/Reveal'
import ArrowList from '@/components/ui/ArrowList'
import SectionHeading from '@/components/ui/SectionHeading'

export default function OffsetSection() {
    return (
        <section id="offset-income" className="scroll-mt-20">
            <div className="section-inner">
                {/* Section Header */}
                <Reveal>
                    <div className="mb-12 border-l-4 border-[#C6A64A] pl-6">
                        <div className="mb-2 text-sm font-bold uppercase tracking-wider text-[#C6A64A]">Sample B</div>
                        <SectionHeading line1="Offset" line2="Income" size="lg" className="mb-2" />
                        <p className="text-base text-slate-600 md:text-lg subtext">
                            Lower current cash, higher depreciation timing relative to cash.
                        </p>
                    </div>
                </Reveal>

                {/* Details Grid */}
                <div className="grid gap-8 lg:grid-cols-2">
                    {/* 1) Overview */}
                    <Reveal delay={100}>
                        <div className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                            <h3 className="mb-6 text-lg font-bold uppercase tracking-wide text-slate-500">1) Overview</h3>
                            <ul className="space-y-4 text-slate-700">
                                <li className="flex justify-between border-b border-slate-200 pb-2">
                                    <span className="text-slate-500">Property Type</span>
                                    <span className="font-medium">Net-lease Retail & Industrial</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-200 pb-2">
                                    <span className="text-slate-500">Geography</span>
                                    <span className="font-medium">Midwest / Texas</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-200 pb-2">
                                    <span className="text-slate-500">Issuance Size</span>
                                    <span className="font-medium">$32,500,000</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-200 pb-2">
                                    <span className="text-slate-500">Target Duration</span>
                                    <span className="font-medium">5-7 Years</span>
                                </li>
                            </ul>
                        </div>
                    </Reveal>

                    {/* 2) Rent History */}
                    <Reveal delay={150}>
                        <div className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                            <h3 className="mb-6 text-lg font-bold uppercase tracking-wide text-slate-500">2) Rent History</h3>
                            <ul className="space-y-4 text-slate-700">
                                <li className="flex justify-between border-b border-slate-200 pb-2">
                                    <span className="text-slate-500">Operating History</span>
                                    <span className="font-medium">36 months</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-200 pb-2">
                                    <span className="text-slate-500">Average Occupancy</span>
                                    <span className="font-medium">98%</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-200 pb-2">
                                    <span className="text-slate-500">Lease Rollover (24 mo)</span>
                                    <span className="font-medium">~13%</span>
                                </li>
                            </ul>
                            <p className="mt-4 text-sm italic text-slate-500">
                                Income is based on observed rent collections, not projections.
                            </p>
                        </div>
                    </Reveal>

                    {/* 3) Capital Stack */}
                    <Reveal delay={200}>
                        <div className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                            <h3 className="mb-6 text-lg font-bold uppercase tracking-wide text-slate-500">3) Capital Stack (Fixed)</h3>
                            <ul className="space-y-4 text-slate-700">
                                <li className="flex justify-between border-b border-slate-200 pb-2">
                                    <span className="text-slate-500">Senior Bank Debt</span>
                                    <span className="font-medium">65% LTV</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-200 pb-2">
                                    <span className="text-slate-500">Sylvan Capital</span>
                                    <span className="font-medium">~10-12%</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-200 pb-2">
                                    <span className="text-slate-500">Sponsor Equity</span>
                                    <span className="font-medium text-slate-900">~23-25% (First-loss)</span>
                                </li>
                            </ul>
                        </div>
                    </Reveal>

                    {/* 4) Coverage & Reserves */}
                    <Reveal delay={250}>
                        <div className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                            <h3 className="mb-6 text-lg font-bold uppercase tracking-wide text-slate-500">4) Coverage & Reserves</h3>
                            <ul className="space-y-4 text-slate-700">
                                <li className="flex justify-between border-b border-slate-200 pb-2">
                                    <span className="text-slate-500">In-place DSCR</span>
                                    <span className="font-medium">1.46x</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-200 pb-2">
                                    <span className="text-slate-500">Stress DSCR (-10% rent)</span>
                                    <span className="font-medium">1.28x</span>
                                </li>
                            </ul>
                             <div className="mt-4 pt-4 border-t border-slate-200">
                                <p className="mb-2 text-sm font-semibold text-slate-900">Reserves at Closing:</p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="rounded bg-white p-3 border border-slate-200">
                                        <div className="text-xs text-slate-500">Operating</div>
                                        <div className="font-medium text-slate-900">~9 months</div>
                                    </div>
                                    <div className="rounded bg-white p-3 border border-slate-200">
                                        <div className="text-xs text-slate-500">Debt Service</div>
                                        <div className="font-medium text-slate-900">~12 months</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* 5) Distributions */}
                    <Reveal delay={300}>
                        <div className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                            <h3 className="mb-6 text-lg font-bold uppercase tracking-wide text-slate-500">5) Distributions</h3>
                            <p className="mb-6 text-slate-600">
                                Designed for investors who prefer depreciation timing over current cash flow.
                            </p>
                            <div className="rounded-xl bg-white border border-slate-200 p-6 text-center">
                                <span className="block text-sm font-semibold uppercase tracking-wider text-slate-500">Illustrative Range</span>
                                <span className="mt-1 block text-4xl font-bold text-slate-700">~4.5 - 5.0%</span>
                            </div>
                            <p className="mt-4 text-center text-xs text-slate-400">
                                *Illustrative only. Not a guarantee.
                            </p>
                        </div>
                    </Reveal>

                     {/* 6 & 7) Exit & Governance */}
                    <Reveal delay={350}>
                        <div className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                            <h3 className="mb-6 text-lg font-bold uppercase tracking-wide text-slate-500">6) Duration & Governance</h3>
                             <ArrowList
                                items={[
                                    'Identical structure and governance to all Sylvan offerings.',
                                    'Material events are predefined, logged, and escalated.',
                                    'Exit via asset sale or refinance under predefined terms.',
                                ]}
                                className="text-sm text-slate-700"
                            />
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}