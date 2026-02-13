import React from 'react'
import Reveal from '@/components/layout/Reveal'
import ArrowList from '@/components/ui/ArrowList'
import BannerQuote from '@/components/ui/BannerQuote'
import SectionHeading from '@/components/ui/SectionHeading'

export default function EligibilityCriteria() {
  return (
    <section>
      <div className="section-inner">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Asset Eligibility */}
          <Reveal>
            <SectionHeading line1="Asset" line2="Eligibility" size="lg" className="mb-8" />
            <p className="text-base text-slate-600 mb-6 subtext">
              To qualify for Sylvan, assets must meet defined criteria, including:
            </p>
            <ArrowList
              items={[
                'Stabilized operations',
                'Sufficient rent history',
                'Durable occupancy',
                'Defined lease rollover schedules',
                'No development, lease-up, or value-add risk',
              ]}
              className="mb-8 text-slate-700"
            />
            <BannerQuote backgroundClassName="bg-white">
              If an asset requires special rules or exceptions, it does not belong on Sylvan.
            </BannerQuote>
          </Reveal>

          {/* Issuance Size & Minimums */}
          <Reveal delay={0.2}>
            <SectionHeading line1="Issuance Size" line2="and Minimums" size="lg" className="mb-8" />
            <p className="text-base text-slate-600 mb-6 subtext">Typical parameters include:</p>
            <ArrowList
              items={[
                'Minimum issuance size: approximately $25 million',
                'Target issuance size: approximately $40 to 75 million',
                'Minimum investment: approximately $50,000',
              ]}
              className="mb-8 text-slate-700"
            />
            <p className="text-slate-500 text-sm subtext">Actual parameters are disclosed per issuance.</p>
          </Reveal>

        </div>
      </div>
    </section>
  )
}