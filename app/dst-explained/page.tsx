import type { Metadata } from 'next'
import Reveal from '@/components/layout/Reveal'

export const metadata: Metadata = {
  title: 'DST Access Explained | Sylvan',
  description:
    'DST access is a legal wrapper for certain investors (including 1031 exchanges). The wrapper may change; the Sylvan structure does not.',
}

export default function DSTExplainedPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="relative overflow-hidden bg-linear-to-br from-slate-50 via-blue-50/20 to-slate-50 px-6 py-16">
        <div className="relative mx-auto max-w-[1280px]">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-600 backdrop-blur">
                Offerings
              </div>
              <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
                DST Access Explained
              </h1>
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-slate-600">
                A Legal Wrapper, Not a Different Investment
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-[1280px]">
          {/* Intro + emphasized distinction */}
          <div className="mx-auto max-w-[980px]">
            <Reveal>
              <div className="max-w-3xl">
                <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Overview
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-700">
                  In certain cases, Sylvan offerings may be made available
                  through a Delaware Statutory Trust (DST) to accommodate
                  investors completing a 1031 exchange.
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-700">
                  It is important to distinguish between the legal wrapper (DST)
                  and the investment structure (Sylvan).
                </p>

                <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        The wrapper
                      </div>
                      <div className="mt-1 text-base font-bold text-slate-900">
                        may change
                      </div>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        The structure
                      </div>
                      <div className="mt-1 text-base font-bold text-slate-900">
                        does not
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                    DST access exists for investor constraints; Sylvan exists
                    for repeatability of leverage, cash-flow priority,
                    governance, and downside behavior.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Sections */}
            <div className="mt-14 space-y-14">
                <div id="context" className="scroll-mt-28 border-t border-slate-200 pt-12">
                  <Reveal delay={60}>
                    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                      <div>
                        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                          What a DST Is (Context Only)
                        </h2>
                        <p className="mt-4 text-[15px] leading-relaxed text-slate-700">
                          A Delaware Statutory Trust is a legal entity commonly
                          used to hold real estate for investors seeking
                          potential 1031 exchange treatment.
                        </p>
                        <p className="mt-3 text-[15px] leading-relaxed text-slate-700">
                          DSTs are often used because they:
                        </p>
                        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-slate-700">
                          <li>can hold title to real estate</li>
                          <li>allow multiple investors to participate</li>
                          <li>may be compatible with certain tax-deferred exchanges</li>
                        </ul>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Reminder
                        </div>
                        <p className="mt-3 text-[15px] leading-relaxed text-slate-700">
                          Sylvan does not provide tax advice.
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </div>

                <div id="why" className="scroll-mt-28 border-t border-slate-200 pt-12">
                  <Reveal delay={80}>
                    <div>
                      <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                        Why DST Exists in Sylvan
                      </h2>
                      <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_1fr]">
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                            DST access exists to
                          </div>
                          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-slate-700">
                            <li>accommodate investor tax constraints</li>
                            <li>preserve continuity of structure</li>
                            <li>avoid creating a separate product category</li>
                          </ul>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                            DST availability does not
                          </div>
                          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-slate-700">
                            <li>change leverage limits</li>
                            <li>alter capital priority</li>
                            <li>modify governance or enforcement</li>
                            <li>introduce liquidity</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>

                <div id="changes" className="scroll-mt-28 border-t border-slate-200 pt-12">
                  <Reveal delay={100}>
                    <div>
                      <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                        What Changes vs. What Does Not
                      </h2>
                      <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-slate-600">
                        The DST may affect legal/tax pathways. The risk,
                        governance, and behavior of the investment remain defined
                        by the Sylvan structure.
                      </p>

                      <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                        <div className="grid lg:grid-cols-2 lg:divide-x lg:divide-slate-200">
                          <div className="bg-slate-50 p-8">
                            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                              What changes
                            </div>
                            <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-slate-700">
                              <li>the legal entity used to hold the assets</li>
                              <li>the investor’s tax reporting pathway</li>
                            </ul>
                          </div>
                          <div className="p-8">
                            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                              What does not change
                            </div>
                            <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-slate-700">
                              <li>asset risk</li>
                              <li>capital position</li>
                              <li>leverage limits</li>
                              <li>reserve rules</li>
                              <li>cash-flow waterfall</li>
                              <li>downside behavior</li>
                              <li>duration expectations</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>

                <div id="governance" className="scroll-mt-28 border-t border-slate-200 pt-12">
                  <Reveal delay={120}>
                    <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
                      <div>
                        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                          Governance Under a DST
                        </h2>
                        <p className="mt-4 text-[15px] leading-relaxed text-slate-700">
                          DST-based Sylvan offerings follow:
                        </p>
                        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-slate-700">
                          <li>the same structure approval process</li>
                          <li>the same asset-level review</li>
                          <li>the same material event definitions</li>
                          <li>the same reporting cadence</li>
                        </ul>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Summary
                        </div>
                        <p className="mt-3 text-[15px] font-semibold leading-relaxed text-slate-900">
                          Governance discipline is identical.
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </div>

                <div id="liquidity" className="scroll-mt-28 border-t border-slate-200 pt-12">
                  <Reveal delay={140}>
                    <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
                      <div>
                        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                          Liquidity &amp; Duration
                        </h2>
                        <p className="mt-4 text-[15px] leading-relaxed text-slate-700">
                          DST participation does not provide liquidity.
                        </p>
                        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-slate-700">
                          <li>offerings are closed-end</li>
                          <li>there is no redemption feature</li>
                          <li>investors should expect to hold through duration</li>
                          <li>exit occurs via sale or refinance</li>
                        </ul>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Plain English
                        </div>
                        <p className="mt-3 text-[15px] leading-relaxed text-slate-700">
                          The DST is the wrapper. It does not create liquidity or
                          change the closed-end nature of the offering.
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </div>

                <div id="misconceptions" className="scroll-mt-28 border-t border-slate-200 pt-12">
                  <Reveal delay={160}>
                    <div>
                      <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                        Common Misconceptions
                      </h2>

                      <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                        <div className="divide-y divide-slate-200">
                          {[
                            {
                              myth: 'DSTs are liquid',
                              fact: 'DSTs are closed-end vehicles',
                            },
                            {
                              myth: 'DSTs reduce investment risk',
                              fact: 'Risk is determined by assets, leverage, and governance',
                            },
                            {
                              myth: 'DSTs change downside behavior',
                              fact: 'Downside behavior is defined by the Sylvan structure',
                            },
                          ].map((row) => (
                            <div
                              key={row.myth}
                              className="grid gap-6 p-7 lg:grid-cols-2"
                            >
                              <div>
                                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                  Myth
                                </div>
                                <div className="mt-2 text-[15px] font-semibold text-slate-900">
                                  {row.myth}
                                </div>
                              </div>
                              <div>
                                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                  Fact
                                </div>
                                <div className="mt-2 text-[15px] font-semibold text-slate-900">
                                  {row.fact}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>

                <div id="suitability" className="scroll-mt-28 border-t border-slate-200 pt-12">
                  <Reveal delay={180}>
                    <div>
                      <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                        Suitability Considerations
                      </h2>

                      <div className="mt-7 grid gap-6 lg:grid-cols-2">
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
                          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                            DST access may be appropriate for
                          </div>
                          <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-slate-700">
                            <li>investors completing a 1031 exchange</li>
                            <li>investors with long-term capital commitments</li>
                            <li>investors advised by qualified tax professionals</li>
                          </ul>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-white p-7">
                          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                            DST access is not appropriate for
                          </div>
                          <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-slate-700">
                            <li>investors seeking liquidity</li>
                            <li>investors seeking tax advice from the platform</li>
                            <li>investors expecting risk mitigation from the wrapper</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
}


