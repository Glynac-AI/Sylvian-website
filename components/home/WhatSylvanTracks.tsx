// components/home/WhatSylvanTracks.tsx
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const signals = [
    {
        title: "Payment reliability and source",
        description: "Whether obligations are met on time and whether payments come from asset cash flow or sponsor capital."
    },
    {
        title: "Capital discipline",
        description: "How reserves are managed and how frequently additional capital support is required."
    },
    {
        title: "Forecast accuracy",
        description: "How projections compare to actual performance and how sponsors adjust when conditions change."
    },
    {
        title: "Disclosure patterns",
        description: "How quickly issues are disclosed, how transparently they are communicated, and how often prior reports are revised."
    },
    {
        title: "Consistency over time",
        description: "Whether behavior is stable across assets and market conditions or varies unpredictably."
    }
]

export default function WhatSylvanTracks() {
    const sectionRef = useRef(null)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    })

    const visualY = useTransform(scrollYProgress, [0, 1], [60, -60])

    return (
        <section ref={sectionRef} className="py-28 md:py-36 px-6 bg-gradient-to-br from-[#F8FAF9] to-[#F3F4F1] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-[#095520]/[0.02] rounded-full blur-3xl" />
                <div className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] bg-[#008929]/[0.02] rounded-full blur-3xl" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10" ref={ref}>
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="text-center"
                    >
                        <h2 className="text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] font-semibold leading-[1.2] tracking-[-0.02em] text-[#095520] mb-4">
                            What Sylvan Tracks
                        </h2>
                        <p className="text-base md:text-lg text-black/70 leading-relaxed max-w-2xl mx-auto">
                            Sylvan measures sponsor behavior through five observable signals captured across every transaction:
                        </p>
                    </motion.div>

                    <div className="space-y-5">
                        {signals.map((signal, index) => (
                            <motion.div
                                key={signal.title}
                                className="flex gap-4 bg-white/50 rounded-xl p-5 md:p-6 border border-[#095520]/8 hover:border-[#095520]/15 transition-colors"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#095520] flex items-center justify-center text-white text-base font-semibold">
                                    {index + 1}
                                </div>
                                <div className="pt-0.5 flex-1">
                                    <h3 className="text-lg md:text-xl font-semibold text-[#095520] mb-2">
                                        {signal.title}
                                    </h3>
                                    <p className="text-base md:text-lg text-black/70 leading-relaxed">
                                        {signal.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Closing text and CTAs */}
                    <motion.div
                        className="space-y-8 pt-6 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <p className="text-base text-black/70 leading-relaxed italic">
                            These signals aggregate into longitudinal sponsor operating records.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                            <Link href="/request-access">
                                <motion.button
                                    className="group inline-flex items-center gap-2.5 px-7 py-4 bg-[#095520] text-yellow-400 rounded-full font-semibold text-sm uppercase tracking-[0.1em] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Request Institutional Access
                                    <svg
                                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2.5}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </motion.button>
                            </Link>

                            <Link href="/sponsor-evaluation">
                                <motion.button
                                    className="inline-flex items-center gap-2 px-7 py-4 border border-[#095520] text-[#095520] rounded-full font-semibold text-sm uppercase tracking-[0.1em] hover:bg-[#095520] hover:text-yellow-400 transition-all duration-200"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    See how sponsors are evaluated
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
