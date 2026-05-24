export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(#15803D 1px, transparent 1px), linear-gradient(90deg, #15803D 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-light/60 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-white border border-surface-border rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-brand animate-pulse" />
          <span className="text-body text-green-brand">Sleek EV · Software Engineer</span>
        </div>

        <h1 className="text-heading mb-5 text-ink">
          Building the future of<br />
          <span className="text-green-brand">electric mobility</span>
        </h1>

        <p className="text-body text-ink-muted max-w-xl mx-auto mb-10">
          ผลงานการพัฒนาซอฟต์แวร์ที่ Sleek EV ครอบคลุมตั้งแต่ระบบ IoT บนรถมอเตอร์ไซต์ไฟฟ้า
          ไปจนถึงแพลตฟอร์มจัดการฝูงรถและ insights dashboard
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#projects"
            className="bg-green-brand text-white text-body px-7 py-2.5 rounded-lg hover:bg-green-700 transition-colors duration-200"
          >
            ดูโปรเจกต์ทั้งหมด
          </a>
          <a
            href="#contact"
            className="border border-surface-border text-body text-ink-muted px-7 py-2.5 rounded-lg hover:border-green-brand hover:text-green-brand transition-colors duration-200 bg-white"
          >
            ติดต่อ
          </a>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 max-w-sm mx-auto">
          {[
            { value: '7+', label: 'Projects' },
            { value: '3+', label: 'ปีที่ Sleek EV' },
            { value: '100K+', label: 'Users served' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-heading text-green-brand">{s.value}</div>
              <div className="text-body text-ink-faint">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-faint">
        <span className="text-body">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-ink-faint to-transparent" />
      </div>
    </section>
  )
}
