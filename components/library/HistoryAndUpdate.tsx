import React from 'react'
import Reveal from '@/components/layout/Reveal'
import ArrowList from '@/components/ui/ArrowList'
import SectionHeading from '@/components/ui/SectionHeading'

export default function HistoryAndUpdate() {
  return (
    <section>
      <div className="section-inner">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Historical Comparisons */}
          <Reveal>
            <SectionHeading line1="Historical" line2="Comparisons" size="md" className="mb-6" />
            <p className="text-base text-slate-600 mb-6 subtext">Where appropriate, the library may contain:</p>
            <ArrowList
              items={[
                'Comparisons across prior Sylvan issuances',
                'Structural consistency checks',
                'Reporting format evolution',
              ]}
              className="mb-6 text-slate-700"
            />
            <p className="text-slate-600 subtext">
              Historical materials are retained to demonstrate continuity and discipline.
            </p>
          </Reveal>

          {/* Update Policy */}
          <Reveal delay={0.2}>
            <SectionHeading line1="Update" line2="Policy" size="md" className="mb-6" />
            <ArrowList
              items={[
                'Updates are issued on a versioned basis',
                'Superseded materials are archived',
                'Changes are documented and communicated',
              ]}
              className="mb-8 text-slate-700"
            />
            <p className="text-slate-900 font-semibold subtext">
              This prevents silent drift over time.
            </p>
          </Reveal>

        </div>
      </div>
    </section>
  )
}