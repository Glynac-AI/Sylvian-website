import React from 'react';

export default function WhatSylvanTracks() {
  const metrics = [
    {
      num: "01",
      title: "Payment Reliability",
      desc: "Whether scheduled payments are made on time, with each payment logged by due and receipt date."
    },
    {
      num: "02",
      title: "Capital Discipline",
      desc: "Whether obligations are met from asset cash flow or sponsor capital, with each payment tracked by source, timing, and amount."
    },
    {
      num: "03",
      title: "Forecast Accuracy",
      desc: "How projections compare to actual results, with forecasts shown against performance and variance clearly measured."
    },
    {
      num: "04",
      title: "Disclosure Patterns",
      desc: "How quickly and transparently issues are disclosed, with timing and revisions tracked."
    },
    {
      num: "05",
      title: "Consistency Over Time",
      desc: "Whether behavior remains consistent across assets and market cycles, revealing execution patterns over time."
    }
  ];

  return (
    // Reduced outer padding from py-[120px] to py-[80px]
    <section className="py-[80px] px-6 lg:px-10 bg-[#E8EBE4] flex justify-center">
      <div className="max-w-[1300px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#CFD6C9] border border-[#CFD6C9]">
        
        {/* Header Cell - Reduced inner padding to py-[40px] px-8 */}
        <div className="bg-[#0A3F28] py-[40px] px-8 flex flex-col justify-center md:col-span-2 lg:col-span-1">
          <h2 className="text-4xl font-serif font-medium leading-[1.1] mb-4 text-white">
            Sylvan's<br/>Measurement System
          </h2>
          <p className="text-base text-gray-200 leading-relaxed">
            Sylvan measures sponsor behavior through five observable signals captured across every deal. These signals aggregate into longitudinal sponsor operating records.
          </p>
        </div>

        {/* Metric Cells */}
        {metrics.map((metric, idx) => (
          <div 
            key={idx} 
            className="bg-[#E8EBE4] py-[40px] px-8 flex flex-col transition-colors duration-300 hover:bg-[#DDE2D8]"
          >
            {/* Reduced number size to text-3xl and margin */}
            <div className="font-serif text-3xl text-[#D9B44A] mb-4 leading-none italic">
              {metric.num}
            </div>
            {/* Reduced title to text-xl */}
            <h3 className="text-xl font-serif font-medium mb-2 text-[#013220]">
              {metric.title}
            </h3>
            {/* Reduced description size to text-sm */}
            <p className="text-sm text-[#4B5563] leading-relaxed">
              {metric.desc}
            </p>
          </div>
        ))}
        
      </div>
    </section>
  );
}