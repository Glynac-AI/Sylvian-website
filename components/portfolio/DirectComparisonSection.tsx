import React from 'react';
import Reveal from '@/components/layout/Reveal';

export default function DirectComparisonSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <Reveal>
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Comparison: Sylvan vs. Direct Property Ownership</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-3 bg-slate-100 p-6 border-b border-slate-200 font-semibold text-slate-900">
              <div>Feature</div>
              <div>Sylvan</div>
              <div>Direct Ownership</div>
            </div>
            {[
              { feature: 'Governance', sylvan: 'Institutional', direct: 'Owner-dependent' },
              { feature: 'Reporting', sylvan: 'Standardized', direct: 'Varies' },
              { feature: 'Ring-fencing', sylvan: 'Built-in', direct: 'Often manual' },
              { feature: 'Scale efficiency', sylvan: 'High', direct: 'Limited' },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 p-6 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                <div className="font-medium text-slate-900">{row.feature}</div>
                <div className="text-blue-600 font-medium">{row.sylvan}</div>
                <div className="text-slate-600">{row.direct}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}