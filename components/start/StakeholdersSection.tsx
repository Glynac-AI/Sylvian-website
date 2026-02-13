import Reveal from '@/components/layout/Reveal'
import ArrowList from '@/components/ui/ArrowList'
import SectionHeading from '@/components/ui/SectionHeading'

export default function StakeholdersSection() {
    return (
        <section>
            <div className="section-inner">
                <Reveal>
                    <SectionHeading line1="Who Sylvan" line2="Is Built For" align="center" size="lg" className="mb-12" />
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
                                <ArrowList items={card.items} className="text-slate-600" />
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}