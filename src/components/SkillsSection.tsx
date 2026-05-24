import { skills } from '@/data/projects'

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-surface-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="text-body text-brand mb-3">04. skills</div>
          <h2 className="text-heading text-ink">เทคโนโลยีที่ใช้</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="text-body text-ink">{skill.name}</span>
                <span className="text-body text-brand">{skill.level}%</span>
              </div>
              <div className="h-1 bg-surface-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="text-body text-ink-faint mb-4">other tools &amp; technologies</div>
          <div className="flex flex-wrap gap-2">
            {[
              'Git', 'GitHub Actions', 'Docker', 'Kubernetes', 'GCP', 'Firebase',
              'BigQuery', 'Redis', 'Prisma', 'Mapbox', 'MQTT', 'WebSocket',
              'REST API', 'GraphQL', 'Tailwind CSS', 'Figma',
            ].map((tech) => (
              <span
                key={tech}
                className="text-body text-ink-muted bg-white border border-surface-border px-3 py-1.5 rounded-lg hover:border-brand/40 hover:text-brand transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
