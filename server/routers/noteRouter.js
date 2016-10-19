const noteRouter = require('express').Router()
const noteController = require('../controllers/noteController')

noteRouter.route('/')
  .post(noteController.POST)

noteRouter.route('/:noteId')
  .get(noteController.GET_NOTEID)
  .post(noteController.POST_NOTEID)

module.exports = noteRouter
