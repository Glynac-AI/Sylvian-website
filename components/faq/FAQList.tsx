'use client';
import React, { useState } from 'react';
import Reveal from '@/components/layout/Reveal';

const faqs = [
  {
    q: "What is Sylvan?",
    a: "Sylvan is a standardized framework for investing in private real estate income using fixed rules for leverage, cash flow, governance, and downside behavior, even as underlying properties change."
  },
  {
    q: "Is this a fund?",
    a: "No. Each Sylvan offering is closed-end, issuance-specific, backed by identified properties, and governed by rules fixed at issuance. Assets do not rotate or change after closing."
  },
  {
    q: "What does \"structured\" mean here?",
    a: "\"Structured\" refers to fixed governance rules, including leverage limits, payment priority, and enforcement mechanics. It does not refer to derivatives, engineered payoffs, options or swaps, or return targeting."
  },
  {
    q: "Who makes decisions after closing?",
    a: "Property owners manage day-to-day operations. Capital structure, leverage limits, reserve rules, and payment priority are fixed and cannot be changed after closing."
  },
  {
    q: "Can the structure ever change?",
    a: "No. Capital position, leverage limits, cash-flow rules, and governance constraints are defined at issuance and cannot be amended at the issuance level. If a deal requires special rules, it does not qualify for Sylvan."
  },
  {
    q: "What happens if performance deteriorates?",
    a: "When performance weakens: 1) Reserves are used to absorb temporary disruptions. 2) Distributions may be reduced or suspended. 3) Leverage does not increase. 4) Governance and reporting continue. Downside behavior is predefined and documented."
  },
  {
    q: "Can distributions go to zero?",
    a: "Yes. If operating performance deteriorates significantly, distributions may be reduced or temporarily suspended to preserve asset and capital integrity. Leverage is not increased to support distributions."
  },
  {
    q: "Does Sylvan smooth or stabilize income?",
    a: "No. Distributions reflect actual operating performance after expenses, reserves, and debt service."
  },
  {
    q: "Where does Sylvan sit in the capital stack?",
    a: "Sylvan capital sits below senior bank debt and above sponsor equity. Sponsor equity is the first-loss position."
  },
  {
    q: "How does Sylvan compare to private real estate funds?",
    a: "Unlike many funds, Sylvan fixes leverage and rules at issuance, does not rotate assets, limits manager discretion, and standardizes governance across offerings."
  },
  {
    q: "How does Sylvan compare to REITs?",
    a: "REITs offer daily liquidity and market pricing. Sylvan offers ring-fenced assets, rent-linked income, no public market volatility, and closed-end exposure. They serve different portfolio roles."
  },
  {
    q: "Is this suitable for taxable or tax-advantaged accounts?",
    a: "Both, depending on objectives. Series selection affects timing of cash and depreciation, not risk. Investors should consult their tax advisors."
  },
  {
    q: "Is Sylvan a 1031 or tax strategy?",
    a: "No. Sylvan provides a standardized investment structure. Tax treatment and 1031 eligibility depend on the investor's circumstances and advisors."
  },
  {
    q: "Does using a DST change the risk?",
    a: "No. A DST is a legal wrapper. Asset risk, leverage, governance, and downside behavior remain the same."
  },
  {
    q: "Is Sylvan liquid?",
    a: "No. Sylvan offerings are closed-end. There is no redemption feature. Investors should expect to hold through the full duration."
  },
  {
    q: "What happens at exit?",
    a: "Exit occurs via asset sale or refinance under predefined terms. Exit timing may be extended when income preservation is preferable to a forced sale."
  },
  {
    q: "Who is Sylvan not for?",
    a: "Sylvan is not designed for investors seeking liquidity, development or value-add risk, or return targeting or opportunistic growth."
  },
  {
    q: "How should advisors explain Sylvan to clients?",
    a: "\"We're investing in income-producing real estate through a consistent structure. Each investment is backed by specific properties, but the rules, leverage, and income mechanics stay the same. That makes the income easier to manage over time.\""
  }
];

export default function FAQList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="border border-slate-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className="text-xl font-bold text-slate-900 pr-8">{faq.q}</span>
                  <span className={`text-2xl text-blue-600 transform transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                    ↓
                  </span>
                </button>
                <div 
                  className={`bg-slate-50 px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === i ? 'max-h-96 py-6 opacity-100' : 'max-h-0 py-0 opacity-0'
                  }`}
                >
                  <p className="text-lg text-slate-700 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}