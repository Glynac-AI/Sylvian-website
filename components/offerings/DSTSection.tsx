import Reveal from '@/components/layout/Reveal'
import ArrowList from '@/components/ui/ArrowList'
import SectionHeading from '@/components/ui/SectionHeading'

export default function DSTSection() {
    return (
        <section id="dst-access" className="scroll-mt-20">
            <div className="section-inner">
                {/* Section Header */}
                <Reveal>
                    <div className="mb-12 border-l-4 border-[#C6A64A] pl-6">
                        <div className="mb-2 text-sm font-bold uppercase tracking-wider text-[#C6A64A]">Sample C</div>
                        <SectionHeading line1="DST" line2="Access" size="lg" className="mb-2" />
                        <p className="text-base text-slate-600 md:text-lg subtext">
                            Same structure. Different wrapper. 1031-compatible.
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
                                    <span className="text-slate-500">Wrapper</span>
                                    <span className="font-medium text-blue-600">Delaware Statutory Trust</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500">Property Type</span>
                                    <span className="font-medium">Industrial/Net-lease Portfolio</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500">Geography</span>
                                    <span className="font-medium">Southeast/Southwest</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500">Issuance Size</span>
                                    <span className="font-medium">$41,000,000</span>
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
                                    <span className="font-medium">28 months</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500">Average Occupancy</span>
                                    <span className="font-medium">97%</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500">Lease Rollover (24 mo)</span>
                                    <span className="font-medium">~15%</span>
                                </li>
                            </ul>
                            <p className="mt-4 text-sm italic text-slate-500">
                                Income is based on actual rent collections.
                            </p>
                        </div>
                    </Reveal>

                    {/* 3) Capital Stack */}
                    <Reveal delay={200}>
                        <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                            <h3 className="mb-6 text-lg font-bold uppercase tracking-wide text-slate-400">3) Capital Stack</h3>
                            <ul className="space-y-4 text-slate-700">
                                <li className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500">Senior Bank Debt</span>
                                    <span className="font-medium">~60% LTV</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500">Sylvan Capital</span>
                                    <span className="font-medium">~12-15%</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500">Sponsor Equity</span>
                                    <span className="font-medium text-blue-600">~25-28% (First-loss)</span>
                                </li>
                            </ul>
                        </div>
                    </Reveal>

                    {/* 4) Coverage & Reserves */}
                    <Reveal delay={250}>
                        <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                            <h3 className="mb-6 text-lg font-bold uppercase tracking-wide text-slate-400">4) Coverage & Reserves</h3>
                            <ul className="space-y-4 text-slate-700">
                                <li className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500">In-place DSCR</span>
                                    <span className="font-medium">1.52x</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500">Stress DSCR (-10% rent)</span>
                                    <span className="font-medium">1.30x</span>
                                </li>
                            </ul>
                            <div className="mt-4 pt-4 border-t border-slate-100">
                                <p className="mb-2 text-sm font-semibold text-slate-900">Reserves at Closing:</p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="rounded bg-slate-50 p-3">
                                        <div className="text-xs text-slate-500">Operating</div>
                                        <div className="font-medium text-slate-900">~6-9 months</div>
                                    </div>
                                    <div className="rounded bg-slate-50 p-3">
                                        <div className="text-xs text-slate-500">Debt Service</div>
                                        <div className="font-medium text-slate-900">~9-12 months</div>
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
                                DST wrapper does not change payment mechanics.
                            </p>
                            <div className="rounded-xl bg-blue-50 p-6 text-center">
                                <span className="block text-sm font-semibold uppercase tracking-wider text-blue-800/70">Illustrative Range</span>
                                <span className="mt-1 block text-4xl font-bold text-blue-600">~6.0 - 6.5%</span>
                            </div>
                            <p className="mt-4 text-center text-xs text-slate-400">
                                *Illustrative only. Not a guarantee.
                            </p>
                        </div>
                    </Reveal>

                    {/* 6 & 7) Exit & Governance */}
                    <Reveal delay={350}>
                        <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                            <h3 className="mb-6 text-lg font-bold uppercase tracking-wide text-slate-400">6) Governance Notes</h3>
                            <ArrowList
                                items={[
                                    'DST is a legal wrapper only; structure unchanged.',
                                    'All material events are predefined and documented.',
                                    'DST participation does not introduce liquidity.',
                                ]}
                                className="text-sm text-slate-700"
                            />
                             <div className="mt-6 rounded border border-slate-100 bg-slate-50 p-4 text-xs text-slate-500 italic">
                                Sylvan does not provide tax advice. DST suitability depends on the investor&apos;s advisors.
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}