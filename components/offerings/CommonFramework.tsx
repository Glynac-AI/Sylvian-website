import Reveal from '@/components/layout/Reveal'
import ArrowList from '@/components/ui/ArrowList'
import SectionHeading from '@/components/ui/SectionHeading'

export default function CommonFramework() {
    return (
        <section>
            <div className="section-inner">
                <Reveal>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-10">
                        <SectionHeading
                            line1="Common Framework"
                            line2="Applies to All Offerings"
                            align="center"
                            size="md"
                            className="mb-8"
                        />
                        <ArrowList
                            items={[
                                'Closed-end, issuance-based structure',
                                'Identified, stabilized properties',
                                'Fixed capital position',
                                'First-loss sponsor equity',
                                'Pre-funded reserves',
                                'Non-discretionary waterfall',
                            ]}
                            className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 text-slate-700"
                        />
                    </div>
                </Reveal>
            </div>
        </section>
    )
}