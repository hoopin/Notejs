// /GET notes/:noteId   ---> gets specific note  --> return array of updates for the sidebar. Each update will be stored with the note, and returned in one request
// /POST notes/:noteId ---> saves note

const notesRouter = require('express').Router()

notesRouter.route('/:noteId')
  .get((req, res) => {
    console.log('/get :notesID')
    res.json({
      message: 'notes GET'
    })
  })
  .post((req, res) => {
    console.log('/post :notesID')
    res.json({
      message: 'notes Post'
    })
  })
