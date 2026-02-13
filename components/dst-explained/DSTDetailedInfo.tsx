import Reveal from '@/components/layout/Reveal'
import ArrowList from '@/components/ui/ArrowList'
import Checklist from '@/components/ui/Checklist'
import SectionHeading from '@/components/ui/SectionHeading'

export default function DSTDetailedInfo() {
    return (
        <section>
            <div className="section-inner space-y-24">
                
                {/* 1. Context & Why */}
                <div className="grid gap-12 lg:grid-cols-2">
                    <Reveal>
                        <div>
                            <SectionHeading line1="What a DST Is" line2="Context Only" size="md" className="mb-6" as="h2" />
                            <p className="mb-4 text-slate-600">
                                A Delaware Statutory Trust is a legal entity commonly used to hold real estate for investors seeking potential 1031 exchange treatment.
                            </p>
                            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                                <ArrowList
                                    items={[
                                        'Can hold title to real estate',
                                        'Allow multiple investors to participate',
                                        'May be compatible with certain tax-deferred exchanges',
                                    ]}
                                    className="text-sm text-slate-700"
                                />
                                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                                    Reminder: Sylvan does not provide tax advice.
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={200}>
                        <div>
                            <SectionHeading line1="Why DST Exists" line2="in Sylvan" size="md" className="mb-6" as="h2" />
                            <Checklist
                                items={[
                                    'Accommodate investor tax constraints',
                                    'Preserve continuity of structure',
                                    'Avoid creating a separate product category',
                                ]}
                                className="mb-6"
                            />
                            <div className="rounded-xl border border-blue-100 bg-blue-50 p-6">
                                <h4 className="mb-3 font-bold text-blue-900">DST availability does not:</h4>
                                <ArrowList
                                    items={[
                                        'Change leverage limits',
                                        'Alter capital priority',
                                        'Modify governance or enforcement',
                                        'Introduce liquidity',
                                    ]}
                                    className="text-sm text-slate-700"
                                />
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* 2. Governance & Liquidity */}
                <div className="grid gap-12 lg:grid-cols-2">
                    <Reveal>
                        <div className="h-full rounded-2xl border border-slate-200 p-8">
                            <SectionHeading line1="Governance Under" line2="a DST" size="md" className="mb-6" as="h2" />
                            <p className="mb-4 text-slate-600">DST-based Sylvan offerings follow:</p>
                            <ArrowList
                                items={[
                                    'The same structure approval process',
                                    'The same asset-level review',
                                    'The same material event definitions',
                                    'The same reporting cadence',
                                ]}
                                className="mb-8 text-slate-700"
                            />
                            <div className="mt-auto rounded-lg bg-slate-50 p-4 font-semibold text-slate-900 text-center">
                                Governance discipline is identical.
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={200}>
                        <div className="h-full rounded-2xl border border-slate-200 p-8">
                            <SectionHeading line1="Liquidity" line2="Duration" size="md" className="mb-6" as="h2" />
                            <p className="mb-4 font-semibold text-slate-900">DST participation does not provide liquidity.</p>
                            <ArrowList
                                items={[
                                    'Offerings are closed-end',
                                    'No redemption feature',
                                    'Investors should expect to hold through duration',
                                    'Exit occurs via sale or refinance',
                                ]}
                                className="mb-8 text-slate-700"
                            />
                            <div className="mt-auto rounded-lg bg-slate-50 p-4 text-sm text-slate-600 text-center">
                                The DST is the wrapper. It does not change the closed-end nature of the offering.
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* 3. Suitability */}
                <Reveal>
                    <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
                        <div className="grid lg:grid-cols-2">
                            <div className="bg-slate-50 p-8 border-b lg:border-b-0 lg:border-r border-slate-200">
                                <h3 className="mb-6 text-lg font-bold text-slate-900">DST access may be appropriate for:</h3>
                                <Checklist
                                    items={[
                                        'Investors completing a 1031 exchange',
                                        'Investors with long-term capital commitments',
                                        'Investors advised by qualified tax professionals',
                                    ]}
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="mb-6 text-lg font-bold text-slate-900">DST access is NOT appropriate for:</h3>
                                <ArrowList
                                    items={[
                                        'Investors seeking liquidity',
                                        'Investors seeking tax advice from the platform',
                                        'Investors expecting risk mitigation from the wrapper',
                                    ]}
                                    className="text-slate-700"
                                />
                            </div>
                        </div>
                    </div>
                </Reveal>

            </div>
        </section>
    )
}