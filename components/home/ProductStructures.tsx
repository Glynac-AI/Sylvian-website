// components/home/ProductStructures.tsx
'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const products = [
    {
        number: 1,
        title: 'Completion Notes',
        subtitle: 'Construction & Stabilization',
        description: 'Designed for late-stage development or completion phases where capital is required to deliver or stabilize an asset. These notes reflect higher return expectations due to construction, budget, and delivery risk, with defined milestones and duration.'
    },
    {
        number: 2,
        title: 'Bridge & Refinance',
        subtitle: 'Transitional Execution',
        description: 'Designed for assets undergoing refinancing, repositioning, or interim execution steps. These notes carry higher return potential than stabilized notes, reflecting increased timing and execution risk over a defined transition period.'
    },
    {
        number: 3,
        title: 'Senior Secured Notes',
        subtitle: 'Stabilized Asset Base',
        description: 'Designed for stabilized or near-stabilized assets with predictable cash flow. These notes prioritize capital preservation and current income through senior security, defined payment priority, and shorter to moderate duration.'
    }
]

export default function ProductStructures() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="bg-white py-32 border-b border-[#E5E7EB] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div 
                    className="text-center mb-20 max-w-3xl mx-auto"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    {/* Updated Heading: One line, no italics */}
                    <h2 className="text-3xl lg:text-4xl font-serif text-[#111827] mb-6 leading-tight">
                        Three Standardized Product Structures
                    </h2>
                    
                    <p className="text-base text-gray-600 leading-normal max-w-2xl mx-auto">
                        Sylvan offers a small, fixed set of standardized structured-income products. Each structure serves a distinct purpose while operating under the same contractual, reporting, and disclosure framework.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div 
                            key={product.number} 
                            className="relative pt-8"
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 + (index * 0.1), ease: 'easeOut' }}
                        >
                            <div className="absolute -top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#013220] rounded-full flex items-center justify-center z-10">
                                <span className="text-white text-2xl font-bold">{product.number}</span>
                            </div>

                            <div className="bg-white rounded-lg shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] pt-12 pb-8 px-8 text-center h-full border border-gray-100">
                                <h3 className="font-serif text-2xl text-[#013220] mb-2">{product.title}</h3>
                                <p className="text-[#013220] text-sm mb-6">{product.subtitle}</p>
                                <div className="w-full h-px bg-[#013220] mb-6"></div>
                                <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}