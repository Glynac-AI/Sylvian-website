import React from 'react'
import Reveal from '@/components/layout/Reveal'
import ArrowList from '@/components/ui/ArrowList'
import Checklist from '@/components/ui/Checklist'
import SectionHeading from '@/components/ui/SectionHeading'

export default function CommAndChecklists() {
  return (
    <section>
      <div className="section-inner">
        <div className="grid md:grid-cols-2 gap-20">
          
          {/* Client Communication Themes */}
          <Reveal>
            <SectionHeading line1="Client" line2="Communication Themes" size="md" className="mb-8" />
            <p className="text-base text-slate-600 mb-6 subtext">Approved communication emphasizes:</p>
            <ArrowList
              items={[
                'Structure over performance',
                'Income behavior over targets',
                'Governance over discretion',
                'Clarity over persuasion',
              ]}
              className="mb-8 text-slate-700"
            />
            <p className="text-slate-600 italic subtext">
              Sylvan discourages improvised explanations that could create confusion or liability.
            </p>
          </Reveal>

          {/* Operational Checklists */}
          <Reveal delay={0.2}>
            <div className="flex items-center justify-between mb-6">
              <SectionHeading line1="Operational" line2="Checklists" size="md" as="h2" />
              <span className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-slate-600">
                Auditable Record
              </span>
            </div>
            <p className="text-base text-slate-600 mb-6 subtext">Operational resources may include:</p>
            <Checklist
              items={[
                'Issuance setup checklists',
                'Reporting cadence checklists',
                'Material event handling procedures',
                'Exit process outlines',
              ]}
              className="mb-8"
            />
            <div className="border border-slate-200 bg-white px-6 py-5">
              <p className="text-slate-800 font-medium subtext">These checklists support predictable execution.</p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}