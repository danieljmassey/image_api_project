
const parseInput = (input: Object) => {
  const objectArray = Object.entries(input)
  const parsedObject = {
    width: 0,
    height: 0,
    filename: ''
  }
  for (let i = 0; i < (objectArray.length); i++) {
    if (objectArray[i][0].toLowerCase() === 'width') {
      parsedObject.width = parseInt(objectArray[i][1])
    } else if (objectArray[i][0].toLowerCase() === 'height') {
      parsedObject.height = parseInt(objectArray[i][1])
    } else if (objectArray[i][0].toLowerCase() === 'filename') {
      parsedObject.filename = objectArray[i][1]
    }
  }
  return parsedObject
}

export default parseInput
