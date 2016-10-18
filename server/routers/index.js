const Router = require('express').Router()
const folders = require('./folders')
const auth = require('./auth')
const notes = require('./notes')

Router.use('/folders', folders)
Router.use('/auth', auth)
Router.use('/notes', notes)

module.exports = Router
