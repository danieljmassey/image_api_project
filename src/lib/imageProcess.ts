import sharp from 'sharp'

const resizeImage = async (
    currentPath: string,
    width: number,
    height: number,
    target: string
): Promise<Buffer> => {
    const resizedImage = sharp(currentPath).resize(width, height)
    resizedImage.toFile(target)
    return resizedImage.toBuffer()
}

export default resizeImage
