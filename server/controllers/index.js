const Controller = require('express').Router()
const folders = require('./folderController')
const users = require('./userController')
const notes = require('./noteController')

Controller.use('/folders', folders)
Controller.use('/users', users)
Controller.use('/notes', notes)

module.exports = Controller
