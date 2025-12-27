import React from 'react';
import Reveal from '@/components/layout/Reveal';

export default function DetailedProhibitions() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Operational Prohibitions</h2>
            <p className="text-xl text-slate-300">Under the Sylvan framework:</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              'Assets cannot be substituted',
              'Leverage cannot be increased',
              'Mezzanine or incremental debt cannot be added',
              'Discretionary amendments are not permitted'
            ].map((item, i) => (
              <div key={i} className="flex items-center bg-slate-800 p-6 rounded-xl border border-slate-700">
                <span className="text-red-400 text-2xl mr-4">✕</span>
                <span className="text-lg font-medium text-slate-200">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-slate-400">
              If any of these actions are required, the issuance does not belong on Sylvan.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}