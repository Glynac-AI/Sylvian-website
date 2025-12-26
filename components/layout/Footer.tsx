import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="mt-20 border-t border-white/10 bg-slate-900 text-white">
            <div className="mx-auto max-w-[1280px] px-6 py-16">
                {/* Main Footer Grid */}
                <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_1.6fr]">
                    {/* Brand Section */}
                    <div>
                        <div className="mb-3 text-base font-bold tracking-wider">SYLVAN</div>
                        <p className="max-w-md text-[15px] leading-relaxed text-white/70">
                            Standardized structured real estate income framework for RIAs.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 text-[13px] font-bold uppercase tracking-wider text-white/85">
                            Pages
                        </h3>
                        <ul className="space-y-1.5">
                            {[
                                { href: '/', label: 'Home' },
                                { href: '/start', label: 'Start Here' },
                                { href: '/how-it-works', label: 'How It Works' },
                                { href: '/offerings', label: 'Offerings' },
                                { href: '/governance', label: 'Governance' },
                                { href: '/portfolio', label: 'Portfolio Role' },
                                { href: '/faq', label: 'FAQ' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="inline-block rounded-lg px-1 py-1 text-[15px] font-semibold text-white/70 transition-all hover:bg-white/5 hover:text-white/95"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Disclosures */}
                    <div>
                        <h3 className="mb-4 text-[13px] font-bold uppercase tracking-wider text-white/85">
                            Disclosures
                        </h3>

                        {/* Classification */}
                        <div className="mb-4 rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="text-[15px] leading-relaxed text-white/75">
                                <strong className="text-white/90">Classification:</strong> Sylvan is not an issuer, investment adviser, broker-dealer, or custodian. Sylvan provides standardized structure, workflow, and audit-ready documentation used by RIAs and their clients.
                            </p>
                        </div>

                        {/* Important Disclosures */}
                        <div className="rounded-xl border border-white/8 bg-white/[0.03] p-5">
                            <p className="mb-3 text-[15px] font-bold text-white/90">Important Disclosures:</p>
                            <div className="space-y-2 text-[14px] leading-relaxed text-white/70">
                                <p>Sylvan does not provide custody services. All assets are held by qualified custodians.</p>
                                <p>No performance targets or yield projections are provided. Past performance is not indicative of future results.</p>
                                <p>This information does not constitute tax advice. Consult your tax advisor regarding your specific situation.</p>
                                <p>Real estate investments involve substantial risk including loss of principal. Investments are illiquid and subject to market, credit, and operational risks.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 border-t border-white/8 pt-8">
                    <div className="flex flex-wrap items-baseline justify-between gap-4">
                        <p className="text-sm text-white/60">© 2024 Sylvan. All rights reserved.</p>
                        <p className="max-w-3xl text-sm text-white/55">
                            Closed-end offerings. No redemption feature. Exit via sale or refinance under predefined terms.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}