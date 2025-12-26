import Reveal from "@/components/layout/Reveal"

export default function Section2() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <Reveal>
          <div className="rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              What Sylvan Is — and Is Not
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Sylvan Is</h3>
                <ul className="text-slate-700 space-y-2">
                  <li>A standardized investment structure</li>
                  <li>A review and documentation workflow</li>
                  <li>A platform for governance and audit readiness</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Sylvan Is Not</h3>
                <ul className="text-slate-700 space-y-2">
                  <li>An issuer of securities</li>
                  <li>An investment adviser</li>
                  <li>A broker-dealer</li>
                  <li>A custodian of client assets</li>
                  <li>A commingled fund</li>
                  <li>A discretionary strategy</li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Capital Discipline (At a Glance)
            </h2>

            <ul className="text-slate-700 space-y-2">
              <li>Below senior bank debt</li>
              <li>Above sponsor equity</li>
              <li>Sponsor equity in a first-loss position</li>
            </ul>

            <p className="text-slate-700 mt-4 max-w-3xl">
              Leverage limits, payment priority, and reserve rules are defined at
              issuance and cannot change after closing.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
