import Reveal from '@/components/layout/Reveal'

export default function CoreHero() {
    return (
        <section className="bg-slate-50 px-6 py-24">
            <div className="mx-auto max-w-[1280px]">
                <Reveal>
                    <div className="mb-4 text-sm font-bold uppercase tracking-wider text-blue-600">Sample A</div>
                    <h1 className="mb-6 text-4xl font-bold text-slate-900 lg:text-5xl">
                        Core Income (Illustrative)
                    </h1>
                    <p className="max-w-2xl text-lg text-slate-600">
                        Prioritizes current cash flow while maintaining capital discipline.
                    </p>
                </Reveal>
            </div>
        </section>
    )
}