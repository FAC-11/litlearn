const test = require('tape');
const supertest = require('supertest');
const app = require('./../src/app');
const endpoints = require('./endpoints');
const expected_data = require('./expected_data');
const dbConnection = require('../src/model/db_connection');

//endpoint tests

test('check home route', t => {
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


//database tests
test('Select all summaries from questions', t => {
  const expected = expected_data.questions.summary;

  dbConnection.query('SELECT summary FROM questions;', (err, res) => {
    if (err) {
      t.error(err, 'This is an error');
    } else {
      const actual = res.rows;
      t.deepEquals(actual, expected, 'db query should get questions');
      t.end();
    }
  })
})

test('Select all usernames from users', t => {
  const expected = expected_data.users.username;

  dbConnection.query('SELECT username FROM users;', (err, res) => {
    if (err) {
      t.error(err, 'This is an error');
    } else {
      const actual = res.rows;
      t.deepEquals(actual, expected, 'db query should get users');
      t.end();
    }
  })
})

test('Check number of extracts', t => {
  const expected = 3;

  dbConnection.query('SELECT * FROM extracts;', (err, res) => {
    if (err) {
      t.error(err, 'This is an error');
    } else {
      const actual = res.rows.length;
      t.deepEquals(actual, expected, 'db query should get extracts');
      t.end();
    }
  })
})

test('Check number of tags', t => {
  const expected = 17;

  dbConnection.query('SELECT * FROM tags;', (err, res) => {
    if (err) {
      t.error(err, 'This is an error');
    } else {
      const actual = res.rows.length;
      t.deepEquals(actual, expected, 'db query should get tags');
      t.end();
    }
  })
})

test('Check number of many2many', t => {
  const expected = 19;

  dbConnection.query('SELECT * FROM many2many;', (err, res) => {
    if (err) {
      t.error(err, 'This is an error');
    } else {
      const actual = res.rows.length;
      t.deepEquals(actual, expected, 'db query should get many2many');
      t.end();
    }
  })
})
