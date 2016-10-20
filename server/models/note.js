const Notes = require('../db/db').Notes
const Folders = require('../db/db').Folders

const addNote = (noteName, content, folderId) => {
  if (noteName === '' || content === '') {
    return 'Bad request. There must be a noteName and content.'
  }
  return Notes
    .create({notesName: noteName, content: content})
      .then((newNote) => {
        const note = newNote
        if (folderId) {
          return Folders
            .findOne({
              where: {
                id: folderId
              }
            })
            .then(folder => {
              return note.setFolders(folder)
                .then(data => {
                  return data
                })
            })
        }
      })
      .catch((err) => {
        return err
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
  if (noteId === undefined) {
    return 'Bad request. noteId must be defined'
  }
  return Notes
    .findOne({
      where: {id: noteId}
    })
    .then(note => {
      note.destroy()
    })
    .catch((err) => {
      return err
    })
}

const updateNote = (noteId, content) => {
  if (noteId === '' || content === '') {
    return 'Bad request. There must be a noteId and content.'
  }
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
    .catch((err) => {
      return err
    })
}

module.exports = {
  addNote: addNote,
  deleteNote: deleteNote,
  changeNoteName: changeNoteName,
  updateNote: updateNote,
  getNote: getNote
}
