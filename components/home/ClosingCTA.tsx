// components/home/ClosingCTA.tsx
'use client'

import Link from 'next/link'
import RequestAccessButton from '@/components/RequestAccessButton'

export default function ClosingCTA() {
    return (
        <section className="bg-white py-24 border-t border-[#E5E7EB] text-center">
            <h2 className="text-3xl font-serif text-[#111827] mb-8">See how sponsors are evaluated</h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
                <RequestAccessButton className="bg-[#0A3F28] text-white px-10 py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#145A3C] transition shadow-lg cursor-pointer">
                    Request Institutional Access
                </RequestAccessButton>
                <Link href="/login">
                    <button className="border border-gray-300 text-[#111827] px-10 py-4 text-xs font-bold tracking-widest uppercase hover:bg-gray-50 transition">
                        Log In
                    </button>
                </Link>
            </div>
        </section>
    )
}
