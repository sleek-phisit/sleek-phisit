'use client'

import { useState } from 'react'
import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard'

const categories = ['All', 'IoT', 'Mobile', 'Web', 'Finance', 'Fleet', 'Dashboard'] as const

export default function ProjectsSection() {
  const [active, setActive] = useState<string>('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="text-[#00E676] font-mono text-sm mb-3">02. work</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">โปรเจกต์ที่ Sleek EV</h2>
          <p className="text-gray-400 max-w-xl">
            ผลงานทั้งหมดที่ร่วมพัฒนาที่ Sleek EV ครอบคลุมหลาย domain ตั้งแต่ hardware integration ไปถึง data analytics
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-sm px-4 py-1.5 rounded-full border transition-all duration-200 font-mono ${
                active === cat
                  ? 'bg-[#00E676] text-[#0A0F0D] border-[#00E676] font-semibold'
                  : 'border-[#1E2D22] text-gray-400 hover:border-[#00E676]/40 hover:text-[#00E676]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
