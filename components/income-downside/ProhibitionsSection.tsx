import Reveal from '@/components/layout/Reveal'

export default function ProhibitionsSection() {
    return (
        <section className="bg-slate-900 px-6 py-24 text-white">
            <div className="mx-auto max-w-[1280px] text-center">
                <Reveal>
                    <h2 className="mb-12 text-3xl font-bold">What Never Happens</h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            'Leverage increases to support income',
                            'Mezzanine debt added',
                            'Assets swapped post-closing',
                            'Rules rewritten midstream',
                        ].map((item) => (
                            <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-6">
                                <div className="mb-4 text-2xl">✗</div>
                                <div className="font-medium text-white/80">{item}</div>
                            </div>
                        ))}
                    </div>
                    <p className="mt-12 text-white/60">
                        Sylvan does not eliminate risk. It eliminates surprise.
                    </p>
                </Reveal>
            </div>
        </section>
    )
}