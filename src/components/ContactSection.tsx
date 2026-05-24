import LeadForm from './LeadForm'

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-surface-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="text-body text-brand mb-3">05. contact</div>
            <h2 className="text-heading text-ink mb-4">ติดต่อ</h2>
            <p className="text-body text-ink-muted mb-8">
              สนใจพูดคุยเกี่ยวกับโปรเจกต์หรือโอกาสทางธุรกิจ ฝากข้อความไว้ได้เลยครับ
            </p>

            <div className="space-y-4">
              <a
                href="mailto:phisit@sleekev.com"
                className="flex items-center gap-3 text-body text-ink-muted hover:text-brand transition-colors group"
              >
                <span className="w-9 h-9 rounded-lg bg-surface-DEFAULT border border-surface-border flex items-center justify-center group-hover:border-brand/40 transition-colors">
                  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                phisit@sleekev.com
              </a>

              <a
                href="https://github.com/sleek-phisit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-body text-ink-muted hover:text-brand transition-colors group"
              >
                <span className="w-9 h-9 rounded-lg bg-surface-DEFAULT border border-surface-border flex items-center justify-center group-hover:border-brand/40 transition-colors">
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.23 3.44 9.67 8.21 11.23.6.11.82-.26.82-.57v-2.03c-3.34.72-4.04-1.6-4.04-1.6-.55-1.38-1.33-1.74-1.33-1.74-1.09-.74.08-.73.08-.73 1.21.08 1.84 1.23 1.84 1.23 1.07 1.82 2.81 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.32-5.47-5.9 0-1.3.47-2.37 1.24-3.2-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.6 11.6 0 013-.4 11.6 11.6 0 013 .4c2.28-1.55 3.29-1.23 3.29-1.23.66 1.64.24 2.86.12 3.16.77.83 1.24 1.9 1.24 3.2 0 4.59-2.81 5.6-5.48 5.89.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57C20.56 21.96 24 17.52 24 12.29 24 5.78 18.63.5 12 .5z" />
                  </svg>
                </span>
                github.com/sleek-phisit
              </a>

              <a
                href="https://www.linkedin.com/in/phisit-k"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-body text-ink-muted hover:text-brand transition-colors group"
              >
                <span className="w-9 h-9 rounded-lg bg-surface-DEFAULT border border-surface-border flex items-center justify-center group-hover:border-brand/40 transition-colors">
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </span>
                linkedin.com/in/phisit-k
              </a>
            </div>
          </div>

          {/* Right — Lead form */}
          <div className="bg-white border border-surface-border rounded-2xl p-8">
            <div className="text-heading text-ink mb-6">ส่งข้อความ</div>
            <LeadForm />
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-surface-border text-center">
          <span className="text-body text-ink-faint">Built with Next.js · Hosted on Firebase</span>
        </div>
      </div>
    </section>
  )
}
