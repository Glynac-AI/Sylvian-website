import Reveal from "@/components/layout/Reveal"

export default function Section2() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <Reveal>
          <div className="rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Downside Sequence
            </h2>

            <ol className="list-decimal list-inside text-slate-700 space-y-2">
              <li>Operating performance weakens</li>
              <li>Reserves are used to absorb shortfalls</li>
              <li>Distributions may be reduced or suspended</li>
              <li>Leverage remains unchanged</li>
              <li>Governance and reporting continue</li>
              <li>Exit timing may be adjusted to preserve income</li>
            </ol>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              What Never Happens
            </h2>

            <ul className="text-slate-700 space-y-2">
              <li>Leverage is not increased to support income</li>
              <li>No mezzanine or incremental debt is added</li>
              <li>Assets are not substituted after closing</li>
              <li>Rules are not rewritten midstream</li>
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <p className="text-slate-700 max-w-3xl">
            Sylvan does not eliminate risk. It eliminates surprise by defining
            downside behavior in advance and applying it consistently across
            offerings.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
