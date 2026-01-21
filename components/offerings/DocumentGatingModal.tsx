// components/offerings/DocumentGatingModal.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface DocumentGatingModalProps {
    isOpen: boolean
    onClose: () => void
    documentName: string
    onSubmit: (data: { name: string; email: string; phone: string; accredited: string }) => void
}

export default function DocumentGatingModal({ isOpen, onClose, documentName, onSubmit }: DocumentGatingModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        accredited: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))

        onSubmit(formData)
        setIsSubmitting(false)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    if (!isOpen) return null

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3 }}
                            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <svg className="w-5 h-5 text-[#095520]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Header */}
                            <div className="p-6 pb-4 border-b border-gray-200">
                                <h3 className="text-2xl font-semibold text-[#095520] mb-2">Access Document</h3>
                                <p className="text-sm text-[#095520]/70">Please provide your information to view this document</p>
                                <div className="mt-3 p-3 bg-[#F3F4F1] rounded-lg">
                                    <p className="text-xs font-medium text-black truncate">{documentName}</p>
                                </div>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="p-6 space-y-4">
                                {/* Name Field */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-[#095520] mb-1.5">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#095520]/20 focus:border-[#095520] transition-all text-black"
                                        placeholder="John Smith"
                                    />
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-[#095520] mb-1.5">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#095520]/20 focus:border-[#095520] transition-all text-black"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                {/* Phone Field */}
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-[#095520] mb-1.5">
                                        Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#095520]/20 focus:border-[#095520] transition-all text-black"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>

                                {/* Accredited Investor Status */}
                                <div>
                                    <label htmlFor="accredited" className="block text-sm font-medium text-[#095520] mb-1.5">
                                        Are you an accredited investor? <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        id="accredited"
                                        name="accredited"
                                        required
                                        value={formData.accredited}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#095520]/20 focus:border-[#095520] transition-all text-black cursor-pointer"
                                    >
                                        <option value="">Select an option</option>
                                        <option value="yes">Yes, I am an accredited investor</option>
                                        <option value="no">No, I am not an accredited investor</option>
                                        <option value="unsure">I'm not sure</option>
                                    </select>
                                </div>

                                {/* Privacy Notice */}
                                <div className="p-3 bg-[#F3F4F1] rounded-lg">
                                    <p className="text-xs text-black leading-relaxed">
                                        Your information is kept confidential and will only be used to provide you with relevant investment information.
                                    </p>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-3 px-6 bg-[#095520] text-yellow-400 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                                        isSubmitting
                                            ? 'opacity-70 cursor-not-allowed'
                                            : 'hover:shadow-lg'
                                    }`}
                                >
                                    {isSubmitting ? 'Unlocking...' : 'Unlock Document'}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    )
}
