import express from 'express'
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const route = express.Router()

const isInvalidDimension = (input: any): boolean => {
  return isNaN(input) || input < 0
}

const resizeImage = async (currentPath: string, width: number, height: number, target: string): Promise<Buffer> => {
  const resizedImage = sharp(currentPath).resize(width, height)
  resizedImage.toFile(target)
  return resizedImage.toBuffer()
}

route.get('/', async (req, res) => {
  // pull image parameters from query object
  const fileName = req.query.filename
  const imageHeight = parseInt(req.query.height as string)
  const imageWidth = parseInt(req.query.width as string)
  const filePath = path.resolve(`./././assets/full/${fileName}.jpeg`)
  const thumbPath = path.resolve(`./././assets/thumb/${fileName}-${imageHeight}x${imageWidth}.jpg`)

  // validation for query string inputs
  if (isInvalidDimension(imageHeight)) {
    res.status(400).send('Invalid dimension entered for height')
    return null
  }
  if (isInvalidDimension(imageWidth)) {
    res.status(400).send('invalid dimension entered for width')
    return null
  }
  if (!fs.existsSync(filePath)) {
    res.status(400).send('Invalid filename entered')
    return null
  }

  if (fs.existsSync(thumbPath)) {
    const generatedThumbnail = fs.readFileSync(thumbPath)
    res.writeHead(200, { 'Content-Type': 'image/jpeg' })
    res.end(generatedThumbnail)
    return
  }

  try {
    const resizedThumb = await resizeImage(filePath, imageWidth, imageHeight, thumbPath)
    res.writeHead(200, { 'Content-Type': 'image/jpeg' })
    res.end(resizedThumb)
  } catch (error) {
    console.error(error)
    res.status(500).send('An error occured during the image processing')
  }
})

export default route
