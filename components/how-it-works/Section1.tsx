import Reveal from "@/components/layout/Reveal"

export default function Section1() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <Reveal>
          <h1 className="text-4xl font-semibold text-slate-900">
            A Fixed Structure, Applied Repeatedly
          </h1>

          <p className="text-lg text-slate-700 max-w-3xl">
            Sylvan is built on a deliberately segmented architecture that separates
            structural risk, timing of income, and asset selection. This separation
            allows firms to evaluate new offerings without re-learning the investment.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal>
            <div className="rounded-2xl border border-slate-200 p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Structure Layer (Never Changes)
              </h3>

              <ul className="text-slate-700 space-y-2">
                <li>Capital position within the capital stack</li>
                <li>Maximum leverage limits</li>
                <li>Cash-flow priority and reserve rules</li>
                <li>Enforcement and amendment restrictions</li>
              </ul>

              <p className="text-slate-700 mt-4">
                This layer is approved once at the firm level and cannot be modified
                at the issuance level. If a deal requires special rules, it does not
                belong on Sylvan.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-slate-200 p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Series Layer (Timing, Not Risk)
              </h3>

              <ul className="text-slate-700 space-y-2">
                <li>Series I — Income Priority</li>
                <li>Series II — Offset</li>
                <li>Identical capital position</li>
                <li>Identical downside behavior</li>
              </ul>

              <p className="text-slate-700 mt-4">
                Series selection affects timing of income and depreciation, not
                leverage, priority, or risk. This is not tranching.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
