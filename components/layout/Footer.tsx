import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-[#E8EAE6] py-16 px-4 border-t border-gray-200">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                <div>
                    <div className="text-2xl tracking-[0.3em] uppercase font-serif text-[#013220] mb-6">
                        S Y L V A N
                    </div>
                    <div className="grid grid-cols-1 gap-3 text-sm text-[#013220] font-serif opacity-70">
                        <a className="hover:opacity-100 transition-opacity" href="/">
                            Why Sylvan
                        </a>
                        <a className="hover:opacity-100 transition-opacity" href="/offerings">
                            Offerings
                        </a>
                        <a className="hover:opacity-100 transition-opacity" href="/governance">
                            Governance
                        </a>
                        <a className="hover:opacity-100 transition-opacity" href="/faq">
                            FAQ
                        </a>
                        <a className="hover:opacity-100 transition-opacity" href="#">
                            Log In
                        </a>
                    </div>
                </div>

                <div className="md:text-right space-y-4 text-[10px] text-[#013220] opacity-50 font-serif w-full md:w-auto self-end">
                    <div className="flex flex-col md:flex-row gap-4 md:items-center justify-end">
                        <a className="hover:underline hover:opacity-70 transition-opacity" href="#">
                            Privacy Policy
                        </a>
                        <span>© 2024 Sylvan. All rights reserved.</span>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                        <span className="text-[10px]">🏢</span>
                        <span>Structured Real Estate Platform</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}