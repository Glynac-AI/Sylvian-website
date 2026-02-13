import React from 'react'
import Reveal from '@/components/layout/Reveal'
import ArrowList from '@/components/ui/ArrowList'
import SectionHeading from '@/components/ui/SectionHeading'

export default function StressRecoverySection() {
  return (
    <section>
      <div className="section-inner space-y-24">
        
        {/* Reserve Buffers */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <Reveal>
            <SectionHeading line1="Reserve" line2="Buffers" size="lg" className="mb-6" />
            <p className="text-base text-slate-600 mb-6 subtext">
              Each issuance includes pre-funded reserves at closing, typically covering:
            </p>
            <ArrowList
              items={['Operating expenses', 'Senior debt service']}
              className="mb-6 text-slate-700"
            />
            <p className="text-base text-slate-600 subtext">
              Reserves are designed to absorb temporary disruptions before distributions adjust.
              Reserves are replenished according to predefined priority rules before distributions normalize.
            </p>
          </Reveal>

          {/* Stress Metrics */}
          <Reveal delay={0.2}>
            <SectionHeading line1="Stress Metrics" line2="Context Only" size="lg" className="mb-6" />
            <p className="text-base text-slate-600 mb-6 subtext">
              Issuance materials typically include:
            </p>
            <ArrowList
              items={['In-place DSCR', 'Stress DSCR (modeled rent declines)', 'Reserve coverage periods']}
              className="mb-8 text-slate-700"
            />
            <div className="border border-slate-200 bg-white px-6 py-5">
              <p className="text-slate-800 text-sm subtext">
                These metrics provide context for downside risk. They do not imply guarantees.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Recovery & Normalization */}
        <Reveal>
          <div className="border border-slate-200 bg-white rounded-2xl p-12">
            <SectionHeading line1="Recovery" line2="Normalization" size="lg" className="mb-8" />
            <p className="text-base text-slate-600 mb-8 subtext">If operating performance improves:</p>
            <ArrowList
              items={[
                'Reserves are replenished first',
                'Distributions normalize thereafter',
                'Leverage and structure remain unchanged',
              ]}
              className="text-slate-700"
            />
            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-base font-medium text-slate-800 subtext">
                The structure governs behavior throughout the cycle.
              </p>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}