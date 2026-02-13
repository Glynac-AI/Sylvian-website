import Reveal from '@/components/layout/Reveal'
import ArrowList from '@/components/ui/ArrowList'
import Checklist from '@/components/ui/Checklist'
import SectionHeading from '@/components/ui/SectionHeading'

export default function DefinitionSection() {
    return (
        <section>
            <div className="section-inner">
                <Reveal>
                    <SectionHeading line1="What Sylvan Is" line2="and Is Not" align="center" size="lg" className="mb-12" />
                </Reveal>
                <div className="grid gap-8 lg:grid-cols-2">
                    <Reveal delay={100}>
                        <div className="rounded-2xl border border-slate-200 bg-white p-8">
                            <SectionHeading line1="Sylvan" line2="Is" size="md" className="mb-6" as="h3" />
                            <Checklist
                                items={[
                                    'A standardized investment structure',
                                    'A review and documentation workflow',
                                    'A platform for governance and audit readiness',
                                ]}
                            />
                        </div>
                    </Reveal>

                    <Reveal delay={200}>
                        <div className="rounded-2xl border border-slate-200 bg-white p-8">
                            <SectionHeading line1="Sylvan" line2="Is Not" size="md" className="mb-6" as="h3" />
                            <ArrowList
                                items={[
                                    'An issuer of securities',
                                    'An investment adviser',
                                    'A broker-dealer',
                                    'A custodian of client assets',
                                    'A commingled fund',
                                    'A discretionary strategy',
                                ]}
                                className="text-slate-700"
                            />
                        </div>
                    </Reveal>
                </div>
                <Reveal delay={300}>
                    <div className="mt-12 text-center text-slate-600 subtext">
                        Sylvan is not an issuer, investment adviser, broker-dealer, or custodian; it provides standardized structure, workflow, and audit-ready documentation.
                    </div>
                </Reveal>
            </div>
        </section>
    )
}