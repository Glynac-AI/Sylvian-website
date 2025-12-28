import Reveal from '@/components/layout/Reveal'

export default function StakeholdersSection() {
    return (
        <section className="bg-white px-6 py-24">
            <div className="mx-auto max-w-[1280px]">
                <Reveal>
                    <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
                        Who Sylvan Is Built For
                    </h2>
                </Reveal>
                <div className="grid gap-6 lg:grid-cols-3">
                    {[
                        {
                            title: 'Chief Investment Officers',
                            items: [
                                'One-time approval of structure',
                                'Asset-level review thereafter',
                                'Clear downside behavior and enforcement rules',
                            ],
                        },
                        {
                            title: 'Chief Compliance Officers',
                            items: [
                                'Consistent instrument classification',
                                'Version-controlled materials',
                                'Exam-ready documentation and records',
                            ],
                        },
                        {
                            title: 'Advisors',
                            items: [
                                'Explainable income allocations',
                                'No performance promises',
                                'Clear client communication',
                            ],
                        },
                    ].map((card, i) => (
                        <Reveal key={card.title} delay={i * 100}>
                            <div className="h-full rounded-2xl border border-slate-200 p-8 transition-shadow hover:shadow-lg">
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