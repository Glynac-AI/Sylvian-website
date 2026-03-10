// components/sponsor-evaluation/OperatingRecords.tsx
'use client'

import Link from 'next/link'
import RequestAccessButton from '@/components/RequestAccessButton'

export default function OperatingRecords() {
    return (
        <section className="bg-[#013220] py-24 text-white text-center border-t border-[#095520]">
            <div className="max-w-4xl mx-auto px-6">
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