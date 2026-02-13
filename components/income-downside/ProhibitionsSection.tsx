import Reveal from '@/components/layout/Reveal'
import ArrowList from '@/components/ui/ArrowList'
import SectionHeading from '@/components/ui/SectionHeading'

export default function ProhibitionsSection() {
    return (
        <section>
            <div className="section-inner text-center">
                <Reveal>
                    <SectionHeading line1="What Never" line2="Happens" align="center" size="lg" className="mb-12" />
                    <div className="max-w-2xl mx-auto text-left">
                        <ArrowList
                            items={[
                                'Leverage increases to support income',
                                'Mezzanine debt added',
                                'Assets swapped post-closing',
                                'Rules rewritten midstream',
                            ]}
                            className="text-slate-700"
                        />
                    </div>
                    <p className="mt-12 text-slate-600 subtext">
                        Sylvan does not eliminate risk. It eliminates surprise.
                    </p>
                </Reveal>
            </div>
        </section>
    )
}