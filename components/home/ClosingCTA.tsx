// components/home/ClosingCTA.tsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import RequestAccessButton from '@/components/RequestAccessButton'

export default function ClosingCTA() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="bg-white py-24 border-t border-[#E5E7EB] text-center overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                {/* Updated Heading: One line, no italics */}
                <h2 className="text-3xl lg:text-4xl font-serif text-[#111827] mb-8 leading-tight">
                    See how sponsors are evaluated
                </h2>
                
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
            </motion.div>
        </section>
    )
}