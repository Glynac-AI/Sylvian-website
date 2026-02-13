import Reveal from '@/components/layout/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'

export default function WaterfallRecap() {
    return (
        <section>
            <div className="section-inner">
                <Reveal>
                    <div className="rounded-2xl border border-slate-200 bg-white p-10">
                        <SectionHeading line1="Cash-Flow Waterfall" line2="Recap" size="md" className="mb-6" />
                        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                            <div>
                                <p className="mb-4 text-slate-600">
                                    All Sylvan offerings follow the same non-discretionary waterfall. This order is fixed and cannot be modified after closing.
                                </p>
                            </div>
                            <div>
                                <ol className="space-y-3 font-medium text-slate-800">
                                    <li className="flex gap-4 border-b border-slate-100 pb-2">
                                        <span className="text-slate-400">1</span> Gross rent collected
                                    </li>
                                    <li className="flex gap-4 border-b border-slate-100 pb-2">
                                        <span className="text-slate-400">2</span> Operating expenses
                                    </li>
                                    <li className="flex gap-4 border-b border-slate-100 pb-2">
                                        <span className="text-slate-400">3</span> Required operating and debt service reserves
                                    </li>
                                    <li className="flex gap-4 border-b border-slate-100 pb-2">
                                        <span className="text-slate-400">4</span> Senior debt service
                                    </li>
                                    <li className="flex gap-4 p-2 bg-blue-50 rounded-lg text-blue-900">
                                        <span className="text-blue-400">5</span> Net distributable cash to Sylvan investors
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}