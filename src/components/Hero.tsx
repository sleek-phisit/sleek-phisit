export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#1D4ED8 1px, transparent 1px), linear-gradient(90deg, #1D4ED8 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-light/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-white border border-surface-border rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
          <span className="text-body text-brand">Tech Project Lead · Sleek EV</span>
        </div>

        <h1 className="text-heading mb-5 text-ink">
          Building the future of<br />
          <span className="text-brand">electric mobility</span>
        </h1>

        <p className="text-body text-ink-muted max-w-xl mx-auto mb-10">
          ผลงานการพัฒนาซอฟต์แวร์ที่ Sleek EV ครอบคลุมตั้งแต่ระบบ IoT บนรถมอเตอร์ไซต์ไฟฟ้า
          ไปจนถึงแพลตฟอร์มจัดการฝูงรถ, finance systems และ insights dashboard
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#projects"
            className="bg-brand text-white text-body px-7 py-2.5 rounded-lg hover:bg-brand-dark transition-colors duration-200"
          >
            ดูโปรเจกต์ทั้งหมด
          </a>
          <a
            href="#contact"
            className="border border-surface-border text-body text-ink-muted px-7 py-2.5 rounded-lg hover:border-brand hover:text-brand transition-colors duration-200 bg-white"
          >
            ติดต่อ
          </a>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 max-w-sm mx-auto">
          {[
            { value: '14Y 10M', label: 'Experience' },
            { value: '3', label: 'Companies' },
            { value: '7+', label: 'Projects @ Sleek EV' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-heading text-brand">{s.value}</div>
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
