import { redirect } from 'next/navigation'

export default function DSTAccessPage() {
    // Redirects to the main Offerings page, scrolled to the DST Access section
    redirect('/offerings#dst-access')
}