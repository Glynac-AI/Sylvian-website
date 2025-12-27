import React from 'react';
import Reveal from '@/components/layout/Reveal';

export default function HistoryAndUpdate() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Historical Comparisons */}
          <Reveal>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Historical Comparisons</h2>
            <p className="text-lg text-slate-600 mb-6">Where appropriate, the library may contain:</p>
            <ul className="space-y-3 mb-6">
              {[
                'comparisons across prior Sylvan issuances',
                'structural consistency checks',
                'reporting format evolution'
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="h-1.5 w-1.5 bg-slate-400 rounded-full mr-3 mt-2.5" />
                  <span className="text-lg text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-600">
              Historical materials are retained to demonstrate continuity and discipline.
            </p>
          </Reveal>

          {/* Update Policy */}
          <Reveal delay={0.2}>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Update Policy</h2>
            <ul className="space-y-4 mb-8">
              {[
                'Updates are issued on a versioned basis',
                'Superseded materials are archived',
                'Changes are documented and communicated'
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="h-2 w-2 mt-2.5 bg-blue-600 rounded-full mr-4 shrink-0" />
                  <span className="text-lg text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-900 font-semibold">
              This prevents silent drift over time.
            </p>
          </Reveal>

        </div>
      </div>
    </section>
  );
}