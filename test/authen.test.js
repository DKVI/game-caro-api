process.env.NODE_ENV = "test";

//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let should = chai.should();
let express = require("express");
let server = require("../index");
const { password } = require("../dbconfig");

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
  describe("Register function", () => {
    it("should return a success message on successful registration", (done) => {
      chai
        .request(server)
        .post("/api/v1/auth/register")
        .send({
          username: "testuser23",
          password: "12345678",
        })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.have
            .property("msg")
            .equal("registered successfully!");
          done();
        });
    });
  });
  describe("Change password function", () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxNzMwNDgxNDM3IiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTczMDQ4MTU1NywiZXhwIjoxNzMzMDczNTU3fQ.rp0DJGUJFWimwpfjfH-EVcRz9JlU4tLVuohc27m62ms";
    it("should return a successful message on changing password", (done) => {
      chai
        .request(server)
        .patch("/api/v1/auth/changePassword")
        .set("Authorization", "Bearer " + token)
        .send({ password: "khacvi2003@AZ" })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have
            .property("msg")
            .equal("Changed password user successfully!");
          done();
        });
    });
  });
  describe("Change infor fuction", () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxNzMwNDgxNDM3IiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTczMDQ4MTU1NywiZXhwIjoxNzMzMDczNTU3fQ.rp0DJGUJFWimwpfjfH-EVcRz9JlU4tLVuohc27m62ms";
    it("should return a successful message on changing user's info", (done) => {
      chai
        .request(server)
        .patch("/api/v1/auth/updateInfo")
        .set("Authorization", "Bearer " + token)
        .send({ name: "Doan Khac Vi", email: "vidoan2003@gmail.com" })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have
            .property("msg")
            .equal("Changed user's info successfully!");
          done();
        });
    });
  });
});
