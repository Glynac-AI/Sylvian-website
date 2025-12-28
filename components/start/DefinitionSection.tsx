import Reveal from '@/components/layout/Reveal'

export default function DefinitionSection() {
    return (
        <section className="bg-slate-50 px-6 py-24">
            <div className="mx-auto max-w-[1280px]">
                <Reveal>
                    <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
                        What Sylvan Is and Is Not
                    </h2>
                </Reveal>
                <div className="grid gap-8 lg:grid-cols-2">
                    <Reveal delay={100}>
                        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
                            <h3 className="mb-6 text-xl font-bold text-blue-800">Sylvan Is</h3>
                            <ul className="space-y-4">
                                {[
                                    'A standardized investment structure',
                                    'A review and documentation workflow',
                                    'A platform for governance and audit readiness',
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-slate-700">
                                        <span className="font-bold text-blue-600">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>

                    <Reveal delay={200}>
                        <div className="rounded-2xl border border-slate-200 bg-white p-8">
                            <h3 className="mb-6 text-xl font-bold text-slate-900">Sylvan Is Not</h3>
                            <ul className="space-y-4">
                                {[
                                    'An issuer of securities',
                                    'An investment adviser',
                                    'A broker-dealer',
                                    'A custodian of client assets',
                                    'A commingled fund',
                                    'A discretionary strategy',
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-slate-700">
                                        <span className="font-bold text-slate-400">✗</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                </div>
                <Reveal delay={300}>
                    <div className="mt-12 text-center text-slate-600">
                        Sylvan is not an issuer, investment adviser, broker-dealer, or custodian; it provides standardized structure, workflow, and audit-ready documentation.
                    </div>
                </Reveal>
            </div>
        </section>
    )
}