// components/auth/AuthModal.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type AuthMode = 'login' | 'signup'

interface AuthModalProps {
    isOpen: boolean
    onClose: () => void
    onSuccess?: () => void
    initialMode?: AuthMode
}

export default function AuthModal({ isOpen, onClose, onSuccess, initialMode = 'login' }: AuthModalProps) {
    const [mode, setMode] = useState<AuthMode>(initialMode)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        await new Promise(resolve => setTimeout(resolve, 1500))
        console.log('Form submitted:', { mode, ...formData })
        setIsSubmitting(false)
        setFormData({ name: '', email: '', password: '', confirmPassword: '' })
        if (onSuccess) {
            onSuccess()
        } else {
            onClose()
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const toggleMode = () => {
        setMode(mode === 'login' ? 'signup' : 'login')
        setFormData({ name: '', email: '', password: '', confirmPassword: '' })
    }

    const handleClose = () => {
        setFormData({ name: '', email: '', password: '', confirmPassword: '' })
        setMode(initialMode)
        onClose()
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop with blur */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative bg-white rounded-xl shadow-xl w-full max-w-md"
                        >
                            {/* Close Button */}
                            <button
                                onClick={handleClose}
                                className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Content */}
                            <div className="p-8">
                                {/* Header */}
                                <div className="text-center mb-8">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={mode}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.15 }}
                                        >
                                            <h2 className="text-2xl font-semibold text-[#013220]">
                                                {mode === 'login' ? 'Sign in' : 'Create an account'}
                                            </h2>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit}>
                                    <AnimatePresence mode="wait">
                                        {mode === 'signup' ? (
                                            <motion.div
                                                key="signup-form"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                transition={{ duration: 0.2 }}
                                                className="space-y-5"
                                            >
                                                {/* Name */}
                                                <div>
                                                    <label htmlFor="name" className="block text-sm font-medium text-[#013220] mb-2">
                                                        Full Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        required
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#095520] focus:border-transparent transition-shadow text-[#013220] bg-gray-50 focus:bg-white"
                                                        placeholder="John Smith"
                                                    />
                                                </div>

                                                {/* Email */}
                                                <div>
                                                    <label htmlFor="signup-email" className="block text-sm font-medium text-[#013220] mb-2">
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="signup-email"
                                                        name="email"
                                                        required
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#095520] focus:border-transparent transition-shadow text-[#013220] bg-gray-50 focus:bg-white"
                                                        placeholder="john@example.com"
                                                    />
                                                </div>

                                                {/* Password */}
                                                <div>
                                                    <label htmlFor="signup-password" className="block text-sm font-medium text-[#013220] mb-2">
                                                        Password
                                                    </label>
                                                    <div className="relative">
                                                        <input
                                                            type={showPassword ? 'text' : 'password'}
                                                            id="signup-password"
                                                            name="password"
                                                            required
                                                            value={formData.password}
                                                            onChange={handleChange}
                                                            className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#095520] focus:border-transparent transition-shadow text-[#013220] bg-gray-50 focus:bg-white"
                                                            placeholder="Create a password"
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={() => setShowPassword(!showPassword)}
                                                            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600"
                                                        >
                                                            {showPassword ? (
                                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                                                </svg>
                                                            ) : (
                                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                                </svg>
                                                            )}
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* Confirm Password */}
                                                <div>
                                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#013220] mb-2">
                                                        Confirm Password
                                                    </label>
                                                    <input
                                                        type={showPassword ? 'text' : 'password'}
                                                        id="confirmPassword"
                                                        name="confirmPassword"
                                                        required
                                                        value={formData.confirmPassword}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#095520] focus:border-transparent transition-shadow text-[#013220] bg-gray-50 focus:bg-white"
                                                        placeholder="Confirm your password"
                                                    />
                                                </div>
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="login-form"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 20 }}
                                                transition={{ duration: 0.2 }}
                                                className="space-y-5"
                                            >
                                                {/* Email */}
                                                <div>
                                                    <label htmlFor="login-email" className="block text-sm font-medium text-[#013220] mb-2">
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="login-email"
                                                        name="email"
                                                        required
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#095520] focus:border-transparent transition-shadow text-[#013220] bg-gray-50 focus:bg-white"
                                                        placeholder="john@example.com"
                                                    />
                                                </div>

                                                {/* Password */}
                                                <div>
                                                    <div className="flex items-center justify-between mb-2">
                                                        <label htmlFor="login-password" className="block text-sm font-medium text-[#013220]">
                                                            Password
                                                        </label>
                                                        <button type="button" className="text-sm text-[#095520] hover:underline">
                                                            Forgot password?
                                                        </button>
                                                    </div>
                                                    <div className="relative">
                                                        <input
                                                            type={showPassword ? 'text' : 'password'}
                                                            id="login-password"
                                                            name="password"
                                                            required
                                                            value={formData.password}
                                                            onChange={handleChange}
                                                            className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#095520] focus:border-transparent transition-shadow text-[#013220] bg-gray-50 focus:bg-white"
                                                            placeholder="Enter your password"
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={() => setShowPassword(!showPassword)}
                                                            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600"
                                                        >
                                                            {showPassword ? (
                                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                                                </svg>
                                                            ) : (
                                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                                </svg>
                                                            )}
                                                        </button>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full mt-8 py-3.5 bg-[#095520] text-white rounded-lg font-medium transition-all ${
                                            isSubmitting
                                                ? 'opacity-70 cursor-not-allowed'
                                                : 'hover:bg-[#074418] active:scale-[0.98]'
                                        }`}
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                {mode === 'login' ? 'Signing in...' : 'Creating account...'}
                                            </span>
                                        ) : (
                                            mode === 'login' ? 'Sign in' : 'Create account'
                                        )}
                                    </button>
                                </form>

                                {/* Toggle Mode */}
                                <p className="text-center text-sm text-gray-500 mt-6">
                                    {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}
                                    <button
                                        type="button"
                                        onClick={toggleMode}
                                        className="ml-1 text-[#095520] font-medium hover:underline"
                                    >
                                        {mode === 'login' ? 'Sign up' : 'Sign in'}
                                    </button>
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    )
}
