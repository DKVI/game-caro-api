const User = require('../models/user.model')
const { StatusCodes } = require('http-status-codes')

const getAllUsers = async (req, res) => {
  const users = await User.getAllUsers()
  return res.status(StatusCodes.OK).json({ users })
}

const getUserById = async (req, res) => {
    const userId = req.params.id
    const user = await User.getUserById(userId)
    return res.status(StatusCodes.OK).json({ user })
}

const createUser = async (req, res) => {
    const user = await User.createUser(req.body)
    return res.status(StatusCodes.OK).json({ record_inserted: user.affectedRows })
}

const updateUser = async (req, res) => {
  const { id } = req.params
  const user = await User.updateUserById(id, req.body) 
  return res
    .status(StatusCodes.OK)
    .json({ record_updated: user.affectedRows })
}

const deleteUser = async (req, res) => {
  const { id } = req.params
  const user = await User.deleteUser(id)
  return res
    .status(StatusCodes.OK)
    .json({ record_deleted: user.affectedRows })
}

const updateInfo = async (req, res) => {
    const {id} = req.params
    const user = await User.updateInfo(id, req.body)
    return res.status(StatusCodes.OK).json({ record_updated: user.affectedRows })
}

const changePassword = async (req, res) => {
    const {id} = req.params
    const user = await User.changePassword(id, req.body)
    return res
      .status(StatusCodes.OK)
      .json({ record_updated: user.affectedRows })
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    updateInfo,
    changePassword
}