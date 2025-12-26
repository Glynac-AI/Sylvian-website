import Reveal from '@/components/layout/Reveal'

export default function RoleDetails() {
    return (
        <section className="bg-white px-6 py-24">
            <div className="mx-auto max-w-[1280px]">
                <div className="grid gap-12 lg:grid-cols-2">
                    <Reveal>
                        <div>
                            <h3 className="mb-6 text-2xl font-bold text-slate-900">Intended Portfolio Role</h3>
                            <p className="mb-4 text-slate-600">Sylvan is typically used as:</p>
                            <ul className="space-y-2 text-slate-700">
                                <li>• A complement to bonds and REITs</li>
                                <li>• A private income sleeve</li>
                                <li>• A source of rent-linked cash flow</li>
                            </ul>
                        </div>
                    </Reveal>
                    <Reveal delay={200}>
                        <div>
                            <h3 className="mb-6 text-2xl font-bold text-slate-900">Income vs. Growth</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="rounded-xl bg-blue-50 p-6">
                                    <div className="mb-2 font-bold text-blue-800">Prioritizes</div>
                                    <ul className="text-sm text-slate-700">
                                        <li>Income from rent</li>
                                        <li>Downside discipline</li>
                                        <li>Governance consistency</li>
                                    </ul>
                                </div>
                                <div className="rounded-xl bg-slate-50 p-6">
                                    <div className="mb-2 font-bold text-slate-800">Does Not Target</div>
                                    <ul className="text-sm text-slate-700">
                                        <li>Opportunistic appreciation</li>
                                        <li>Development upside</li>
                                        <li>Asset repositioning</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}