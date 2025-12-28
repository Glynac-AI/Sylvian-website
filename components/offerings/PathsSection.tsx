import Reveal from '@/components/layout/Reveal'
import Link from 'next/link'

export default function PathsSection() {
    return (
        <section className="bg-white px-6 pb-24">
            <div className="mx-auto max-w-[1280px]">
                <div className="grid gap-6 lg:grid-cols-3">
                    {[
                        {
                            title: 'Core Income',
                            desc: 'Higher current cash flow. Income reflects actual rent collected.',
                            link: '/offerings/core-income',
                        },
                        {
                            title: 'Offset Income',
                            desc: 'Lower current cash with higher depreciation timing relative to cash.',
                            link: '/offerings/offset-income',
                        },
                        {
                            title: 'DST Access',
                            desc: 'Optional 1031-compatible wrapper. Structure remains unchanged.',
                            link: '/offerings/dst-access',
                        },
                    ].map((offering) => (
                        <Reveal key={offering.title}>
                            <Link
                                href={offering.link}
                                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-blue-600 hover:shadow-lg"
                            >
                                <h3 className="mb-4 text-2xl font-bold text-slate-900">{offering.title}</h3>
                                <p className="mb-6 flex-grow text-slate-600">{offering.desc}</p>
                                <span className="font-semibold text-blue-600">View Sample →</span>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}