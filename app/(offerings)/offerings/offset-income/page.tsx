import { redirect } from 'next/navigation'

export default function OffsetIncomePage() {
    // Redirects to the main Offerings page, scrolled to the Offset Income section
    redirect('/offerings#offset-income')
}