const User = require('../models/user')
const userController = {}

// Sign in user
userController.SIGNIN = (req, res) => {
  res.status(200).json({
    message: 'Successfully signed in user.',
    user: req.body,
    session: req.session
  })
}

// Create a new user
userController.SIGNUP = (req, res) => {
  User.register(req.body)
    .then((user) => {
      res.status(200).json({
        message: 'Successfully registered user.',
        user: user
      })
    })
    .catch((err) => {
      res.status(500).err(err)
    })
}

// logout user
userController.LOGOUT = (req, res) => {
  res.status(200).json({
    message: 'Successfully logged out user.'
  })
}

module.exports = userController
