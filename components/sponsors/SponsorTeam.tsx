// components/sponsors/SponsorTeam.tsx
'use client'

import { motion } from 'framer-motion'
import { TeamMember } from '@/data/mockSponsors'

interface SponsorTeamProps {
    team: TeamMember[]
}

export default function SponsorTeam({ team }: SponsorTeamProps) {
    return (
        <section className="bg-gray-50 py-20 border-y border-[#E5E7EB]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <span className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.15em] mb-4 block">
                        Leadership Team
                    </span>
                    <h2 className="text-2xl lg:text-3xl font-serif text-[#111827] mb-4">
                        Experience & Expertise<br /><span className="italic">deep institutional experience.</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A proven team with deep institutional experience
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white p-8 rounded border border-[#E5E7EB] shadow-sm"
                        >
                            <div className="flex items-start gap-6">
                                {/* Avatar Placeholder */}
                                <div className="flex-shrink-0">
                                    <div className="w-20 h-20 rounded-full bg-[#0A3F28] flex items-center justify-center">
                                        <span className="text-2xl font-bold text-white">
                                            {member.name.split(' ').map(n => n[0]).join('')}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-[#111827] mb-1">{member.name}</h3>
                                    <p className="text-sm text-[#D9B44A] font-semibold uppercase tracking-wide mb-2">
                                        {member.role}
                                    </p>
                                    <p className="text-xs text-gray-600 font-medium mb-3 italic">
                                        {member.experience}
                                    </p>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        {member.bio}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
