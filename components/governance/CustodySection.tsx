import React from 'react'
import Reveal from '@/components/layout/Reveal'
import ArrowList from '@/components/ui/ArrowList'
import SectionHeading from '@/components/ui/SectionHeading'

export default function CustodySection() {
  return (
    <section>
      <div className="section-inner text-center">
        <Reveal>
          <SectionHeading line1="Custody and" line2="Recordkeeping" align="center" size="lg" className="mb-8" />
          <div className="mx-auto max-w-2xl text-left">
            <ArrowList
              items={[
                "Investor assets are held at the investor's custodian",
                'Sylvan does not custody or transmit client funds or securities',
                'Subscription and settlement align with custodian workflows',
              ]}
              className="text-slate-700"
            />
          </div>
          <div className="mt-12 inline-block border border-slate-200 bg-white px-6 py-5 text-left">
            <p className="text-slate-800 font-medium subtext">Sylvan maintains governance and documentation records only.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}