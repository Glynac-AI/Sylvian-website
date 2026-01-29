// components/home/ProductStructures.tsx
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const products = [
    {
        title: "Asset-Level Senior Secured Notes",
        description: "Designed for stabilized or near-stabilized assets with predictable cash flow. These notes prioritize capital preservation and current income through senior security, defined payment priority, and shorter to moderate duration.",
        tag: "Stabilized"
    },
    {
        title: "Bridge and Refinance Notes",
        description: "Designed for assets undergoing refinancing, repositioning, or interim execution steps. These notes carry higher return potential than stabilized notes, reflecting increased timing and execution risk over a defined transition period.",
        tag: "Transitional"
    },
    {
        title: "Completion and Construction-to-Stabilization Notes",
        description: "Designed for late-stage development or completion phases where capital is required to deliver or stabilize an asset. These notes reflect higher return expectations due to construction, budget, and delivery risk, with defined milestones and duration.",
        tag: "Development"
    }
]

export default function ProductStructures() {
    const sectionRef = useRef(null)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    })

    const visualY = useTransform(scrollYProgress, [0, 1], [60, -60])

    return (
        <section ref={sectionRef} className="py-28 md:py-36 px-6 bg-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#095520]/[0.015] rounded-full blur-3xl" />
                <div className="absolute inset-0 opacity-[0.008]" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #095520 1px, transparent 0)`, backgroundSize: '48px 48px' }} />
            </div>

            <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h2 className="text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] font-semibold leading-[1.2] tracking-[-0.02em] text-[#095520] mb-4">
                            Three Standardized Product Structures
                        </h2>
                        <p className="text-base md:text-lg text-black/70 leading-relaxed">
                            Sylvan offers a small, fixed set of standardized structured-income products. Each structure serves a distinct purpose while operating under the same contractual, reporting, and disclosure framework.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.title}
                                className="bg-[#F3F4F1] rounded-xl p-8 border border-[#095520]/8 hover:border-[#095520]/15 hover:shadow-md transition-all flex flex-col h-full"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <h3 className="text-xl md:text-2xl font-bold text-[#095520] leading-tight pb-4 border-b border-[#095520]/20">
                                    {product.title}
                                </h3>
                                <p className="text-base md:text-lg text-black/70 leading-[1.7] pt-4 flex-1">
                                    {product.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
