import Reveal from '@/components/layout/Reveal'
import ArrowList from '@/components/ui/ArrowList'
import BannerQuote from '@/components/ui/BannerQuote'
import SectionHeading from '@/components/ui/SectionHeading'

export default function RolesGrid() {
    return (
        <section>
            <div className="section-inner">
                <Reveal>
                    <div className="mb-16 grid gap-8 lg:grid-cols-3">
                        {[
                            {
                                role: 'CIO / Investment',
                                focus: [
                                    'Structure approval framework',
                                    'Asset-level review criteria',
                                    'Portfolio controls',
                                ],
                            },
                            {
                                role: 'CCO / Compliance',
                                focus: [
                                    'Documentation standards',
                                    'Material event handling',
                                    'Examination narratives',
                                ],
                            },
                            {
                                role: 'Advisors',
                                focus: [
                                    'Approved explanation language',
                                    'Portfolio role framing',
                                    'Client suitability boundaries',
                                ],
                            },
                        ].map((card) => (
                            <div key={card.role} className="rounded-2xl border border-slate-200 p-8 shadow-sm">
                                <h3 className="mb-6 text-xl font-bold text-slate-900">{card.role}</h3>
                                <ArrowList items={card.focus} className="text-slate-600" />
                            </div>
                        ))}
                    </div>
                </Reveal>

                <Reveal delay={200}>
                    <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
                        <SectionHeading line1="Language" line2="Consistency" align="center" size="md" className="mb-6" />
                        <div className="mx-auto max-w-3xl space-y-4 text-slate-700">
                            <p className="subtext">Sylvan Learning emphasizes plain-English explanations and avoidance of performance language.</p>
                            <BannerQuote className="text-left" backgroundClassName="bg-[#F5F5F3]">
                                The objective is consistency, not persuasion.
                            </BannerQuote>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}