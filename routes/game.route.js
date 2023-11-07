const express = require('express')
const router = express.Router()
const {
  getAllGames,
  getAllGamesByUserId,
  getGameById,
  createGame,
  updateGameById,
} = require('../controllers/game.controller')

router.route('/').get(getAllGames).post(createGame)
router
  .route('/:id')
  .get(getGameById)
  .patch(updateGameById)

router.route('/?user={userId}').get(getAllGamesByUserId)

module.exports = router
