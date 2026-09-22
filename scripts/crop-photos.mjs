import sharp from 'sharp'
import { readdir } from 'fs/promises'
import { join, extname, basename } from 'path'
import { writeFile, rename } from 'fs/promises'

const PHOTOS_DIR = new URL('../public/photos', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1')

const CROP_CONFIG = {
  'logo.jpg': { top: 0.08, bottom: 0.08 },
  'ceremony-sunflowers.jpg': { top: 0.20, bottom: 0.30 },
  'decor-welcome.jpg': { top: 0.20, bottom: 0.30 },
  'couple-celebration.jpg': { top: 0.20, bottom: 0.30 },
  'wedding-frozen.jpg': { top: 0.20, bottom: 0.30 },
  'bouquet.jpg': { top: 0.20, bottom: 0.30 },
}

const files = await readdir(PHOTOS_DIR)
const images = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f))

for (const file of images) {
  const filePath = join(PHOTOS_DIR, file)
  const config = CROP_CONFIG[file] ?? { top: 0.20, bottom: 0.30 }

  const meta = await sharp(filePath).metadata()
  const { width = 0, height = 0 } = meta

  const cropTop = Math.round(height * config.top)
  const cropBottom = Math.round(height * config.bottom)
  const newHeight = height - cropTop - cropBottom

  if (newHeight <= 0) {
    console.log(`Skipping ${file}: crop would eliminate image`)
    continue
  }

  const tmp = join(PHOTOS_DIR, `__tmp_${file}`)

  await sharp(filePath)
    .extract({ left: 0, top: cropTop, width, height: newHeight })
    .jpeg({ quality: 92 })
    .toFile(tmp)

  await rename(tmp, filePath)
  console.log(`Cropped ${file}: removed ${config.top * 100}% top, ${config.bottom * 100}% bottom`)
}

console.log('Done.')
