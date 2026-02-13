import Reveal from '@/components/layout/Reveal'
import ArrowList from '@/components/ui/ArrowList'

export default function ResourcesGrid() {
    return (
        <section>
            <div className="section-inner">
                <div className="grid gap-6 lg:grid-cols-3">
                    {[
                        {
                            title: 'Investment Committee',
                            items: [
                                'Structure overview summaries',
                                'Asset review templates',
                                'Issuance comparison frameworks',
                                'Downside behavior walkthroughs',
                            ],
                        },
                        {
                            title: 'Compliance & Governance',
                            items: [
                                'Standardized doc templates',
                                'Version-controlled materials',
                                'Defined material event categories',
                                'Audit-ready recordkeeping',
                            ],
                        },
                        {
                            title: 'Advisor Enablement',
                            items: [
                                'Approved explanation language',
                                'Client discussion guides',
                                'Suitability framing',
                                'Portfolio positioning context',
                            ],
                        },
                    ].map((card, i) => (
                        <Reveal key={card.title} delay={i * 100}>
                            <div className="h-full rounded-2xl border border-slate-200 p-8">
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