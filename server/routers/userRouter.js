const userRouter = require('express').Router()

userRouter.route('/signup')
  // Signs up a user
  .post((req, res) => {
    console.log('/signup POST')
    res.status(200).json({
      message: '/signup POST'
    })
  })

userRouter.route('/signin')
  // Signs in a user
  .post((req, res) => {
    console.log('/signin POST')
    res.status(200).json({
      message: '/signin POST'
    })
  })

module.exports = userRouter
