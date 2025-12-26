import { redirect } from 'next/navigation'

export default function CoreIncomePage() {
    // Redirects to the main Offerings page, scrolled to the Core Income section
    redirect('/offerings#core-income')
}