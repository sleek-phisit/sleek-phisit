export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-[#1E2D22]">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-[#00E676] font-mono text-sm mb-3">04. contact</div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">ติดต่อ</h2>
        <p className="text-gray-400 max-w-md mx-auto mb-10">
          สนใจพูดคุยเกี่ยวกับโปรเจกต์หรือโอกาสทางธุรกิจ ติดต่อได้เลยครับ
        </p>

        <a
          href="mailto:phisit@sleekev.com"
          className="inline-flex items-center gap-3 bg-[#00E676] text-[#0A0F0D] font-semibold px-8 py-3 rounded-lg hover:bg-[#00E676]/90 transition-colors duration-200"
        >
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          phisit@sleekev.com
        </a>

        <div className="mt-16 pt-8 border-t border-[#1E2D22] flex items-center justify-center gap-6">
          <a
            href="https://github.com/sleek-phisit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#00E676] transition-colors"
            aria-label="GitHub"
          >
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.23 3.44 9.67 8.21 11.23.6.11.82-.26.82-.57v-2.03c-3.34.72-4.04-1.6-4.04-1.6-.55-1.38-1.33-1.74-1.33-1.74-1.09-.74.08-.73.08-.73 1.21.08 1.84 1.23 1.84 1.23 1.07 1.82 2.81 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.32-5.47-5.9 0-1.3.47-2.37 1.24-3.2-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.6 11.6 0 013-.4 11.6 11.6 0 013 .4c2.28-1.55 3.29-1.23 3.29-1.23.66 1.64.24 2.86.12 3.16.77.83 1.24 1.9 1.24 3.2 0 4.59-2.81 5.6-5.48 5.89.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57C20.56 21.96 24 17.52 24 12.29 24 5.78 18.63.5 12 .5z" />
            </svg>
          </a>
          <span className="text-gray-700">·</span>
          <span className="text-gray-600 font-mono text-xs">Built with Next.js · Hosted on Firebase</span>
        </div>
      </div>
    </section>
  )
}
