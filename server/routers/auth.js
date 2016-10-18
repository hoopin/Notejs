const authRouter = require('express').Router()

authRouter.route('/signup')
  .post((req, res) => {
    console.log('Signup in route')
  })

authRouter.route('/signin')
.post((req, res) => {
  console.log('Sign in route')
})

module.exports = authRouter
