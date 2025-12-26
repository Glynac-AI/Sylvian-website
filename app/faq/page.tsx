import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Reveal from '@/components/layout/Reveal'

export const metadata: Metadata = {
  title: 'FAQ | Sylvan',
  description:
    'Clear answers to common questions from CIOs, CCOs, advisors, and clients about Sylvan’s standardized structure and governance.',
}

type FAQItem = {
  id: string
  question: string
  answer: ReactNode
}

type FAQSection = {
  id: string
  title: string
  description?: string
  items: FAQItem[]
}

function Answer({ children }: { children: ReactNode }) {
  return (
    <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-slate-700">
      {children}
    </div>
  )
}

function BulletList({ children }: { children: ReactNode }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-slate-700">
      {children}
    </ul>
  )
}

const SECTIONS: FAQSection[] = [
  {
    id: 'overview',
    title: 'Overview',
    description: 'Plain-English definitions and what Sylvan is (and is not).',
    items: [
      {
        id: 'what-is-sylvan',
        question: 'What is Sylvan?',
        answer: (
          <Answer>
            <p>
              Sylvan is a standardized framework for investing in private real
              estate income using fixed rules for leverage, cash flow,
              governance, and downside behavior, even as underlying properties
              change.
            </p>
          </Answer>
        ),
      },
      {
        id: 'is-this-a-fund',
        question: 'Is this a fund?',
        answer: (
          <Answer>
            <p className="font-semibold text-slate-900">No.</p>
            <p>Each Sylvan offering is:</p>
            <BulletList>
              <li>closed-end</li>
              <li>issuance-specific</li>
              <li>backed by identified properties</li>
              <li>governed by rules fixed at issuance</li>
            </BulletList>
            <p>Assets do not rotate or change after closing.</p>
          </Answer>
        ),
      },
      {
        id: 'what-does-structured-mean',
        question: 'What does “structured” mean here?',
        answer: (
          <Answer>
            <p>
              “Structured” refers to fixed governance rules, including leverage
              limits, payment priority, and enforcement mechanics.
            </p>
            <p>It does not refer to:</p>
            <BulletList>
              <li>derivatives</li>
              <li>engineered payoffs</li>
              <li>options or swaps</li>
              <li>return targeting</li>
            </BulletList>
          </Answer>
        ),
      },
    ],
  },
  {
    id: 'governance',
    title: 'Governance & Change Control',
    description: 'Who controls what after closing, and what cannot be changed.',
    items: [
      {
        id: 'who-makes-decisions',
        question: 'Who makes decisions after closing?',
        answer: (
          <Answer>
            <p>Property owners manage day-to-day operations.</p>
            <p>
              Capital structure, leverage limits, reserve rules, and payment
              priority are fixed and cannot be changed after closing.
            </p>
          </Answer>
        ),
      },
      {
        id: 'can-structure-change',
        question: 'Can the structure ever change?',
        answer: (
          <Answer>
            <p className="font-semibold text-slate-900">No.</p>
            <p>
              Capital position, leverage limits, cash-flow rules, and governance
              constraints are defined at issuance and cannot be amended at the
              issuance level.
            </p>
            <p>
              If a deal requires special rules, it does not qualify for Sylvan.
            </p>
          </Answer>
        ),
      },
    ],
  },
  {
    id: 'downside',
    title: 'Downside & Distributions',
    description: 'How the structure behaves when performance weakens.',
    items: [
      {
        id: 'what-happens-if-performance-deteriorates',
        question: 'What happens if performance deteriorates?',
        answer: (
          <Answer>
            <p>When performance weakens:</p>
            <BulletList>
              <li>Reserves are used to absorb temporary disruptions</li>
              <li>Distributions may be reduced or suspended</li>
              <li>Leverage does not increase</li>
              <li>Governance and reporting continue</li>
              <li>Downside behavior is predefined and documented</li>
            </BulletList>
          </Answer>
        ),
      },
      {
        id: 'can-distributions-go-to-zero',
        question: 'Can distributions go to zero?',
        answer: (
          <Answer>
            <p className="font-semibold text-slate-900">Yes.</p>
            <p>
              If operating performance deteriorates significantly,
              distributions may be reduced or temporarily suspended to preserve
              asset and capital integrity. Leverage is not increased to support
              distributions.
            </p>
          </Answer>
        ),
      },
      {
        id: 'does-sylvan-smooth-income',
        question: 'Does Sylvan smooth or stabilize income?',
        answer: (
          <Answer>
            <p className="font-semibold text-slate-900">No.</p>
            <p>
              Distributions reflect actual operating performance after
              expenses, reserves, and debt service.
            </p>
          </Answer>
        ),
      },
    ],
  },
  {
    id: 'stack-and-comparisons',
    title: 'Capital Stack & Comparisons',
    description: 'How Sylvan sits in the stack and how it compares to common alternatives.',
    items: [
      {
        id: 'where-in-capital-stack',
        question: 'Where does Sylvan sit in the capital stack?',
        answer: (
          <Answer>
            <p>Sylvan capital sits:</p>
            <BulletList>
              <li>below senior bank debt</li>
              <li>above sponsor equity</li>
            </BulletList>
            <p>Sponsor equity is the first-loss position.</p>
          </Answer>
        ),
      },
      {
        id: 'compare-to-private-re-funds',
        question: 'How does Sylvan compare to private real estate funds?',
        answer: (
          <Answer>
            <p>Unlike many funds, Sylvan:</p>
            <BulletList>
              <li>fixes leverage and rules at issuance</li>
              <li>does not rotate assets</li>
              <li>limits manager discretion</li>
              <li>standardizes governance across offerings</li>
            </BulletList>
          </Answer>
        ),
      },
      {
        id: 'compare-to-reits',
        question: 'How does Sylvan compare to REITs?',
        answer: (
          <Answer>
            <p>REITs offer daily liquidity and market pricing.</p>
            <p>Sylvan offers:</p>
            <BulletList>
              <li>ring-fenced assets</li>
              <li>rent-linked income</li>
              <li>no public market volatility</li>
              <li>closed-end exposure</li>
            </BulletList>
            <p>They serve different portfolio roles.</p>
          </Answer>
        ),
      },
    ],
  },
  {
    id: 'tax-and-wrappers',
    title: 'Tax & Wrappers',
    description: 'How to think about accounts, 1031 questions, and DST structure.',
    items: [
      {
        id: 'taxable-vs-tax-advantaged',
        question: 'Is this suitable for taxable or tax-advantaged accounts?',
        answer: (
          <Answer>
            <p>Both, depending on objectives.</p>
            <p>
              Series selection affects timing of cash and depreciation, not
              risk. Investors should consult their tax advisors.
            </p>
          </Answer>
        ),
      },
      {
        id: 'is-this-1031',
        question: 'Is Sylvan a 1031 or tax strategy?',
        answer: (
          <Answer>
            <p className="font-semibold text-slate-900">No.</p>
            <p>
              Sylvan provides a standardized investment structure. Tax
              treatment and 1031 eligibility depend on the investor’s
              circumstances and advisors.
            </p>
          </Answer>
        ),
      },
      {
        id: 'dst-risk',
        question: 'Does using a DST change the risk?',
        answer: (
          <Answer>
            <p className="font-semibold text-slate-900">No.</p>
            <p>
              A DST is a legal wrapper. Asset risk, leverage, governance, and
              downside behavior remain the same.
            </p>
          </Answer>
        ),
      },
    ],
  },
  {
    id: 'liquidity-and-exit',
    title: 'Liquidity & Exit',
    description: 'Expected holding period, redemption expectations, and exit mechanics.',
    items: [
      {
        id: 'is-sylvan-liquid',
        question: 'Is Sylvan liquid?',
        answer: (
          <Answer>
            <p className="font-semibold text-slate-900">No.</p>
            <p>
              Sylvan offerings are closed-end. There is no redemption feature.
              Investors should expect to hold through the full duration.
            </p>
          </Answer>
        ),
      },
      {
        id: 'what-happens-at-exit',
        question: 'What happens at exit?',
        answer: (
          <Answer>
            <p>
              Exit occurs via asset sale or refinance under predefined terms.
              Exit timing may be extended when income preservation is
              preferable to a forced sale.
            </p>
          </Answer>
        ),
      },
      {
        id: 'who-is-not-for',
        question: 'Who is Sylvan not for?',
        answer: (
          <Answer>
            <p>Sylvan is not designed for:</p>
            <BulletList>
              <li>investors seeking liquidity</li>
              <li>investors seeking development or value-add risk</li>
              <li>investors seeking return targeting or opportunistic growth</li>
            </BulletList>
          </Answer>
        ),
      },
    ],
  },
  {
    id: 'advisor-messaging',
    title: 'Advisor Messaging',
    description: 'Simple client language and consistency for exam defensibility.',
    items: [
      {
        id: 'how-to-explain-to-clients',
        question: 'How should advisors explain Sylvan to clients?',
        answer: (
          <Answer>
            <p className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-800">
              “We’re investing in income-producing real estate through a
              consistent structure. Each investment is backed by specific
              properties, but the rules, leverage, and income mechanics stay
              the same. That makes the income easier to manage over time.”
            </p>
          </Answer>
        ),
      },
      {
        id: 'can-advisors-use-own-words',
        question: 'Can advisors explain this in their own words?',
        answer: (
          <Answer>
            <p>
              Firms typically use approved Sylvan language and materials to
              ensure consistency and exam defensibility.
            </p>
          </Answer>
        ),
      },
    ],
  },
]

