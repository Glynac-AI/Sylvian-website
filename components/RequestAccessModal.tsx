// components/RequestAccessModal.tsx
'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'

interface RequestAccessModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function RequestAccessModal({ isOpen, onClose }: RequestAccessModalProps) {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        companyName: '',
        phone: '',
        message: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch('/api/request-access', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            if (!response.ok) throw new Error('Failed to submit')

            setSubmitStatus('success')
            setTimeout(() => {
                setFormData({ fullName: '', email: '', companyName: '', phone: '', message: '' })
                setSubmitStatus('idle')
                onClose()
            }, 2000)
        } catch (error) {
            console.error('Submit error:', error)
            setSubmitStatus('error')
            setTimeout(() => {
                setSubmitStatus('idle')
            }, 5000)
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target

        // Phone validation: only allow numbers (no formatting characters)
        if (name === 'phone') {
            const sanitizedValue = value.replace(/[^0-9]/g, '')
            setFormData(prev => ({
                ...prev,
                [name]: sanitizedValue
            }))
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }))
        }
    }

    if (typeof window === 'undefined') return null

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        className="relative bg-white rounded-lg shadow-2xl w-full max-w-xl"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="px-8 pt-8 pb-5">
                            <div className="flex items-start justify-between">
                                <div>
                                    <span className="text-[#0A3F28] font-bold text-[10px] uppercase tracking-[0.15em] mb-2 block">
                                        Institutional Access
                                    </span>
                                    <h2 className="text-2xl font-serif text-[#111827]">Request Access</h2>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="text-gray-400 hover:text-[#111827] transition -mt-1 -mr-1 p-1"
                                    aria-label="Close modal"
                                >
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <p className="text-sm text-[#6B7280] mt-3">
                                Complete the form below and our team will reach out shortly.
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="px-8 pb-8">
                            <div className="space-y-5">
                                {/* Row 1: Name & Email */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="fullName" className="block text-xs font-semibold text-[#111827] mb-1.5 uppercase tracking-wide">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            required
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 text-sm border border-[#E5E7EB] rounded focus:outline-none focus:ring-2 focus:ring-[#0A3F28] focus:border-transparent transition"
                                            placeholder="John Smith"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-xs font-semibold text-[#111827] mb-1.5 uppercase tracking-wide">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 text-sm border border-[#E5E7EB] rounded focus:outline-none focus:ring-2 focus:ring-[#0A3F28] focus:border-transparent transition"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                </div>

                                {/* Row 2: Company & Phone */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="companyName" className="block text-xs font-semibold text-[#111827] mb-1.5 uppercase tracking-wide">
                                            Company <span className="text-[#9CA3AF] font-normal normal-case">(Optional)</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="companyName"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 text-sm border border-[#E5E7EB] rounded focus:outline-none focus:ring-2 focus:ring-[#0A3F28] focus:border-transparent transition"
                                            placeholder="Your organization"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-xs font-semibold text-[#111827] mb-1.5 uppercase tracking-wide">
                                            Phone <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            pattern="[0-9]{10}"
                                            title="Please enter exactly 10 digits"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 text-sm border border-[#E5E7EB] rounded focus:outline-none focus:ring-2 focus:ring-[#0A3F28] focus:border-transparent transition"
                                            placeholder="5551234567"
                                            maxLength={10}
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-xs font-semibold text-[#111827] mb-1.5 uppercase tracking-wide">
                                        Message <span className="text-[#9CA3AF] font-normal normal-case">(Optional)</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={3}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 text-sm border border-[#E5E7EB] rounded focus:outline-none focus:ring-2 focus:ring-[#0A3F28] focus:border-transparent transition resize-none"
                                        placeholder="Tell us about your investment focus..."
                                    />
                                </div>
                            </div>

                            {/* Success Message */}
                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-4 p-3 bg-[#E8F5E9] border border-[#0A3F28]/20 rounded flex items-center gap-2"
                                >
                                    <svg className="w-4 h-4 text-[#0A3F28]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-sm text-[#0A3F28] font-medium">
                                        Thank you! We'll be in touch shortly.
                                    </span>
                                </motion.div>
                            )}

                            {/* Error Message */}
                            {submitStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-4 p-3 bg-red-50 border border-red-200 rounded flex items-center gap-2"
                                >
                                    <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-sm text-red-800 font-medium">
                                        We're having trouble processing your request. Please try again in a moment.
                                    </span>
                                </motion.div>
                            )}

                            {/* Buttons */}
                            <div className="mt-6 flex gap-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting || submitStatus === 'success'}
                                    className="flex-1 bg-[#0A3F28] text-white px-8 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-[#145A3C] transition shadow-md disabled:opacity-50 disabled:cursor-not-allowed rounded"
                                >
                                    {isSubmitting ? 'Submitting...' : submitStatus === 'success' ? 'Sent!' : 'Submit Request'}
                                </button>
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="px-8 py-3.5 border border-[#E5E7EB] text-[#6B7280] text-xs font-bold tracking-widest uppercase hover:bg-gray-50 transition rounded"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    )
}
