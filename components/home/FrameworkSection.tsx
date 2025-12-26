import Reveal from '@/components/layout/Reveal'

export default function FrameworkSection() {
    return (
        <>
            {/* Who It's Built For */}
            <section className="bg-white px-6 py-24">
                <div className="mx-auto max-w-[1280px]">
                    <Reveal>
                        <div className="mb-16 text-center">
                            <h2 className="mb-4 text-3xl font-bold text-slate-900 lg:text-4xl">
                                Who Sylvan Is Built For
                            </h2>
                        </div>
                    </Reveal>

                    <div className="grid gap-6 lg:grid-cols-3">
                        {[
                            {
                                title: 'Chief Investment Officers',
                                benefits: [
                                    'One-time approval of structure',
                                    'Asset-level review thereafter',
                                    'Clear downside behavior and enforcement rules',
                                ],
                                delay: 100,
                            },
                            {
                                title: 'Chief Compliance Officers',
                                benefits: [
                                    'Consistent instrument classification',
                                    'Version-controlled materials',
                                    'Exam-ready documentation and records',
                                ],
                                delay: 160,
                            },
                            {
                                title: 'Advisors',
                                benefits: [
                                    'Explainable income allocations',
                                    'No performance promises',
                                    'Clear client communication',
                                ],
                                delay: 220,
                            },
                        ].map((item) => (
                            <Reveal key={item.title} delay={item.delay}>
                                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-blue-200 hover:shadow-lg">
                                    <h3 className="mb-6 text-xl font-bold text-slate-900">{item.title}</h3>
                                    <ul className="space-y-3">
                                        {item.benefits.map((benefit) => (
                                            <li key={benefit} className="flex items-start gap-3">
                                                <span className="mt-1 text-blue-600">•</span>
                                                <span className="leading-relaxed text-slate-600">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* What Sylvan Is/Isn't */}
            <section className="bg-slate-50 px-6 py-24">
                <div className="mx-auto max-w-[1280px]">
                    <Reveal>
                        <div className="mb-12 text-center">
                            <h2 className="mb-4 text-3xl font-bold text-slate-900 lg:text-4xl">
                                What Sylvan Is / Is Not
                            </h2>
                        </div>
                    </Reveal>

                    <div className="grid gap-6 lg:grid-cols-2">
                        <Reveal delay={120}>
                            <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8">
                                <ul className="space-y-4">
                                    {[
                                        'Not a fund',
                                        'Not a marketplace',
                                        'Not discretionary',
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-3">
                                            <span className="text-lg font-bold text-slate-400">✗</span>
                                            <span className="text-slate-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>

                        <Reveal delay={180}>
                            <div className="flex h-full flex-col rounded-2xl border border-blue-200 bg-blue-50 p-8">
                                <ul className="space-y-4">
                                    {[
                                        'Issuance-based structure',
                                        'Custodian-held assets',
                                        'Fixed structure, variable assets',
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-3">
                                            <span className="text-lg font-bold text-blue-600">✓</span>
                                            <span className="text-slate-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Offerings */}
            <section className="bg-white px-6 py-24">
                <div className="mx-auto max-w-[1280px]">
                    <Reveal>
                        <div className="mb-12 text-center">
                            <h2 className="mb-4 text-3xl font-bold text-slate-900 lg:text-4xl">
                                Our Offerings
                            </h2>
                        </div>
                    </Reveal>

                    <div className="grid gap-6 lg:grid-cols-3">
                        {[
                            {
                                title: 'Core Income',
                                description: 'Higher current income from stabilized assets. Core and core-plus portfolio role.',
                                delay: 120,
                            },
                            {
                                title: 'Offset (Tax Timing)',
                                description: 'Lower cash, higher depreciation relative to cash. Tax timing, not tranching.',
                                delay: 180,
                            },
                            {
                                title: 'DST Access (1031)',
                                description: 'Same structure, same rules. Entry point via 1031 exchange wrapper.',
                                delay: 240,
                            },
                        ].map((offering) => (
                            <Reveal key={offering.title} delay={offering.delay}>
                                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-blue-200 hover:shadow-lg">
                                    <h3 className="mb-4 text-xl font-bold text-slate-900">{offering.title}</h3>
                                    <p className="leading-relaxed text-slate-600">{offering.description}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Capital & Income Mechanics */}
            <section className="bg-slate-50 px-6 py-24">
                <div className="mx-auto max-w-[1280px]">
                    <Reveal>
                        <div className="mb-12 text-center">
                            <h2 className="text-3xl font-bold text-slate-900 lg:text-4xl">
                                Capital Discipline & Income Mechanics
                            </h2>
                        </div>
                    </Reveal>

                    <div className="grid gap-8 lg:grid-cols-2">
                        {/* Capital Discipline */}
                        <Reveal delay={100}>
                            <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8">
                                <h3 className="mb-6 text-xl font-bold text-slate-900">
                                    Capital Discipline 
                                </h3>
                                <p className="mb-6 text-slate-700">
                                    Sylvan investments occupy a fixed position in the capital structure:
                                </p>
                                <ul className="mb-6 space-y-3">
                                    {[
                                        'Below senior bank debt',
                                        'Above sponsor equity',
                                        'Sponsor equity in a first-loss position',
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <span className="mt-1 text-blue-600">•</span>
                                            <span className="text-slate-600">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-auto text-sm text-slate-600">
                                    Leverage limits, payment priority, and reserve rules are defined at issuance and cannot change after closing.
                                </p>
                            </div>
                        </Reveal>

                        {/* Income Mechanics */}
                        <Reveal delay={180}>
                            <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8">
                                <h3 className="mb-6 text-xl font-bold text-slate-900">
                                    Income Mechanics
                                </h3>
                                <p className="mb-6 text-slate-700">
                                    All Sylvan offerings follow a non-discretionary waterfall:
                                </p>
                                <div className="mb-6 space-y-2">
                                    {[
                                        'Gross rent collected',
                                        'Operating expenses',
                                        'Required operating and debt service reserves',
                                        'Senior debt service',
                                        'Net distributable cash to Sylvan investors',
                                    ].map((item, index) => (
                                        <div key={item} className="flex items-center gap-3 rounded-lg bg-slate-50 p-3">
                                            <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                                                {index + 1}
                                            </div>
                                            <span className="text-sm text-slate-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-auto text-center font-bold text-slate-900">
                                    Distributions adjust. Leverage does not.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
        </>
    )
}