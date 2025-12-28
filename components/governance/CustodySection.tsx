import React from 'react';
import Reveal from '@/components/layout/Reveal';

export default function CustodySection() {
  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <Reveal>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Custody & Recordkeeping</h2>
          <div className="grid gap-6 text-left max-w-2xl mx-auto">
            <div className="flex items-start">
              <span className="h-2 w-2 mt-2.5 bg-blue-600 rounded-full mr-4 shrink-0" />
              <p className="text-lg text-slate-700">
                Investor assets are held at the investor&apos;s custodian
              </p>
            </div>
            <div className="flex items-start">
              <span className="h-2 w-2 mt-2.5 bg-blue-600 rounded-full mr-4 shrink-0" />
              <p className="text-lg text-slate-700">Sylvan does not custody or transmit client funds or securities</p>
            </div>
            <div className="flex items-start">
              <span className="h-2 w-2 mt-2.5 bg-blue-600 rounded-full mr-4 shrink-0" />
              <p className="text-lg text-slate-700">Subscription and settlement align with custodian workflows</p>
            </div>
          </div>
          <div className="mt-12 p-6 bg-slate-50 rounded-xl inline-block text-left">
            <p className="text-slate-800 font-medium">Sylvan maintains governance and documentation records only.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}