const app = require('../config/express')();
const request = require('supertest');

describe('EmailValidator',function(){
    it('#verify email validator main page',function(done){
        request(app)
            .get('/emailValidator')
            .set('Accept','application/json')
            .expect('Content-Type',/html/)
            .expect(200, done);
    });
	it('#test valid email',function(done){
        request(app)
            .post('/emailValidator/validate')
            .set('Accept','application/json')
    		.send({email:"myEmail@gmail.com"})
            .expect('Content-Type',/json/)
            .expect(200, {
                isValid: true
            }, done);
    });
    it('#test invalid email',function(done){
    request(app)
        .post('/emailValidator/validate')
        .set('Accept','application/json')
        .send({email:"myEmail@gmail"})
        .expect('Content-Type',/json/)
        .expect(200, {
            isValid: false
        }, done);
    });
});
