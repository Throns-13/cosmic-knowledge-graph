
/*
  COSMIC KNOWLEDGE GRAPH
  Solar Galactic Orbit & Black Hole Orbital Mechanics

  Categories:
  solar, blackhole, physics, evidence, advanced
*/

const nodes = [
  // ==========================================
  // SOLAR ORBIT
  // ==========================================
  {
    id: "milky-way",
    label: "Milky Way",
    category: "solar",
    icon: "🌌",
    importance: 3,
    description: "ทางช้างเผือกคือกาแล็กซีที่ระบบสุริยะของเราอาศัยอยู่ มีดาวฤกษ์หลายแสนล้านดวง รวมถึงก๊าซ ฝุ่น และสสารมืด",
    principle: "แรงโน้มถ่วงของมวลรวมในกาแล็กซีสร้างสนามศักย์โน้มถ่วงที่ควบคุมการเคลื่อนที่ของดาวฤกษ์",
    facts: [
      "ทางช้างเผือกเป็นกาแล็กซีกังหันมีคาน (Barred Spiral Galaxy)",
      "มี Sagittarius A* อยู่บริเวณใจกลาง",
      "ระบบสุริยะอยู่ในบริเวณที่เรียกว่า Orion Spur"
    ],
    tags: ["galaxy", "milky way", "กาแล็กซี"]
  },
  {
    id: "orion-spur",
    label: "Orion Spur",
    category: "solar",
    icon: "✨",
    importance: 2,
    description: "Orion Spur หรือแขนย่อยนายพราน เป็นบริเวณหนึ่งของทางช้างเผือกที่ระบบสุริยะตั้งอยู่ ระหว่างแขนกังหันขนาดใหญ่",
    principle: "ตำแหน่งของระบบสุริยะในกาแล็กซีช่วยกำหนดบริบทของวงโคจรรอบศูนย์กลางทางช้างเผือก",
    facts: [
      "เป็นโครงสร้างแขนย่อยของทางช้างเผือก",
      "ระบบสุริยะอยู่ห่างจากใจกลางกาแล็กซีประมาณ 26,000–27,000 ปีแสง"
    ],
    tags: ["solar system", "galaxy"]
  },
  {
    id: "sun",
    label: "The Sun",
    category: "solar",
    icon: "☀️",
    importance: 3,
    description: "ดวงอาทิตย์เป็นดาวฤกษ์ที่เป็นศูนย์กลางของระบบสุริยะ แต่ในระดับกาแล็กซี ดวงอาทิตย์เองก็เป็นวัตถุที่กำลังโคจรรอบศูนย์กลางทางช้างเผือก",
    principle: "ดวงอาทิตย์เคลื่อนที่ภายใต้สนามโน้มถ่วงรวมของดาว ก๊าซ ฝุ่น และสสารมืดในทางช้างเผือก",
    facts: [
      "มีมวลประมาณ 1.989 × 10³⁰ กิโลกรัม",
      "อยู่ห่างจากศูนย์กลางทางช้างเผือกประมาณ 26,000–27,000 ปีแสง",
      "เคลื่อนที่รอบกาแล็กซีด้วยความเร็วประมาณ 220–240 กิโลเมตรต่อวินาที"
    ],
    tags: ["sun", "solar system", "ดาวฤกษ์"]
  },
  {
    id: "galactic-center",
    label: "Galactic Center",
    category: "solar",
    icon: "🎯",
    importance: 3,
    description: "บริเวณใจกลางทางช้างเผือก เป็นพื้นที่ที่มีความหนาแน่นของดาวและสสารสูง รวมถึงมีหลุมดำมวลยิ่งยวด Sagittarius A*",
    principle: "วัตถุในกาแล็กซีโคจรภายใต้ศักย์โน้มถ่วงรวม ไม่ได้ถูกควบคุมโดยหลุมดำใจกลางเพียงอย่างเดียวในทุกระยะ",
    facts: [
      "เป็นบริเวณที่มี Sagittarius A*",
      "มีดาวฤกษ์หนาแน่นกว่าบริเวณใกล้ระบบสุริยะ",
      "เป็นพื้นที่สำคัญสำหรับศึกษาพลวัตของกาแล็กซี"
    ],
    tags: ["galactic center", "milky way"]
  },
  {
    id: "solar-galactic-orbit",
    label: "Solar Galactic Orbit",
    category: "solar",
    icon: "🌀",
    importance: 3,
    description: "วงโคจรของดวงอาทิตย์รอบใจกลางทางช้างเผือก โดยใช้เวลาประมาณ 225–250 ล้านปีต่อหนึ่งรอบ เรียกว่า Galactic Year",
    principle: "การเคลื่อนที่เกิดจากสมดุลระหว่างความเฉื่อยของการเคลื่อนที่และแรงโน้มถ่วงจากมวลรวมของกาแล็กซี",
    facts: [
      "ความเร็วโดยประมาณ 220–240 km/s",
      "หนึ่งรอบใช้เวลาประมาณ 225–250 ล้านปี",
      "วงโคจรจริงไม่จำเป็นต้องเป็นวงกลมสมบูรณ์",
      "ดวงอาทิตย์ไม่ได้โคจรรอบ Sagittarius A* เพียงดวงเดียวโดยตรง"
    ],
    tags: ["orbit", "galactic year", "solar motion"]
  },
  {
    id: "galactic-year",
    label: "Galactic Year",
    category: "solar",
    icon: "⏳",
    importance: 2,
    description: "ระยะเวลาที่ดวงอาทิตย์ใช้ในการโคจรรอบใจกลางทางช้างเผือกครบหนึ่งรอบ",
    principle: "ระยะเวลาการโคจรสัมพันธ์กับระยะทางและความเร็วในการเคลื่อนที่รอบกาแล็กซี",
    facts: [
      "ประมาณ 225–250 ล้านปี",
      "ตั้งแต่กำเนิดดวงอาทิตย์จนถึงปัจจุบัน ดวงอาทิตย์เดินทางรอบกาแล็กซีมาแล้วหลายสิบรอบ"
    ],
    tags: ["time", "orbit"]
  },
  {
    id: "galactic-potential",
    label: "Galactic Potential",
    category: "solar",
    icon: "🌠",
    importance: 2,
    description: "ศักย์โน้มถ่วงรวมของทางช้างเผือก ซึ่งเกิดจากดาวฤกษ์ ก๊าซ ฝุ่น และสสารมืด",
    principle: "การเปลี่ยนแปลงของศักย์โน้มถ่วงตามตำแหน่งเป็นตัวกำหนดความเร่งโน้มถ่วงของวัตถุ",
    facts: [
      "ไม่ได้เกิดจากหลุมดำใจกลางเพียงอย่างเดียว",
      "ใช้สร้างแบบจำลองการเคลื่อนที่ของดาวในกาแล็กซี",
      "มวลที่มองไม่เห็น เช่น Dark Matter มีส่วนต่อแรงโน้มถ่วง"
    ],
    tags: ["gravity", "dark matter", "galaxy"]
  },
  {
    id: "vertical-oscillation",
    label: "Vertical Oscillation",
    category: "solar",
    icon: "↕️",
    importance: 1,
    description: "ดวงอาทิตย์มีการเคลื่อนที่ขึ้นและลงเมื่อเทียบกับระนาบของจานกาแล็กซี ไม่ได้เคลื่อนที่อยู่ในระนาบเดียวตลอดเวลา",
    principle: "แรงโน้มถ่วงจากมวลที่กระจายอยู่เหนือและใต้ระนาบกาแล็กซีทำให้เกิดการแกว่งในแนวดิ่ง",
    facts: [
      "เป็นการเคลื่อนที่เพิ่มเติมจากการโคจรรอบใจกลางกาแล็กซี",
      "รูปแบบการแกว่งขึ้นลงมีความซับซ้อนและขึ้นกับแบบจำลองกาแล็กซี"
    ],
    tags: ["solar motion", "galactic disk"]
  },

  // ==========================================
  // BLACK HOLE
  // ==========================================
  {
    id: "sagittarius-a",
    label: "Sagittarius A*",
    category: "blackhole",
    icon: "🕳️",
    importance: 3,
    description: "Sagittarius A* (Sgr A*) คือหลุมดำมวลยิ่งยวดที่อยู่บริเวณใจกลางทางช้างเผือก มีมวลประมาณ 4 ล้านเท่าของมวลดวงอาทิตย์",
    principle: "มวลมหาศาลรวมอยู่ในบริเวณเล็กมาก ทำให้เกิดความโค้งของปริภูมิ-เวลาอย่างรุนแรงใกล้หลุมดำ",
    facts: [
      "อยู่ห่างจากโลกประมาณ 26,000 ปีแสง",
      "มวลประมาณ 4 ล้านเท่าของดวงอาทิตย์",
      "มีการสังเกตดาวฤกษ์โคจรรอบบริเวณนี้เพื่อศึกษามวลของหลุมดำ"
    ],
    tags: ["black hole", "sgr a", "supermassive"]
  },
  {
    id: "black-hole",
    label: "Black Hole",
    category: "blackhole",
    icon: "⚫",
    importance: 3,
    description: "หลุมดำคือบริเวณในปริภูมิ-เวลาที่แรงโน้มถ่วงรุนแรงจนเมื่อวัตถุหรือแสงข้ามขอบฟ้าเหตุการณ์แล้ว จะไม่สามารถกลับออกมาสู่ภายนอกได้",
    principle: "ทฤษฎีสัมพัทธภาพทั่วไปอธิบายหลุมดำผ่านเรขาคณิตของปริภูมิ-เวลาที่โค้งอย่างรุนแรง",
    facts: [
      "หลุมดำไม่ได้ดูดทุกสิ่งในจักรวาลโดยอัตโนมัติ",
      "วัตถุสามารถโคจรรอบหลุมดำได้",
      "Event Horizon ไม่ใช่พื้นผิวแข็ง"
    ],
    tags: ["black hole", "gravity", "relativity"]
  },
  {
    id: "event-horizon",
    label: "Event Horizon",
    category: "blackhole",
    icon: "⭕",
    importance: 3,
    description: "ขอบฟ้าเหตุการณ์คือขอบเขตที่เมื่อข้ามเข้าไปแล้ว ไม่สามารถส่งสัญญาณหรือกลับออกมายังผู้สังเกตภายนอกได้",
    principle: "ภายในขอบฟ้าเหตุการณ์ เส้นทางในอนาคตที่เป็นไปได้ทั้งหมดมุ่งไปสู่บริเวณภายในหลุมดำ",
    facts: [
      "ไม่ใช่พื้นผิวแข็ง",
      "รัศมี Schwarzschild สำหรับหลุมดำไม่หมุนคือ 2GM/c²",
      "การข้ามขอบฟ้าเหตุการณ์ไม่ได้หมายความว่าจะชนกำแพงทางกายภาพ"
    ],
    tags: ["event horizon", "black hole"]
  },
  {
    id: "singularity",
    label: "Singularity",
    category: "blackhole",
    icon: "🔻",
    importance: 2,
    description: "ภาวะเอกฐานคือบริเวณที่แบบจำลองสัมพัทธภาพทั่วไปแบบคลาสสิกทำนายว่าความโค้งของปริภูมิ-เวลาอาจเพิ่มขึ้นอย่างไม่จำกัด",
    principle: "เป็นสัญญาณว่าทฤษฎีสัมพัทธภาพทั่วไปแบบคลาสสิกอาจไม่เพียงพอในการอธิบายสภาวะสุดขั้ว และอาจต้องใช้ทฤษฎีแรงโน้มถ่วงควอนตัม",
    facts: [
      "ไม่ควรตีความว่าเป็นวัตถุแข็งขนาดเล็กธรรมดา",
      "เป็นหนึ่งในปัญหาสำคัญของฟิสิกส์แรงโน้มถ่วง"
    ],
    tags: ["singularity", "general relativity"]
  },
  {
    id: "photon-sphere",
    label: "Photon Sphere",
    category: "blackhole",
    icon: "💡",
    importance: 2,
    description: "บริเวณที่แสงสามารถเดินทางเป็นวงโคจรวงกลมได้ในแบบจำลองหลุมดำ Schwarzschild แต่เป็นวงโคจรที่ไม่เสถียร",
    principle: "ความโค้งของปริภูมิ-เวลาทำให้เส้นทางของแสงสามารถโค้งกลับรอบหลุมดำได้",
    facts: [
      "สำหรับ Schwarzschild Black Hole อยู่ที่ r = 3GM/c²",
      "วงโคจรของโฟตอนนี้ไม่เสถียร",
      "มีบทบาทต่อการเกิดเงาของหลุมดำ"
    ],
    tags: ["photon", "light", "black hole"]
  },
  {
    id: "isco",
    label: "ISCO",
    category: "blackhole",
    icon: "🔄",
    importance: 3,
    description: "Innermost Stable Circular Orbit คือวงโคจรวงกลมที่เสถียรใกล้หลุมดำที่สุด สำหรับหลุมดำ Schwarzschild ที่ไม่หมุน ISCO อยู่ที่ระยะ 6GM/c²",
    principle: "ความเสถียรของวงโคจรขึ้นอยู่กับเรขาคณิตของปริภูมิ-เวลาและโมเมนตัมเชิงมุม",
    facts: [
      "Schwarzschild: rISCO = 6GM/c²",
      "Kerr Black Hole: ระยะ ISCO ขึ้นกับอัตราการหมุนและทิศทางการโคจร",
      "ด้านใน ISCO ไม่มีวงโคจรวงกลมเสถียรแบบเดียวกัน"
    ],
    tags: ["isco", "orbital mechanics", "kerr"]
  },
  {
    id: "accretion-disk",
    label: "Accretion Disk",
    category: "blackhole",
    icon: "💫",
    importance: 3,
    description: "จานพอกพูนมวลคือสสาร เช่น ก๊าซและพลาสมา ที่หมุนวนรอบหลุมดำก่อนบางส่วนจะเคลื่อนเข้าใกล้และตกลงไป",
    principle: "แรงเสียดทานเชิงประสิทธิผลและความปั่นป่วนช่วยขนส่งโมเมนตัมเชิงมุมออกด้านนอก ทำให้สสารบางส่วนเคลื่อนเข้าด้านใน",
    facts: [
      "สสารในจานอาจมีอุณหภูมิสูงมาก",
      "สามารถปล่อยรังสีตั้งแต่ช่วงคลื่นวิทยุจนถึงรังสีเอกซ์",
      "ไม่ใช่ทุกส่วนของจานที่จะตกลงหลุมดำทันที"
    ],
    tags: ["accretion", "plasma", "black hole"]
  },
  {
    id: "black-hole-spin",
    label: "Black Hole Spin",
    category: "blackhole",
    icon: "🌀",
    importance: 2,
    description: "การหมุนของหลุมดำมีผลต่อโครงสร้างปริภูมิ-เวลาใกล้หลุมดำ โดยเฉพาะตำแหน่งวงโคจรที่เสถียรที่สุด",
    principle: "หลุมดำแบบ Kerr มีการลากกรอบอ้างอิง (Frame Dragging) ทำให้ปริภูมิ-เวลาบริเวณใกล้หลุมดำถูกพาให้หมุนตาม",
    facts: [
      "การหมุนมีผลต่อ ISCO",
      "วงโคจรแบบ Prograde หมุนไปทิศเดียวกับหลุมดำ",
      "วงโคจรแบบ Retrograde หมุนสวนทางกับหลุมดำ"
    ],
    tags: ["spin", "kerr black hole"]
  },
  {
    id: "tidal-forces",
    label: "Tidal Forces",
    category: "blackhole",
    icon: "↔️",
    importance: 2,
    description: "แรงไทดัลคือความแตกต่างของแรงโน้มถ่วงระหว่างส่วนต่าง ๆ ของวัตถุ ทำให้วัตถุถูกยืดหรือบีบอัด",
    principle: "แรงโน้มถ่วงบริเวณที่ใกล้หลุมดำกับไกลหลุมดำมีความแตกต่างกันอย่างมาก",
    facts: [
      "อาจทำให้ดาวถูกยืดเป็นเส้นยาว",
      "เกี่ยวข้องกับปรากฏการณ์ Tidal Disruption Event",
      "ผลรุนแรงขึ้นเมื่อเข้าใกล้แหล่งแรงโน้มถ่วง"
    ],
    tags: ["tidal force", "TDE"]
  },
  {
    id: "orbital-matter",
    label: "Orbiting Matter",
    category: "blackhole",
    icon: "🪨",
    importance: 2,
    description: "วัตถุที่มีมวลสามารถโคจรรอบหลุมดำได้ หากมีความเร็วและโมเมนตัมเชิงมุมที่เหมาะสม",
    principle: "แรงโน้มถ่วงเปลี่ยนทิศทางการเคลื่อนที่ของวัตถุ แต่ไม่ได้ทำให้วัตถุตกลงไปตรง ๆ เสมอ",
    facts: [
      "ดาวฤกษ์สามารถโคจรรอบหลุมดำได้",
      "ก๊าซและพลาสมาสามารถสร้างจานพอกพูนมวล",
      "ดาวคู่บางระบบอาจมีหลุมดำเป็นสมาชิก"
    ],
    tags: ["orbit", "matter", "black hole"]
  },
  {
    id: "s2-star",
    label: "S2 Star",
    category: "blackhole",
    icon: "⭐",
    importance: 3,
    description: "S2 เป็นดาวฤกษ์ที่โคจรใกล้ Sagittarius A* มากดวงหนึ่ง นักดาราศาสตร์ติดตามวงโคจรของมันเพื่อศึกษามวลและแรงโน้มถ่วงรอบหลุมดำ",
    principle: "การวัดตำแหน่ง ความเร็ว และคาบการโคจรของดาว ช่วยคำนวณมวลของวัตถุที่อยู่บริเวณใจกลางวงโคจร",
    facts: [
      "มีคาบการโคจรประมาณ 16 ปี",
      "วงโคจรมีความรีสูง",
      "ใช้ทดสอบผลของสัมพัทธภาพทั่วไป"
    ],
    tags: ["S2", "star orbit", "evidence"]
  },

  // ==========================================
  // PHYSICS
  // ==========================================
  {
    id: "gravity",
    label: "Gravity",
    category: "physics",
    icon: "🧲",
    importance: 3,
    description: "แรงโน้มถ่วงเป็นปฏิสัมพันธ์พื้นฐานที่ทำให้วัตถุมีมวลดึงดูดกัน และเป็นตัวกำหนดการเคลื่อนที่ระดับดาวเคราะห์ ดาวฤกษ์ และกาแล็กซี",
    principle: "ในกรอบ Newton แรงโน้มถ่วงแปรผันตรงกับผลคูณของมวลและแปรผกผันกับระยะทางกำลังสอง",
    facts: [
      "F = GMm/r² สำหรับมวลจุดในกรอบ Newton",
      "ในสัมพัทธภาพทั่วไป แรงโน้มถ่วงอธิบายผ่านความโค้งของปริภูมิ-เวลา"
    ],
    tags: ["gravity", "newton", "relativity"]
  },
  {
    id: "newton-gravity",
    label: "Newtonian Gravity",
    category: "physics",
    icon: "📐",
    importance: 2,
    description: "ทฤษฎีแรงโน้มถ่วงของนิวตันอธิบายแรงดึงดูดระหว่างมวลได้ดีในสภาวะทั่วไปที่สนามโน้มถ่วงไม่รุนแรงมาก",
    principle: "F = GMm/r²",
    facts: [
      "G คือค่าคงที่ความโน้มถ่วง",
      "M และ m คือมวลของวัตถุ",
      "r คือระยะห่างระหว่างจุดศูนย์กลางมวล"
    ],
    tags: ["newton", "formula", "gravity"]
  },
  {
    id: "orbital-speed",
    label: "Orbital Speed",
    category: "physics",
    icon: "🚀",
    importance: 2,
    description: "ความเร็ววงโคจรคือความเร็วที่วัตถุต้องมีเพื่อเคลื่อนที่รอบแหล่งมวล โดยกรณี Newtonian ที่มวลศูนย์กลางครอบงำและวงโคจรเป็นวงกลม ใช้สมการ v = √(GM/r)",
    principle: "แรงโน้มถ่วงทำหน้าที่เป็นแรงสู่ศูนย์กลางของการเคลื่อนที่แบบวงกลม",
    facts: [
      "v = √(GM/r)",
      "เมื่อระยะ r ลดลง ความเร็ววงโคจรจะเพิ่มขึ้นในแบบจำลองนี้",
      "สมการนี้ไม่ใช่สูตรทั่วไปสำหรับบริเวณใกล้หลุมดำที่ต้องใช้สัมพัทธภาพทั่วไป"
    ],
    tags: ["orbital speed", "formula"]
  },
  {
    id: "angular-momentum",
    label: "Angular Momentum",
    category: "physics",
    icon: "🌀",
    importance: 3,
    description: "โมเมนตัมเชิงมุมเป็นปริมาณที่เกี่ยวข้องกับการหมุนและการโคจร เป็นเหตุผลสำคัญที่ทำให้วัตถุไม่เคลื่อนตรงเข้าสู่หลุมดำโดยง่าย",
    principle: "สำหรับวงโคจรวงกลมที่ความเร็วตั้งฉากกับรัศมี L = mvr",
    facts: [
      "มีบทบาทต่อการเกิดวงโคจร",
      "การขนส่งโมเมนตัมเชิงมุมในจานพอกพูนมวลทำให้สสารบางส่วนเคลื่อนเข้าใกล้หลุมดำ",
      "ต้องระบุเงื่อนไขของระบบเมื่อใช้สูตรอย่างง่าย"
    ],
    tags: ["angular momentum", "orbit"]
  },
  {
    id: "centripetal-motion",
    label: "Centripetal Motion",
    category: "physics",
    icon: "🔁",
    importance: 2,
    description: "การเคลื่อนที่แบบมีความเร่งสู่ศูนย์กลางเกิดขึ้นเมื่อทิศทางความเร็วเปลี่ยน แม้ขนาดความเร็วจะคงที่",
    principle: "สำหรับวงกลม a = v²/r และแรงลัพธ์ต้องมีองค์ประกอบชี้เข้าสู่ศูนย์กลาง",
    facts: [
      "ความเร่งสู่ศูนย์กลางไม่ใช่แรงชนิดใหม่",
      "แรงโน้มถ่วงสามารถทำหน้าที่เป็นแรงสู่ศูนย์กลางของวงโคจรได้"
    ],
    tags: ["centripetal", "circular motion"]
  },
  {
    id: "general-relativity",
    label: "General Relativity",
    category: "physics",
    icon: "🧠",
    importance: 3,
    description: "ทฤษฎีสัมพัทธภาพทั่วไปของไอน์สไตน์อธิบายแรงโน้มถ่วงว่าเป็นผลจากความโค้งของปริภูมิ-เวลาอันเกิดจากมวลและพลังงาน",
    principle: "สสารและพลังงานกำหนดเรขาคณิตของปริภูมิ-เวลา และวัตถุที่ตกอย่างอิสระเคลื่อนที่ตามเส้นทางที่เรียกว่า Geodesic",
    facts: [
      "อธิบายวงโคจรใกล้หลุมดำได้ดีกว่ากลศาสตร์ Newtonian",
      "ทำนายการเบนของแสงด้วยแรงโน้มถ่วง",
      "ทำนายการหน่วงเวลาจากแรงโน้มถ่วง",
      "ทำนายคลื่นความโน้มถ่วง"
    ],
    tags: ["general relativity", "einstein"]
  },
  {
    id: "spacetime-curvature",
    label: "Spacetime Curvature",
    category: "physics",
    icon: "🕸️",
    importance: 2,
    description: "ความโค้งของปริภูมิ-เวลาคือแนวคิดหลักในสัมพัทธภาพทั่วไป ซึ่งใช้อธิบายว่ามวลและพลังงานส่งผลต่อการเคลื่อนที่ของวัตถุและแสงอย่างไร",
    principle: "สมการสนามของไอน์สไตน์เชื่อมโยงเรขาคณิตของปริภูมิ-เวลากับการกระจายตัวของมวลและพลังงาน",
    facts: [
      "ไม่ใช่การยุบตัวของวัตถุลงบนผืนผ้ายางจริง ๆ",
      "แสงเดินทางตามเส้นทางในปริภูมิ-เวลาที่โค้ง",
      "ความโค้งรุนแรงมากใกล้หลุมดำ"
    ],
    tags: ["spacetime", "curvature"]
  },
  {
    id: "gravitational-time-dilation",
    label: "Time Dilation",
    category: "physics",
    icon: "⌛",
    importance: 2,
    description: "การหน่วงเวลาจากแรงโน้มถ่วงหมายถึงนาฬิกาในบริเวณที่มีศักย์โน้มถ่วงลึกกว่าอาจเดินช้ากว่าเมื่อเปรียบเทียบกับนาฬิกาที่อยู่ไกลออกไป",
    principle: "อัตราการเดินของเวลาแตกต่างกันตามเรขาคณิตของปริภูมิ-เวลา",
    facts: [
      "เป็นผลที่ทฤษฎีสัมพัทธภาพทั่วไปทำนาย",
      "มีความสำคัญต่อการศึกษาหลุมดำ",
      "ผู้สังเกตแต่ละตำแหน่งอาจวัดเวลาที่ผ่านไปแตกต่างกัน"
    ],
    tags: ["time dilation", "relativity"]
  },
  {
    id: "frame-dragging",
    label: "Frame Dragging",
    category: "physics",
    icon: "🌪️",
    importance: 2,
    description: "Frame Dragging หรือ Lense–Thirring Effect คือปรากฏการณ์ที่วัตถุหมุนทำให้ปริภูมิ-เวลาใกล้เคียงถูกลากให้หมุนตามบางส่วน",
    principle: "การหมุนของมวลทำให้เกิดผลทางเรขาคณิตของปริภูมิ-เวลาตามคำอธิบายของสัมพัทธภาพทั่วไป",
    facts: [
      "มีความสำคัญต่อหลุมดำแบบ Kerr",
      "เกี่ยวข้องกับการหมุนของหลุมดำ",
      "สามารถส่งผลต่อการวางแนววงโคจรของวัตถุใกล้แหล่งมวลหมุน"
    ],
    tags: ["frame dragging", "lense thirring"]
  },
  {
    id: "orbital-stability",
    label: "Orbital Stability",
    category: "physics",
    icon: "⚖️",
    importance: 2,
    description: "เสถียรภาพของวงโคจรหมายถึงความสามารถของวงโคจรในการคงสภาพหรือกลับเข้าสู่สภาพใกล้เคียงเดิมเมื่อถูกรบกวนเล็กน้อย",
    principle: "เสถียรภาพขึ้นกับพลังงาน โมเมนตัมเชิงมุม และโครงสร้างของสนามโน้มถ่วง",
    facts: [
      "วงโคจรวงกลมไม่ได้เสถียรทุกระยะ",
      "ISCO เป็นขอบเขตสำคัญของวงโคจรวงกลมเสถียรรอบหลุมดำ",
      "วงโคจรสามารถเปลี่ยนได้เมื่อมีการสูญเสียพลังงานหรือโมเมนตัมเชิงมุม"
    ],
    tags: ["stability", "orbit"]
  },

  // ==========================================
  // EVIDENCE
  // ==========================================
  {
    id: "s2-observation",
    label: "S2 Orbit Evidence",
    category: "evidence",
    icon: "🔭",
    importance: 3,
    description: "การติดตามตำแหน่งและความเร็วของดาว S2 เป็นหลักฐานสำคัญที่ช่วยให้นักดาราศาสตร์ประเมินมวลของวัตถุขนาดใหญ่ที่อยู่บริเวณใจกลางทางช้างเผือก",
    principle: "ใช้ข้อมูลวงโคจรและกฎการเคลื่อนที่เพื่ออนุมานมวลของแหล่งแรงโน้มถ่วง",
    facts: [
      "พบว่าดาวเคลื่อนที่ด้วยความเร็วสูงมากเมื่อเข้าใกล้ใจกลาง",
      "การสังเกตช่วยทดสอบผลของสัมพัทธภาพทั่วไป",
      "สนับสนุนการมีอยู่ของหลุมดำมวลยิ่งยวด Sagittarius A*"
    ],
    tags: ["observation", "S2", "evidence"]
  },
  {
    id: "eht",
    label: "Event Horizon Telescope",
    category: "evidence",
    icon: "📡",
    importance: 3,
    description: "Event Horizon Telescope (EHT) เป็นเครือข่ายกล้องโทรทรรศน์วิทยุทั่วโลกที่ทำงานร่วมกันเพื่อสร้างภาพบริเวณใกล้หลุมดำด้วยความละเอียดเชิงมุมสูงมาก",
    principle: "ใช้เทคนิค Very Long Baseline Interferometry หรือ VLBI รวมข้อมูลจากกล้องหลายตำแหน่งให้เสมือนเป็นกล้องขนาดใหญ่",
    facts: [
      "เผยแพร่ภาพ M87* ในปี 2019",
      "เผยแพร่ภาพ Sagittarius A* ในปี 2022",
      "ภาพแสดงโครงสร้างการแผ่รังสีรอบบริเวณเงาของหลุมดำ ไม่ใช่ภาพพื้นผิวหลุมดำโดยตรง"
    ],
    tags: ["EHT", "telescope", "observation"]
  },
  {
    id: "m87",
    label: "M87*",
    category: "evidence",
    icon: "🌑",
    importance: 2,
    description: "M87* เป็นหลุมดำมวลยิ่งยวดใจกลางกาแล็กซี Messier 87 เป็นเป้าหมายสำคัญของการถ่ายภาพหลุมดำโดย EHT",
    principle: "ภาพวงแหวนสว่างและเงาตรงกลางช่วยทดสอบแบบจำลองการแผ่รังสีและแรงโน้มถ่วงรอบหลุมดำ",
    facts: [
      "มีมวลประมาณ 6.5 พันล้านเท่าของดวงอาทิตย์",
      "เป็นหลุมดำที่มีภาพเผยแพร่โดย EHT ในปี 2019",
      "อยู่ในกาแล็กซี M87"
    ],
    tags: ["M87", "EHT", "black hole"]
  },
  {
    id: "sgr-a-image",
    label: "Sgr A* Image",
    category: "evidence",
    icon: "📷",
    importance: 2,
    description: "ภาพ Sagittarius A* จาก EHT เป็นหลักฐานเชิงสังเกตการณ์ที่สำคัญของหลุมดำมวลยิ่งยวดใจกลางทางช้างเผือก",
    principle: "ข้อมูลจากกล้องวิทยุหลายแห่งถูกประมวลผลร่วมกันเพื่อสร้างภาพโครงสร้างการแผ่รังสีรอบหลุมดำ",
    facts: [
      "เผยแพร่ในปี 2022",
      "ภาพมีลักษณะวงแหวนสว่างล้อมรอบบริเวณมืดตรงกลาง",
      "การสร้างภาพต้องอาศัยข้อมูลจากการสังเกตจำนวนมาก"
    ],
    tags: ["Sgr A", "EHT", "image"]
  },
  {
    id: "xray-astronomy",
    label: "X-ray Astronomy",
    category: "evidence",
    icon: "☢️",
    importance: 2,
    description: "ดาราศาสตร์รังสีเอกซ์ศึกษารังสีเอกซ์จากวัตถุพลังงานสูง เช่น ก๊าซร้อนในจานพอกพูนมวลรอบหลุมดำ",
    principle: "สสารที่มีอุณหภูมิสูงมากสามารถปล่อยรังสีในช่วงคลื่นเอกซ์ ซึ่งใช้ตรวจสอบสภาพแวดล้อมใกล้วัตถุหนาแน่น",
    facts: [
      "ใช้ศึกษาจานพอกพูนมวล",
      "ช่วยวิเคราะห์สภาพพลาสมาร้อน",
      "ใช้ศึกษาระบบดาวคู่ที่มีหลุมดำ"
    ],
    tags: ["X-ray", "astronomy"]
  },
  {
    id: "gravitational-waves",
    label: "Gravitational Waves",
    category: "evidence",
    icon: "〰️",
    importance: 2,
    description: "คลื่นความโน้มถ่วงคือระลอกของปริภูมิ-เวลาที่เกิดจากการเร่งของมวล โดยเฉพาะระบบมวลหนาแน่นที่เคลื่อนที่อย่างรุนแรง เช่น หลุมดำสองดวงรวมตัวกัน",
    principle: "ระบบมวลที่เร่งแบบไม่สมมาตรสามารถปล่อยพลังงานออกมาในรูปคลื่นความโน้มถ่วง",
    facts: [
      "ตรวจพบโดย LIGO เป็นครั้งแรกในปี 2015",
      "ช่วยศึกษาการรวมตัวของหลุมดำและดาวนิวตรอน",
      "เป็นหลักฐานสำคัญของสัมพัทธภาพทั่วไป"
    ],
    tags: ["gravitational waves", "LIGO"]
  },
  {
    id: "gaia",
    label: "Gaia Mission",
    category: "evidence",
    icon: "🛰️",
    importance: 2,
    description: "Gaia เป็นภารกิจอวกาศของ ESA ที่ทำแผนที่ตำแหน่ง ระยะทาง และการเคลื่อนที่ของดาวจำนวนมหาศาลในทางช้างเผือก",
    principle: "การวัดตำแหน่งและการเคลื่อนที่ปรากฏของดาวช่วยสร้างภาพโครงสร้างและพลวัตของกาแล็กซี",
    facts: [
      "ข้อมูลช่วยศึกษาการเคลื่อนที่ของดาวในทางช้างเผือก",
      "ช่วยสร้างแบบจำลองโครงสร้างกาแล็กซี",
      "เป็นแหล่งข้อมูลสำคัญของดาราศาสตร์ดาวฤกษ์"
    ],
    tags: ["Gaia", "ESA", "milky way"]
  },

  // ==========================================
  // ADVANCED EXPLORATION
  // ==========================================
  {
    id: "thought-sun-stop",
    label: "If the Sun Stopped?",
    category: "advanced",
    icon: "❓",
    importance: 2,
    description: "หากดวงอาทิตย์หยุดเคลื่อนที่ด้านข้างเมื่อเทียบกับกรอบอ้างอิงของกาแล็กซี วงโคจรเดิมจะเปลี่ยนไปอย่างมาก และดวงอาทิตย์จะเริ่มเคลื่อนที่ตามสนามโน้มถ่วงของกาแล็กซี",
    principle: "การเปลี่ยนความเร็วเริ่มต้นของวัตถุเปลี่ยนวิถีการเคลื่อนที่ภายใต้แรงโน้มถ่วง",
    facts: [
      "การหยุดแบบฉับพลันต้องมีแรงหรือกระบวนการที่เปลี่ยนโมเมนตัม",
      "ผลลัพธ์ขึ้นกับตำแหน่งและความเร็วสามมิติ ณ ขณะนั้น",
      "ไม่สามารถสรุปว่าโลกจะตกเข้าสู่หลุมดำใจกลางทันที"
    ],
    tags: ["thought experiment", "solar orbit"]
  },
  {
    id: "thought-sun-replaced",
    label: "Sun Replaced by a Black Hole",
    category: "advanced",
    icon: "🌞",
    importance: 3,
    description: "หากสมมุติว่าดวงอาทิตย์ถูกแทนที่ด้วยหลุมดำที่มีมวลเท่ากัน วงโคจรของโลกที่ระยะเดิมจะใกล้เคียงเดิมในกรอบ Newtonian แต่โลกจะสูญเสียแสงและพลังงานจากดวงอาทิตย์",
    principle: "วงโคจรภายนอกขึ้นกับมวลและระยะห่างเป็นหลัก ไม่ได้ขึ้นกับว่าวัตถุนั้นเป็นดาวฤกษ์หรือหลุมดำ",
    facts: [
      "หลุมดำมวลเท่าดวงอาทิตย์มีขอบฟ้าเหตุการณ์เล็กมาก",
      "โลกไม่ได้ถูกดูดเข้าไปทันทีหากยังอยู่ที่ระยะเดิม",
      "โลกจะขาดแหล่งพลังงานแสงอาทิตย์และอุณหภูมิจะลดลงอย่างรุนแรง"
    ],
    tags: ["thought experiment", "black hole"]
  },
  {
    id: "why-orbits-exist",
    label: "Why Can Matter Orbit?",
    category: "advanced",
    icon: "❔",
    importance: 3,
    description: "วัตถุโคจรรอบหลุมดำได้เพราะมันมีความเร็วด้านข้างและโมเมนตัมเชิงมุม แรงโน้มถ่วงจึงเปลี่ยนทิศทางของการเคลื่อนที่แทนที่จะทำให้ตกตรงเข้าสู่ศูนย์กลางเสมอ",
    principle: "การโคจรเป็นผลจากการเคลื่อนที่ภายใต้แรงโน้มถ่วงร่วมกับเงื่อนไขเริ่มต้นของวัตถุ",
    facts: [
      "ความเร็วและทิศทางเริ่มต้นสำคัญมาก",
      "วงโคจรอาจเป็นวงกลมหรือวงรี",
      "หากสูญเสียพลังงานและโมเมนตัมเชิงมุม อาจเคลื่อนเข้าใกล้หลุมดำ"
    ],
    tags: ["orbit", "angular momentum"]
  },
  {
    id: "why-disk-hot",
    label: "Why Is the Disk Hot?",
    category: "advanced",
    icon: "🔥",
    importance: 2,
    description: "จานพอกพูนมวลร้อนขึ้นจากการเปลี่ยนพลังงานศักย์โน้มถ่วงและพลังงานการเคลื่อนที่เป็นพลังงานความร้อนผ่านกระบวนการภายในจาน",
    principle: "ความปั่นป่วนและความหนืดเชิงประสิทธิผลช่วยกระจายพลังงานและขนส่งโมเมนตัมเชิงมุม",
    facts: [
      "ก๊าซและพลาสมาเคลื่อนที่ด้วยความเร็วสูง",
      "การชนและความปั่นป่วนช่วยให้เกิดความร้อน",
      "อุณหภูมิและชนิดรังสีขึ้นกับมวล อัตราการพอกพูนมวล และโครงสร้างของจาน"
    ],
    tags: ["accretion disk", "heat"]
  },
  {
    id: "spin-isco-question",
    label: "How Does Spin Change ISCO?",
    category: "advanced",
    icon: "🧭",
    importance: 2,
    description: "การหมุนของหลุมดำเปลี่ยนโครงสร้างปริภูมิ-เวลา ทำให้ระยะ ISCO เปลี่ยนไป โดยวงโคจรแบบ Prograde สามารถอยู่ใกล้หลุมดำได้มากกว่าวงโคจรแบบ Retrograde",
    principle: "คำตอบมาจากเรขาคณิตของ Kerr spacetime",
    facts: [
      "หลุมดำไม่หมุนมี ISCO ที่ 6GM/c²",
      "สำหรับหลุมดำหมุน ระยะขึ้นกับ spin และทิศทาง",
      "กรณีสุดขั้วในแบบจำลองอุดมคติมีข้อจำกัดทางฟิสิกส์เพิ่มเติม"
    ],
    tags: ["spin", "ISCO", "Kerr"]
  },
  {
    id: "time-near-black-hole",
    label: "Time Near a Black Hole",
    category: "advanced",
    icon: "⌚",
    importance: 2,
    description: "นาฬิกาที่อยู่ใกล้หลุมดำอาจเดินช้ากว่านาฬิกาที่อยู่ไกลออกไป เมื่อเปรียบเทียบโดยผู้สังเกตที่เหมาะสมภายนอก",
    principle: "ความแตกต่างของอัตราการเดินของเวลามาจากโครงสร้างปริภูมิ-เวลาที่มีความโค้งสูง",
    facts: [
      "ผลขึ้นกับตำแหน่งและการเคลื่อนที่ของผู้สังเกต",
      "ไม่ใช่ทุกกรณีที่ผู้ตกลงไปจะรู้สึกว่าเวลาของตัวเองหยุด",
      "การเปรียบเทียบเวลาต้องระบุผู้สังเกตและวิธีวัด"
    ],
    tags: ["time dilation", "black hole"]
  },
  {
    id: "measuring-black-hole-mass",
    label: "Measuring Black Hole Mass",
    category: "advanced",
    icon: "📊",
    importance: 3,
    description: "นักดาราศาสตร์ประเมินมวลหลุมดำได้จากการติดตามวงโคจรของดาวหรือก๊าซที่เคลื่อนที่รอบบริเวณนั้น โดยใช้ความเร็ว ระยะทาง และคาบการโคจร",
    principle: "ในกรณีที่มวลศูนย์กลางครอบงำ สามารถใช้กฎของ Kepler และแบบจำลองแรงโน้มถ่วงเพื่อประมาณมวลได้",
    facts: [
      "วัดตำแหน่งของดาวในช่วงเวลาต่าง ๆ",
      "วัดความเร็วจากการเลื่อนดอปเพลอร์ของสเปกตรัม",
      "สร้างแบบจำลองวงโคจรเพื่อประมาณมวล"
    ],
    tags: ["mass measurement", "astronomy"]
  },
  {
    id: "planets-around-black-hole",
    label: "Planets Around Black Holes?",
    category: "advanced",
    icon: "🪐",
    importance: 2,
    description: "ในหลักการ ดาวเคราะห์สามารถโคจรรอบหลุมดำได้ หากมีวงโคจรที่เสถียรและมีสภาพแวดล้อมที่เหมาะสม แต่การมีแหล่งพลังงานและสภาวะที่เอื้อต่อชีวิตเป็นอีกประเด็นหนึ่ง",
    principle: "เสถียรภาพของวงโคจรขึ้นกับมวล ระยะห่าง และการรบกวนจากวัตถุอื่น",
    facts: [
      "หลุมดำไม่ได้ทำให้วงโคจรทุกวงไม่เสถียร",
      "ดาวเคราะห์ต้องอยู่ห่างจากบริเวณที่วงโคจรไม่เสถียร",
      "การมีชีวิตต้องพิจารณารังสีและแหล่งพลังงานด้วย"
    ],
    tags: ["planet", "black hole", "habitability"]
  }
];

