import Reveal from '@/components/layout/Reveal'
import ArrowList from '@/components/ui/ArrowList'
import SectionHeading from '@/components/ui/SectionHeading'

export default function RoleDetails() {
    return (
        <section>
            <div className="section-inner">
                <div className="grid gap-12 lg:grid-cols-2">
                    <Reveal>
                        <div>
                            <SectionHeading line1="Intended" line2="Portfolio Role" size="md" className="mb-6" as="h3" />
                            <p className="mb-4 text-slate-600 subtext">Sylvan is typically used as:</p>
                            <ArrowList
                                items={[
                                    'A complement to bonds and REITs',
                                    'A private income sleeve',
                                    'A source of rent-linked cash flow',
                                ]}
                                className="text-slate-700"
                            />
                        </div>
                    </Reveal>
                    <Reveal delay={200}>
                        <div>
                            <SectionHeading line1="Income" line2="vs. Growth" size="md" className="mb-6" as="h3" />
                            <div className="grid grid-cols-2 gap-4">
                                <div className="rounded-xl bg-blue-50 p-6">
                                    <div className="mb-2 font-bold text-blue-800">Prioritizes</div>
                                    <ArrowList
                                        items={['Income from rent', 'Downside discipline', 'Governance consistency']}
                                        className="text-sm text-slate-700"
                                    />
                                </div>
                                <div className="rounded-xl bg-slate-50 p-6">
                                    <div className="mb-2 font-bold text-slate-800">Does Not Target</div>
                                    <ArrowList
                                        items={['Opportunistic appreciation', 'Development upside', 'Asset repositioning']}
                                        className="text-sm text-slate-700"
                                    />
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}