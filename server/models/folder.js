
const Folders = require('../db/db').Folders
const Notes = require('../db/db').Notes

const addFolder = (folderName) => {
  Folders
    .create({folderName: folderName })
    .then(function (newFolder) {
      const folder = newFolder
    })
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
}

    // .then(data => {
    //   console.log('folder created!', data)
    //   res.status(200).send(data)
    // })
    // .catch(err => {
    //   console.log('folder not created', err)
    // })

const getFolders = () => {

      return Folders.all()
}

const removeFolder = (folderName) => {
  Folders.findOne({
    where: {folderName: folderName}
  })
    .then(folder => {
      folder.destroy()
    })
    .catch((err) => {
      console.log('err in removing folder', err)
    })
}

const changeFolderName = (updatedName) => {
  Folders
    .update({
      folderName: updatedName
    })
    .then(() => {
      console.log('Folder Name has been Changed')
    })
}

const getFoldersNote = ()=>{
  
}

module.exports = {
  addFolder: addFolder,
  removeFolder: removeFolder,
  changeFolderName: changeFolderName,
  getFolders: getFolders
}
