import Reveal from '@/components/layout/Reveal'

export default function LifecycleSection() {
    return (
        <section className="bg-white px-6 py-24">
            <div className="mx-auto max-w-[1280px] space-y-16">
                
                {/* What Changes vs Not */}
                <Reveal>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
                        <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">
                            What Never Changes vs. What Can Change
                        </h2>
                        <div className="grid gap-8 lg:grid-cols-2">
                            <div className="bg-white p-6 rounded-xl border border-slate-200">
                                <h3 className="mb-4 text-lg font-bold text-blue-800">Never Changes</h3>
                                <ul className="space-y-2 text-slate-700">
                                    <li>• Legal structure</li>
                                    <li>• Capital priority</li>
                                    <li>• Leverage limits</li>
                                    <li>• Cash-flow and reserve rules</li>
                                    <li>• Governance and reporting standards</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-slate-200">
                                <h3 className="mb-4 text-lg font-bold text-slate-800">Can Change</h3>
                                <ul className="space-y-2 text-slate-700">
                                    <li>• Occupancy</li>
                                    <li>• Tenant performance</li>
                                    <li>• Operating expenses</li>
                                    <li>• Resulting distributions</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* Lifecycle Overview */}
                <Reveal delay={200}>
                    <div className="text-center">
                        <h2 className="mb-6 text-2xl font-bold text-slate-900">Lifecycle Overview</h2>
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
                        <p className="mt-6 text-slate-600">
                            This lifecycle repeats over time without re-approving the framework.
                        </p>
                    </div>
                </Reveal>

            </div>
        </section>
    )
}