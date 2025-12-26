import Reveal from '@/components/layout/Reveal'

export default function DSTSection() {
    return (
        <section id="dst-access" className="bg-slate-50 px-6 py-24 lg:py-32 scroll-mt-20">
            <div className="mx-auto max-w-[1280px]">
                {/* Section Header */}
                <Reveal>
                    <div className="mb-12 border-l-4 border-blue-600 pl-6">
                        <div className="mb-2 text-sm font-bold uppercase tracking-wider text-blue-600">Sample C</div>
                        <h2 className="text-4xl font-bold text-slate-900">DST Access</h2>
                        <p className="mt-2 text-xl text-slate-600">
                            Same structure. Different wrapper. 1031-compatible.
                        </p>
                    </div>
                </Reveal>

                {/* Details Grid */}
                <div className="grid gap-8 lg:grid-cols-2">
                    <Reveal delay={100}>
                        <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                            <h3 className="mb-6 text-xl font-bold text-slate-900">Overview</h3>
                            <ul className="space-y-4 text-slate-700">
                                <li className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500">Wrapper</span>
                                    <span className="font-medium text-blue-600">Delaware Statutory Trust</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500">Property Type</span>
                                    <span className="font-medium">Industrial/Net-lease Portfolio</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500">Issuance Size</span>
                                    <span className="font-medium">$41,000,000</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500">Sylvan Capital</span>
                                    <span className="font-medium">~12-15%</span>
                                </li>
                            </ul>
                        </div>
                    </Reveal>

                    <Reveal delay={200}>
                        <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                            <h3 className="mb-6 text-xl font-bold text-slate-900">Key Distinction</h3>
                            <p className="mb-6 text-slate-600 leading-relaxed">
                                The DST is a legal wrapper, not a different investment. Structure, leverage, governance, and downside behavior do not change.
                            </p>
                            <div className="rounded-xl bg-blue-50 p-6 text-center">
                                <span className="block text-sm font-semibold uppercase tracking-wider text-blue-800/70">Illustrative Range</span>
                                <span className="mt-1 block text-4xl font-bold text-blue-600">~6.0 - 6.5%</span>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}