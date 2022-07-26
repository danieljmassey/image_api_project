import fs from 'fs'
import path from 'path'

// Enter desired search parameters to targetKeys
const targetKey = ['width', 'height', 'filename']

// Separate functionality for parameter denoted specialKey
const specialKey = 'filename'

const validator = (input: Object) => {
  const validatedObject = {
    status: 0,
    error: '',
    filePath: '',
    thumbPath: ''
  }
  const inputArray = Object.entries(input)
  for (let i = 0; i < (targetKey.length); i++) {
    if (targetKey[i] === inputArray[i][0] && targetKey[i] === specialKey) {
      const fileCheck = path.resolve(`./././assets/full/${inputArray[i][1]}.jpeg`)
      if (!fs.existsSync(fileCheck)) {
        validatedObject.status = 400
        validatedObject.error = `Invalid Input: "${inputArray[i][1]}" does not appear in the directory`
        return validatedObject
      } else {
        validatedObject.status = 200
        validatedObject.filePath = fileCheck
      }
    } else if (parseInt(inputArray[i][1]) === 0) {
      validatedObject.status = 404
      validatedObject.error = `Invalid Input: ${inputArray[i]} not a valid parameter`
      return validatedObject
    } else if (targetKey[i] === inputArray[i][0]) {
      if (isNaN(inputArray[i][1]) || parseInt(inputArray[i][1]) < 0) {
        validatedObject.status = 400
        validatedObject.error = `Invalid input: ${inputArray[i][0]}: ${inputArray[i][1]}`
        return validatedObject
      }
    }
  }
  return validatedObject
}

export default validator
