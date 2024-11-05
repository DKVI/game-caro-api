process.env.NODE_ENV = "test";

//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let should = chai.should();
let express = require("express");
let server = require("../index");

chai.use(chaiHttp);

describe("Test user routes", () => {
  beforeEach((done) => {
    done();
  });

  describe("/GET all user", () => {
    it("it should GET all users", (done) => {
      chai
        .request(server)
        .get("/api/v1/user")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });
  describe("/GET user by id", () => {
    it("it should return specified user", (done) => {
      chai
        .request(server)
        .get("/api/v1/user/1699970973")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });
  describe("/GET user by token", () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxNjk5OTcwOTczIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTczMDQ2NDg2NywiZXhwIjoxNzMzMDU2ODY3fQ.B3QUlcEYz2s177tpmQXrYMkiu4WtFSmzLKSM6gqlu_Q";
    it("it should return specified user with token", (done) => {
      chai
        .request(server)
        .get("/api/v1/user/auth/getUser")
        .set("Authorization", "Bearer " + token)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });
  describe("/DELETE user by id", () => {
    it("it should delete specified user", (done) => {
      const id = 1730467485;
      chai
        .request(server)
        .delete("/api/v1/user/" + id)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have
            .property("msg")
            .equal(`Deleted user ${id} successfully!`);
          done();
        });
    });
  });
});
