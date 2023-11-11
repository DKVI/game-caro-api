const express = require('express')
const router = express.Router()
const {
  loginController,
  registerController,
  loginControllerForAdmin
} = require('../controllers/auth.controller')
const testAdmin = require('../middleware/test-admin')

const rateLimiter = require('express-rate-limit')

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: {
    msg: 'Too many requests from this IP, please try again after 15 minutes',
  },
})

router.route('/login').post(apiLimiter, loginController)
router.route('/register').post(apiLimiter, registerController)
router.route('/admin').post(loginControllerForAdmin)
module.exports = router 