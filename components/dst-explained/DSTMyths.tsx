import Reveal from '@/components/layout/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'

export default function DSTMyths() {
    return (
        <section>
            <div className="section-inner">
                <Reveal>
                    <SectionHeading line1="Common" line2="Misconceptions" align="center" size="lg" className="mb-12" />
                </Reveal>
                <div className="grid gap-6 lg:grid-cols-3">
                    {[
                        { myth: 'DSTs are liquid', fact: 'DSTs are closed-end vehicles' },
                        { myth: 'DSTs reduce risk', fact: 'Risk is determined by assets, leverage, and governance' },
                        { myth: 'DSTs change downside', fact: 'Downside behavior is defined by the Sylvan structure' },
                    ].map((item, i) => (
                        <Reveal key={item.myth} delay={i * 100}>
                            <div className="rounded-2xl border border-slate-200 bg-white p-6">
                                <div className="mb-2 font-bold text-red-500">Myth: {item.myth}</div>
                                <div className="font-bold text-blue-600">Fact: {item.fact}</div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}