const userRouter = require('express').Router()
const userController = require('../controllers/userController')
const Middleware = require('../config')

userRouter.route('/signin')
  .post(Middleware.verifyPassword, Middleware.createToken, userController.SIGNIN)

userRouter.route('/signup')
  .post(Middleware.verifyEmail, Middleware.hashPassword, userController.SIGNUP)

userRouter.route('/logout')
  .get(Middleware.destroyToken, userController.LOGOUT)

userRouter.route('/delete')
  .delete(Middleware.destroyToken, userController.DELETE)

module.exports = userRouter
