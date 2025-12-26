import Reveal from "@/components/layout/Reveal"

export default function Section2() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <Reveal>
          <div className="rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Issuance Layer (Varies)
            </h2>

            <p className="text-slate-700 mb-4 max-w-3xl">
              An issuance is a specific offering backed by identified properties.
              Each issuance includes defined assets, fixed leverage, reserve levels,
              duration, and a predefined exit path. Assets do not change after closing.
            </p>

            <ul className="text-slate-700 space-y-2">
              <li>Defined assets and locations</li>
              <li>Historical rent data</li>
              <li>Lease rollover schedules</li>
              <li>Fixed leverage and reserves</li>
              <li>Defined duration and exit terms</li>
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              What Never Changes vs What Can Change
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Never Changes
                </h3>
                <ul className="text-slate-700 space-y-2">
                  <li>Legal structure</li>
                  <li>Capital priority</li>
                  <li>Leverage limits</li>
                  <li>Cash-flow and reserve rules</li>
                  <li>Governance and reporting standards</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Can Change
                </h3>
                <ul className="text-slate-700 space-y-2">
                  <li>Occupancy</li>
                  <li>Tenant performance</li>
                  <li>Operating expenses</li>
                  <li>Resulting distributions</li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Lifecycle Overview
            </h2>

            <p className="text-slate-700 max-w-3xl">
              In practice, firms follow a simple lifecycle: approve structure, review
              issuance, allocate, monitor, and exit. This lifecycle repeats over time
              without re-approving the framework.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
