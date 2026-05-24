import { Project } from '@/data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative bg-white border border-surface-border rounded-2xl p-6 hover:border-brand/40 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
      <div className={`absolute top-0 left-0 right-0 h-px rounded-t-2xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${project.color} text-xl mb-4`}>
        {project.icon}
      </div>

      <div className="absolute top-6 right-6">
        <span className="text-body text-brand bg-brand-light border border-brand-muted px-2 py-0.5 rounded-full">
          {project.category}
        </span>
      </div>

      <h3 className="text-heading text-ink mb-2">{project.title}</h3>
      <p className="text-body text-ink-muted mb-4">{project.description}</p>

      <ul className="space-y-1 mb-5">
        {project.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-body text-ink-faint">
            <span className="text-brand mt-0.5 flex-shrink-0">▸</span>
            {h}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-body text-ink-faint bg-surface-DEFAULT border border-surface-border px-2 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
