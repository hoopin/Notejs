const Router = require('express').Router

Router.route('/signup')
  .post((req, res) => {
    console.log('Signup in route')
  })

Router.route('/signin')
.post((req, res) => {
  console.log('Sign in route')
})

module.exports