function FAQCard({ item }: { item: FAQItem }) {
  return (
    <details
      id={item.id}
      className="group scroll-mt-28 rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm transition-colors hover:border-slate-300 open:border-blue-200 open:bg-blue-50/30"
    >
      <summary className="cursor-pointer list-none select-none">
        <div className="flex items-start justify-between gap-6">
          <div className="text-base font-semibold leading-snug text-slate-900">
            {item.question}
          </div>
          <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all group-hover:text-slate-700 group-open:rotate-45">
            <span className="text-lg leading-none">+</span>
          </div>
        </div>
      </summary>
      {item.answer}
    </details>
  )
}

export default function FAQPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="relative overflow-hidden bg-linear-to-br from-slate-50 via-blue-50/20 to-slate-50 px-6 py-16">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-100/35 blur-3xl" />

        <div className="relative mx-auto max-w-[1280px]">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-600 backdrop-blur">
                FAQ
              </div>
              <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
                Clear Answers to the Questions Advisors and CIOs Actually Ask
              </h1>
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-slate-600">
                This FAQ is designed to address common questions from CIOs,
                CCOs, advisors, and clients, using plain English and consistent
                language.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="relative overflow-hidden bg-white px-6 py-20">
        {/* Decorative circles (subtle, like the hero) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-16 right-[-140px] h-[360px] w-[360px] rounded-full bg-blue-100/35 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[55%] left-[-180px] h-[420px] w-[420px] rounded-full bg-slate-100/75 blur-3xl"
        />
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 lg:grid-cols-[320px_1fr]">
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <Reveal delay={80}>
                <div className="relative">
                  <div className="relative z-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      On this page
                    </div>
                    <nav className="mt-4 space-y-1.5">
                      {SECTIONS.map((s) => (
                        <a
                          key={s.id}
                          href={`#${s.id}`}
                          className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-white hover:text-slate-900"
                        >
                          {s.title}
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Small decorative circle under the card (~60% visible) */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute z-0 -bottom-12 right-[-72px] h-44 w-44 rounded-full bg-blue-100/35 blur-3xl"
                  />
                </div>
              </Reveal>
            </aside>

            <div className="space-y-14">
              {SECTIONS.map((section, idx) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="relative scroll-mt-28"
                >
                  <Reveal delay={idx === 0 ? 0 : 60}>
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                        {section.title}
                      </h2>
                      {section.description ? (
                        <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-slate-600">
                          {section.description}
                        </p>
                      ) : null}
                    </div>
                  </Reveal>

                  <div className="space-y-4">
                    {section.items.map((item) => (
                      <Reveal key={item.id} delay={80}>
                        <FAQCard item={item} />
                      </Reveal>
                    ))}
                  </div>

                  {/* Decorative circle: visually sits between sections, without changing spacing */}
                  {section.id === 'downside' ? (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute right-[-160px] bottom-[-140px] h-[380px] w-[380px] rounded-full bg-blue-100/35 blur-3xl"
                    />
                  ) : null}
                </div>
              ))}
              <Reveal delay={100}>
                {/* Left-aligned with intentional right-side whitespace on wide screens */}
                <div className="w-full max-w-[880px]">
                  <div className="rounded-2xl border border-slate-200 bg-white p-8">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-8">
                      <div className="shrink-0 rounded-xl border-l-4 border-blue-600 bg-slate-50 px-5 py-4">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Bottom line
                        </div>
                        <div className="mt-1 text-lg font-bold text-slate-900">
                          Sylvan does not eliminate risk.
                        </div>
                      </div>

                      <div className="space-y-2 text-[15px] leading-relaxed text-slate-700">
                        <p className="font-semibold text-slate-900">
                          It eliminates surprise by defining behavior in
                          advance.
                        </p>
                        <p>
                          The rules for leverage, cash flow, governance, and
                          downside behavior are fixed and documented at
                          issuance, so expectations remain consistent across
                          offerings.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
