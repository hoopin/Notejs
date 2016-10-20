const Notes = require('../db/db').Notes
const Folders = require('../db/db').Folders

const addNote = (noteName, content, folderId) => {
  return Notes
    .create({notesName: noteName, content: content})
    .then(function (newNote) {
      const note = newNote
      if (folderId) {
        Folders
        .findOne({
          where: {
            id: folderId
          }
        })
        .then(folder => {
          note.setFolders(folder)
          .then(data => {
            return data
          })
        })
      }
    })
    .catch((err) => {
      console.log('Add Notes error', err)
    })
}

const getNote = (noteId) => {
  return Notes
    .findOne({
    	where: {
    		id: noteId
    	}
    })
}

const deleteNote = (noteId) => {
  return Notes
    .findOne({
      where: {id: noteId}
    })
    .then(note => {
      console.log("NOTE", note)
      note.destroy()
    })
    .catch((err) => {
      console.log('err in removing note', err)
    })
}

const changeNoteName = (updatedName, updateMessage) => {
  return Notes
    .update({
      notesName: updatedName
    })
    .then(() => {
      console.log('Notes Name has been Changed')
    })
}

const updateNote = (noteId, content) => {
  return Notes
    .findOne({
    	where: {
    		id: noteId
    	}
    })
    .then(object => {
    	return object
    	  .update({
  		    content: content
      	})
      })
}

module.exports = {
  addNote: addNote,
  deleteNote: deleteNote,
  changeNoteName: changeNoteName,
  updateNote: updateNote,
  getNote: getNote
}
