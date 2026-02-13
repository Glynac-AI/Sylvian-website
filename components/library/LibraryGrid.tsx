import Reveal from '@/components/layout/Reveal'
import ArrowList from '@/components/ui/ArrowList'

export default function LibraryGrid() {
    return (
        <section>
            <div className="section-inner grid gap-8 lg:grid-cols-2">
                {[
                    {
                        category: 'Structural References',
                        items: [
                            'Sylvan structure overviews',
                            'Capital stack diagrams',
                            'Cash-flow waterfall explanations',
                            'Reserve and leverage rule summaries',
                        ],
                    },
                    {
                        category: 'Governance & Compliance',
                        items: [
                            'CIO approval frameworks',
                            'CCO examination narratives',
                            'Material event definitions',
                            'Documentation standards',
                        ],
                    },
                    {
                        category: 'Sample Documentation',
                        items: [
                            'Sample offering summaries',
                            'Sample supplements',
                            'Reporting examples',
                            'Illustrative only (not solicitations)',
                        ],
                    },
                    {
                        category: 'Usage Controls',
                        items: [
                            'Use of current, approved versions',
                            'Avoidance of outdated references',
                            'Traceability of material usage',
                            'Superseded materials are archived',
                        ],
                    },
                ].map((section, i) => (
                    <Reveal key={section.category} delay={i * 100}>
                        <div className="rounded-2xl border border-slate-200 p-8">
                            <h3 className="mb-6 text-xl font-bold text-slate-900">{section.category}</h3>
                            <ArrowList items={section.items} className="text-slate-600" />
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    )
}