import Reveal from '@/components/layout/Reveal'

const faqs = [
    {
        q: "Is this a fund?",
        a: "No. Each Sylvan offering is closed-end, issuance-specific, and backed by identified properties. Assets do not rotate."
    },
    {
        q: "Can the structure ever change?",
        a: "No. Capital position, leverage limits, cash-flow rules, and governance constraints are defined at issuance and cannot be amended."
    },
    {
        q: "What happens if performance deteriorates?",
        a: "Reserves are used to absorb disruptions. Distributions may be reduced. Leverage does NOT increase. Governance continues."
    },
    {
        q: "Can distributions go to zero?",
        a: "Yes. If operating performance deteriorates significantly, distributions may be suspended to preserve capital. Leverage is never increased to support distributions."
    },
    {
        q: "Where does Sylvan sit in the capital stack?",
        a: "Below senior bank debt. Above sponsor equity. Sponsor equity is the first-loss position."
    },
    {
        q: "Is Sylvan liquid?",
        a: "No. Offerings are closed-end with no redemption feature. Investors should expect to hold through the full duration."
    },
    {
        q: "Does Sylvan smooth income?",
        a: "No. Distributions reflect actual operating performance after expenses and reserves."
    }
]

export default function FAQList() {
    return (
        <section className="bg-white px-6 py-24">
            <div className="mx-auto max-w-3xl">
                <div className="space-y-6">
                    {faqs.map((item, i) => (
                        <Reveal key={i} delay={i * 50}>
                            <div className="rounded-2xl border border-slate-200 p-8">
                                <h3 className="mb-4 text-xl font-bold text-slate-900">{item.q}</h3>
                                <p className="text-slate-600">{item.a}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={400}>
                    <div className="mt-16 text-center">
                        <h3 className="mb-4 text-xl font-bold text-slate-900">How should advisors explain Sylvan?</h3>
                        <div className="rounded-xl bg-slate-50 p-8 text-lg italic text-slate-700">
                            &quot;We&apos;re investing in income-producing real estate through a consistent structure. Each investment is backed by specific properties, but the rules, leverage, and income mechanics stay the same.&quot;
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}