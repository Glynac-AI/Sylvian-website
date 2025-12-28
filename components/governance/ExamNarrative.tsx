import Reveal from '@/components/layout/Reveal'

export default function ExamNarrative() {
    return (
        <section className="bg-white px-6 py-24">
            <div className="mx-auto max-w-3xl text-center">
                <Reveal>
                    <h2 className="mb-8 text-3xl font-bold text-slate-900">Examination Narrative</h2>
                    <div className="rounded-2xl bg-slate-50 p-10 text-xl italic text-slate-700">
                        &quot;Sylvan is a standardized private real estate income framework. The structure is approved once, assets are reviewed per issuance, and all materials and decisions are documented and version-controlled. There is no discretion to change leverage, priority, or rules after closing.&quot;
                    </div>
                </Reveal>
            </div>
        </section>
    )
}