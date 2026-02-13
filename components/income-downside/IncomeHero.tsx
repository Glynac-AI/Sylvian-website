import Reveal from '@/components/layout/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'

export default function IncomeHero() {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center">
            <div className="section-inner text-center">
                <Reveal>
                    <SectionHeading line1="Income and" line2="Downside Behavior" align="center" size="xl" className="mb-6" as="h1" />
                    <p className="mx-auto max-w-2xl text-base text-slate-600 md:text-lg subtext">
                        Designed for Income. Governed for Downside.
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