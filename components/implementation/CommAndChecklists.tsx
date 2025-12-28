import React from 'react';
import Reveal from '@/components/layout/Reveal';

export default function CommAndChecklists() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-20">
          
          {/* Client Communication Themes */}
          <Reveal>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Client Communication Themes</h2>
            <p className="text-lg text-slate-600 mb-6">Approved communication emphasizes:</p>
            <ul className="space-y-4 mb-8">
              {[
                'structure over performance',
                'income behavior over targets',
                'governance over discretion',
                'clarity over persuasion'
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="h-2 w-2 mt-2.5 bg-blue-600 rounded-full mr-4 shrink-0" />
                  <span className="text-lg text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-600 italic">
              Sylvan discourages improvised explanations that could create confusion or liability.
            </p>
          </Reveal>

          {/* Operational Checklists */}
          <Reveal delay={0.2}>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Operational Checklists</h2>
            <p className="text-lg text-slate-600 mb-6">Operational resources may include:</p>
            <ul className="space-y-4 mb-8">
              {[
                'issuance setup checklists',
                'reporting cadence checklists',
                'material event handling procedures',
                'exit process outlines'
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="h-2 w-2 mt-2.5 bg-blue-600 rounded-full mr-4 shrink-0" />
                  <span className="text-lg text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="p-6 bg-slate-50 rounded-xl">
              <p className="text-slate-800 font-medium">These checklists support predictable execution.</p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}