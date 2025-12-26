import Reveal from '@/components/layout/Reveal'

export default function CoreDetails() {
    return (
        <section className="bg-white px-6 py-12">
            <div className="mx-auto max-w-[1280px]">
                <div className="grid gap-8 lg:grid-cols-2">
                    <Reveal>
                        <div className="rounded-2xl border border-slate-200 p-8">
                            <h3 className="mb-6 text-xl font-bold text-slate-900">Overview</h3>
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex justify-between border-b border-slate-100 pb-2">
                                    <span>Property Type</span>
                                    <span className="font-medium">Industrial Logistics</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-100 pb-2">
                                    <span>Issuance Size</span>
                                    <span className="font-medium">$48,000,000</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-100 pb-2">
                                    <span>Target Duration</span>
                                    <span className="font-medium">5-7 Years</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-100 pb-2">
                                    <span>Sylvan Capital</span>
                                    <span className="font-medium">~12%</span>
                                </li>
                            </ul>
                        </div>
                    </Reveal>

                    <Reveal delay={200}>
                        <div className="rounded-2xl border border-slate-200 p-8">
                            <h3 className="mb-6 text-xl font-bold text-slate-900">Distributions</h3>
                            <p className="mb-4 text-slate-600">
                                Distributions reflect actual operating performance. No smoothing or targeting.
                            </p>
                            <div className="rounded-lg bg-blue-50 p-4">
                                <span className="block text-sm text-slate-500">Illustrative Range</span>
                                <span className="text-2xl font-bold text-blue-600">~6.5 - 7.0%</span>
                            </div>
                            <p className="mt-4 text-xs text-slate-400">
                                *Illustrative only. Not a guarantee.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}