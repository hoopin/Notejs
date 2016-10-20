const Folders = require('../db/db').Folders
const Notes = require('../db/db').Notes

const addFolder = (folderName) => {
  Folders
    .create({folderName: folderName })
    .then((newFolder) => {
      const folder = newFolder
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

const getFoldersNote = () => {
  
}

module.exports = {
  addFolder: addFolder,
  removeFolder: removeFolder,
  changeFolderName: changeFolderName,
  getFolders: getFolders
}
