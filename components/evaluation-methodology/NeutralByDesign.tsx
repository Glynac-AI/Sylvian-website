// components/evaluation-methodology/NeutralByDesign.tsx
'use client'

import Link from 'next/link'
import RequestAccessButton from '@/components/RequestAccessButton'

export default function NeutralByDesign() {
    return (
        <section className="bg-[#111827] text-white py-32 text-center">
            <div className="max-w-4xl mx-auto px-6">
                <div className="w-12 h-1 bg-[#D9B44A] mx-auto mb-8"></div>
                <h2 className="text-4xl lg:text-5xl font-serif mb-12">Neutral by Design</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center text-xs font-bold uppercase tracking-widest text-[#4B5563]">
                    <div className="border-t border-[#4B5563] pt-4">No Ratings</div>
                    <div className="border-t border-[#4B5563] pt-4">No Rankings</div>
                    <div className="border-t border-[#4B5563] pt-4">No Recommendations</div>
                    <div className="border-t border-[#4B5563] pt-4">No Optimization</div>
                </div>

                <p className="text-2xl font-serif leading-relaxed mb-12 text-gray-300">
                    "The platform records what happens.<br />
                    <span className="text-white italic">Investors decide what it means.</span>"
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <RequestAccessButton className="bg-[#0A3F28] text-white px-10 py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#052e1c] transition shadow-lg border border-transparent cursor-pointer">
                        Request Institutional Access
                    </RequestAccessButton>
                    <Link href="/how-investors-use-sylvan">
                        <button className="border border-white/30 text-white px-10 py-4 text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition">
                            See how investors use Sylvan
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
