import Reveal from "@/components/layout/Reveal"

export default function Section2() {
  return (
    <section className="pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <article className="py-16">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                SECTION 2 (01. Framework —)
              </p>
              <h2 className="text-2xl font-semibold text-slate-900 lg:text-3xl">
                Standardized Structures
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Every obligation follows the same framework.
              </p>
              <p className="text-slate-700 leading-relaxed">
                All offerings on Sylvan use identical structural foundations. Sponsors cannot customize structures or negotiate exceptions. This ensures behavior is observed under the same rules across sponsors and assets.
              </p>
            </div>
          </article>
        </Reveal>

        <Reveal delay={60}>
          <article className="py-16">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                SECTION 3 (02. Requirements —)
              </p>
              <h2 className="text-2xl font-semibold text-slate-900 lg:text-3xl">
                Mandatory Uniform Reporting
              </h2>
              <p className="text-slate-700 leading-relaxed">Reporting is not optional.</p>
              <p className="text-slate-700 leading-relaxed">
                Sponsors report on fixed schedules using standardized templates required by Sylvan. Custom sponsor formats are not permitted.
              </p>
              <p className="text-slate-900 leading-relaxed">
                "Reporting is a contractual requirement, not a courtesy."
              </p>
            </div>
          </article>
        </Reveal>

        <Reveal delay={120}>
          <article className="py-16">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                SECTION 4 (03. Observation —)
              </p>
              <h2 className="text-2xl font-semibold text-slate-900 lg:text-3xl">
                Platform-Tracked Events
              </h2>
              <p className="text-slate-700 leading-relaxed">Behavior is captured as it happens.</p>
              <p className="text-slate-700 leading-relaxed">
                Sylvan records and timestamps every payment event, reserve balance, disclosure, and draw request as it occurs. Nothing is reconstructed after the fact or summarized by the sponsor. The record exists independently of what the sponsor chooses to communicate.
              </p>
            </div>
          </article>
        </Reveal>

        <Reveal delay={180}>
          <article className="py-16">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                SECTION 5 (04. Accountability —)
              </p>
              <h2 className="text-2xl font-semibold text-slate-900 lg:text-3xl">
                Enforcement and Accountability
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Non-compliance is logged, reviewed, and acted on.
              </p>
              <p className="text-slate-700 leading-relaxed">
                When a sponsor misses a reporting deadline, breaches a covenant, or discloses a problem late, that event is logged, flagged, and reviewed by Sylvan's governance committee. Sponsors who demonstrate a pattern of opacity or underperformance lose access to capital on the platform.
              </p>
              <p className="text-slate-900 leading-relaxed">
                "The integrity of sponsor operating records takes precedence over platform volume."
              </p>
            </div>
          </article>
        </Reveal>

        <Reveal delay={240}>
          <article className="py-16">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                SECTION 6 (05. Integrity —)
              </p>
              <h2 className="text-2xl font-semibold text-slate-900 lg:text-3xl">
                Auditability and Record Integrity
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Evidence is timestamped and reviewable.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Sylvan maintains timestamped event logs, version-controlled reporting history, and preserved disclosure timelines. The record cannot be edited retroactively by the sponsor. What happened is what the record shows.
              </p>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-900">
                SPONSOR OPERATING RECORDS ARE BUILT TO WITHSTAND SCRUTINY.
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
