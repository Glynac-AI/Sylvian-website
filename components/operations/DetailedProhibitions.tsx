import React from 'react'
import Reveal from '@/components/layout/Reveal'
import ArrowList from '@/components/ui/ArrowList'
import SectionHeading from '@/components/ui/SectionHeading'

export default function DetailedProhibitions() {
  return (
    <section>
      <div className="section-inner">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <SectionHeading line1="Operational" line2="Prohibitions" align="center" size="lg" className="mb-6" />
            <p className="text-base text-slate-600 subtext">Under the Sylvan framework:</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <ArrowList
              items={[
                'Assets cannot be substituted',
                'Leverage cannot be increased',
                'Mezzanine or incremental debt cannot be added',
                'Discretionary amendments are not permitted',
              ]}
              className="text-slate-700"
            />
          </div>

          <div className="text-center mt-16">
            <p className="text-base text-slate-600 subtext">
              If any of these actions are required, the issuance does not belong on Sylvan.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}