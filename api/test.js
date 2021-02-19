const app = require('./server');
const supertest = require('supertest');
const request = supertest(app);

it('Hello World Test', async done => {
    const response = await request.get('/');

    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello from home !');
    done();
});