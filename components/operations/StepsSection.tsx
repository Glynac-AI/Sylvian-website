import Reveal from '@/components/layout/Reveal'

export default function StepsSection() {
    return (
        <section className="bg-white px-6 py-24">
            <div className="mx-auto max-w-[1280px]">
                <div className="space-y-12">
                    {[
                        {
                            step: '01',
                            title: 'Issuance Setup',
                            desc: 'Before launch, structure is already approved. Assets are identified, leverage is fixed, and documentation is version-controlled.',
                        },
                        {
                            step: '02',
                            title: 'Subscription & Settlement',
                            desc: 'Investors subscribe through standard docs. Settlement occurs through the custodian. Sylvan never custodies funds.',
                        },
                        {
                            step: '03',
                            title: 'Rent Collection',
                            desc: 'Rent is collected at property level. Cash flows through dedicated accounts according to the fixed waterfall.',
                        },
                        {
                            step: '04',
                            title: 'Reserve Usage',
                            desc: 'Pre-funded reserves absorb temporary shortfalls. When performance improves, reserves are replenished first.',
                        },
                        {
                            step: '05',
                            title: 'Distribution Process',
                            desc: 'Calculated on actual performance. No smoothing. If performance deteriorates, distributions adjust; leverage does not.',
                        },
                        {
                            step: '06',
                            title: 'Exit Execution',
                            desc: 'Exit via sale or refinance under predefined terms. Timing may be adjusted to preserve income.',
                        },
                    ].map((item, i) => (
                        <Reveal key={item.step} delay={i * 50}>
                            <div className="flex flex-col gap-6 md:flex-row md:items-start border-b border-slate-100 pb-12 last:border-0">
                                <div className="text-3xl font-bold text-blue-200 md:text-5xl">
                                    {item.step}
                                </div>
                                <div>
                                    <h3 className="mb-4 text-2xl font-bold text-slate-900">{item.title}</h3>
                                    <p className="max-w-3xl text-lg text-slate-600">{item.desc}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}