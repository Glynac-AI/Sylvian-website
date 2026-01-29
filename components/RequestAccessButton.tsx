// components/RequestAccessButton.tsx
'use client'

import { useState } from 'react'
import RequestAccessModal from './RequestAccessModal'

interface RequestAccessButtonProps {
    className?: string
    children?: React.ReactNode
}

export default function RequestAccessButton({ className, children }: RequestAccessButtonProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className={className}
            >
                {children || 'Request Access'}
            </button>
            <RequestAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}
