// /GET notes/:noteId   ---> gets specific note  --> return array of updates for the sidebar. Each update will be stored with the note, and returned in one request
// /POST notes/:noteId ---> saves note

const noteRouter = require('express').Router()

noteRouter.route('/:noteId')
  .get((req, res) => {
    console.log('/get :notesID')
    res.status(200).json({
      message: '/notes/:notesID GET'
    })
  })
  .post((req, res) => {
    console.log('/post :notesID')
    res.status(200).json({
      message: '/notes/:notesID POST'
    })
  })

module.exports = noteRouter
