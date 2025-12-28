import Reveal from '@/components/layout/Reveal'

export default function DownsideMechanics() {
    return (
        <section className="bg-white px-6 py-24">
            <div className="mx-auto max-w-[1280px]">
                <div className="grid gap-8 lg:grid-cols-2">
                    <Reveal>
                        <div className="rounded-2xl border border-slate-200 p-8">
                            <h3 className="mb-6 text-2xl font-bold text-slate-900">Observed Income Principle</h3>
                            <p className="mb-4 text-slate-600">Sylvan income is based on:</p>
                            <ul className="mb-6 space-y-2 text-slate-700">
                                <li>• Rent actually collected</li>
                                <li>• Expenses actually incurred</li>
                                <li>• Debt service actually paid</li>
                            </ul>
                            <div className="rounded-lg bg-slate-50 p-4 text-slate-700">
                                <strong>There are:</strong> no pro forma assumptions, no return targets, no smoothing mechanisms.
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={200}>
                        <div className="rounded-2xl border border-slate-200 p-8">
                            <h3 className="mb-6 text-2xl font-bold text-slate-900">Downside Sequence</h3>
                            <ol className="space-y-3">
                                {[
                                    'Operating performance weakens',
                                    'Reserves are used to absorb shortfalls',
                                    'Distributions may be reduced or suspended',
                                    'Leverage remains unchanged',
                                    'Governance and reporting continue',
                                    'Exit timing may be adjusted to preserve income',
                                ].map((step, i) => (
                                    <li key={step} className="flex gap-3 text-slate-700">
                                        <span className="font-bold text-slate-400">{i + 1}.</span>
                                        {step}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}