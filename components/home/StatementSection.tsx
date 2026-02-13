// components/home/StatementSection.tsx
'use client'

export default function StatementSection() {
    return (
        <section className="bg-white py-24 border-b border-[#E5E7EB]">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <div className="w-12 h-1 bg-[#0A3F28] mx-auto mb-10"></div>
                <h2 className="text-2xl lg:text-3xl font-serif leading-relaxed text-[#111827] mb-10">
                    Sylvan gives you what sponsor diligence has always lacked:<br /><span className="italic">observable, repeatable{' '}
                    <span className="text-[#0A3F28]">behavioral evidence</span> under real financial obligation.</span>
                </h2>
                                <div className="grid md:grid-cols-2 gap-12 text-left text-gray-600 text-lg leading-relaxed">
                    <p>
                        You see how sponsors manage cash flow stress, maintain reserves, disclose problems, and forecast performance, not through sponsor-controlled reporting, but through uniform contractual requirements enforced by Sylvan.                    </p>
                    <p>
                        Sponsor evaluation no longer depends on what a sponsor chooses to show. It depends on contractual obligations where non-compliance has immediate, enforceable consequences.                    </p>
                </div>
            </div>
        </section>
    )
}
