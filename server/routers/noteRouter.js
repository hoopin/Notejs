const noteRouter = require('express').Router()
const noteController = require('../controllers/noteController')

noteRouter.route('/')
  .post(noteController.POST)

noteRouter.route('/:noteId')
  .get(noteController.GET_NOTEID)
  .put(noteController.UPDATE_NOTEID)
  .delete(noteController.DELETE_NOTE)

module.exports = noteRouter
