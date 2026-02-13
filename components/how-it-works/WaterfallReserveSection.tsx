import React from 'react'
import Reveal from '@/components/layout/Reveal'
import ArrowList from '@/components/ui/ArrowList'
import SectionHeading from '@/components/ui/SectionHeading'

export default function WaterfallReserveSection() {
  return (
    <section>
      <div className="section-inner">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Cash-Flow Waterfall */}
          <Reveal>
            <SectionHeading line1="Cash-Flow Waterfall" line2="Non-Discretionary" size="lg" className="mb-8" />
            <p className="text-base text-slate-600 mb-6 subtext">
              All cash flows follow a fixed order:
            </p>
            <ol className="list-decimal list-inside space-y-4 text-lg text-slate-700 font-medium">
              <li className="pl-2">Gross rent collected</li>
              <li className="pl-2">Operating expenses</li>
              <li className="pl-2">Required operating and debt service reserves</li>
              <li className="pl-2">Senior debt service</li>
              <li className="pl-2">Net distributable cash to Sylvan investors</li>
            </ol>
            <div className="mt-8 border border-slate-200 bg-white px-6 py-5">
              <p className="text-slate-800 font-semibold subtext">Distributions reflect actual operating performance.</p>
            </div>
          </Reveal>

          {/* Reserve Framework */}
          <Reveal delay={0.2}>
            <SectionHeading line1="Reserve" line2="Framework" size="lg" className="mb-8" />
            <p className="text-base text-slate-600 mb-6 subtext">
              Each issuance includes pre-funded reserves at closing, typically covering:
            </p>
            <ArrowList
              items={['Operating expenses', 'Senior debt service']}
              className="mb-8 text-slate-700"
            />
            <p className="text-base text-slate-600 leading-relaxed subtext">
              Reserves are used to absorb temporary disruptions before distributions adjust and are replenished according to predefined priority rules.
            </p>
          </Reveal>

        </div>
      </div>
    </section>
  );
}