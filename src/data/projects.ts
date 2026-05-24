export type Project = {
  id: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  category: 'IoT' | 'Mobile' | 'Web' | 'Dashboard' | 'Finance' | 'Fleet'
  icon: string
  color: string
  highlights: string[]
}

export const projects: Project[] = [
  {
    id: 'iot-motorcycle',
    title: 'IoT Motorcycle System',
    description: 'ระบบ IoT สำหรับรถมอเตอร์ไซต์ไฟฟ้า เชื่อมต่อเซ็นเซอร์และระบบควบคุมแบบ real-time',
    longDescription:
      'พัฒนาระบบ IoT เชื่อมต่อรถมอเตอร์ไซต์ไฟฟ้าของ Sleek EV กับคลาวด์ รองรับการส่งข้อมูลเซ็นเซอร์แบบ real-time ครอบคลุม ตำแหน่ง GPS, สถานะแบตเตอรี่, ความเร็ว, อุณหภูมิมอเตอร์ และการวินิจฉัยข้อผิดพลาด',
    tags: ['IoT', 'MQTT', 'Node.js', 'Firebase', 'GPS', 'Embedded'],
    category: 'IoT',
    icon: '⚡',
    color: 'from-green-500 to-emerald-700',
    highlights: [
      'Real-time telemetry ผ่าน MQTT protocol',
      'ติดตาม GPS และวิเคราะห์เส้นทาง',
      'ระบบแจ้งเตือนแบตเตอรี่และการชาร์จ',
      'วินิจฉัยข้อผิดพลาดแบบ OTA',
    ],
  },
  {
    id: 'mobile-app',
    title: 'Sleek EV Application',
    description: 'แอปพลิเคชันหลักสำหรับเจ้าของรถ Sleek EV — ดู telemetry, ควบคุมรถ, จัดการ S-Charge และตรวจสอบสุขภาพรถแบบครบวงจร',
    longDescription:
      'แอปพลิเคชัน iOS/Android สำหรับเจ้าของรถ Sleek EV รวม vehicle telemetry, การควบคุมรถทางไกล, ระบบ S-Charge, vehicle diagnostic, แผนการบำรุงรักษา และข้อมูลการรับประกัน',
    tags: ['React Native', 'TypeScript', 'IoT', 'MQTT', 'Firebase', 'Payment Gateway'],
    category: 'Mobile',
    icon: '📱',
    color: 'from-blue-500 to-cyan-700',
    highlights: [
      'Telemetry — ดูข้อมูลรถแบบ real-time',
      'Battery info — level, health, temp, charge cycle',
      'Vehicle control — lock/unlock, seat & bucket unlock, find/search mode, secure mode',
      'S-Charge history และ top up credit / buffet package',
      'Vehicle diagnostic — ตรวจสอบข้อผิดพลาดและสุขภาพระบบ',
      'MA / PM — แผนบำรุงรักษาและ preventive maintenance',
      'Warranty info — ตรวจสอบสถานะการรับประกัน',
    ],
  },
  {
    id: 'onesleek-console',
    title: 'Onesleek Console',
    description: 'แพลตฟอร์ม back-office ครบวงจรสำหรับ Sleek EV จัดการทรัพย์สิน, ดีลเลอร์, คลังสินค้า, การผลิต และ traceability พร้อม AI assistant',
    longDescription:
      'ระบบ enterprise console ที่รวมการจัดการทุก operation ของ Sleek EV ไว้ในที่เดียว ตั้งแต่ asset management (รถ, แบตเตอรี่, มอเตอร์, S-Charge), dealer management, warehouse, manufacturing, part traceability ไปจนถึง AI ที่ช่วยค้นหาข้อมูล ตรวจจับความผิดปกติ และแนะนำการปรับปรุงระบบ',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'LLM', 'RAG', 'Role-based Access'],
    category: 'Web',
    icon: '🏢',
    color: 'from-purple-500 to-violet-700',
    highlights: [
      'AI assistant — ค้นหาข้อมูล ตอบคำถาม และตรวจจับ anomaly ในระบบ',
      'AI แนะนำวิธีแก้ไขและปรับปรุงระบบให้ดีขึ้น',
      'Asset management — รถ, แบตเตอรี่, มอเตอร์, S-Charge network',
      'Dealer management — จัดการเครือข่ายดีลเลอร์',
      'Warehouse & manufacturing management',
      'Part traceability — ติดตาม lifecycle ชิ้นส่วนตั้งแต่ผลิตถึงมือลูกค้า',
    ],
  },
  {
    id: 'finance-app',
    title: 'Finance App',
    description: 'แอปพลิเคชันการเงินสำหรับผู้ใช้งาน จัดการแผนการชำระเงินและสัญญาเช่าซื้อ EV',
    longDescription:
      'แอปพลิเคชันด้านการเงินที่ช่วยให้ลูกค้าของ Sleek EV จัดการสัญญาเช่าซื้อ ตรวจสอบยอดค้างชำระ ประวัติการชำระเงิน และคำนวณแผนการผ่อนชำระ',
    tags: ['React Native', 'TypeScript', 'REST API', 'Payment Gateway', 'PDF Export'],
    category: 'Finance',
    icon: '💳',
    color: 'from-amber-500 to-orange-700',
    highlights: [
      'ติดตามสัญญาเช่าซื้อและยอดค้างชำระ',
      'ชำระเงินผ่านหลายช่องทาง',
      'ดาวน์โหลด statement แบบ PDF',
      'แจ้งเตือนครบกำหนดชำระ',
    ],
  },
  {
    id: 'finance-console',
    title: 'Finance Console',
    description: 'ระบบหลังบ้านด้านการเงิน จัดการสัญญา, ยอดค้างชำระ และรายงานทางการเงินทั้งหมด',
    longDescription:
      'ระบบจัดการการเงินสำหรับทีม finance ของ Sleek EV บริหารสัญญาเช่าซื้อ ตรวจสอบการชำระเงิน จัดการการค้างชำระ และสร้างรายงานทางการเงินอัตโนมัติ',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Excel Export', 'Chart.js'],
    category: 'Finance',
    icon: '📊',
    color: 'from-rose-500 to-pink-700',
    highlights: [
      'จัดการสัญญาเช่าซื้อหลายพันรายการ',
      'รายงานทางการเงินอัตโนมัติ',
      'Export Excel/PDF',
      'ติดตามการค้างชำระและดำเนินการ',
    ],
  },
  {
    id: 'fleet-management',
    title: 'Fleet Management',
    description: 'ระบบบริหารจัดการฝูงรถ EV ติดตาม ดูแล และวิเคราะห์รถทั้งหมดในระบบ',
    longDescription:
      'แพลตฟอร์มบริหารจัดการฝูงรถไฟฟ้าครบวงจร รองรับการติดตามตำแหน่ง GPS แบบ real-time, การจัดตารางซ่อมบำรุง, วิเคราะห์ประสิทธิภาพรถแต่ละคัน และจัดการคนขับ',
    tags: ['Next.js', 'TypeScript', 'Mapbox', 'WebSocket', 'PostgreSQL', 'Redis'],
    category: 'Fleet',
    icon: '🛵',
    color: 'from-teal-500 to-cyan-700',
    highlights: [
      'แผนที่ติดตาม GPS แบบ real-time',
      'จัดการตารางซ่อมบำรุง',
      'วิเคราะห์ประสิทธิภาพพลังงาน',
      'จัดการคนขับและการมอบหมายงาน',
    ],
  },
  {
    id: 'insights-dashboard',
    title: 'Insights Dashboard',
    description: 'Dashboard วิเคราะห์ข้อมูลเชิงลึก แสดงผลข้อมูลธุรกิจและ IoT แบบ real-time',
    longDescription:
      'ระบบ business intelligence ที่รวมข้อมูลจากทุก platform มาแสดงผลใน dashboard เดียว ครอบคลุม KPI ธุรกิจ, สถิติการใช้งานรถ, ข้อมูลการเงิน และ performance metrics',
    tags: ['Next.js', 'TypeScript', 'Recharts', 'BigQuery', 'Looker Studio', 'Firebase'],
    category: 'Dashboard',
    icon: '📈',
    color: 'from-indigo-500 to-blue-700',
    highlights: [
      'KPI dashboard แบบ real-time',
      'วิเคราะห์ข้อมูล IoT จากรถทั้งหมด',
      'รายงานธุรกิจแบบ customizable',
      'แจ้งเตือน anomaly detection',
    ],
  },
]

export const skills = [
  { name: 'TypeScript', level: 90 },
  { name: 'React / Next.js', level: 90 },
  { name: 'React Native', level: 85 },
  { name: 'Node.js', level: 85 },
  { name: 'IoT / MQTT', level: 80 },
  { name: 'PostgreSQL', level: 80 },
  { name: 'Firebase', level: 85 },
  { name: 'Docker', level: 75 },
]
