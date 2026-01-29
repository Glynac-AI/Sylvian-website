// components/home/ClosingCTA.tsx
'use client'

import Link from 'next/link'
import RequestAccessButton from '@/components/RequestAccessButton'

export default function ClosingCTA() {
    return (
        <footer className="bg-white py-24 border-t border-[#E5E7EB] text-center">
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
            <div className="mt-20 pt-8 border-t border-[#E5E7EB] max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between text-[10px] text-gray-400 uppercase tracking-widest gap-4">
                <span>&copy; 2024 Sylvan Financial</span>
                <div className="space-x-6">
                    <a href="#" className="hover:text-[#0A3F28]">Privacy</a>
                    <a href="#" className="hover:text-[#0A3F28]">Terms</a>
                    <a href="#" className="hover:text-[#0A3F28]">Contact</a>
                </div>
            </div>
        </footer>
    )
}
