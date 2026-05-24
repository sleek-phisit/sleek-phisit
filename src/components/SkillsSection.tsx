'use client'

import { useInView } from '@/hooks/useInView'
import { skills } from '@/data/projects'
import Animate from './Animate'

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const { ref, inView } = useInView()
  return (
    <div ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="text-body text-ink">{name}</span>
        <span className="text-body text-brand">{level}%</span>
      </div>
      <div className="h-1 bg-surface-border rounded-full overflow-hidden">
        <div
          className="h-full bg-brand rounded-full skill-bar"
          style={{
            width: inView ? `${level}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-surface-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <Animate type="fade"><div className="text-body text-brand mb-3">04. skills</div></Animate>
          <Animate type="fly" delay={80}>
            <h2 className="text-heading text-ink">เทคโนโลยีที่ใช้</h2>
          </Animate>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 80} />
          ))}
        </div>

        <div className="mt-16">
          <Animate type="fade">
            <div className="text-body text-ink-faint mb-4">other tools &amp; technologies</div>
          </Animate>
          <div className="flex flex-wrap gap-2">
            {[
              'Git', 'GitHub Actions', 'Docker', 'Kubernetes', 'GCP', 'Firebase',
              'BigQuery', 'Redis', 'Prisma', 'Mapbox', 'MQTT', 'WebSocket',
              'REST API', 'GraphQL', 'Tailwind CSS', 'Figma',
            ].map((tech, i) => (
              <Animate key={tech} type="fade" delay={i * 30}>
                <span className="text-body text-ink-muted bg-white border border-surface-border px-3 py-1.5 rounded-lg hover:border-brand/40 hover:text-brand transition-colors">
                  {tech}
                </span>
              </Animate>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
