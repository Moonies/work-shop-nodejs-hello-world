const nock = require('nock');
const request = require("supertest");

test('Should API Nock TEST', async (done) => {
    nock("http://104.236.50.54:8080/messages")
        .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
        .get('/')
        .reply(200, {'message':'Hello'});
    done()

})