const test = require('tape');
const supertest = require('supertest');
const app = require('./../src/app');
const endpoints = require('./endpoints');

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
  endpoints.forEach(endpoint => {
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

test('check intro endpoint', t => {
  for (let i=1; i<4; i++) {
    supertest(app)
      .get(`/intro/${i}`)
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err,res) => {
        t.same(res.statusCode, 200, `intro/${i} status code is 200`);
      })
  }
  t.end();
})

test('check intro endpoint not working for non-existent questions', t => {
    supertest(app)
      .get(`/intro/32904`)
      .expect(404)
      .end((err,res) => {
        t.same(res.statusCode, 404, 'intro/32904 status code is 404');
      })
  t.end();
})
