import Reveal from '@/components/layout/Reveal'

export default function CIOFramework() {
    return (
        <section className="bg-white px-6 py-24">
            <div className="mx-auto max-w-[1280px]">
                <Reveal>
                    <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
                        CIO Governance Framework
                    </h2>
                </Reveal>
                <div className="grid gap-8 lg:grid-cols-2">
                    <Reveal delay={100}>
                        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
                            <div className="mb-4 text-sm font-bold uppercase tracking-wider text-blue-600">
                                Firm Level
                            </div>
                            <h3 className="mb-6 text-2xl font-bold text-blue-900">One-Time Structure Approval</h3>
                            <ul className="space-y-3 text-slate-700">
                                {[
                                    'Capital position within the stack',
                                    'Maximum leverage limits',
                                    'Cash-flow priority and reserve rules',
                                    'Enforcement and amendment restrictions',
                                    'Reporting standards',
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="font-bold text-blue-600">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-6 text-sm italic text-blue-800">
                                Once approved, this structure cannot be modified at the issuance level.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={200}>
                        <div className="rounded-2xl border border-slate-200 bg-white p-8">
                            <div className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-500">
                                Asset Level
                            </div>
                            <h3 className="mb-6 text-2xl font-bold text-slate-900">Per-Issuance Review</h3>
                            <ul className="space-y-3 text-slate-700">
                                {[
                                    'Property type and geography',
                                    'Rent history and lease rollover profile',
                                    'Loan-to-value and coverage metrics',
                                    'Reserve levels',
                                    'Duration and exit assumptions',
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="font-bold text-slate-400">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-6 text-sm italic text-slate-500">
                                Issuances cannot alter leverage limits or payment priority.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}