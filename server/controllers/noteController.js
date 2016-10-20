const noteController = {}
const Notes = require('../models/note')

// Creates new note
noteController.POST = (req, res) => {
  const note = req.body
  Notes.addNote(note.notesName, note.content, note.folderId)
    .then(newNote => {
      let note = newNote[0][0]
      res.status(200).send(note)
    })
}

// Returns a specific note
noteController.GET_NOTEID = (req, res) => {
  const noteId = req.params.noteId
  Notes.getNote(noteId)
    .then((note) => {
      res.status(200).send(note)
    })
}

// Update a note
noteController.UPDATE_NOTEID = (req, res) => {
  const noteContent = req.body.content
  const noteId = req.params.noteId
  Notes.updateNote(noteId, noteContent)
    .then((updatedNote) => {
      res.status(200).send(updatedNote)
    })
}

// Delete a note
noteController.DELETE_NOTE = (req, res) => {
  const noteId = req.params.noteId
  Notes.deleteNote(noteId)
    .then((note) => {
      res.status(200).send('Note deleted')
    })
}

module.exports = noteController
