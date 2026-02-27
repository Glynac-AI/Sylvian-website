import Reveal from "@/components/layout/Reveal"

export default function Section1() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 lg:text-5xl">
              Evidence comes from obligation, not self-reporting.
            </h1>

            <p className="max-w-3xl text-lg leading-relaxed text-slate-700">
              Evidence is produced by enforcing standardized reporting obligations,
              independent of what sponsors choose to communicate.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
