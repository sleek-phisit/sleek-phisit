import { deflateSync } from 'zlib'
import { writeFileSync, mkdirSync } from 'fs'

const crcTable = (() => {
  const t = new Uint32Array(256)
  for (let i = 0; i < 256; i++) {
    let c = i
    for (let j = 0; j < 8; j++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1)
    t[i] = c
  }
  return t
})()

function crc32(buf) {
  let c = 0xFFFFFFFF
  for (let i = 0; i < buf.length; i++) c = crcTable[(c ^ buf[i]) & 0xFF] ^ (c >>> 8)
  return (c ^ 0xFFFFFFFF) >>> 0
}

function pngChunk(type, data) {
  const t = Buffer.from(type)
  const d = Buffer.isBuffer(data) ? data : Buffer.from(data)
  const len = Buffer.alloc(4); len.writeUInt32BE(d.length)
  const crcBuf = Buffer.alloc(4); crcBuf.writeUInt32BE(crc32(Buffer.concat([t, d])))
  return Buffer.concat([len, t, d, crcBuf])
}

function makePNG(size, r, g, b) {
  const sig = Buffer.from([137,80,78,71,13,10,26,10])

  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(size, 0); ihdr.writeUInt32BE(size, 4)
  ihdr[8] = 8; ihdr[9] = 2  // 8-bit RGB

  const rowLen = 1 + size * 3
  const raw = Buffer.alloc(size * rowLen)
  for (let y = 0; y < size; y++) {
    raw[y * rowLen] = 0
    for (let x = 0; x < size; x++) {
      const o = y * rowLen + 1 + x * 3
      raw[o] = r; raw[o+1] = g; raw[o+2] = b
    }
  }

  return Buffer.concat([
    sig,
    pngChunk('IHDR', ihdr),
    pngChunk('IDAT', deflateSync(raw)),
    pngChunk('IEND', Buffer.alloc(0)),
  ])
}

mkdirSync('public/icons', { recursive: true })

// Brand blue #1D4ED8 = rgb(29, 78, 216)
const [R, G, B] = [29, 78, 216]
writeFileSync('public/icons/icon-192.png',        makePNG(192, R, G, B))
writeFileSync('public/icons/icon-512.png',        makePNG(512, R, G, B))
writeFileSync('public/icons/apple-touch-icon.png', makePNG(180, R, G, B))

console.log('✓ PWA icons generated')
