import Reveal from '@/components/layout/Reveal'

export default function CapitalLeverageSection() {
    return (
        <section className="bg-slate-50 px-6 py-24">
            <div className="mx-auto max-w-[1280px]">
                <div className="grid gap-12 lg:grid-cols-2">
                    <Reveal>
                        <div>
                            <h3 className="mb-6 text-2xl font-bold text-slate-900">Capital Position</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
                                    <div className="h-3 w-3 rounded-full bg-slate-300" />
                                    <span className="font-medium text-slate-500">Senior Bank Debt</span>
                                </li>
                                <li className="flex items-center gap-3 rounded-lg border-2 border-blue-600 bg-white p-4 shadow-sm">
                                    <div className="h-3 w-3 rounded-full bg-blue-600" />
                                    <span className="font-bold text-blue-600">Sylvan Capital (Fixed Position)</span>
                                </li>
                                <li className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
                                    <div className="h-3 w-3 rounded-full bg-slate-900" />
                                    <span className="font-medium text-slate-900">Sponsor Equity (First Loss)</span>
                                </li>
                            </ul>
                        </div>
                    </Reveal>

                    <Reveal delay={200}>
                        <div>
                            <h3 className="mb-6 text-2xl font-bold text-slate-900">Leverage Discipline</h3>
                            <div className="rounded-2xl bg-white p-8 border border-slate-200">
                                <ul className="space-y-4 text-slate-700">
                                    {[
                                        'Senior debt is capped at issuance',
                                        'No mezzanine or incremental borrowing',
                                        'No leverage-increasing refinances',
                                        'No asset substitutions',
                                    ].map((item) => (
                                        <li key={item} className="flex gap-3">
                                            <span className="text-blue-600">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-6 font-semibold text-slate-900">
                                    Leverage does not increase to support distributions.
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}