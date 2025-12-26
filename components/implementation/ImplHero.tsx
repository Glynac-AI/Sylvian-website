import Reveal from '@/components/layout/Reveal'

export default function ImplHero() {
    return (
        <section className="bg-slate-50 px-6 py-24">
            <div className="mx-auto max-w-[1280px] text-center">
                <Reveal>
                    <h1 className="mb-6 text-4xl font-bold text-slate-900 lg:text-5xl">
                        Implementation Resources
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-slate-600">
                        Tools to Support Consistent Adoption.
                    </p>
                </Reveal>
            </div>
        </section>
    )
}