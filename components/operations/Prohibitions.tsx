import Reveal from '@/components/layout/Reveal'

export default function Prohibitions() {
    return (
        <section className="bg-slate-900 px-6 py-24 text-white">
            <div className="mx-auto max-w-[1280px]">
                <Reveal>
                    <h2 className="mb-12 text-3xl font-bold">Operational Prohibitions</h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            'Assets cannot be substituted',
                            'Leverage cannot be increased',
                            'No mezzanine/incremental debt',
                            'No discretionary amendments',
                        ].map((item) => (
                            <div key={item} className="flex items-center gap-4 rounded-lg bg-white/5 p-6">
                                <div className="text-red-400 font-bold">✗</div>
                                <span className="font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    )
}