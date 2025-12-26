import Reveal from "@/components/layout/Reveal"

export default function Section2() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <Reveal>
          <div className="rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">
              How Sylvan Compares
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Private Funds
                </h3>
                <ul className="text-slate-700 space-y-2">
                  <li>Opaque structures</li>
                  <li>Manager discretion</li>
                  <li>Limited transparency</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  REITs
                </h3>
                <ul className="text-slate-700 space-y-2">
                  <li>Market price volatility</li>
                  <li>Equity-like drawdowns</li>
                  <li>No contractual income priority</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Private Credit
                </h3>
                <ul className="text-slate-700 space-y-2">
                  <li>Often asset-light</li>
                  <li>Limited property-level linkage</li>
                  <li>Varying enforcement quality</li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p className="text-slate-700 max-w-3xl">
            Sylvan does not seek to replace these allocations. It provides a
            standardized, repeatable alternative for advisors allocating to
            private real estate income.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
