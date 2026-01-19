// components/offerings/DataRoomSection.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Document {
    name: string
    size: string
    uploadDate: string
}

interface DocumentCategory {
    category: string
    files: Document[]
}

interface ViewingDocument {
    file: Document
    index: number
    category: string
}

interface DataRoomSectionProps {
    documents: DocumentCategory[]
    propertyTitle: string
}

export default function DataRoomSection({ documents, propertyTitle }: DataRoomSectionProps) {
    const [selectedCategory, setSelectedCategory] = useState(documents[0]?.category || '')
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
    const [viewingDocument, setViewingDocument] = useState<ViewingDocument | null>(null)

    const selectedDocs = documents.find(doc => doc.category === selectedCategory)

    const openDocument = (file: Document, index: number, category: string) => {
        setViewingDocument({ file, index, category })
        // Auto-expand the dropdown when opening a document
        setExpandedCategory(category)
    }

    const closeDocument = () => {
        setViewingDocument(null)
    }

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category)
        setViewingDocument(null)
    }

    const toggleDropdown = (category: string) => {
        setExpandedCategory(expandedCategory === category ? null : category)
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    }

    const isDocumentViewing = (fileName: string, category: string) => {
        return viewingDocument !== null && viewingDocument.file.name === fileName && viewingDocument.category === category
    }

    const getFileIcon = (fileName: string) => {
        if (fileName.toLowerCase().includes('pdf') || fileName.toLowerCase().includes('memorandum') || fileName.toLowerCase().includes('agreement')) {
            return (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            )
        }
        if (fileName.toLowerCase().includes('photo') || fileName.toLowerCase().includes('image')) {
            return (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            )
        }
        return (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        )
    }

    return (
        <section className="bg-white py-16 px-6 border-t border-gray-200">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-semibold text-[#095520] mb-4">
                        Investment Documentation
                    </h2>
                    <p className="text-lg text-[#095520]/60 max-w-3xl">
                        Review comprehensive documentation for {propertyTitle}. All investment materials, property information, and legal documents are organized for your review.
                    </p>
                </motion.div>

                {/* Data Room Layout */}
                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Sidebar Navigation - Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-3"
                    >
                        <div className="bg-[#F3F4F1] rounded-2xl p-4 sticky top-[120px]">
                            <h3 className="text-xs font-semibold text-[#095520]/50 uppercase tracking-wider mb-3 px-3">
                                Document Categories
                            </h3>
                            <nav className="space-y-2">
                                {documents.map((docCategory, index) => (
                                    <div key={index}>
                                        <div className="flex items-stretch gap-1">
                                            {/* Category Name - Opens content area */}
                                            <button
                                                onClick={() => handleCategoryClick(docCategory.category)}
                                                className={`flex-1 text-left px-4 py-3 rounded-l-xl transition-all duration-200 flex items-center justify-between group ${
                                                    selectedCategory === docCategory.category
                                                        ? 'bg-[#095520] text-yellow-400 shadow-md'
                                                        : 'text-[#095520]/70 hover:bg-white hover:text-[#095520]'
                                                }`}
                                            >
                                                <span className="text-sm font-medium">{docCategory.category}</span>
                                                <span className={`text-xs px-2 py-0.5 rounded-full ${
                                                    selectedCategory === docCategory.category
                                                        ? 'bg-yellow-400/20 text-yellow-400'
                                                        : 'bg-[#095520]/10 text-[#095520]/50 group-hover:bg-[#095520]/20'
                                                }`}>
                                                    {docCategory.files.length}
                                                </span>
                                            </button>

                                            {/* Chevron - Toggles dropdown */}
                                            <button
                                                onClick={() => toggleDropdown(docCategory.category)}
                                                className={`px-3 rounded-r-xl transition-all duration-200 ${
                                                    selectedCategory === docCategory.category
                                                        ? 'bg-[#095520] text-yellow-400 shadow-md'
                                                        : 'text-[#095520]/70 hover:bg-white hover:text-[#095520]'
                                                }`}
                                            >
                                                <svg
                                                    className={`w-4 h-4 transition-transform duration-200 ${
                                                        expandedCategory === docCategory.category ? 'rotate-180' : ''
                                                    }`}
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                        </div>

                                        {/* Expandable Document List */}
                                        <AnimatePresence>
                                            {expandedCategory === docCategory.category && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="space-y-1 pt-2 pb-1 px-2">
                                                        {docCategory.files.map((file, fileIndex) => (
                                                            <button
                                                                key={fileIndex}
                                                                onClick={() => openDocument(file, fileIndex, docCategory.category)}
                                                                className={`w-full text-left px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                                                                    isDocumentViewing(file.name, docCategory.category)
                                                                        ? 'bg-[#095520]/10'
                                                                        : 'hover:bg-white'
                                                                }`}
                                                            >
                                                                <div className="flex items-start gap-2">
                                                                    <div className={`flex-shrink-0 mt-0.5 transition-colors ${
                                                                        isDocumentViewing(file.name, docCategory.category)
                                                                            ? 'text-[#095520]'
                                                                            : 'text-[#095520]/40 group-hover:text-[#095520]'
                                                                    }`}>
                                                                        {getFileIcon(file.name)}
                                                                    </div>
                                                                    <div className="flex-1 min-w-0">
                                                                        <p className={`text-xs font-medium transition-colors truncate ${
                                                                            isDocumentViewing(file.name, docCategory.category)
                                                                                ? 'text-[#095520] font-semibold'
                                                                                : 'text-[#095520] group-hover:text-[#008929]'
                                                                        }`}>
                                                                            {file.name}
                                                                        </p>
                                                                        <p className="text-[10px] text-[#095520]/40 mt-0.5">
                                                                            {file.size}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </nav>
                        </div>
                    </motion.div>

                    {/* Document Content - Right */}
                    <div className="lg:col-span-9">
                        <AnimatePresence mode="wait">
                            {!viewingDocument ? (
                                // Document List View
                                <motion.div
                                    key="list"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-[#F3F4F1] rounded-2xl p-6 md:p-8"
                                >
                                    <div className="mb-6 pb-4 border-b border-gray-200">
                                        <h3 className="text-2xl font-semibold text-[#095520] mb-1">
                                            {selectedCategory}
                                        </h3>
                                        <p className="text-sm text-[#095520]/60">
                                            {selectedDocs?.files.length} {selectedDocs?.files.length === 1 ? 'document' : 'documents'} available for review
                                        </p>
                                    </div>

                                    {/* Document List */}
                                    <div className="space-y-3">
                                        {selectedDocs?.files.map((file: Document, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                                className={`rounded-xl p-4 transition-all duration-200 group cursor-pointer ${
                                                    isDocumentViewing(file.name, selectedCategory)
                                                        ? 'bg-[#095520]/5 shadow-md border-2 border-[#095520]/20'
                                                        : 'bg-white hover:shadow-md'
                                                }`}
                                                onClick={() => openDocument(file, index, selectedCategory)}
                                            >
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-4 flex-1 min-w-0">
                                                        <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                                                            isDocumentViewing(file.name, selectedCategory)
                                                                ? 'bg-[#095520]/15 text-[#095520]'
                                                                : 'bg-[#095520]/5 text-[#095520]/60 group-hover:bg-[#095520]/10 group-hover:text-[#095520]'
                                                        }`}>
                                                            {getFileIcon(file.name)}
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <h4 className={`text-sm font-semibold transition-colors truncate ${
                                                                isDocumentViewing(file.name, selectedCategory)
                                                                    ? 'text-[#095520]'
                                                                    : 'text-[#095520] group-hover:text-[#008929]'
                                                            }`}>
                                                                {file.name}
                                                            </h4>
                                                            <p className="text-xs text-[#095520]/50 mt-0.5">
                                                                {file.size} • Uploaded {formatDate(file.uploadDate)}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                                                        <button className="px-4 py-2 bg-[#095520] text-yellow-400 rounded-full text-xs font-semibold uppercase tracking-wider hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 active:translate-y-0 active:scale-100">
                                                            View
                                                        </button>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Help Section */}
                                    <div className="mt-8 p-4 bg-[#095520]/5 rounded-xl border border-[#095520]/10">
                                        <div className="flex gap-3">
                                            <svg className="w-5 h-5 text-[#095520]/60 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <div>
                                                <p className="text-sm font-medium text-[#095520] mb-1">Need assistance?</p>
                                                <p className="text-xs text-[#095520]/60">
                                                    Contact our investor relations team at <a href="mailto:invest@sylvan.com" className="underline hover:text-[#095520]">invest@sylvan.com</a> for document questions or access issues.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                // Full Document Viewer
                                <motion.div
                                    key="viewer"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white rounded-2xl overflow-hidden shadow-lg"
                                >
                                    {/* Document Header with Navigation */}
                                    <div className="sticky top-0 z-10 bg-white border-b border-gray-200 p-4 md:p-6">
                                        <div className="flex items-center justify-between gap-4">
                                            <div className="flex items-center gap-4 flex-1 min-w-0">
                                                <button
                                                    onClick={closeDocument}
                                                    className="flex items-center gap-2 px-4 py-2 bg-[#F3F4F1] hover:bg-[#095520]/10 rounded-full transition-colors text-[#095520] font-medium text-sm"
                                                >
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                    </svg>
                                                    Back
                                                </button>
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="text-lg font-semibold text-[#095520] truncate">
                                                        {viewingDocument.file.name}
                                                    </h3>
                                                    <p className="text-xs text-[#095520]/50">
                                                        {viewingDocument.file.size} • Uploaded {formatDate(viewingDocument.file.uploadDate)}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <button className="px-4 py-2 bg-white text-[#095520] border-2 border-[#095520]/20 rounded-full text-xs font-semibold uppercase tracking-wider hover:border-[#095520]/40 transition-all duration-300">
                                                    Download
                                                </button>
                                                <button
                                                    onClick={closeDocument}
                                                    className="p-2 hover:bg-[#F3F4F1] rounded-full transition-colors"
                                                    title="Close"
                                                >
                                                    <svg className="w-5 h-5 text-[#095520]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Document Content Area - Scrollable */}
                                    <div className="p-6 md:p-8 bg-[#F3F4F1] min-h-[600px] max-h-[800px] overflow-y-auto">
                                        <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm">
                                            {/* Mock Document Content */}
                                            <div className="prose prose-sm md:prose-base max-w-none">
                                                <div className="text-center mb-12">
                                                    <div className="w-20 h-20 mx-auto mb-6 bg-[#095520]/5 rounded-full flex items-center justify-center">
                                                        {getFileIcon(viewingDocument.file.name)}
                                                    </div>
                                                    <h1 className="text-2xl md:text-3xl font-bold text-[#095520] mb-2">
                                                        {viewingDocument.file.name}
                                                    </h1>
                                                    <p className="text-[#095520]/60">
                                                        Document Preview - Mockup Content
                                                    </p>
                                                </div>

                                                {/* Placeholder Content */}
                                                <div className="space-y-6 text-[#095520]/80">
                                                    <p className="text-sm italic text-center text-[#095520]/50 border-2 border-dashed border-[#095520]/20 rounded-lg p-6 mb-8">
                                                        This is a mockup document viewer. In production, this area would display the actual PDF or document content using a document renderer like PDF.js or an iframe.
                                                    </p>

                                                    <h2 className="text-xl font-semibold text-[#095520] mt-8 mb-4">Document Section 1</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                                                    <h3 className="text-lg font-semibold text-[#095520] mt-6 mb-3">Subsection 1.1</h3>
                                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                                                    <ul className="list-disc pl-6 space-y-2 my-4">
                                                        <li>Important point one regarding the investment structure</li>
                                                        <li>Key consideration for potential investors</li>
                                                        <li>Risk factors and mitigation strategies</li>
                                                        <li>Expected timeline and milestones</li>
                                                    </ul>

                                                    <h2 className="text-xl font-semibold text-[#095520] mt-8 mb-4">Document Section 2</h2>
                                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                                                    <div className="bg-[#F3F4F1] rounded-lg p-6 my-6 border-l-4 border-[#095520]">
                                                        <p className="font-semibold text-[#095520] mb-2">Important Notice:</p>
                                                        <p className="text-sm">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                                                    </div>

                                                    <h2 className="text-xl font-semibold text-[#095520] mt-8 mb-4">Document Section 3</h2>
                                                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

                                                    <ol className="list-decimal pl-6 space-y-2 my-4">
                                                        <li>First step in the investment process</li>
                                                        <li>Second step involving due diligence</li>
                                                        <li>Third step for final approval</li>
                                                        <li>Final step for fund transfer and closing</li>
                                                    </ol>

                                                    <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}
