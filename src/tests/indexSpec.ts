/* eslint-disable no-undef */
import supertest from 'supertest'
import app from '../index'

const request = supertest(app)

describe('Endpoint Test', () => {
    it('responds with 200', async () => {
        const response = await request.get(
            '/api?width=100&height=100&filename=fjord'
        )
        expect(response.status).toBe(200)
    })
})
