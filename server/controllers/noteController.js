const noteController = {}
const Notes = require('../models/note')

// Creates new note
noteController.POST = (req, res) => {
  const note = req.body
  Notes.addNote(note.notesName, note.content, note.folderId)
    .then(note => {
      res.status(200).send(note)
    })
}

// gets specific note  --> return array of updates for the sidebar
// Each update will be stored with the note, and returned in one request
noteController.GET_NOTEID = (req, res) => {
  const noteId = req.params.noteId
  Notes.getNote(noteId)
    .then((note) => {
      res.status(200).send(note)
    })
}

noteController.UPDATE_NOTEID = (req, res) => {
  const noteContent = req.body.content
  const noteId = req.params.noteId
  Notes.updateNote(noteId, noteContent)
    .then((updatedNote) => {
      // This is undefined
      res.status(200).send(updatedNote)
    })
}

noteController.DELETE_NOTE = (req, res) => {
  const noteId = req.params.noteId
  Notes.deleteNote(noteId)
    .then((note) => {
      res.status(200).send("Note deleted")
    })
}

module.exports = noteController
