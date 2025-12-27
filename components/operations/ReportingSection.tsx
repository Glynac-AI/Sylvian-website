import Reveal from '@/components/layout/Reveal'

export default function ReportingSection() {
    return (
        <section className="bg-white px-6 py-24">
            <div className="mx-auto max-w-[1280px]">
                <div className="grid gap-12 lg:grid-cols-2">

                    {/* Reporting Cadence */}
                    <Reveal>
                        <div className="text-center">
                            <h2 className="mb-6 text-3xl font-bold text-slate-900">
                                Reporting Cadence
                            </h2>
                            <p className="mb-8 text-slate-600">
                                Reporting formats are standardized across issuances.
                            </p>
                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
                                <ul className="space-y-4 text-left">
                                    {[
                                        "Quarterly operating summaries",
                                        "Rent and occupancy updates",
                                        "Reserve balances",
                                        "Coverage metrics",
                                        "Distribution calculations",
                                        "Material event disclosures"
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-3">
                                            {/* Inline SVG Check */}
                                            <svg className="h-5 w-5 shrink-0 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="font-medium text-slate-800">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Reveal>

                    {/* Material Event Handling */}
                    <Reveal delay={200}>
                        <div className="text-center">
                            <h2 className="mb-6 text-3xl font-bold text-slate-900">
                                Material Event Handling
                            </h2>
                            <p className="mb-8 text-slate-600">
                                Material events do not permit structural changes.
                            </p>
                            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
                                <ul className="space-y-4 text-left">
                                    {[
                                        "The event is documented",
                                        "Relevant parties are notified",
                                        "Escalation follows predefined procedures"
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-3">
                                            {/* Inline SVG Check - Darker Blue */}
                                            <svg className="h-5 w-5 shrink-0 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="font-medium text-slate-800">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Reveal>

                </div>
            </div>
        </section>
    )
}