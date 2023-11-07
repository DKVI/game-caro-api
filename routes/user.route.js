const express = require('express')
const router = express.Router()
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  updateInfo,
  changePassword,
} = require('../controllers/user.controller')

router.route('/').get(getAllUsers).post(createUser)
router
  .route('/:id')
  .get(getUserById)
  .patch(updateUser)
  .delete(deleteUser)
router.route('/updateInfo/:id').patch(updateInfo)
router.route('/changePassword/:id').patch(changePassword)

module.exports = router
