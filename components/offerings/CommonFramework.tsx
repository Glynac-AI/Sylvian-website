import Reveal from '@/components/layout/Reveal'

export default function CommonFramework() {
    return (
        <section className="bg-white px-6 py-24">
            <div className="mx-auto max-w-[1280px]">
                <Reveal>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-10">
                        <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">
                            Common Framework (Applies to All Offerings)
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {[
                                'Closed-end, issuance-based structure',
                                'Identified, stabilized properties',
                                'Fixed capital position',
                                'First-loss sponsor equity',
                                'Pre-funded reserves',
                                'Non-discretionary waterfall',
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-blue-600" />
                                    <span className="text-slate-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}