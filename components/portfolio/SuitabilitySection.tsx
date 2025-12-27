import Reveal from '@/components/layout/Reveal'

export default function SuitabilitySection() {
    return (
        <section className="bg-white px-6 py-24">
            <div className="mx-auto max-w-[1280px]">
                <Reveal>
                    <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
                        Suitability Summary
                    </h2>
                </Reveal>
                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Appropriate */}
                    <Reveal delay={100}>
                        <div className="h-full rounded-2xl border border-blue-200 bg-blue-50/50 p-8 shadow-sm">
                            <h3 className="mb-6 text-xl font-bold text-blue-900">Appropriate For Investors Who:</h3>
                            <ul className="space-y-4 text-slate-700">
                                {[
                                    'Seek private income exposure',
                                    'Can commit capital for the full duration',
                                    'Value governance and predictability'
                                ].map((item) => (
                                    <li key={item} className="flex gap-3">
                                        <span className="font-bold text-blue-600">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>

                    {/* Not Appropriate */}
                    <Reveal delay={200}>
                        <div className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                            <h3 className="mb-6 text-xl font-bold text-slate-700">Not Appropriate For Investors Who:</h3>
                            <ul className="space-y-4 text-slate-600">
                                {[
                                    'Require liquidity',
                                    'Seek development or value-add risk',
                                    'Expect return targeting or smoothing'
                                ].map((item) => (
                                    <li key={item} className="flex gap-3">
                                        <span className="font-bold text-slate-400">✗</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                </div>
                
                <Reveal delay={300}>
                    <div className="mt-12 text-center">
                        <p className="text-xl font-medium text-slate-900">
                            Sylvan is not designed to be exciting.
                        </p>
                        <p className="mt-2 text-lg text-slate-600">
                            It is designed to be reliable in how it behaves.
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}