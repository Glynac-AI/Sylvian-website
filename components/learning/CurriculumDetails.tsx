import React from 'react'
import Reveal from '@/components/layout/Reveal'
import ArrowList from '@/components/ui/ArrowList'
import SectionHeading from '@/components/ui/SectionHeading'

export default function CurriculumDetails() {
  return (
    <section>
      <div className="section-inner">
        
        {/* Purpose */}
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-20">
            <SectionHeading line1="Purpose" line2="Statement" align="center" size="lg" className="mb-8" />
            <p className="text-base text-slate-600 mb-8 subtext">Sylvan Learning exists to:</p>
            <ArrowList
              items={[
                'Reduce interpretation variance across teams',
                'Align investment and compliance understanding',
                'Support consistent client communication',
                'Reinforce governance boundaries',
              ]}
              className="text-slate-700"
            />
            <p className="mt-8 text-lg font-semibold text-slate-800 subtext">
              Training focuses on how the structure works, not how to sell it.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Topics Covered */}
          <Reveal delay={0.1}>
            <SectionHeading line1="Topics" line2="Covered" size="md" className="mb-6" as="h3" />
            <p className="text-slate-600 mb-6 subtext">Typical learning modules address:</p>
            <ArrowList
              items={[
                'The Sylvan structure and capital position',
                'Income mechanics and downside behavior',
                'Series I vs. Series II timing differences',
                'Governance and enforcement rules',
                'Operational workflows and reporting',
                'Suitability framing and limitations',
              ]}
              className="mb-8 text-slate-700"
            />
            <p className="text-slate-500 italic subtext">Each topic reinforces what does not change across issuances.</p>
          </Reveal>

          {/* Formats */}
          <Reveal delay={0.2}>
            <SectionHeading line1="Learning" line2="Formats" size="md" className="mb-6" as="h3" />
            <p className="text-slate-600 mb-6 subtext">Learning materials may include:</p>
            <ArrowList
              items={['Written guides', 'Visual diagrams', 'Recorded walkthroughs', 'Live training sessions']}
              className="text-slate-800"
            />
            <p className="mt-6 text-slate-600 subtext">Formats are chosen for clarity and repeatability.</p>
          </Reveal>

        </div>
      </div>
    </section>
  )
}