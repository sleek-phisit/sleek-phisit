import { Project } from '@/data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative bg-[#111A14] border border-[#1E2D22] rounded-2xl p-6 hover:border-[#00E676]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#00E676]/5">
      {/* Top gradient line */}
      <div className={`absolute top-0 left-0 right-0 h-px rounded-t-2xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      {/* Icon */}
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} text-2xl mb-4`}>
        {project.icon}
      </div>

      {/* Category badge */}
      <div className="absolute top-6 right-6">
        <span className="text-xs font-mono text-[#00E676] bg-[#00E676]/10 border border-[#00E676]/20 px-2 py-0.5 rounded-full">
          {project.category}
        </span>
      </div>

      <h3 className="text-white font-semibold text-lg mb-2">{project.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

      {/* Highlights */}
      <ul className="space-y-1 mb-5">
        {project.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-xs text-gray-500">
            <span className="text-[#00E676] mt-0.5 flex-shrink-0">▸</span>
            {h}
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono text-gray-500 bg-[#1E2D22] px-2 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
