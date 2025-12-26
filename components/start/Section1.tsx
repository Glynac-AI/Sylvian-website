import Reveal from "@/components/layout/Reveal"

export default function Section1() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h1 className="text-4xl font-semibold text-slate-900 mb-8">
            The Core Idea
          </h1>

          <p className="text-lg text-slate-700 max-w-3xl mb-16">
            Sylvan exists to solve a specific problem for registered investment advisors:
            how to allocate to private real estate income repeatedly, without increasing
            operational burden, client confusion, or long-term trust risk.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Reveal>
            <div className="rounded-2xl border border-slate-200 p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Chief Investment Officers
              </h3>
              <ul className="text-slate-700 space-y-2">
                <li>One-time approval of structure</li>
                <li>Asset-level review thereafter</li>
                <li>Clear downside behavior and enforcement rules</li>
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-slate-200 p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Chief Compliance Officers
              </h3>
              <ul className="text-slate-700 space-y-2">
                <li>Consistent instrument classification</li>
                <li>Version-controlled materials</li>
                <li>Exam-ready documentation and records</li>
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-slate-200 p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Advisors
              </h3>
              <ul className="text-slate-700 space-y-2">
                <li>Explainable income allocations</li>
                <li>No performance promises</li>
                <li>Clear client communication</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
