'use client'

import { useState } from 'react'
import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard'

const categories = ['All', 'IoT', 'Mobile', 'Web', 'Finance', 'Fleet', 'Dashboard'] as const

export default function ProjectsSection() {
  const [active, setActive] = useState<string>('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="py-24 px-6 border-t border-surface-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="text-body text-green-brand mb-3">02. work</div>
          <h2 className="text-heading text-ink mb-3">โปรเจกต์ที่ Sleek EV</h2>
          <p className="text-body text-ink-muted max-w-xl">
            ผลงานทั้งหมดที่ร่วมพัฒนาที่ Sleek EV ครอบคลุมหลาย domain ตั้งแต่ hardware integration ไปถึง data analytics
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-body px-4 py-1.5 rounded-full border transition-all duration-200 ${
                active === cat
                  ? 'bg-green-brand text-white border-green-brand'
                  : 'border-surface-border text-ink-muted bg-white hover:border-green-brand/40 hover:text-green-brand'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
