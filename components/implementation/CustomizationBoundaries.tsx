import Reveal from '@/components/layout/Reveal'

export default function CustomizationBoundaries() {
    return (
        <section className="bg-slate-50 px-6 py-24">
            <div className="mx-auto max-w-[1280px]">
                <Reveal>
                    <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
                        Customization Boundaries
                    </h2>
                </Reveal>
                <div className="grid gap-8 lg:grid-cols-2">
                    <Reveal delay={100}>
                        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
                            <h3 className="mb-6 text-xl font-bold text-green-800">Firms May Customize</h3>
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex gap-2"><span>✓</span>Internal review processes</li>
                                <li className="flex gap-2"><span>✓</span>Portfolio limits</li>
                                <li className="flex gap-2"><span>✓</span>Client communication workflows</li>
                            </ul>
                        </div>
                    </Reveal>
                    <Reveal delay={200}>
                        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
                            <h3 className="mb-6 text-xl font-bold text-red-800">Firms May Not Customize</h3>
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex gap-2"><span>✗</span>Leverage limits</li>
                                <li className="flex gap-2"><span>✗</span>Capital priority</li>
                                <li className="flex gap-2"><span>✗</span>Cash-flow rules</li>
                                <li className="flex gap-2"><span>✗</span>Governance constraints</li>
                            </ul>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}