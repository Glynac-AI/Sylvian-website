import Reveal from '@/components/layout/Reveal'

export default function RolesGrid() {
    return (
        <section className="bg-white px-6 py-24">
            <div className="mx-auto max-w-[1280px]">
                <Reveal>
                    <div className="mb-16 grid gap-8 lg:grid-cols-3">
                        {[
                            {
                                role: 'CIO / Investment',
                                focus: [
                                    'Structure approval framework',
                                    'Asset-level review criteria',
                                    'Portfolio controls',
                                ],
                            },
                            {
                                role: 'CCO / Compliance',
                                focus: [
                                    'Documentation standards',
                                    'Material event handling',
                                    'Examination narratives',
                                ],
                            },
                            {
                                role: 'Advisors',
                                focus: [
                                    'Approved explanation language',
                                    'Portfolio role framing',
                                    'Client suitability boundaries',
                                ],
                            },
                        ].map((card) => (
                            <div key={card.role} className="rounded-2xl border border-slate-200 p-8 shadow-sm">
                                <h3 className="mb-6 text-xl font-bold text-slate-900">{card.role}</h3>
                                <ul className="space-y-3 text-slate-600">
                                    {card.focus.map((item) => (
                                        <li key={item} className="flex gap-3">
                                            <span className="text-blue-600">→</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </Reveal>

                <Reveal delay={200}>
                    <div className="rounded-2xl bg-blue-50 p-10 text-center">
                        <h2 className="mb-6 text-2xl font-bold text-slate-900">Language Consistency</h2>
                        <div className="mx-auto max-w-3xl space-y-4 text-slate-700">
                            <p>Sylvan Learning emphasizes plain-English explanations and avoidance of performance language.</p>
                            <p className="font-semibold text-blue-800">
                                The objective is consistency — not persuasion.
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}