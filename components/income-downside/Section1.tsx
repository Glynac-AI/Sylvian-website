import Reveal from "@/components/layout/Reveal"

export default function Section1() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <Reveal>
          <h1 className="text-4xl font-semibold text-slate-900">
            Income & Downside Behavior
          </h1>

          <p className="text-lg text-slate-700 max-w-3xl">
            Sylvan is designed to deliver private real estate income in a way that is
            predictable in structure, even when outcomes vary. Income is governed by
            rules defined at issuance.
          </p>
        </Reveal>

        <Reveal>
          <div className="rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Observed Income Principle
            </h2>

            <ul className="text-slate-700 space-y-2">
              <li>Rent actually collected</li>
              <li>Expenses actually incurred</li>
              <li>Debt service actually paid</li>
            </ul>

            <p className="text-slate-700 mt-4">
              There are no projections, no return targets, and no smoothing mechanisms.
              Distributions reflect reality.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Cash-Flow Waterfall
            </h2>

            <ol className="list-decimal list-inside text-slate-700 space-y-2">
              <li>Gross rent collected</li>
              <li>Operating expenses</li>
              <li>Required operating and debt service reserves</li>
              <li>Senior debt service</li>
              <li>Net distributable cash to Sylvan investors</li>
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
