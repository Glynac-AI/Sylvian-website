import Reveal from '@/components/layout/Reveal'

export default function DSTDetailedInfo() {
    return (
        <section className="bg-white px-6 py-24">
            <div className="mx-auto max-w-[1280px] space-y-24">
                
                {/* 1. Context & Why */}
                <div className="grid gap-12 lg:grid-cols-2">
                    <Reveal>
                        <div>
                            <h2 className="mb-6 text-2xl font-bold text-slate-900">What a DST Is (Context Only)</h2>
                            <p className="mb-4 text-slate-600">
                                A Delaware Statutory Trust is a legal entity commonly used to hold real estate for investors seeking potential 1031 exchange treatment.
                            </p>
                            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                                <ul className="space-y-3 text-sm text-slate-700">
                                    <li className="flex gap-2"><span className="text-blue-600">•</span> Can hold title to real estate</li>
                                    <li className="flex gap-2"><span className="text-blue-600">•</span> Allow multiple investors to participate</li>
                                    <li className="flex gap-2"><span className="text-blue-600">•</span> May be compatible with certain tax-deferred exchanges</li>
                                </ul>
                                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                                    Reminder: Sylvan does not provide tax advice.
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={200}>
                        <div>
                            <h2 className="mb-6 text-2xl font-bold text-slate-900">Why DST Exists in Sylvan</h2>
                            <ul className="mb-6 space-y-3 text-slate-600">
                                <li className="flex gap-2"><span className="text-blue-600">✓</span> Accommodate investor tax constraints</li>
                                <li className="flex gap-2"><span className="text-blue-600">✓</span> Preserve continuity of structure</li>
                                <li className="flex gap-2"><span className="text-blue-600">✓</span> Avoid creating a separate product category</li>
                            </ul>
                            <div className="rounded-xl border border-blue-100 bg-blue-50 p-6">
                                <h4 className="mb-3 font-bold text-blue-900">DST availability does not:</h4>
                                <ul className="space-y-2 text-sm text-slate-700">
                                    <li className="flex gap-2"><span>•</span> Change leverage limits</li>
                                    <li className="flex gap-2"><span>•</span> Alter capital priority</li>
                                    <li className="flex gap-2"><span>•</span> Modify governance or enforcement</li>
                                    <li className="flex gap-2"><span>•</span> Introduce liquidity</li>
                                </ul>
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* 2. Governance & Liquidity */}
                <div className="grid gap-12 lg:grid-cols-2">
                    <Reveal>
                        <div className="h-full rounded-2xl border border-slate-200 p-8">
                            <h2 className="mb-6 text-2xl font-bold text-slate-900">Governance Under a DST</h2>
                            <p className="mb-4 text-slate-600">DST-based Sylvan offerings follow:</p>
                            <ul className="mb-8 space-y-3 text-slate-700">
                                <li className="flex gap-2"><span className="font-bold text-slate-400">→</span> The same structure approval process</li>
                                <li className="flex gap-2"><span className="font-bold text-slate-400">→</span> The same asset-level review</li>
                                <li className="flex gap-2"><span className="font-bold text-slate-400">→</span> The same material event definitions</li>
                                <li className="flex gap-2"><span className="font-bold text-slate-400">→</span> The same reporting cadence</li>
                            </ul>
                            <div className="mt-auto rounded-lg bg-slate-50 p-4 font-semibold text-slate-900 text-center">
                                Governance discipline is identical.
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={200}>
                        <div className="h-full rounded-2xl border border-slate-200 p-8">
                            <h2 className="mb-6 text-2xl font-bold text-slate-900">Liquidity & Duration</h2>
                            <p className="mb-4 font-semibold text-slate-900">DST participation does not provide liquidity.</p>
                            <ul className="mb-8 space-y-3 text-slate-700">
                                <li className="flex gap-2"><span className="font-bold text-red-400">✗</span> Offerings are closed-end</li>
                                <li className="flex gap-2"><span className="font-bold text-red-400">✗</span> No redemption feature</li>
                                <li className="flex gap-2"><span className="font-bold text-slate-400">→</span> Investors should expect to hold through duration</li>
                                <li className="flex gap-2"><span className="font-bold text-slate-400">→</span> Exit occurs via sale or refinance</li>
                            </ul>
                            <div className="mt-auto rounded-lg bg-slate-50 p-4 text-sm text-slate-600 text-center">
                                The DST is the wrapper. It does not change the closed-end nature of the offering.
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* 3. Suitability */}
                <Reveal>
                    <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
                        <div className="grid lg:grid-cols-2">
                            <div className="bg-slate-50 p-8 border-b lg:border-b-0 lg:border-r border-slate-200">
                                <h3 className="mb-6 text-lg font-bold text-slate-900">DST access may be appropriate for:</h3>
                                <ul className="space-y-3 text-slate-700">
                                    <li className="flex gap-2"><span className="text-green-600">✓</span> Investors completing a 1031 exchange</li>
                                    <li className="flex gap-2"><span className="text-green-600">✓</span> Investors with long-term capital commitments</li>
                                    <li className="flex gap-2"><span className="text-green-600">✓</span> Investors advised by qualified tax professionals</li>
                                </ul>
                            </div>
                            <div className="p-8">
                                <h3 className="mb-6 text-lg font-bold text-slate-900">DST access is NOT appropriate for:</h3>
                                <ul className="space-y-3 text-slate-700">
                                    <li className="flex gap-2"><span className="text-red-500">✗</span> Investors seeking liquidity</li>
                                    <li className="flex gap-2"><span className="text-red-500">✗</span> Investors seeking tax advice from the platform</li>
                                    <li className="flex gap-2"><span className="text-red-500">✗</span> Investors expecting risk mitigation from the wrapper</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Reveal>

            </div>
        </section>
    )
}