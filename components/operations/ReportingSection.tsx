import Reveal from '@/components/layout/Reveal'
import Checklist from '@/components/ui/Checklist'
import SectionHeading from '@/components/ui/SectionHeading'

export default function ReportingSection() {
    return (
        <section>
            <div className="section-inner">
                <div className="grid gap-12 lg:grid-cols-2">

                    {/* Reporting Cadence */}
                    <Reveal>
                        <div className="text-center">
                            <SectionHeading line1="Reporting" line2="Cadence" align="center" size="lg" className="mb-6" />
                            <p className="mb-8 text-slate-600 subtext">
                                Reporting formats are standardized across issuances.
                            </p>
                            <div className="border border-slate-200 bg-white p-8 text-left">
                                <Checklist
                                    items={[
                                        'Quarterly operating summaries',
                                        'Rent and occupancy updates',
                                        'Reserve balances',
                                        'Coverage metrics',
                                        'Distribution calculations',
                                        'Material event disclosures',
                                    ]}
                                />
                            </div>
                        </div>
                    </Reveal>

                    {/* Material Event Handling */}
                    <Reveal delay={200}>
                        <div className="text-center">
                            <SectionHeading line1="Material Event" line2="Handling" align="center" size="lg" className="mb-6" />
                            <p className="mb-8 text-slate-600 subtext">
                                Material events do not permit structural changes.
                            </p>
                            <div className="border border-slate-200 bg-white p-8 text-left">
                                <Checklist
                                    items={[
                                        'The event is documented',
                                        'Relevant parties are notified',
                                        'Escalation follows predefined procedures',
                                    ]}
                                />
                            </div>
                        </div>
                    </Reveal>

                </div>
            </div>
        </section>
    )
}