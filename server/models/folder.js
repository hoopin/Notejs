
const Folders = require('../db/db').Folders

const addFolder = (folderName, folderNotes) => {
  Folders
    .build({folderName: folderName, notesInside: folderNotes})
    .save()
    .then(function (anotherTask) {
      // you can now access the currently saved task with the variable anotherTask... nice!
    })
    .catch(function (error) {
      // Ooops, do some error-handling
      console.log('Add Folder error', error)
    })
}

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

module.exports = {
  addFolder: addFolder,
  removeFolder: removeFolder,
  changeFolderName: changeFolderName,
  getFolders: getFolders
}
