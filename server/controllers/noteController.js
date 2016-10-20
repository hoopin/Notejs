const noteController = {}
const Notes = require('../models/note')
const Promise = require('co')

// Creates new note
noteController.POST = (req, res) => {
  console.log('POST /notes')
  const input = req.body
  Promise(function * () {
    Notes.addNote(input.name , input.container)
  })
    .then(note => {
      // This is trying to get inner Join to Work
      if(input.folderId){
        note.addNotesFolders(input.folderId)
        .then(()=>{
          console.log('Jane this should Work')
        })
      }else{
      res.status(200).send(data)
    }
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
  Promise(function * () {
    Notes.saveNotes(updatedNote)
  })
  .then(()=>{
    console.log('You have updaed the note')
  })
}

module.exports = noteController
