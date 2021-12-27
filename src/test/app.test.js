const request = require('supertest');
const app = require('../index');
const loaders = require('../loaders');

beforeAll(() => {
  loaders();
});

describe('Test the endpoint', () => {
  test('should give an Error if method is GET', (done) => {
    request(app)
      .get('/')
      .then((response) => {
        expect(response.statusCode).toBe(404);
        done();
      });
  });
  test('should pass with right data and method', (done) => {
    request(app)
      .post('/')
      .send({
        startDate: '2016-01-26',
        endDate: '2018-02-02',
        minCount: 2700,
        maxCount: 3500,
      })
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.records).toBeDefined();
        done();
      });
  });
  test('should not pass if start date is wrong format', (done) => {
    request(app)
      .post('/')
      .send({
        startDate: 1,
        endDate: '2018-02-02',
        minCount: 2700,
        maxCount: 3500,
      })
      .then((response) => {
        expect(response.statusCode).toBe(400);
        done();
      });
  });
  test('should not pass if end date is wrong format', (done) => {
    request(app)
      .post('/')
      .send({
        startDate: '2016-01-26',
        endDate: '2018-13-13',
        minCount: 2700,
        maxCount: 3500,
      })
      .then((response) => {
        expect(response.statusCode).toBe(400);
        done();
      });
  });
  test('should not pass if minCount is wrong format', (done) => {
    request(app)
      .post('/')
      .send({
        startDate: '2016-01-26',
        endDate: '2018-13-13',
        minCount: '2700',
        maxCount: 3500,
      })
      .then((response) => {
        expect(response.statusCode).toBe(400);
        done();
      });
  });
  test('should not pass if maxCount is wrong format', (done) => {
    request(app)
      .post('/')
      .send({
        startDate: '2016-01-26',
        endDate: '2018-13-13',
        minCount: 2700,
        maxCount: '3500',
      })
      .then((response) => {
        expect(response.statusCode).toBe(400);
        done();
      });
  });
});
