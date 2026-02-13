// components/evaluation-methodology/NeutralByDesign.tsx
'use client'

import Link from 'next/link'
import RequestAccessButton from '@/components/RequestAccessButton'

export default function NeutralByDesign() {
    return (
        <section className="bg-[#013220] text-white py-32 text-center border-t border-[#095520]">
            <div className="max-w-4xl mx-auto px-6">
                <div className="w-16 h-1 bg-[#D9B44A] mx-auto mb-8"></div>
                <h2 className="text-2xl lg:text-3xl font-serif mb-12">Neutral by Design<br /></h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center text-xs font-bold uppercase tracking-widest text-gray-300">
                    <div className="border-t border-[#095520] pt-4">No Ratings</div>
                    <div className="border-t border-[#095520] pt-4">No Rankings</div>
                    <div className="border-t border-[#095520] pt-4">No Recommendations</div>
                    <div className="border-t border-[#095520] pt-4">No Optimization</div>
                </div>

                <div className="inline-block border border-white/20 p-8 rounded-sm bg-white/5 backdrop-blur-sm mb-12">
                    <p className="text-lg leading-relaxed font-serif text-white">
                        "The platform records what happens.<br />
                        <span className="text-[#D9B44A]">Investors decide what it means.</span>"
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <RequestAccessButton className="bg-[#D9B44A] text-[#013220] px-10 py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#E5C05D] transition shadow-lg border border-transparent cursor-pointer">
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
