import Reveal from '@/components/layout/Reveal'

export default function DSTAccessDetails() {
    return (
        <section className="bg-white px-6 py-12">
            <div className="mx-auto max-w-[1280px]">
                <div className="grid gap-8 lg:grid-cols-2">
                    <Reveal>
                        <div className="rounded-2xl border border-slate-200 p-8">
                            <h3 className="mb-6 text-xl font-bold text-slate-900">Overview</h3>
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex justify-between border-b border-slate-100 pb-2">
                                    <span>Wrapper</span>
                                    <span className="font-medium text-blue-600">Delaware Statutory Trust</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-100 pb-2">
                                    <span>Property Type</span>
                                    <span className="font-medium">Industrial/Net-lease Portfolio</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-100 pb-2">
                                    <span>Issuance Size</span>
                                    <span className="font-medium">$41,000,000</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-100 pb-2">
                                    <span>Sylvan Capital</span>
                                    <span className="font-medium">~12-15%</span>
                                </li>
                            </ul>
                        </div>
                    </Reveal>

                    <Reveal delay={200}>
                        <div className="rounded-2xl border border-slate-200 p-8">
                            <h3 className="mb-6 text-xl font-bold text-slate-900">Key Note</h3>
                            <p className="mb-6 text-slate-600">
                                The DST is a legal wrapper, not a different investment. Structure, leverage, governance, and downside behavior do not change.
                            </p>
                            <div className="rounded-lg bg-blue-50 p-4">
                                <span className="block text-sm text-slate-500">Illustrative Range</span>
                                <span className="text-2xl font-bold text-blue-600">~6.0 - 6.5%</span>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}