import Reveal from "@/components/layout/Reveal"

export default function Section1() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <Reveal>
          <h1 className="text-4xl font-semibold text-slate-900">
            Portfolio Role
          </h1>

          <p className="text-lg text-slate-700 max-w-3xl">
            Sylvan is designed to occupy a defined role within a diversified
            portfolio: contractual real estate income with clearly defined
            downside behavior.
          </p>
        </Reveal>

        <Reveal>
          <div className="rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Intended Role
            </h2>

            <ul className="text-slate-700 space-y-2">
              <li>Income-focused allocation</li>
              <li>Complement to traditional fixed income</li>
              <li>Alternative to opaque private funds</li>
              <li>Defined behavior in stress scenarios</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
