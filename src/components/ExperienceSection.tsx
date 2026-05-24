import Animate from './Animate'

const experiences = [
  {
    company: 'Sleek EV Co., Ltd.',
    role: 'Tech Project Lead',
    period: 'Aug 2024 – Present · 1 yr 8 mos',
    location: 'Khlong Toei, Bangkok',
    type: 'Thailand–Singapore Joint Venture',
    responsibilities: [
      'Defined and executed company-wide technology vision aligned with business strategy',
      'Built and scaled cross-functional engineering, support, and product design teams',
      'Established CI/CD frameworks, DevOps practices, and cloud infrastructure strategies',
      'Translated complex business requirements into scalable technology solutions',
      'Architected enterprise-grade platforms balancing delivery speed with security',
      'Championed technical excellence through architecture reviews and coding standards',
      'Mentored senior engineers and technology leaders',
      'Collaborated with executive leadership on product roadmaps and investment strategies',
    ],
    current: true,
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 border-t border-surface-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <Animate type="fade"><div className="text-body text-brand mb-3">02. experience</div></Animate>
          <Animate type="fly" delay={80}>
            <h2 className="text-heading text-ink">ประสบการณ์ทำงาน</h2>
          </Animate>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-surface-border ml-[7px] hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <Animate key={exp.company} type="fly" delay={idx * 120}>
                <div className="md:pl-10 relative">
                  <div className={`absolute left-0 top-2 w-3.5 h-3.5 rounded-full border-2 hidden md:block ${exp.current ? 'bg-brand border-brand breath' : 'bg-white border-surface-border'}`} />

                  <div className="bg-white border border-surface-border rounded-2xl p-6 hover:border-brand/40 hover:shadow-md transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="text-heading text-ink">{exp.role}</div>
                        <div className="text-body text-brand">{exp.company}</div>
                      </div>
                      <div className="text-right">
                        <div className={`inline-block text-body px-3 py-0.5 rounded-full border ${exp.current ? 'text-brand bg-brand-light border-brand-muted' : 'text-ink-faint bg-surface-DEFAULT border-surface-border'}`}>
                          {exp.current ? '● Current' : exp.period}
                        </div>
                        {exp.current && <div className="text-body text-ink-faint mt-1">{exp.period}</div>}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-x-4 mb-4">
                      <span className="text-body text-ink-faint">{exp.location}</span>
                      <span className="text-body text-ink-faint">·</span>
                      <span className="text-body text-ink-faint">{exp.type}</span>
                    </div>

                    <ul className="space-y-1.5">
                      {exp.responsibilities.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-body text-ink-muted">
                          <span className="text-brand mt-0.5 flex-shrink-0">▸</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
