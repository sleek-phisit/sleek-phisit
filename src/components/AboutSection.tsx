export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 border-t border-surface-border">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-body text-green-brand mb-3">01. about</div>
          <h2 className="text-heading text-ink mb-6">
            Software Engineer<br />
            <span className="text-green-brand">@ Sleek EV</span>
          </h2>
          <div className="space-y-4 text-body text-ink-muted">
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

        <div className="bg-white border border-surface-border rounded-2xl p-8 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-green-brand flex items-center justify-center text-heading text-white">
              P
            </div>
            <div>
              <div className="text-heading text-ink">Phisit</div>
              <div className="text-body text-ink-muted">phisit@sleekev.com</div>
            </div>
          </div>

          <div className="border-t border-surface-border pt-6 space-y-3">
            {[
              { label: 'Role', value: 'Software Engineer' },
              { label: 'Company', value: 'Sleek EV' },
              { label: 'Focus', value: 'Full-stack · IoT · Mobile' },
              { label: 'Location', value: 'Thailand 🇹🇭' },
            ].map((item) => (
              <div key={item.label} className="flex justify-between">
                <span className="text-body text-ink-faint">{item.label}</span>
                <span className="text-body text-ink">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
