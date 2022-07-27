import express from 'express'
import fs from 'fs'
import path from 'path'
import resizeImage from '../../lib/imageProcess'
import parseInput from '../../lib/parseInput'
import validator from '../../lib/validateQuery'

const route = express.Router()

route.get('/', async (req, res) => {
    // pull image parameters from query object
    const parsedQuery = parseInput(req.query)
    const validQuery = validator(parsedQuery)
    if (validQuery.status !== 200) {
        res.status(validQuery.status).send(validQuery.error)
    } else {
        // create thumbnail filepath out of validated query string
        validQuery.thumbPath = path.resolve(
            `./././assets/thumb/${parsedQuery.filename}-${parsedQuery.width}x${parsedQuery.height}.jpeg`
        )

        // Check cache for existing thumbnail, display if extent
        if (fs.existsSync(validQuery.thumbPath)) {
            const generatedThumbnail = fs.readFileSync(validQuery.thumbPath)
            res.status(200).contentType('jpg').send(generatedThumbnail)
            return
        }
        try {
            const resizedThumb = await resizeImage(
                validQuery.filePath,
                parsedQuery.width,
                parsedQuery.height,
                validQuery.thumbPath
            )
            res.status(200).contentType('jpg').send(resizedThumb)
        } catch (error) {
            console.error(error)
            res.status(500).send('An error occured during the image processing')
        }
    }
})

export default route
