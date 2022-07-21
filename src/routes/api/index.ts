import express from 'express'
import fs from 'fs'
import path from 'path'

const route = express.Router()

route.get('/', async (req, res) => {
  // pull pertinent data from query object
  const fileName = req.query.filename
  const imageHeight = parseInt(req.query.height as string)
  const imageWidth = parseInt(req.query.width as string)
  const filePath = path.resolve(`./././assets/full/${fileName}.jpeg`)
  // validation for query string inputs
  if (isNaN(imageHeight) || imageHeight < 0) {
    res.status(400).send('Invalid dimension entered for height')
    return
  } else if (isNaN(imageWidth) || imageWidth < 0) {
    res.status(400).send('Invalid dimension entered for width')
    return
  } else if (!fs.existsSync(filePath)) {
    res.status(400).send('Invalid filename entered')
    return
  }

  res.json(req.query)
  // console.log(fileName)
  // console.log(imageHeight)
  // console.log(imageWidth)
  // console.log(fs.existsSync(filePath))
})

export default route
