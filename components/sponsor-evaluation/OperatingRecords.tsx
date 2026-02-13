// components/sponsor-evaluation/OperatingRecords.tsx
'use client'

import Link from 'next/link'
import RequestAccessButton from '@/components/RequestAccessButton'

export default function OperatingRecords() {
    return (
        <section className="bg-[#013220] py-32 text-white text-center border-t border-[#095520]">
            <div className="max-w-4xl mx-auto px-6">
                <div className="w-16 h-1 bg-[#D9B44A] mx-auto mb-8"></div>
                <h2 className="text-2xl lg:text-3xl font-serif mb-6">Sponsor Operating Records<br /></h2>
                <p className="text-xl text-gray-300 font-serif italic mb-12">Longitudinal, comparable, decision-ready</p>

                <div className="grid md:grid-cols-3 gap-8 mb-16 text-left">
                    <div className="p-6 border border-[#095520] bg-white/5 rounded">
                        <h3 className="text-[#D9B44A] font-bold uppercase text-xs tracking-widest mb-2">Aggregate</h3>
                        <p className="text-sm text-gray-300">All observed behavior aggregates into sponsor operating records that include time-series behavior trends.</p>
                    </div>
                    <div className="p-6 border border-[#095520] bg-white/5 rounded">
                        <h3 className="text-[#D9B44A] font-bold uppercase text-xs tracking-widest mb-2">Detail</h3>
                        <p className="text-sm text-gray-300">Deal-level drill-downs allow you to isolate specific asset performance within a sponsor's portfolio.</p>
                    </div>
                    <div className="p-6 border border-[#095520] bg-white/5 rounded">
                        <h3 className="text-[#D9B44A] font-bold uppercase text-xs tracking-widest mb-2">Summary</h3>
                        <p className="text-sm text-gray-300">Sponsor-level summaries provide a high-level view of operating character and capital discipline.</p>
                    </div>
                </div>

                <div className="inline-block border border-white/20 p-8 rounded-sm bg-white/5 backdrop-blur-sm mb-12">
                    <p className="text-lg leading-relaxed font-serif text-white">
                        "There are no ratings, scores, or endorsements.<br />
                        <span className="text-[#D9B44A]">Sylvan provides evidence. Investors draw conclusions.</span>"
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <RequestAccessButton className="bg-[#D9B44A] text-[#013220] px-10 py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#E5C05D] transition shadow-lg border border-transparent cursor-pointer">
                        Request Institutional Access
                    </RequestAccessButton>
                    <Link href="/evaluation-methodology">
                        <button className="border border-white/30 text-white px-10 py-4 text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition">
                            See How Evidence Is Produced
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
