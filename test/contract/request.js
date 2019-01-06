'use strict';
const Joi = require('joi');
const request = require('supertest');
const expect = require('chai').expect;
const joiAssert = require('joi-assert');
const {
  schemaTimeslot
} = require('./schema');
const URL = 'http://www.mocky.io/';
const PATH = 'v2/5c25325930000074007a62af';
describe('Teste Contrato API', function () {
  it('Validando response com joiAssert', function (done) {

    request(URL)
      .get(PATH)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        expect(res.status).to.be.eql(200);
        joiAssert(res.body, schemaTimeslot);
        done(err);
      });
  });
  /* abortEarly: true. Para a validação assim que ocorre o primeiro erro,
         abortEarly: false. Retorna todos os erros encontrados no schema.
  //        Por default esse tag é true */
  it('Validando response com Joi.validate', function (done) {
    request(URL)
      .get(PATH)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        expect(res.status).to.be.eql(200);
        Joi.validate(res.body, schemaTimeslot, {
          abortEarly: false
        }, (err, data) => {
          if (err) throw err;
        });
        done(err);
      });
  });
  
  it('Validando response utilizando schema conjugado', function (done) {
    request(URL)
      .get(PATH)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        expect(res.status).to.be.eql(200);
        Joi.validate(res.body, schemaTimeslot, {
          abortEarly: false
        }, (err, data) => {
          if (err) throw err;
        });
        done(err);
      })
  });
});