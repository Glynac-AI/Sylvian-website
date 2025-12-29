import Reveal from '@/components/layout/Reveal'

export default function DSTExplainedHero() {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center bg-slate-50 px-6 py-24">
            <div className="mx-auto max-w-[1280px] text-center">
                <Reveal>
                    <h1 className="mb-6 text-4xl font-bold text-slate-900 lg:text-5xl">
                        A Legal Wrapper, <br /> Not a Different Investment
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-slate-600">
                        Distinguishing between the legal wrapper (DST) and the investment structure (Sylvan).
                    </p>
                </Reveal>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-12 animate-bounce">
                <svg className="h-6 w-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
                </svg>
            </div>
        </section>
    )
}