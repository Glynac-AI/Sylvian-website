import Reveal from '@/components/layout/Reveal'
import ArrowList from '@/components/ui/ArrowList'
import Checklist from '@/components/ui/Checklist'
import SectionHeading from '@/components/ui/SectionHeading'

export default function CustomizationBoundaries() {
    return (
        <section>
            <div className="section-inner">
                <Reveal>
                    <SectionHeading line1="Customization" line2="Boundaries" align="center" size="lg" className="mb-12" />
                </Reveal>
                <div className="grid gap-8 lg:grid-cols-2">
                    <Reveal delay={100}>
                        <div className="rounded-2xl border border-slate-200 bg-white p-8">
                            <SectionHeading line1="Firms May" line2="Customize" size="md" className="mb-6" as="h3" />
                            <Checklist
                                items={['Internal review processes', 'Portfolio limits', 'Client communication workflows']}
                            />
                        </div>
                    </Reveal>
                    <Reveal delay={200}>
                        <div className="rounded-2xl border border-slate-200 bg-white p-8">
                            <SectionHeading line1="Firms May Not" line2="Customize" size="md" className="mb-6" as="h3" />
                            <ArrowList
                                items={['Leverage limits', 'Capital priority', 'Cash-flow rules', 'Governance constraints']}
                                className="text-slate-700"
                            />
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}