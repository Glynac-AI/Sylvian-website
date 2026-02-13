import Reveal from '@/components/layout/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Comparisons() {
    return (
        <section>
            <div className="section-inner">
                <Reveal>
                    <SectionHeading line1="Comparisons" line2="Overview" align="center" size="lg" className="mb-12" />
                </Reveal>

                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Vs Funds */}
                    <Reveal delay={100}>
                        <div className="bg-white p-8 rounded-2xl border border-slate-200">
                            <h3 className="mb-6 text-xl font-bold text-slate-900">vs. Private Funds</h3>
                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500">Asset Pool</span>
                                    <span className="font-medium text-slate-900">Fixed (Sylvan)</span>
                                </div>
                                <div className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500">Leverage</span>
                                    <span className="font-medium text-slate-900">Capped (Sylvan)</span>
                                </div>
                                <div className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500">Discretion</span>
                                    <span className="font-medium text-slate-900">None (Sylvan)</span>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Vs REITs */}
                    <Reveal delay={200}>
                        <div className="bg-white p-8 rounded-2xl border border-slate-200">
                            <h3 className="mb-6 text-xl font-bold text-slate-900">vs. REITs</h3>
                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500">Liquidity</span>
                                    <span className="font-medium text-slate-900">Closed-End (Sylvan)</span>
                                </div>
                                <div className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500">Pricing</span>
                                    <span className="font-medium text-slate-900">Asset-Based (Sylvan)</span>
                                </div>
                                <div className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500">Income</span>
                                    <span className="font-medium text-slate-900">Rent-Linked (Sylvan)</span>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Vs Private Credit */}
                    <Reveal delay={300}>
                        <div className="bg-white p-8 rounded-2xl border border-slate-200">
                            <h3 className="mb-6 text-xl font-bold text-slate-900">vs. Private Credit</h3>
                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500">Source</span>
                                    <span className="font-medium text-slate-900">Rent (Sylvan)</span>
                                </div>
                                <div className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500">Collateral</span>
                                    <span className="font-medium text-slate-900">Real Assets (Sylvan)</span>
                                </div>
                                <div className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500">Control</span>
                                    <span className="font-medium text-slate-900">Structural (Sylvan)</span>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}