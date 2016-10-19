const userRouter = require('express').Router()
const userController = require('../controllers/userController')

userRouter.route('/signin')
  .post(userController.SIGNIN)

userRouter.route('/signup')
  .post(userController.SIGNUP)

module.exports = userRouter
