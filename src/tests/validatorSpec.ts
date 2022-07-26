/* eslint-disable no-undef */
import validator from '../lib/validateQuery'

describe('Query Validation Tests', () => {
    it('Should return status 200 if entirely valid query', () => {
        const validInput = {
            width: 100,
            height: 100,
            filename: 'fjord',
        }
        const testObject1 = validator(validInput)
        expect(testObject1.status).toEqual(200)
    })

    it('Should return status 400 if NaN for height or width parameter', () => {
        const invalidInputDefault = {
            width: 100,
            height: isNaN,
            filename: 'fjord',
        }
        const testObject2 = validator(invalidInputDefault)
        expect(testObject2.status).toEqual(400)
    })

    it('Should return status of 0 if critical parameter missing from query parameters', () => {
        const invalidInputSpecial = {
            wodth: 100,
            height: 100,
            filenaem: 'fjord',
        }
        const testObject3 = validator(invalidInputSpecial)
        expect(testObject3.status).toEqual(0)
    })

    it('Should return status 400 if < 0 for height or width parameters', () => {
        const invalidInputDefault = {
            width: 100,
            height: -100,
            filename: 'fjord',
        }
        const testObject2 = validator(invalidInputDefault)
        expect(testObject2.status).toEqual(400)
    })

    it('Should return a truthy filePath if valid query parameters', () => {
        const validInput = {
            width: 100,
            height: 100,
            filename: 'fjord',
        }
        const testObject4 = validator(validInput)
        expect(testObject4.filePath).toBeTruthy()
    })
})
