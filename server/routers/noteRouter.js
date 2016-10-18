const noteRouter = require('express').Router()

noteRouter.route('/:noteId')
  // gets specific note  --> return array of updates for the sidebar
  // Each update will be stored with the note, and returned in one request
  .get((req, res) => {
    console.log('/get :notesID')
    res.status(200).json({
      message: '/notes/:notesID GET'
    })
  })
  // saves note
  .post((req, res) => {
    console.log('/post :notesID')
    res.status(200).json({
      message: '/notes/:notesID POST'
    })
  })

module.exports = noteRouter
