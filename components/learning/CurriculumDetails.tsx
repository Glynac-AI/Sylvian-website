import React from 'react';
import Reveal from '@/components/layout/Reveal';

export default function CurriculumDetails() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Purpose */}
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Purpose</h2>
            <p className="text-lg text-slate-600 mb-8">Sylvan Learning exists to:</p>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                'reduce interpretation variance across teams',
                'align investment and compliance understanding',
                'support consistent client communication',
                'reinforce governance boundaries'
              ].map((item, i) => (
                <div key={i} className="flex items-start p-4 bg-slate-50 rounded-lg">
                  <span className="text-blue-600 mr-3">●</span>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-xl font-semibold text-slate-800">
              Training focuses on how the structure works, not how to sell it.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Topics Covered */}
          <Reveal delay={0.1}>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Topics Covered</h3>
            <p className="text-slate-600 mb-6">Typical learning modules address:</p>
            <ul className="space-y-3 mb-8">
              {[
                'the Sylvan structure and capital position',
                'income mechanics and downside behavior',
                'Series I vs. Series II timing differences',
                'governance and enforcement rules',
                'operational workflows and reporting',
                'suitability framing and limitations'
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-3 mt-2.5" />
                  <span className="text-lg text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-500 italic">Each topic reinforces what does not change across issuances.</p>
          </Reveal>

          {/* Formats */}
          <Reveal delay={0.2}>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Formats</h3>
            <p className="text-slate-600 mb-6">Learning materials may include:</p>
            <div className="grid grid-cols-1 gap-4">
              {[
                'written guides',
                'visual diagrams',
                'recorded walkthroughs',
                'live training sessions'
              ].map((item, i) => (
                <div key={i} className="flex items-center bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <span className="text-blue-600 font-bold mr-4">0{i + 1}</span>
                  <span className="text-slate-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-slate-600">Formats are chosen for clarity and repeatability.</p>
          </Reveal>

        </div>
      </div>
    </section>
  );
}