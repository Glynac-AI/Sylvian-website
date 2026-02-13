import Reveal from '@/components/layout/Reveal'
import ArrowList from '@/components/ui/ArrowList'
import SectionHeading from '@/components/ui/SectionHeading'

export default function LifecycleSection() {
    return (
        <section>
            <div className="section-inner space-y-16">
                
                {/* What Changes vs Not */}
                <Reveal>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
                        <SectionHeading line1="What Never Changes" line2="vs. What Can Change" align="center" size="md" className="mb-8" />
                        <div className="grid gap-8 lg:grid-cols-2">
                            <div className="bg-white p-6 rounded-xl border border-slate-200">
                                <h3 className="mb-4 text-lg font-bold text-blue-800">Never Changes</h3>
                                <ArrowList
                                    items={[
                                        'Legal structure',
                                        'Capital priority',
                                        'Leverage limits',
                                        'Cash-flow and reserve rules',
                                        'Governance and reporting standards',
                                    ]}
                                    className="text-slate-700"
                                />
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-slate-200">
                                <h3 className="mb-4 text-lg font-bold text-slate-800">Can Change</h3>
                                <ArrowList
                                    items={['Occupancy', 'Tenant performance', 'Operating expenses', 'Resulting distributions']}
                                    className="text-slate-700"
                                />
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* Lifecycle Overview */}
                <Reveal delay={200}>
                    <div className="text-center">
                        <SectionHeading line1="Lifecycle" line2="Overview" align="center" size="md" className="mb-6" />
                        <div className="inline-flex flex-wrap justify-center gap-4 text-lg font-medium text-slate-700">
                            <span>Approve structure</span>
                            <span className="text-blue-400">→</span>
                            <span>Review issuance</span>
                            <span className="text-blue-400">→</span>
                            <span>Allocate</span>
                            <span className="text-blue-400">→</span>
                            <span>Monitor</span>
                            <span className="text-blue-400">→</span>
                            <span>Exit</span>
                        </div>
                        <p className="mt-6 text-slate-600 subtext">
                            This lifecycle repeats over time without re-approving the framework.
                        </p>
                    </div>
                </Reveal>

            </div>
        </section>
    )
}