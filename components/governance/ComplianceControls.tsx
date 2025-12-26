import Reveal from '@/components/layout/Reveal'

export default function ComplianceControls() {
    return (
        <section className="bg-slate-50 px-6 py-24">
            <div className="mx-auto max-w-[1280px]">
                <div className="grid gap-8 lg:grid-cols-3">
                    {[
                        {
                            title: 'Materials Control',
                            items: [
                                'Standardized offering documentation',
                                'Version-controlled materials',
                                'Access and usage logs',
                                'Approval timestamps',
                            ],
                        },
                        {
                            title: 'Material Change Triggers',
                            items: [
                                'Major tenant default',
                                'Reserve draws beyond thresholds',
                                'Covenant breaches',
                                'Material operating deterioration',
                            ],
                        },
                        {
                            title: 'What Sylvan Prevents',
                            items: [
                                'Silent leverage increases',
                                'Asset substitutions',
                                'Discretionary rule changes',
                                'Undocumented amendments',
                            ],
                        },
                    ].map((card, i) => (
                        <Reveal key={card.title} delay={i * 100}>
                            <div className="h-full rounded-2xl border border-slate-200 bg-white p-8">
                                <h3 className="mb-6 text-xl font-bold text-slate-900">{card.title}</h3>
                                <ul className="space-y-3 text-slate-600">
                                    {card.items.map((item) => (
                                        <li key={item} className="flex gap-3">
                                            <span className="text-blue-600">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}