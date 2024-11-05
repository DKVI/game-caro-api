process.env.NODE_ENV = "test";

//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let should = chai.should();
let express = require("express");
let server = require("../index");

chai.use(chaiHttp);

describe("For Admin", () => {
  beforeEach((done) => {
    done();
  });
  describe("Login admin", () => {
    it("should return token for admin role", (done) => {
      chai
        .request(server)
        .post("/api/v1/auth/admin/")
        .send({ username: "admin", password: "password" })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("token");
          done();
        });
    });
  });
});
