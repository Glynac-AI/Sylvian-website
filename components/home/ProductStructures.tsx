// components/home/ProductStructures.tsx
'use client'

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
    return (
        <section className="bg-[#F9FAFB] py-32 border-b border-[#E5E7EB]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-4xl lg:text-5xl font-serif text-[#111827] mb-6">Three Standardized Product Structures</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Sylvan offers a small, fixed set of standardized structured-income products. Each structure serves a distinct purpose while operating under the same contractual, reporting, and disclosure framework.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.number} className="relative pt-8">
                            {/* Number Badge */}
                            <div className="absolute -top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#013220] rounded-full flex items-center justify-center z-10">
                                <span className="text-white text-2xl font-bold">{product.number}</span>
                            </div>

                            {/* Card */}
                            <div className="bg-white rounded-lg shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] pt-12 pb-8 px-8 text-center h-full">
                                <h3 className="font-serif text-2xl text-[#013220] mb-2">{product.title}</h3>
                                <p className="text-[#013220] text-sm mb-6">{product.subtitle}</p>
                                <div className="w-full h-px bg-[#013220] mb-6"></div>
                                <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
