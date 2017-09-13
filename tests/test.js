const test = require('tape');
const supertest = require('supertest');
const app = require('./../src/app');
const endpoints = require('./endpoints');

const randomNumber = () => {
  
}

test('1 equals 1', t => {
  t.equals(1, 1, 'one should equal one');
  t.end();
});

test('check if supertest works', t => {
  supertest(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.same(res.statusCode, 200, 'Status code is 200');
      t.end();
    })
})

test('check generic endpoints', t => {
  endpoints.generic.forEach(endpoint => {
    supertest(app)
      .get(`/${endpoint}`)
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        t.same(res.statusCode, 200, `${endpoint} status code is 200`);
      })
  })
  t.end();
})
