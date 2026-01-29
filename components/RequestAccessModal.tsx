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

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))

        console.log('Form submitted:', formData)
        setSubmitStatus('success')
        setIsSubmitting(false)

        // Reset form after success
        setTimeout(() => {
            setFormData({
                fullName: '',
                email: '',
                companyName: '',
                phone: '',
                message: ''
            })
            setSubmitStatus('idle')
            onClose()
        }, 2000)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    if (typeof window === 'undefined') return null

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        className="relative bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                            {/* Header */}
                            <div className="border-b border-[#E5E7EB] p-8 pb-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-6 h-px bg-[#D9B44A]"></div>
                                            <span className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.1em]">
                                                Institutional Access
                                            </span>
                                        </div>
                                        <h2 className="text-3xl font-serif text-[#111827]">Request Access</h2>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="text-gray-400 hover:text-[#111827] transition"
                                        aria-label="Close modal"
                                    >
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <p className="text-[#4B5563] mt-3">
                                    Complete the form below and our team will reach out to discuss institutional access to Sylvan.
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="p-8">
                                <div className="space-y-6">
                                    {/* Full Name */}
                                    <div>
                                        <label htmlFor="fullName" className="block text-sm font-bold text-[#111827] mb-2 uppercase tracking-wide">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            required
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-[#E5E7EB] rounded focus:outline-none focus:ring-2 focus:ring-[#0A3F28] focus:border-transparent transition"
                                            placeholder="John Smith"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-bold text-[#111827] mb-2 uppercase tracking-wide">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-[#E5E7EB] rounded focus:outline-none focus:ring-2 focus:ring-[#0A3F28] focus:border-transparent transition"
                                            placeholder="john@company.com"
                                        />
                                    </div>

                                    {/* Company Name */}
                                    <div>
                                        <label htmlFor="companyName" className="block text-sm font-bold text-[#111827] mb-2 uppercase tracking-wide">
                                            Company Name <span className="text-[#9CA3AF] text-xs font-normal normal-case">(Optional)</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="companyName"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-[#E5E7EB] rounded focus:outline-none focus:ring-2 focus:ring-[#0A3F28] focus:border-transparent transition"
                                            placeholder="Your firm or organization"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-bold text-[#111827] mb-2 uppercase tracking-wide">
                                            Phone Number <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-[#E5E7EB] rounded focus:outline-none focus:ring-2 focus:ring-[#0A3F28] focus:border-transparent transition"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-bold text-[#111827] mb-2 uppercase tracking-wide">
                                            How Can We Help? <span className="text-[#9CA3AF] text-xs font-normal normal-case">(Optional)</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-[#E5E7EB] rounded focus:outline-none focus:ring-2 focus:ring-[#0A3F28] focus:border-transparent transition resize-none"
                                            placeholder="Tell us about your investment focus or any specific questions..."
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="mt-8 flex gap-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting || submitStatus === 'success'}
                                        className="flex-1 bg-[#0A3F28] text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#145A3C] transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? 'Submitting...' : submitStatus === 'success' ? 'Request Sent!' : 'Submit Request'}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="px-8 py-4 border border-[#E5E7EB] text-[#4B5563] text-xs font-bold tracking-widest uppercase hover:bg-gray-50 transition"
                                    >
                                        Cancel
                                    </button>
                                </div>

                                {/* Success Message */}
                                {submitStatus === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-4 p-4 bg-[#E8F5E9] border border-[#0A3F28]/20 rounded flex items-center gap-3"
                                    >
                                        <svg className="w-5 h-5 text-[#0A3F28]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-sm text-[#0A3F28] font-medium">
                                            Thank you! We'll be in touch shortly.
                                        </span>
                                    </motion.div>
                                )}
                            </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    )
}
