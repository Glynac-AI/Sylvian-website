import Reveal from '@/components/layout/Reveal'

export default function NextSteps() {
    return (
        <section className="bg-white px-6 py-24">
            <div className="mx-auto max-w-[1280px]">
                
                {/* --- NEW: Missing Advisor Quote (Page 4) --- */}
                <Reveal>
                    <div className="mb-24 rounded-2xl bg-blue-50 p-10 text-center">
                        <h3 className="mb-6 text-lg font-bold uppercase tracking-wider text-blue-900">
                            How Advisors Explain Sylvan to Clients
                        </h3>
                        <p className="mx-auto max-w-4xl text-2xl font-medium italic text-blue-800 leading-relaxed">
                            "We&apos;re investing in income-producing real estate through a consistent structure. Each investment is backed by specific properties, but the rules, leverage, and income mechanics stay the same. That makes the income easier to manage over time."
                        </p>
                    </div>
                </Reveal>

                {/* Next Steps Grid */}
                <Reveal delay={200}>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-10 text-center">
                        <h2 className="mb-8 text-2xl font-bold text-slate-900">Next Steps</h2>
                        <div className="grid gap-6 md:grid-cols-3">
                            <div>
                                <h3 className="font-bold text-blue-900">Start Here</h3>
                                <p className="text-slate-600">Understand the structure</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-blue-900">Offerings</h3>
                                <p className="text-slate-600">See how Core, Offset, and DST differ</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-blue-900">Governance</h3>
                                <p className="text-slate-600">Review CIO and CCO oversight</p>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}