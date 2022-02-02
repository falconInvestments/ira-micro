//During the test the env variable is set to test
process.env.NODE_ENV = 'test';


//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);


//Our parent block
describe('Users', () => {

  //Test the /GET route
  describe('/GET users', () => {
      it('it should GET all the users', (done) => {
       chai.request(server).get('/users')
       .end((err,res) => {
           res.should.have.status(200);
           res.body.should.be.a('array');
           Object.keys(res.body).length.should.be.eql(2);
           done();
       })
      });
  });

  describe('/GET/:id user', () => {
    it('it should GET the user with given id', (done) => {
      chai.request(server).get('/users/1')
				.end((err,res) => {				
					res.should.have.status(200);
					res.body.should.have.property('id');
          res.body.should.be.a('object');
					})
				done();  
    });
    it('it should GET 404 error if user not found', (done) => {
      chai.request(server).get('/users/12')
				.end((err,res) => {				
          res.should.have.status(404);
        })
      done();
    });
});

});