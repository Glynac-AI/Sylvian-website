import Reveal from '@/components/layout/Reveal'

export default function OverviewSection() {
    return (
        <>
            {/* Problem & Solution - Side by Side */}
            <section className="bg-white px-6 py-24">
                <div className="mx-auto max-w-[1280px]">
                    <div className="grid gap-8 lg:grid-cols-2">
                        <Reveal delay={100}>
                            <div className="flex h-full flex-col">
                                <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
                                    The Problem
                                </div>
                                <p className="text-lg leading-relaxed text-slate-700">
                                    Private real estate income is attractive in theory. In practice, it becomes difficult to use at scale because every investment behaves differently, requires new explanations, and introduces new governance questions.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={180}>
                            <div className="flex h-full flex-col border-l-4 border-blue-600 pl-8">
                                <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-600">
                                    How Sylvan Solves It
                                </div>
                                <p className="text-lg leading-relaxed text-slate-900">
                                    Sylvan standardizes the structure and rules of private real estate income so that only the underlying properties change — not the investment framework.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Core Idea - Integrated */}
            <section className="bg-slate-50 px-6 py-24">
                <div className="mx-auto max-w-[1280px]">
                    <Reveal>
                        <div className="mx-auto max-w-5xl">
                            <div className="mb-3 text-center text-sm font-semibold uppercase tracking-wider text-blue-600">
                                The Core Idea
                            </div>

                            <div className="mb-10 rounded-2xl border border-slate-200 bg-white p-10">
                                <h2 className="mb-8 text-center text-2xl font-bold leading-relaxed text-slate-900 lg:text-3xl">
                                    Once an RIA approves the Sylvan structure, future offerings do not require re-approval of leverage, cash-flow rules, or governance.
                                </h2>

                                <div className="grid gap-6 border-t border-slate-200 pt-8 lg:grid-cols-2">
                                    <div className="text-center">
                                        <div className="mb-2 text-lg font-bold text-slate-900">
                                            The structure stays the same.
                                        </div>
                                        <div className="text-slate-600">The assets change.</div>
                                    </div>

                                    <div className="flex items-center justify-center border-l-0 pl-0 lg:border-l lg:border-slate-200 lg:pl-6">
                                        <p className="text-slate-700">
                                            This allows firms to allocate repeatedly without re-educating investment committees, compliance teams, or clients.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    )
}