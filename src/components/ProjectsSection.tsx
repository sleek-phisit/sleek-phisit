'use client'

import { useState } from 'react'
import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard'
import Animate from './Animate'

const categories = ['All', 'IoT', 'Mobile', 'Web', 'Finance', 'Fleet', 'Dashboard'] as const

export default function ProjectsSection() {
  const [active, setActive] = useState<string>('All')
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="py-24 px-6 border-t border-surface-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <Animate type="fade"><div className="text-body text-brand mb-3">03. work</div></Animate>
          <Animate type="fly" delay={80}>
            <h2 className="text-heading text-ink mb-3">โปรเจกต์ที่ Sleek EV</h2>
          </Animate>
          <Animate type="fly" delay={160}>
            <p className="text-body text-ink-muted max-w-xl">
              ผลงานทั้งหมดที่ร่วมพัฒนาที่ Sleek EV ครอบคลุมหลาย domain ตั้งแต่ hardware integration ไปถึง data analytics
            </p>
          </Animate>
        </div>

        <Animate type="fade" delay={200}>
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-body px-4 py-1.5 rounded-full border transition-all duration-200 ${
                  active === cat
                    ? 'bg-brand text-white border-brand'
                    : 'border-surface-border text-ink-muted bg-white hover:border-brand/40 hover:text-brand'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Animate>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
