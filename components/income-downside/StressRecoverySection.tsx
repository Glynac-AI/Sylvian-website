import React from 'react';
import Reveal from '@/components/layout/Reveal';

export default function StressRecoverySection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl space-y-24">
        
        {/* Reserve Buffers */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <Reveal>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Reserve Buffers</h2>
            <p className="text-lg text-slate-600 mb-6">
              Each issuance includes pre-funded reserves at closing, typically covering:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-lg text-slate-700">
                <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-3" />
                operating expenses
              </li>
              <li className="flex items-center text-lg text-slate-700">
                <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-3" />
                senior debt service
              </li>
            </ul>
            <p className="text-lg text-slate-600">
              Reserves are designed to absorb temporary disruptions before distributions adjust.
              Reserves are replenished according to predefined priority rules before distributions normalize.
            </p>
          </Reveal>

          {/* Stress Metrics */}
          <Reveal delay={0.2}>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Stress Metrics (Context Only)</h2>
            <p className="text-lg text-slate-600 mb-6">
              Issuance materials typically include:
            </p>
            <ul className="space-y-3 mb-8">
              {['in-place DSCR', 'stress DSCR (e.g., modeled rent declines)', 'reserve coverage periods'].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="h-2 w-2 mt-2.5 bg-blue-600 rounded-full mr-4 shrink-0" />
                  <span className="text-lg text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <p className="text-slate-800 text-sm">
                These metrics provide context for downside risk. They do not imply guarantees.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Recovery & Normalization */}
        <Reveal>
          <div className="bg-slate-900 text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-8">Recovery & Normalization</h2>
            <p className="text-xl text-slate-300 mb-8">If operating performance improves:</p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                'reserves are replenished first',
                'distributions normalize thereafter',
                'leverage and structure remain unchanged'
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <span className="text-blue-400 font-bold text-xl mr-4">{i + 1}.</span>
                  <span className="text-lg text-slate-200">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 pt-8 border-t border-slate-800">
              <p className="text-xl font-medium text-blue-400">
                The structure governs behavior throughout the cycle.
              </p>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}