const userController = {}

// Sign in user
userController.SIGNIN = (req, res) => {
  console.log('POST /signin')
  res.status(200).json({
    message: '/signin POST'
  })
}

// Create a new user
userController.SIGNUP = (req, res) => {
  console.log('POST /signup')
  res.status(200).json({
    message: '/signup POST'
  })
}

module.exports = userController
