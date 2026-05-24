import { skills } from '@/data/projects'

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-[#1E2D22]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="text-[#00E676] font-mono text-sm mb-3">03. skills</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">เทคโนโลยีที่ใช้</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-300 font-medium">{skill.name}</span>
                <span className="text-[#00E676] font-mono text-xs">{skill.level}%</span>
              </div>
              <div className="h-1.5 bg-[#1E2D22] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#00E676] to-emerald-500 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div className="mt-16">
          <div className="text-gray-500 text-sm mb-4 font-mono">// other tools & technologies</div>
          <div className="flex flex-wrap gap-3">
            {[
              'Git', 'GitHub Actions', 'Docker', 'Kubernetes', 'GCP', 'Firebase',
              'BigQuery', 'Redis', 'Prisma', 'Mapbox', 'MQTT', 'WebSocket',
              'REST API', 'GraphQL', 'Tailwind CSS', 'Figma',
            ].map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono text-gray-500 bg-[#111A14] border border-[#1E2D22] px-3 py-1.5 rounded-lg hover:border-[#00E676]/30 hover:text-gray-400 transition-colors"
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
