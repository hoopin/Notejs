const Model = require('express').Router()
const folders = require('./folderModel')
const users = require('./userModel')
const notes = require('./noteModel')

Model.use('/folders', folders)
Model.use('/users', users)
Model.use('/notes', notes)

module.exports = Model
