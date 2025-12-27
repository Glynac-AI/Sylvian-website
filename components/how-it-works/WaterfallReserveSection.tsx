import React from 'react';
import Reveal from '@/components/layout/Reveal';

export default function WaterfallReserveSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Cash-Flow Waterfall */}
          <Reveal>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Cash-Flow Waterfall (Non-Discretionary)</h2>
            <p className="text-lg text-slate-600 mb-6">
              All cash flows follow a fixed order:
            </p>
            <ol className="list-decimal list-inside space-y-4 text-lg text-slate-700 font-medium">
              <li className="pl-2">Gross rent collected</li>
              <li className="pl-2">Operating expenses</li>
              <li className="pl-2">Required operating and debt service reserves</li>
              <li className="pl-2">Senior debt service</li>
              <li className="pl-2">Net distributable cash to Sylvan investors</li>
            </ol>
            <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-200">
              <p className="text-slate-800 font-semibold">Distributions reflect actual operating performance.</p>
            </div>
          </Reveal>

          {/* Reserve Framework */}
          <Reveal delay={0.2}>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Reserve Framework</h2>
            <p className="text-lg text-slate-600 mb-6">
              Each issuance includes pre-funded reserves at closing, typically covering:
            </p>
            <ul className="space-y-4 mb-8">
              {['operating expenses', 'senior debt service'].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="h-2 w-2 mt-2.5 bg-blue-600 rounded-full mr-4 shrink-0" />
                  <span className="text-lg text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-slate-600 leading-relaxed">
              Reserves are used to absorb temporary disruptions before distributions adjust and are replenished according to predefined priority rules.
            </p>
          </Reveal>

        </div>
      </div>
    </section>
  );
}