import Reveal from '@/components/layout/Reveal'
import BannerQuote from '@/components/ui/BannerQuote'
import SectionHeading from '@/components/ui/SectionHeading'

export default function NextSteps() {
    return (
        <section>
            <div className="section-inner">
                
                {/* --- NEW: Missing Advisor Quote (Page 4) --- */}
                <Reveal>
                    <div className="mb-16">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">
                            How Advisors Explain Sylvan to Clients
                        </p>
                        <BannerQuote backgroundClassName="bg-blue-50">
                            We are investing in income-producing real estate through a consistent structure. Each investment is backed by specific properties, but the rules, leverage, and income mechanics stay the same. That makes the income easier to manage over time.
                        </BannerQuote>
                    </div>
                </Reveal>

                {/* Next Steps Grid */}
                <Reveal delay={200}>
                    <div className="rounded-2xl border border-slate-200 p-10 text-center">
                        <SectionHeading line1="Next" line2="Steps" align="center" size="md" className="mb-8" />
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