// components/home/StatementSection.tsx
'use client'

export default function StatementSection() {
    return (
        <section className="bg-gray-50 py-24 border-b border-[#E5E7EB]">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <div className="w-12 h-1 bg-[#0A3F28] mx-auto mb-10"></div>
                <h2 className="text-3xl lg:text-4xl font-serif leading-relaxed text-[#111827] mb-10">
                    Sylvan gives you what sponsor diligence has always lacked: observable, repeatable{' '}
                    <span className="text-[#0A3F28] italic">behavioral evidence</span> under real financial obligation.
                </h2>
                                <div className="grid md:grid-cols-2 gap-12 text-left text-gray-600 text-lg leading-relaxed">
                    <p>
                        See how sponsors manage cash flow stress, maintain reserves, and forecast performance through uniform contractual requirements enforced by Sylvan, not sponsor-controlled reporting.
                    </p>
                    <p>
                        Sponsor evaluation now depends on contractual obligations with enforceable consequences, not on what sponsors choose to show.
                    </p>
                </div>
            </div>
        </section>
    )
}
