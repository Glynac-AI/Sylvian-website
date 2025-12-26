import Reveal from '@/components/layout/Reveal'

export default function DSTMyths() {
    return (
        <section className="bg-slate-50 px-6 py-24">
            <div className="mx-auto max-w-[1280px]">
                <Reveal>
                    <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">Common Misconceptions</h2>
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