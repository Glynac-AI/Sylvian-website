import Reveal from '@/components/layout/Reveal'
import ArrowList from '@/components/ui/ArrowList'
import BannerQuote from '@/components/ui/BannerQuote'
import SectionHeading from '@/components/ui/SectionHeading'

export default function CoreSection() {
    return (
        <section id="core-income" className="scroll-mt-20">
            <div className="section-inner">
                {/* Section Header */}
                <Reveal>
                    <div className="mb-12 border-l-4 border-[#C6A64A] pl-6">
                        <div className="mb-2 text-sm font-bold uppercase tracking-wider text-[#C6A64A]">Sample A</div>
                        <SectionHeading line1="Core" line2="Income" size="lg" className="mb-2" />
                        <p className="text-base text-slate-600 md:text-lg subtext">
                            Prioritizes current cash flow. Income reflects actual rent collected.
                        </p>
                    </div>
                </Reveal>

                {/* Details Grid */}
                <div className="grid gap-8 lg:grid-cols-2">
                    {/* 1) Overview */}
                    <Reveal delay={100}>
                        <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                            <h3 className="mb-6 text-lg font-bold uppercase tracking-wide text-slate-400">1) Overview</h3>
                            <ul className="space-y-4 text-slate-700">
                                <li className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500">Property Type</span>
                                    <span className="font-medium">Industrial Logistics</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500">Geography</span>
                                    <span className="font-medium">Midwest / Southeast</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500">Issuance Size</span>
                                    <span className="font-medium">$48,000,000</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500">Target Duration</span>
                                    <span className="font-medium">5-7 Years</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500">Wrapper</span>
                                    <span className="font-medium">Direct issuance (no DST)</span>
                                </li>
                            </ul>
                        </div>
                    </Reveal>

                    {/* 2) Rent History */}
                    <Reveal delay={150}>
                        <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                            <h3 className="mb-6 text-lg font-bold uppercase tracking-wide text-slate-400">2) Rent History</h3>
                            <ul className="space-y-4 text-slate-700">
                                <li className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500">Operating History</span>
                                    <span className="font-medium">30 months</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500">Average Occupancy</span>
                                    <span className="font-medium">96%</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500">Lease Rollover (24 mo)</span>
                                    <span className="font-medium">~17%</span>
                                </li>
                            </ul>
                            <p className="mt-4 text-sm italic text-slate-500">
                                Income is based on observed rent collections, not pro forma assumptions.
                            </p>
                        </div>
                    </Reveal>

                    {/* 3) Capital Stack */}
                    <Reveal delay={200}>
                        <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                            <h3 className="mb-6 text-lg font-bold uppercase tracking-wide text-slate-400">3) Capital Stack (Fixed)</h3>
                            <ul className="space-y-4 text-slate-700">
                                <li className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500">Senior Bank Debt</span>
                                    <span className="font-medium">60% LTV</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500">Sylvan Capital</span>
                                    <span className="font-medium">~12%</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500">Sponsor Equity</span>
                                    <span className="font-medium text-blue-600">~28% (First-loss)</span>
                                </li>
                            </ul>
                            <div className="mt-6 flex flex-wrap gap-2">
                                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">No Mezzanine</span>
                                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">No Incremental Borrowing</span>
                            </div>
                        </div>
                    </Reveal>

                    {/* 4) Coverage & Reserves */}
                    <Reveal delay={250}>
                        <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                            <h3 className="mb-6 text-lg font-bold uppercase tracking-wide text-slate-400">4) Coverage & Reserves</h3>
                            <ul className="space-y-4 text-slate-700">
                                <li className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500">In-place DSCR</span>
                                    <span className="font-medium">1.58x</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500">Stress DSCR (-10% rent)</span>
                                    <span className="font-medium">1.34x</span>
                                </li>
                            </ul>
                            <div className="mt-4 pt-4 border-t border-slate-100">
                                <p className="mb-2 text-sm font-semibold text-slate-900">Reserves at Closing:</p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="rounded bg-slate-50 p-3">
                                        <div className="text-xs text-slate-500">Operating</div>
                                        <div className="font-medium text-slate-900">~6 months</div>
                                    </div>
                                    <div className="rounded bg-slate-50 p-3">
                                        <div className="text-xs text-slate-500">Debt Service</div>
                                        <div className="font-medium text-slate-900">~9 months</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* 5) Distributions */}
                    <Reveal delay={300}>
                        <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                            <h3 className="mb-6 text-lg font-bold uppercase tracking-wide text-slate-400">5) Distributions</h3>
                            <p className="mb-6 text-slate-600">
                                Distributions reflect actual operating performance. No smoothing or targeting.
                            </p>
                            <div className="rounded-xl bg-blue-50 p-6 text-center">
                                <span className="block text-sm font-semibold uppercase tracking-wider text-blue-800/70">Illustrative Range</span>
                                <span className="mt-1 block text-4xl font-bold text-blue-600">~6.5 - 7.0%</span>
                            </div>
                            <p className="mt-4 text-center text-xs text-slate-400">
                                *Illustrative only. Not a guarantee.
                            </p>
                        </div>
                    </Reveal>

                    {/* 6 & 7) Exit & Governance */}
                    <Reveal delay={350}>
                        <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                            <h3 className="mb-6 text-lg font-bold uppercase tracking-wide text-slate-400">6) Duration & Governance</h3>
                            <ArrowList
                                items={[
                                    'Exit via asset sale or refinance under predefined terms.',
                                    'Exit timing may be extended to preserve income.',
                                    'Structure approved once; leverage and priority fixed.',
                                ]}
                                className="text-sm text-slate-700"
                            />
                            <div className="mt-6">
                                <BannerQuote backgroundClassName="bg-slate-50" className="text-xs">
                                    If this offering required special rules, it would not qualify for Sylvan.
                                </BannerQuote>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}