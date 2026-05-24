export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 border-t border-[#1E2D22]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <div className="text-[#00E676] font-mono text-sm mb-3">01. about</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Software Engineer<br />
            <span className="text-[#00E676]">@ Sleek EV</span>
          </h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              ผมเป็น Software Engineer ที่ Sleek EV บริษัท EV startup สัญชาติไทย ที่มุ่งเปลี่ยนรูปแบบการเดินทางด้วยรถมอเตอร์ไซต์ไฟฟ้า
            </p>
            <p>
              ตลอดระยะเวลาที่ผ่านมา ผมได้พัฒนาระบบซอฟต์แวร์หลากหลาย ตั้งแต่ระบบ IoT เชื่อมต่อกับตัวรถ ไปจนถึงแพลตฟอร์มจัดการธุรกิจและ analytics dashboard
            </p>
            <p>
              ทำงานกับทีม cross-functional รวมถึง hardware engineers, product designers และทีม business operations เพื่อส่งมอบ product ที่ใช้งานได้จริง
            </p>
          </div>
        </div>

        {/* Right — Card */}
        <div className="bg-[#111A14] border border-[#1E2D22] rounded-2xl p-8 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00E676] to-emerald-700 flex items-center justify-center text-2xl font-bold text-[#0A0F0D]">
              P
            </div>
            <div>
              <div className="text-white font-semibold text-lg">Phisit</div>
              <div className="text-gray-500 text-sm font-mono">phisit@sleekev.com</div>
            </div>
          </div>

          <div className="border-t border-[#1E2D22] pt-6 space-y-3">
            {[
              { label: 'Role', value: 'Software Engineer' },
              { label: 'Company', value: 'Sleek EV' },
              { label: 'Focus', value: 'Full-stack · IoT · Mobile' },
              { label: 'Location', value: 'Thailand 🇹🇭' },
            ].map((item) => (
              <div key={item.label} className="flex justify-between text-sm">
                <span className="text-gray-500 font-mono">{item.label}</span>
                <span className="text-gray-200">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
