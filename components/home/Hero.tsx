import Reveal from '@/components/layout/Reveal'

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 px-6 py-32 lg:py-40">
            {/* Decorative elements */}
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-slate-100/60 blur-3xl" />

            <div className="relative mx-auto max-w-[1280px]">
                <div className="mx-auto max-w-4xl text-center">
                    
                    <Reveal delay={80}>
                        <h1 className="mb-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-4xl font-bold leading-[1.1] tracking-tight text-transparent lg:text-6xl">
                            A Standardized Structured Real Estate Income Platform
                        </h1>
                    </Reveal>

                    <Reveal delay={140}>
                        <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-slate-600 lg:text-xl">
                            How to allocate to private real estate income repeatedly, without increasing operational burden, client confusion, or long-term trust risk.
                        </p>
                    </Reveal>

                    <Reveal delay={200}>
                        <div className="grid gap-6 sm:grid-cols-3">
                            {[
                                { label: 'One-time', value: 'Structure Approval' },
                                { label: 'Per-issuance', value: 'Asset Review' },
                                { label: 'Repeatable', value: 'Governance' },
                            ].map((stat) => (
                                <div key={stat.label} className="group relative">
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-100/50 to-slate-100/50 opacity-0 blur transition-opacity group-hover:opacity-100" />
                                    <div className="relative rounded-2xl border border-slate-200/60 bg-white/60 p-6 backdrop-blur-sm transition-all group-hover:border-blue-200">
                                        <div className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                                            {stat.label}
                                        </div>
                                        <div className="text-lg font-bold text-slate-900">{stat.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}