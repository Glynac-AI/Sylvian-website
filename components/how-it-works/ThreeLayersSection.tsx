import Reveal from '@/components/layout/Reveal'

export default function ThreeLayersSection() {
    return (
        <section className="bg-white px-6 py-24">
            <div className="mx-auto max-w-[1280px]">
                <Reveal>
                    <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
                        The Three Layers of Sylvan
                    </h2>
                </Reveal>
                <div className="grid gap-6 lg:grid-cols-3">
                    {[
                        {
                            layer: '1) Structure Layer',
                            status: 'Never Changes',
                            desc: 'Defines capital stack, leverage limits, cash-flow priority, and enforcement rules. Approved once at the firm level.',
                        },
                        {
                            layer: '2) Series Layer',
                            status: 'Timing, Not Risk',
                            desc: 'Determines how income and depreciation are reflected over time (Series I vs. Series II). Does not change risk.',
                        },
                        {
                            layer: '3) Issuance Layer',
                            status: 'Varies',
                            desc: 'Specific offering backed by identified properties. Assets do not change after closing.',
                        },
                    ].map((item, i) => (
                        <Reveal key={item.layer} delay={i * 100}>
                            <div className="flex h-full flex-col rounded-2xl border border-slate-200 p-8">
                                <div className="mb-2 text-sm font-bold uppercase tracking-wider text-blue-600">
                                    {item.status}
                                </div>
                                <h3 className="mb-4 text-xl font-bold text-slate-900">{item.layer}</h3>
                                <p className="text-slate-600">{item.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}