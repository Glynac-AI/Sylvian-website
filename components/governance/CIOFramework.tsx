import Reveal from '@/components/layout/Reveal'
import ArrowList from '@/components/ui/ArrowList'
import SectionHeading from '@/components/ui/SectionHeading'

export default function CIOFramework() {
    return (
        <section>
            <div className="section-inner">
                <Reveal>
                    <SectionHeading line1="CIO Governance" line2="Framework" align="center" size="lg" className="mb-12" />
                </Reveal>
                <div className="grid gap-8 lg:grid-cols-2">
                    <Reveal delay={100}>
                        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
                            <div className="mb-4 text-sm font-bold uppercase tracking-wider text-blue-600">
                                Firm Level
                            </div>
                            <SectionHeading line1="One-Time" line2="Structure Approval" size="md" className="mb-6" as="h3" />
                            <ArrowList
                                items={[
                                    'Capital position within the stack',
                                    'Maximum leverage limits',
                                    'Cash-flow priority and reserve rules',
                                    'Enforcement and amendment restrictions',
                                    'Reporting standards',
                                ]}
                                className="text-slate-700"
                            />
                            <p className="mt-6 text-sm italic text-blue-800 subtext">
                                Once approved, this structure cannot be modified at the issuance level.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={200}>
                        <div className="rounded-2xl border border-slate-200 bg-white p-8">
                            <div className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-500">
                                Asset Level
                            </div>
                            <SectionHeading line1="Per-Issuance" line2="Review" size="md" className="mb-6" as="h3" />
                            <ArrowList
                                items={[
                                    'Property type and geography',
                                    'Rent history and lease rollover profile',
                                    'Loan-to-value and coverage metrics',
                                    'Reserve levels',
                                    'Duration and exit assumptions',
                                ]}
                                className="text-slate-700"
                            />
                            <p className="mt-6 text-sm italic text-slate-500 subtext">
                                Issuances cannot alter leverage limits or payment priority.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}