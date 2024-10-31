process.env.NODE_ENV = "test";

//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let should = chai.should();
let express = require("express");
let server = require("../index");

chai.use(chaiHttp);

describe("For Authentication", () => {
  beforeEach((done) => {
    done();
  });

  describe("Login function", () => {
    it("should return a token on successful login", (done) => {
      chai
        .request(server)
        .post("/api/v1/auth/login")
        .send({ username: "khacvi2003AZ", password: "19052003" })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("token");
          done();
        });
    });
  });

  describe("Login function", () => {
    it("should return a token on successful login", (done) => {
      chai
        .request(server)
        .post("/api/v1/auth/login")
        .send({ username: "khacvi2003AZ", password: "19052003" })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("token");
          done();
        });
    });
  });
});
