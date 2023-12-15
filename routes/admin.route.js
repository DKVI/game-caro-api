const express = require("express");
const {
  getAllGamesByUserId,
  deleteGameByIdUser,
} = require("../controllers/game.controller");
const authenticate = require("../middleware/authenticate");
const { changeName } = require("../controllers/user.controller");
const router = express.Router();

router.route("/user/changeName/:id").post(changeName);
router.route("/user/game").get(authenticate, getAllGamesByUserId);
router.route("/game/user/:id").delete(deleteGameByIdUser);
module.exports = router;
