import Reveal from '@/components/layout/Reveal'

export default function DisciplineSummary() {
    return (
        <section className="bg-slate-50 px-6 py-24">
            <div className="mx-auto max-w-[1280px]">
                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Existing Capital Discipline Section */}
                    <Reveal>
                        <div>
                            <h3 className="mb-6 text-2xl font-bold text-slate-900">Capital Discipline</h3>
                            <div className="rounded-2xl border border-slate-200 bg-white p-8">
                                <p className="mb-4 font-medium text-slate-900">Sylvan investments occupy a fixed position:</p>
                                <ul className="space-y-3 text-slate-600">
                                    <li className="flex items-center gap-3">
                                        <span className="h-2 w-2 rounded-full bg-slate-400" />
                                        Below senior bank debt
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="h-2 w-2 rounded-full bg-blue-600" />
                                        Above sponsor equity
                                    </li>
                                </ul>
                                <p className="mt-6 text-sm text-slate-500 italic">
                                    Leverage limits, payment priority, and reserve rules are defined at issuance and cannot change.
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    {/* Existing Income Mechanics Section */}
                    <Reveal delay={200}>
                        <div>
                            <h3 className="mb-6 text-2xl font-bold text-slate-900">Income Mechanics</h3>
                            <div className="rounded-2xl border border-slate-200 bg-white p-8">
                                <p className="mb-4 font-medium text-slate-900">Non-discretionary waterfall:</p>
                                <ol className="list-decimal list-inside space-y-2 text-slate-600">
                                    <li>Gross rent collected</li>
                                    <li>Operating expenses</li>
                                    <li>Reserves (Operating & Debt)</li>
                                    <li>Senior debt service</li>
                                    <li className="font-semibold text-blue-600">Net distributable cash</li>
                                </ol>
                                <p className="mt-6 text-lg font-bold text-slate-900">
                                    Distributions adjust. Leverage does not.
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* --- NEW SECTION: Portfolio Role (Page 3) --- */}
                <Reveal delay={300}>
                    <div className="mt-16 rounded-2xl border border-blue-100 bg-blue-50 p-8 text-center">
                        <h3 className="mb-4 text-xl font-bold text-blue-900">Portfolio Role</h3>
                        <p className="mx-auto max-w-3xl text-lg text-blue-800/80">
                            Sylvan is designed as a private real asset income allocation that complements <span className="font-semibold text-blue-900">bonds</span>, <span className="font-semibold text-blue-900">REITs</span>, and <span className="font-semibold text-blue-900">traditional private credit</span>. It is not designed for trading, liquidity management, or opportunistic growth.
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}