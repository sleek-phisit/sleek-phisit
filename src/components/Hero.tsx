export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#00E676 1px, transparent 1px), linear-gradient(90deg, #00E676 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00E676]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-[#111A14] border border-[#1E2D22] rounded-full px-4 py-1.5 mb-8 text-xs text-[#00E676] font-mono">
          <span className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse" />
          Sleek EV · Software Engineer
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="text-white">Building the future</span>
          <br />
          <span className="text-[#00E676]">of electric mobility</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          ผลงานการพัฒนาซอฟต์แวร์ที่ Sleek EV ครอบคลุมตั้งแต่ระบบ IoT บนรถมอเตอร์ไซต์ไฟฟ้า
          ไปจนถึงแพลตฟอร์มจัดการฝูงรถและ insights dashboard
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="bg-[#00E676] text-[#0A0F0D] font-semibold px-8 py-3 rounded-lg hover:bg-[#00E676]/90 transition-colors duration-200"
          >
            ดูโปรเจกต์ทั้งหมด
          </a>
          <a
            href="#contact"
            className="border border-[#1E2D22] text-gray-300 font-medium px-8 py-3 rounded-lg hover:border-[#00E676] hover:text-[#00E676] transition-colors duration-200"
          >
            ติดต่อ
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: '7+', label: 'Projects' },
            { value: '3+', label: 'ปีที่ Sleek EV' },
            { value: '100K+', label: 'Users served' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#00E676]">{s.value}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
        <span className="text-xs font-mono">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
      </div>
    </section>
  )
}
