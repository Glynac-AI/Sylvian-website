import Link from 'next/link'
import Reveal from '@/components/layout/Reveal'

export default function ActionSection() {
    return (
        <>
            {/* Portfolio Role */}
            <section className="bg-white px-6 py-24">
                <div className="mx-auto max-w-[1280px]">
                    <Reveal>
                        <div className="mx-auto max-w-4xl">
                            <h2 className="mb-8 text-center text-3xl font-bold text-slate-900 lg:text-4xl">
                                Portfolio Role
                            </h2>
                            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-10">
                                <p className="mb-6 text-center text-lg text-slate-700">
                                    Sylvan is designed as a private real asset income allocation that complements bonds, REITs, and traditional private credit.
                                </p>
                                <p className="text-center text-slate-600">
                                    It is not designed for trading, liquidity management, or opportunistic growth.
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Client Explanation */}
            <section className="bg-slate-50 px-6 py-24">
                <div className="mx-auto max-w-[1280px]">
                    <Reveal>
                        <div className="mx-auto max-w-4xl">
                            <h2 className="mb-10 text-center text-3xl font-bold text-slate-900 lg:text-4xl">
                                How Advisors Explain Sylvan to Clients
                            </h2>
                            <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
                                <blockquote className="text-center text-lg italic leading-relaxed text-slate-700">
                                    "We're investing in income-producing real estate through a consistent structure. Each investment is backed by specific properties, but the rules, leverage, and income mechanics stay the same. That makes the income easier to manage over time."
                                </blockquote>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Next Steps */}
            <section className="bg-white px-6 py-24">
                <div className="mx-auto max-w-[1280px]">
                    <Reveal>
                        <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 lg:text-4xl">
                            Next Steps
                        </h2>
                    </Reveal>

                    <div className="grid gap-6 lg:grid-cols-3">
                        {[
                            {
                                title: 'Start Here',
                                description: 'Understand the structure.',
                                href: '/start',
                                delay: 100,
                            },
                            {
                                title: 'Offerings',
                                description: 'See how Core, Offset, and DST differ.',
                                href: '/offerings',
                                delay: 160,
                            },
                            {
                                title: 'Governance',
                                description: 'Review CIO and CCO oversight.',
                                href: '/governance',
                                delay: 220,
                            },
                        ].map((cta) => (
                            <Reveal key={cta.href} delay={cta.delay}>
                                <Link
                                    href={cta.href}
                                    className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-blue-600 hover:shadow-lg"
                                >
                                    <h3 className="mb-2 text-xl font-bold text-slate-900">{cta.title}</h3>
                                    <p className="mb-4 flex-grow text-slate-600">{cta.description}</p>
                                    <div className="inline-flex items-center gap-2 font-semibold text-blue-600 transition-transform group-hover:translate-x-1">
                                        <span>Learn More</span>
                                        <span>→</span>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}