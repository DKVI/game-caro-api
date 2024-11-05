process.env.NODE_ENV = "test";

//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let should = chai.should();
let express = require("express");
let server = require("../index");

chai.use(chaiHttp);

describe("For game routes", () => {
  beforeEach((done) => {
    done();
  });

  describe("/GET all games for specified user", () => {
    it("it should GET all games", (done) => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxNjk5OTcwOTczIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTczMDQ4MTU5OCwiZXhwIjoxNzMzMDczNTk4fQ.LwtI6ph2kHQl5i4KfF49TtKGxdzcPQqiG7wQz8EjVCU";
      chai
        .request(server)
        .get("/api/v1/game")
        .set("Authorization", "Bearer " + token)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("games");
          done();
        });
    });
  });
  describe("/GET game by id", () => {
    it("it should GET game by id", (done) => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxNjk5OTcwOTczIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTczMDQ4MTU5OCwiZXhwIjoxNzMzMDczNTk4fQ.LwtI6ph2kHQl5i4KfF49TtKGxdzcPQqiG7wQz8EjVCU";
      const id = "9e98bd5c-64bd-4bb9-935c-22bed76d3dae";
      chai
        .request(server)
        .get("/api/v1/game/" + id)
        .set("Authorization", "Bearer " + token)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body = res.body.game[0];
          res.body.should.have.property("START_TIME");
          done();
        });
    });
  });
});
