/* eslint-disable no-undef */
import parseInput from '../lib/parseInput'

const defaultObject = {
    width: 0,
    height: 0,
    filename: '',
}

const validObject = {
    width: 50,
    height: 75,
    filename: 'test',
}

const invalidObject = {
    wyth: 50,
    hite: 75,
    fylenaem: 'test',
}

describe('Input Parsing Test', () => {
    it('Should return defaulObject if wrong query parameters', () => {
        expect(parseInput(invalidObject)).toEqual(parseInput(defaultObject))
    })

    it('Should modify the modify default object if query is valid', () => {
        expect(parseInput(validObject)).not.toEqual(parseInput(defaultObject))
    })
})
