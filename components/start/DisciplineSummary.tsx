import Reveal from '@/components/layout/Reveal'
import ArrowList from '@/components/ui/ArrowList'
import SectionHeading from '@/components/ui/SectionHeading'

export default function DisciplineSummary() {
    return (
        <section>
            <div className="section-inner">
                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Existing Capital Discipline Section */}
                    <Reveal>
                        <div>
                            <SectionHeading line1="Capital" line2="Discipline" size="md" className="mb-6" />
                            <div className="rounded-2xl border border-slate-200 bg-white p-8">
                                <p className="mb-4 font-medium text-slate-900 subtext">Sylvan investments occupy a fixed position:</p>
                                <ArrowList
                                    items={[
                                        'Below senior bank debt',
                                        'Above sponsor equity',
                                    ]}
                                    className="text-slate-600"
                                />
                                <p className="mt-6 text-sm text-slate-500 italic subtext">
                                    Leverage limits, payment priority, and reserve rules are defined at issuance and cannot change.
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    {/* Existing Income Mechanics Section */}
                    <Reveal delay={200}>
                        <div>
                            <SectionHeading line1="Income" line2="Mechanics" size="md" className="mb-6" />
                            <div className="rounded-2xl border border-slate-200 bg-white p-8">
                                <p className="mb-4 font-medium text-slate-900 subtext">Non-discretionary waterfall:</p>
                                <ol className="list-decimal list-inside space-y-2 text-slate-600">
                                    <li>Gross rent collected</li>
                                    <li>Operating expenses</li>
                                    <li>Reserves (Operating & Debt)</li>
                                    <li>Senior debt service</li>
                                    <li className="font-semibold text-blue-600">Net distributable cash</li>
                                </ol>
                                <p className="mt-6 text-lg font-bold text-slate-900 subtext">
                                    Distributions adjust. Leverage does not.
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* --- NEW SECTION: Portfolio Role (Page 3) --- */}
                <Reveal delay={300}>
                    <div className="mt-16 rounded-2xl border border-blue-100 bg-blue-50 p-8 text-center">
                        <SectionHeading line1="Portfolio" line2="Role" align="center" size="md" className="mb-4" />
                        <p className="mx-auto max-w-3xl text-base text-blue-800/80 subtext">
                            Sylvan is designed as a private real asset income allocation that complements <span className="font-semibold text-blue-900">bonds</span>, <span className="font-semibold text-blue-900">REITs</span>, and <span className="font-semibold text-blue-900">traditional private credit</span>. It is not designed for trading, liquidity management, or opportunistic growth.
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}