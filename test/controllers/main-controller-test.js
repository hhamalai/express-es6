import chai from 'chai'
import request from 'supertest'
import express from 'express'
import bootstrap from '../../bootstrap/bootstrap'
import routes from '../../app/routes'

let expect = chai.expect
let app = express()

bootstrap(app)
routes(app)

describe('GET #index', () => {
  it('respond with json', (done) => {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/, done)
  })

  it('respond with 200', (done) => {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect(200, done)      
  })

  it('renders the json representation of status object', (done) => {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect(200, {
        status: true
      }, done)    
  })
})
