import Reveal from '@/components/layout/Reveal'

export default function StandardsSection() {
    return (
        <section className="bg-slate-50 px-6 py-24">
            <div className="mx-auto max-w-[1280px]">
                <div className="grid gap-8 lg:grid-cols-2">
                    
                    {/* Issuer Qualification Standards */}
                    <Reveal>
                        <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8">
                            <h3 className="mb-6 text-xl font-bold text-slate-900">Issuer Qualification Standards</h3>
                            <p className="mb-6 text-slate-600">Issuers must demonstrate discipline through:</p>
                            <ul className="mb-8 space-y-3">
                                {[
                                    "Meaningful retained equity in a first-loss position",
                                    "Consistent leverage practices",
                                    "Standardized reporting capabilities",
                                    "Willingness to operate within fixed governance constraints"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 rounded-lg bg-slate-50 p-3">
                                        <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-900 text-[10px] font-bold text-white">
                                            ✓
                                        </div>
                                        <span className="text-sm font-medium text-slate-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            <div className="mt-auto flex items-start gap-2 text-sm font-semibold text-slate-900">
                                {/* Inline SVG Arrow instead of Lucide */}
                                <svg className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                                <span>Issuers that require flexibility outside the Sylvan framework are not eligible.</span>
                            </div>
                        </div>
                    </Reveal>

                    {/* Portfolio Controls */}
                    <Reveal delay={200}>
                        <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8">
                            <h3 className="mb-6 text-xl font-bold text-slate-900">Portfolio Controls</h3>
                            <p className="mb-6 text-slate-600">Firms may establish portfolio-level controls, including:</p>
                            <ul className="mb-8 space-y-3">
                                {[
                                    "Maximum allocation per issuance",
                                    "Issuer concentration limits",
                                    "Geographic or asset-type constraints"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 rounded-lg bg-slate-50 p-3">
                                        <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-900 text-[10px] font-bold text-white">
                                            ✓
                                        </div>
                                        <span className="text-sm font-medium text-slate-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            <div className="mt-auto flex items-start gap-2 text-sm font-semibold text-slate-900">
                                {/* Inline SVG Arrow instead of Lucide */}
                                <svg className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                                <span>Allocations outside defined parameters require explicit approval and documentation.</span>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}