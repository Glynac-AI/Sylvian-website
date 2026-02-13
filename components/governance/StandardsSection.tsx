import Reveal from '@/components/layout/Reveal'
import Checklist from '@/components/ui/Checklist'
import SectionHeading from '@/components/ui/SectionHeading'

export default function StandardsSection() {
    return (
        <section>
            <div className="section-inner">
                <div className="grid gap-8 lg:grid-cols-2">
                    
                    {/* Issuer Qualification Standards */}
                    <Reveal>
                        <div className="flex h-full flex-col border border-slate-200 p-8">
                            <div className="mb-6 flex items-center justify-between">
                                <SectionHeading
                                    line1="Issuer Qualification"
                                    line2="Standards"
                                    size="md"
                                    as="h3"
                                />
                                <span className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-slate-600">
                                    Issuer Standard
                                </span>
                            </div>
                            <p className="mb-6 text-slate-600 subtext">Issuers must demonstrate discipline through:</p>
                            <Checklist
                                items={[
                                    'Meaningful retained equity in a first-loss position',
                                    'Consistent leverage practices',
                                    'Standardized reporting capabilities',
                                    'Willingness to operate within fixed governance constraints',
                                ]}
                                className="mb-8"
                            />
                            <div className="mt-auto text-sm font-semibold text-slate-900">
                                Issuers that require flexibility outside the Sylvan framework are not eligible.
                            </div>
                        </div>
                    </Reveal>

                    {/* Portfolio Controls */}
                    <Reveal delay={200}>
                        <div className="flex h-full flex-col border border-slate-200 p-8">
                            <div className="mb-6 flex items-center justify-between">
                                <SectionHeading
                                    line1="Portfolio"
                                    line2="Controls"
                                    size="md"
                                    as="h3"
                                />
                                <span className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-slate-600">
                                    Control Set
                                </span>
                            </div>
                            <p className="mb-6 text-slate-600 subtext">Firms may establish portfolio-level controls, including:</p>
                            <Checklist
                                items={[
                                    'Maximum allocation per issuance',
                                    'Issuer concentration limits',
                                    'Geographic or asset-type constraints',
                                ]}
                                className="mb-8"
                            />
                            <div className="mt-auto text-sm font-semibold text-slate-900">
                                Allocations outside defined parameters require explicit approval and documentation.
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}