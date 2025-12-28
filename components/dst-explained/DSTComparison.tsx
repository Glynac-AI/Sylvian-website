import Reveal from '@/components/layout/Reveal'

export default function DSTComparison() {
    return (
        <section className="bg-white px-6 py-24">
            <div className="mx-auto max-w-[1280px]">
                <div className="grid gap-8 lg:grid-cols-2">
                    <Reveal>
                        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
                            <h3 className="mb-6 text-xl font-bold text-blue-800">What Changes</h3>
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex items-center gap-3">
                                    <span className="font-bold text-blue-600">✓</span>
                                    The legal entity used to hold assets
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="font-bold text-blue-600">✓</span>
                                    Investor&apos;s tax reporting pathway
                                </li>
                            </ul>
                        </div>
                    </Reveal>

                    <Reveal delay={200}>
                        <div className="rounded-2xl border border-slate-200 bg-white p-8">
                            <h3 className="mb-6 text-xl font-bold text-slate-900">What Does Not Change</h3>
                            <ul className="space-y-3 text-slate-700">
                                {[
                                    'Asset risk',
                                    'Capital position',
                                    'Leverage limits',
                                    'Reserve rules',
                                    'Cash-flow waterfall',
                                    'Downside behavior',
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3">
                                        <span className="font-bold text-slate-400">−</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}