// ==========================================
// RELATIONSHIPS / EDGES
// ==========================================

const edges = [
  // Solar system relationships
  { from: "milky-way", to: "orion-spur", label: "contains", relationshipType: "structure" },
  { from: "orion-spur", to: "sun", label: "hosts", relationshipType: "location" },
  { from: "milky-way", to: "galactic-center", label: "has center", relationshipType: "structure" },
  { from: "sun", to: "solar-galactic-orbit", label: "follows", relationshipType: "motion" },
  { from: "solar-galactic-orbit", to: "galactic-year", label: "defines", relationshipType: "effect" },
  { from: "galactic-potential", to: "solar-galactic-orbit", label: "shapes", relationshipType: "cause" },
  { from: "milky-way", to: "galactic-potential", label: "generates", relationshipType: "cause" },
  { from: "sun", to: "vertical-oscillation", label: "also has", relationshipType: "motion" },
  { from: "galactic-potential", to: "vertical-oscillation", label: "influences", relationshipType: "cause" },
  { from: "galactic-center", to: "sagittarius-a", label: "contains", relationshipType: "location" },

  // Black hole structure
  { from: "sagittarius-a", to: "black-hole", label: "is a", relationshipType: "identity" },
  { from: "black-hole", to: "event-horizon", label: "has boundary", relationshipType: "structure" },
  { from: "black-hole", to: "singularity", label: "classical model", relationshipType: "structure" },
  { from: "black-hole", to: "photon-sphere", label: "can have", relationshipType: "structure" },
  { from: "black-hole", to: "isco", label: "has orbital limit", relationshipType: "structure" },
  { from: "black-hole", to: "accretion-disk", label: "may be surrounded by", relationshipType: "structure" },
  { from: "black-hole", to: "black-hole-spin", label: "can rotate", relationshipType: "property" },
  { from: "black-hole", to: "tidal-forces", label: "produces gradients", relationshipType: "cause" },
  { from: "black-hole", to: "orbital-matter", label: "gravitates with", relationshipType: "motion" },
  { from: "sagittarius-a", to: "s2-star", label: "orbited by", relationshipType: "motion" },

  // Physics relationships
  { from: "gravity", to: "newton-gravity", label: "classical model", relationshipType: "theory" },
  { from: "gravity", to: "general-relativity", label: "modern description", relationshipType: "theory" },
  { from: "newton-gravity", to: "orbital-speed", label: "predicts", relationshipType: "mechanism" },
  { from: "gravity", to: "centripetal-motion", label: "can provide", relationshipType: "mechanism" },
  { from: "angular-momentum", to: "orbital-stability", label: "helps determine", relationshipType: "mechanism" },
  { from: "angular-momentum", to: "orbital-matter", label: "supports", relationshipType: "mechanism" },
  { from: "general-relativity", to: "spacetime-curvature", label: "describes", relationshipType: "theory" },
  { from: "spacetime-curvature", to: "gravity", label: "explains", relationshipType: "mechanism" },
  { from: "general-relativity", to: "gravitational-time-dilation", label: "predicts", relationshipType: "effect" },
  { from: "general-relativity", to: "frame-dragging", label: "predicts", relationshipType: "effect" },
  { from: "spacetime-curvature", to: "photon-sphere", label: "allows", relationshipType: "mechanism" },
  { from: "spacetime-curvature", to: "isco", label: "determines", relationshipType: "mechanism" },
  { from: "black-hole-spin", to: "frame-dragging", label: "causes", relationshipType: "cause" },
  { from: "black-hole-spin", to: "isco", label: "changes", relationshipType: "effect" },
  { from: "orbital-stability", to: "isco", label: "defines", relationshipType: "mechanism" },

  // Accretion and tidal physics
  { from: "orbital-matter", to: "accretion-disk", label: "can form", relationshipType: "mechanism" },
  { from: "angular-momentum", to: "accretion-disk", label: "controls flow", relationshipType: "mechanism" },
  { from: "accretion-disk", to: "isco", label: "inner edge relates to", relationshipType: "location" },
  { from: "accretion-disk", to: "tidal-forces", label: "exists in strong gravity", relationshipType: "context" },
  { from: "tidal-forces", to: "orbital-matter", label: "can disrupt", relationshipType: "effect" },

  // Evidence
  { from: "s2-star", to: "s2-observation", label: "observed through", relationshipType: "evidence" },
  { from: "s2-observation", to: "sagittarius-a", label: "supports mass estimate", relationshipType: "evidence" },
  { from: "eht", to: "m87", label: "imaged", relationshipType: "evidence" },
  { from: "eht", to: "sgr-a-image", label: "imaged", relationshipType: "evidence" },
  { from: "sgr-a-image", to: "sagittarius-a", label: "shows emission around", relationshipType: "evidence" },
  { from: "xray-astronomy", to: "accretion-disk", label: "observes", relationshipType: "evidence" },
  { from: "gravitational-waves", to: "general-relativity", label: "tests", relationshipType: "evidence" },
  { from: "gaia", to: "milky-way", label: "maps stars in", relationshipType: "evidence" },
  { from: "gaia", to: "solar-galactic-orbit", label: "contributes data to", relationshipType: "evidence" },

  // Advanced questions
  { from: "thought-sun-stop", to: "solar-galactic-orbit", label: "explores", relationshipType: "question" },
  { from: "thought-sun-replaced", to: "gravity", label: "tests", relationshipType: "question" },
  { from: "thought-sun-replaced", to: "black-hole", label: "imagines", relationshipType: "question" },
  { from: "why-orbits-exist", to: "angular-momentum", label: "explains", relationshipType: "question" },
  { from: "why-orbits-exist", to: "orbital-stability", label: "explores", relationshipType: "question" },
  { from: "why-disk-hot", to: "accretion-disk", label: "explains", relationshipType: "question" },
  { from: "spin-isco-question", to: "black-hole-spin", label: "investigates", relationshipType: "question" },
  { from: "spin-isco-question", to: "isco", label: "investigates", relationshipType: "question" },
  { from: "time-near-black-hole", to: "gravitational-time-dilation", label: "explores", relationshipType: "question" },
  { from: "measuring-black-hole-mass", to: "s2-observation", label: "uses", relationshipType: "question" },
  { from: "planets-around-black-hole", to: "orbital-stability", label: "depends on", relationshipType: "question" },
  { from: "planets-around-black-hole", to: "black-hole", label: "explores", relationshipType: "question" }
];

// ==========================================
// CATEGORY METADATA
// ==========================================

const categories = {
  solar: {
    label: "Solar Galactic Orbit",
    color: "#ffbd69"
  },
  blackhole: {
    label: "Black Hole",
    color: "#c084fc"
  },
  physics: {
    label: "Fundamental Physics",
    color: "#60d5c5"
  },
  evidence: {
    label: "Scientific Evidence",
    color: "#7fa8ff"
  },
  advanced: {
    label: "Advanced Exploration",
    color: "#f28ab7"
  }
};

