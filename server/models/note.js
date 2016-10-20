const Notes = require('../db/db').Notes
const Folders = require('../db/db').Folders

const addNote = (noteName, content, folderId) => {

  Notes
    .create({notesName: noteName, content: content})
    .then(function (newNote) {
      const note = newNote;
      if(folderId){
        Folders
        .findOne({
          where : {
            // Changed - from folderName to file ID
            id : folderId
          }
        })
        .then(folder=>{
          note.setFolders(folder)
          .then(data => {
            return data
          })
        })
      }
    })
    .catch(function (error) {
      // Ooops, do some error-handling
      console.log('Add Notes error', error)
    })
}


    //    Notes.create({
    //     noteName: "Hello"
    //     }
    //    )
    //   // console.log("Notes DB ",Notes)
    //    .then(note=>{
    //     console.log('this is folder', folder)
    //     console.log('we are inside add folder and note', note)
    //    folder.setNotes(note)
    //    .then((data) =>
    //       console.log("This is the promise inside ", data)
    //     )
    //    })

    //   // you can now access the currently saved task with the variable anotherTask... nice!
    // })
    // .catch(function (error) {
    //   // Ooops, do some error-handling
    //   console.log('Add Folder error', error)
    // })







const getNotes = (folderID) => {
  Notes
    .findAll({
      include: [{
        model: Folders,
        through: {
          attributes: ['folderId'],
          where: {
            folderId: folderID
          }
        }
      }]
    })
    .then(notes => {
      return notes
    })
}

const removeNote = (noteName) => {
  Notes
    .findOne({
      where: {notesName: noteName}
    })
    .then(note => {
      note.destroy()
    })
    .catch((err) => {
      console.log('err in removing note', err)
    })
}

const changeNoteName = (updatedName,updateMessage) => {
  Notes
    .update({
      notesName: updatedName
    })
    .then(() => {
      console.log('Notes Name has been Changed')
    })
}
const saveNotes = (notesName,saveContent) => {
  Notes
  .findOne({
  	where:{
  		notesName: notesName
  	}
  })
  .then(object=>{
  	object
  	.update({
		content: saveContent
  	})
  })
}

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  changeNoteName: changeNoteName,
  saveNotes: saveNotes,
  getNotes: getNotes
}
