const userModel = require('../models/userModel')
const userController = {}

userController.GET = (req, res) => {
  res.json({
    message: 'user GET'
  })
}

userController.POST = (req, res) => {
  res.json({
    message: 'user POST'
  })
}

module.exports = userController
