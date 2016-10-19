const Users = require('../db/db').Users
const bcrypt = require('bcrypt')

let register = (user) => {
  // This function accepts an object with a first name, last name, email, and password
  Users.create(user)
    .then((result) => {
      return result
    })
    .catch((err) => {
      res.err(err)
    })
}

let verifyPassword = (req, res, next) => {
  Users.findOne({
    'email': req.body.email
  })
  .then((result) => {
    bcrypt.compare(req.body.password, result.password, (err, response) => {
      if (err) {
        res.err(err)
      } else if (response) {
        next()
      } else {
        res.status(400).send('Invalid email or password')
      }
    })
  })
  .catch((err) => {
    res.err(err)
  })
}

let createToken = (req, res, next) => {
  // This function adds a token onto the user's session
  req.session.regenerate((err) => {
    if (err) {
      res.err(err)
    } else {
      req.session.user = {
        'email': req.body.email
      }
      next()
    }
  })
}

let verifyAuth = (req, res, next) => {
  // This function checks to see if a session exists
  if (req.session.user) {
    next()
  } else {
    res.status(400).send('You are not logged in')
  }
}

let destroyToken = (req, res, next) => {
  // This function destroys the user's session
  req.session.destroy(function (err) {
    if (err) {
      res.err(err)
    } else {
      next()
    }
  })
}

let hashPassword = (req, res, next) => {
  // This function accepts a password and hashes it
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      res.err(err)
    } else {
      req.body.password = hash
      next()
    }
  })
}

let verifyEmail = (req, res, next) => {
  // This function accepts an email and makes sure it's unique
  Users.findOne({
    'email': req.body.email
  })
  .then((result) => {
    if (result !== null) {
      res.status(400).send('That email has already been used')
    } else {
      next()
    }
  })
  .catch((err) => {
    res.err(err)
  })
}

module.exports = {
  register: register,
  verifyPassword: verifyPassword,
  createToken: createToken,
  verifyAuth: verifyAuth,
  destroyToken: destroyToken,
  hashPassword: hashPassword,
  verifyEmail: verifyEmail
}
