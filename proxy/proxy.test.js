const app = require('./server');
const supertest = require('supertest');
const request = supertest(app);
const nock = require('nock');
const jnock = nock('http://localhost:3000/')

it('Hello World Test', async done => {
    jnock.get('/')
        .reply(200, 'Hello from home !', {'Access-Control-Allow-Origin': '*'});

    const response = await request.get('/');
    expect(response.text).toBe('Hello from home !');
    done();
});