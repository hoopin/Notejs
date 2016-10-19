const userRouter = require('express').Router()
const userController = require('../controllers/userController')
const Middleware = require('../models/user')

userRouter.route('/signin')
  .post(Middleware.verifyPassword, Middleware.createToken, userController.SIGNIN)

userRouter.route('/signup')
  .post(Middleware.verifyEmail, Middleware.hashPassword, userController.SIGNUP)

userRouter.route('/logout')
  .get(Middleware.destroyToken, userController.LOGOUT)

module.exports = userRouter
