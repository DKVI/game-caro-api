const { StatusCodes } = require('http-status-codes')
const CustomAPIError = require('../errors/custom-api')

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  return res.status(500).send('Something went wrong try again later')
}

module.exports = errorHandlerMiddleware
