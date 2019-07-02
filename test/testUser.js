let mongoose = require("mongoose");
let User = require('../userModel');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();


chai.use(chaiHttp);

describe('Users', () => {
    beforeEach((done) => {
        User.remove({}, (err) => { 
           done();           
        });        
    });
  describe('/GET user', () => {
      it('it should GET all the users', (done) => {
        chai.request(server)
            .get('/users')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('status').eql('success');
                  res.body.data.length.should.be.eql(0);
              done();
            });
      });
  });
  /*
  * Test the /POST route
  */
  describe('/POST user', () => {
      it('it should not POST a user without email field', (done) => {
          let user = {
              name: "Test Name"
          }
        chai.request(server)
            .post('/users')
            .send(user)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('errors');
                  res.body.errors.should.have.property('email');
                  res.body.errors.email.should.have.property('kind').eql('required');
              done();
            });
      });
      it('it should POST a user ', (done) => {
          let user = {
              name: "Test Name",
              email: "test@test.cl"
          }
        chai.request(server)
            .post('/users')
            .send(user)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('message').eql('Nuevo Usuario Creado');
                  res.body.data.should.have.property('name');
                  res.body.data.should.have.property('email');
                  
              done();
            });
      });
  });
});