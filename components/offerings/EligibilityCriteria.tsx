import React from 'react';
import Reveal from '@/components/layout/Reveal';

export default function EligibilityCriteria() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Asset Eligibility */}
          <Reveal>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Asset Eligibility</h2>
            <p className="text-lg text-slate-600 mb-6">
              To qualify for Sylvan, assets must meet defined criteria, including:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'stabilized operations',
                'sufficient rent history',
                'durable occupancy',
                'defined lease rollover schedules',
                'no development, lease-up, or value-add risk'
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="h-2 w-2 mt-2.5 bg-blue-600 rounded-full mr-4 shrink-0" />
                  <span className="text-lg text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="p-6 bg-white rounded-xl border border-slate-200">
              <p className="text-slate-800 italic">
                If an asset requires special rules or exceptions, it does not belong on Sylvan.
              </p>
            </div>
          </Reveal>

          {/* Issuance Size & Minimums */}
          <Reveal delay={0.2}>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Issuance Size & Minimums (Illustrative)</h2>
            <p className="text-lg text-slate-600 mb-6">Typical parameters include:</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="h-2 w-2 mt-2.5 bg-blue-600 rounded-full mr-4 shrink-0" />
                <span className="text-lg text-slate-700">minimum issuance size: approximately $25 million</span>
              </li>
              <li className="flex items-start">
                <span className="h-2 w-2 mt-2.5 bg-blue-600 rounded-full mr-4 shrink-0" />
                <span className="text-lg text-slate-700">target issuance size: approximately $40-75 million</span>
              </li>
              <li className="flex items-start">
                <span className="h-2 w-2 mt-2.5 bg-blue-600 rounded-full mr-4 shrink-0" />
                <span className="text-lg text-slate-700">minimum investment: approximately $50,000</span>
              </li>
            </ul>
            <p className="text-slate-500 text-sm">Actual parameters are disclosed per issuance.</p>
          </Reveal>

        </div>
      </div>
    </section>
  );
}