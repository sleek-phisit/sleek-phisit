import Animate from './Animate'

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 border-t border-surface-border">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div>
          <Animate type="fade"><div className="text-body text-brand mb-3">01. about</div></Animate>
          <Animate type="fly" delay={80}>
            <h2 className="text-heading text-ink mb-6">
              Tech Project Lead<br />
              <span className="text-brand">@ Sleek EV</span>
            </h2>
          </Animate>
          <div className="space-y-4 text-body text-ink-muted">
            <Animate type="fly" delay={160}>
              <p>SLEEK EV Co., Ltd. เป็น joint venture ไทย–สิงคโปร์ ที่เชี่ยวชาญด้านการออกแบบ ผลิต และจัดจำหน่ายรถมอเตอร์ไซต์ไฟฟ้าและโครงสร้างพื้นฐานการชาร์จ ครอบคลุมตั้งแต่ motorcycles สมรรถนะสูง, ระบบแบตเตอรี่อัจฉริยะ, IoT-based vehicle management ไปจนถึงเครือข่าย S-Charge</p>
            </Animate>
            <Animate type="fly" delay={240}>
              <p>ในฐานะ Tech Project Lead ผมรับผิดชอบกำหนด technology vision ขององค์กร สร้างและขยาย cross-functional engineering team วาง CI/CD, DevOps และ cloud infrastructure รวมถึง architect enterprise-grade platforms ที่สมดุลระหว่าง rapid delivery กับ scalability และ security</p>
            </Animate>
          </div>

          <ul className="mt-6 space-y-2">
            {[
              'Defined & executed company-wide technology vision',
              'Built & scaled cross-functional engineering teams',
              'Established CI/CD, DevOps & cloud infrastructure',
              'Architected enterprise-grade platforms',
              'Mentored senior engineers & technology leaders',
              'Collaborated with executive leadership on product roadmaps',
            ].map((r, i) => (
              <Animate key={r} type="fly" delay={300 + i * 60}>
                <li className="flex items-start gap-2 text-body text-ink-muted">
                  <span className="text-brand mt-0.5 flex-shrink-0">▸</span>
                  {r}
                </li>
              </Animate>
            ))}
          </ul>
        </div>

        <Animate type="zoom" delay={100}>
          <div className="bg-white border border-surface-border rounded-2xl p-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand flex items-center justify-center text-heading text-white breath">
                P
              </div>
              <div>
                <div className="text-heading text-ink">Phisit K.</div>
                <div className="text-body text-ink-muted">phisit@sleekev.com</div>
              </div>
            </div>

            <div className="border-t border-surface-border pt-6 space-y-3">
              {[
                { label: 'Role', value: 'Tech Project Lead' },
                { label: 'Company', value: 'Sleek EV Co., Ltd.' },
                { label: 'Since', value: 'Aug 2024 – Present' },
                { label: 'Experience', value: '14Y 10M · 3 companies' },
                { label: 'Location', value: 'Khlong Toei, Bangkok 🇹🇭' },
                { label: 'Focus', value: 'Full-stack · IoT · Mobile' },
              ].map((item) => (
                <div key={item.label} className="flex justify-between">
                  <span className="text-body text-ink-faint">{item.label}</span>
                  <span className="text-body text-ink text-right">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-surface-border pt-6">
              <div className="text-body text-ink-faint mb-3">Business classification</div>
              <div className="flex flex-wrap gap-2">
                {['EV Manufacturer', 'IoT & Smart Mobility', 'EV Charging Network', 'Clean Energy', 'E-Mobility Ecosystem'].map((tag) => (
                  <span key={tag} className="text-body text-brand bg-brand-light border border-brand-muted px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Animate>
      </div>
    </section>
  )
}
