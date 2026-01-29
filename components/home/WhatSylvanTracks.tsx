// components/home/WhatSylvanTracks.tsx
'use client'

export default function WhatSylvanTracks() {
    return (
        <section className="bg-[#111827] py-32 text-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20 max-w-2xl mx-auto">
                    <span className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.15em] mb-4 block">
                        Observable Signals
                    </span>
                    <h2 className="text-4xl font-serif mb-6">What Sylvan Tracks</h2>
                    <p className="text-gray-400 leading-relaxed">
                        Sylvan measures sponsor behavior through five observable signals captured across every transaction. These signals aggregate into longitudinal sponsor operating records.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {/* Payment Reliability */}
                    <div className="bg-gray-800 p-6 rounded border border-gray-700 hover:border-[#D9B44A] transition group">
                        <div className="h-24 mb-6 border-b border-gray-700 flex items-end pb-4 gap-1">
                            <div className="w-1.5 h-6 bg-green-500 rounded-sm"></div>
                            <div className="w-1.5 h-6 bg-green-500 rounded-sm"></div>
                            <div className="w-1.5 h-6 bg-green-500 rounded-sm"></div>
                            <div className="w-1.5 h-12 bg-green-500 rounded-sm shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                            <div className="w-1.5 h-6 bg-green-500 rounded-sm"></div>
                        </div>
                        <h3 className="text-[#D9B44A] font-bold text-xs uppercase tracking-widest mb-3">
                            Payment Reliability
                        </h3>
                        <p className="text-[11px] text-gray-400 leading-relaxed">
                            Whether obligations are met on time and whether payments come from asset cash flow or sponsor capital.
                        </p>
                    </div>

                    {/* Capital Discipline */}
                    <div className="bg-gray-800 p-6 rounded border border-gray-700 hover:border-[#D9B44A] transition group">
                        <div className="h-24 mb-6 border-b border-gray-700 flex items-center">
                            <div className="w-full h-1 bg-gray-600 rounded-full relative">
                                <div className="absolute left-0 top-0 h-1 bg-[#D9B44A] w-4/5 rounded-full"></div>
                                <div className="absolute right-0 -top-4 text-[9px] font-mono text-[#D9B44A]">80% RES</div>
                            </div>
                        </div>
                        <h3 className="text-[#D9B44A] font-bold text-xs uppercase tracking-widest mb-3">
                            Capital Discipline
                        </h3>
                        <p className="text-[11px] text-gray-400 leading-relaxed">
                            How reserves are managed and how frequently additional capital support is required.
                        </p>
                    </div>

                    {/* Forecast Accuracy */}
                    <div className="bg-gray-800 p-6 rounded border border-gray-700 hover:border-[#D9B44A] transition group">
                        <div className="h-24 mb-6 border-b border-gray-700 flex items-center justify-center relative">
                            <svg width="100%" height="40" fill="none">
                                <path d="M0,20 Q25,10 50,20 T100,20" stroke="#6B7280" strokeDasharray="2,2" strokeWidth="1"/>
                                <path d="M0,20 Q25,12 50,20 T100,20" stroke="#D9B44A" strokeWidth="1.5"/>
                            </svg>
                        </div>
                        <h3 className="text-[#D9B44A] font-bold text-xs uppercase tracking-widest mb-3">
                            Forecast Accuracy
                        </h3>
                        <p className="text-[11px] text-gray-400 leading-relaxed">
                            How projections compare to actual performance and how sponsors adjust when conditions change.
                        </p>
                    </div>

                    {/* Disclosure Patterns */}
                    <div className="bg-gray-800 p-6 rounded border border-gray-700 hover:border-[#D9B44A] transition group">
                        <div className="h-24 mb-6 border-b border-gray-700 flex items-center">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-3 h-3 rounded-full bg-red-500 animate-ping absolute opacity-75"></div>
                                    <div className="w-3 h-3 rounded-full bg-red-600 relative"></div>
                                </div>
                                <div>
                                    <span className="block text-[9px] font-mono text-gray-400 uppercase">Alert Time</span>
                                    <span className="block text-sm font-mono text-white">01:45:00</span>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-[#D9B44A] font-bold text-xs uppercase tracking-widest mb-3">
                            Disclosure Patterns
                        </h3>
                        <p className="text-[11px] text-gray-400 leading-relaxed">
                            How quickly issues are disclosed, how transparently they are communicated, and how often prior reports are revised.
                        </p>
                    </div>

                    {/* Consistency Over Time */}
                    <div className="bg-gray-800 p-6 rounded border border-gray-700 hover:border-[#D9B44A] transition group">
                        <div className="h-24 mb-6 border-b border-gray-700 flex items-end gap-1.5 pb-4 justify-center">
                            <div className="w-2 bg-gray-600 h-6"></div>
                            <div className="w-2 bg-gray-600 h-6"></div>
                            <div className="w-2 bg-gray-600 h-6"></div>
                            <div className="w-2 bg-[#D9B44A] h-6"></div>
                            <div className="w-2 bg-gray-600 h-6"></div>
                        </div>
                        <h3 className="text-[#D9B44A] font-bold text-xs uppercase tracking-widest mb-3">
                            Consistency Over Time
                        </h3>
                        <p className="text-[11px] text-gray-400 leading-relaxed">
                            Whether behavior is stable across assets and market conditions or varies unpredictably.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
