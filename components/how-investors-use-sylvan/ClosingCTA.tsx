// components/how-investors-use-sylvan/ClosingCTA.tsx
'use client'

import Link from 'next/link'
import RequestAccessButton from '@/components/RequestAccessButton'

export default function ClosingCTA() {
    return (
        <section className="bg-[#111827] text-white py-32 text-center">
            <div className="max-w-4xl mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <RequestAccessButton className="bg-[#0A3F28] text-white px-10 py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#052e1c] transition shadow-lg border border-transparent cursor-pointer">
                        Request Access
                    </RequestAccessButton>
                    <Link href="/sponsor-standards">
                        <button className="border border-white/30 text-white px-10 py-4 text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition">
                            See Sponsor Standards
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
