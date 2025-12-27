import Reveal from '@/components/layout/Reveal'

export default function PageFooter() {
    return (
        <section className="bg-slate-50 border-t border-slate-200 px-6 py-16">
            <div className="mx-auto max-w-[1280px] text-center">
                <Reveal>
                    <div className="space-y-2 text-slate-500 font-medium">
                        <p>Closed-end offerings.</p>
                        <p>No redemption feature.</p>
                        <p>Exit via sale or refinance under predefined terms.</p>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}