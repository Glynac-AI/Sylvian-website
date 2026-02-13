import Reveal from '@/components/layout/Reveal'
import ArrowList from '@/components/ui/ArrowList'

export default function ComplianceControls() {
    return (
        <section>
            <div className="section-inner">
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
                    ].map((card, i) => (
                        <Reveal key={card.title} delay={i * 100}>
                            <div className="h-full rounded-2xl border border-slate-200 bg-white p-8">
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