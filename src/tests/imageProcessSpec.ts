/* eslint-disable no-undef */
import resizeImage from '../lib/imageProcess'
import fs from 'fs'
import path from 'path'

if (!fs.existsSync('./././assets/thumb')) {
    fs.mkdirSync('./././assets/thumb')
}

const test = {
    width: 300,
    height: 300,
    currentPath: path.resolve('././assets/full/fjord.jpeg'),
    targetPath: path.resolve('././assets/thumb/fjord-300x300.jpeg'),
}
describe('Image Processing Test', () => {
    it('Should pass if the image is successfully resized', async () => {
        const newImage = await resizeImage(
            test.currentPath,
            test.width,
            test.height,
            test.targetPath
        )
        expect(newImage).not.toBe(fs.readFileSync(test.targetPath))
    })
})
