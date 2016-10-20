const noteController = {}
const Notes = require('../models/note')
const Promise = require('co')

// Creates new note
noteController.POST = (req, res) => {
  console.log('POST /notes')
  const input = req.body
  Promise(function * () {
    Notes.addNote(input.name , input.container, input.fn)
  })
    .then(note => {
      console.log('INSIDE NOTE')
      res.status(200).send(note)
    })
}

// gets specific note  --> return array of updates for the sidebar
// Each update will be stored with the note, and returned in one request
noteController.GET_NOTEID = (req, res) => {
  console.log('GET /notes/:noteId')
  res.status(200).json({
    message: '/notes/:noteId GET'
  })
}

// Save a note
noteController.POST_NOTEID = (req, res) => {
  console.log('POST /notes/:noteId')
  const Note = req.body
  Promise(function* () {
    Notes.saveNotes(updatedNote)
  })
  .then(() => {
    console.log('You have updaed the note')
  })
}

module.exports = noteController
