import Reveal from '@/components/layout/Reveal'
import ArrowList from '@/components/ui/ArrowList'
import Checklist from '@/components/ui/Checklist'
import SectionHeading from '@/components/ui/SectionHeading'

export default function SuitabilitySection() {
    return (
        <section>
            <div className="section-inner">
                <Reveal>
                    <SectionHeading line1="Suitability" line2="Summary" align="center" size="lg" className="mb-12" />
                </Reveal>
                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Appropriate */}
                    <Reveal delay={100}>
                        <div className="h-full rounded-2xl border border-blue-200 bg-blue-50/50 p-8 shadow-sm">
                            <SectionHeading
                                line1="Appropriate For"
                                line2="Investors Who"
                                size="md"
                                className="mb-6"
                                as="h3"
                            />
                            <Checklist
                                items={[
                                    'Seek private income exposure',
                                    'Can commit capital for the full duration',
                                    'Value governance and predictability',
                                ]}
                            />
                        </div>
                    </Reveal>

                    {/* Not Appropriate */}
                    <Reveal delay={200}>
                        <div className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                            <SectionHeading
                                line1="Not Appropriate For"
                                line2="Investors Who"
                                size="md"
                                className="mb-6"
                                as="h3"
                            />
                            <ArrowList
                                items={[
                                    'Require liquidity',
                                    'Seek development or value-add risk',
                                    'Expect return targeting or smoothing',
                                ]}
                                className="text-slate-600"
                            />
                        </div>
                    </Reveal>
                </div>
                
                <Reveal delay={300}>
                    <div className="mt-12 text-center">
                        <p className="text-lg font-medium text-slate-900 subtext">
                            Sylvan is not designed to be exciting.
                        </p>
                        <p className="mt-2 text-base text-slate-600 subtext">
                            It is designed to be reliable in how it behaves.
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}