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
  // Folders.findOne({
  //   where: {folderName: folderName}
  // })
  //   .then(folder => {
  //     folder.destroy()
  //   })
  //   .catch((err) => {
  //     console.log('err in removing folder', err)
  //   })
}

const updateFolderName = (folderId, newName) => {
  return Folders
    .findOne({
    	where: {
    		id: folderId
    	}
    })
    .then(folder => {
    	return folder
    	  .update({
  		    folderName: newName
      	})
      })
}

const getFoldersNotes = (folderId) => {
  return Folders.findOne({
    where: {id: folderId}
  })
  .then((folder) => {
    return folder.getNotes({})
  })
}

module.exports = {
  addFolder: addFolder,
  removeFolder: removeFolder,
  updateFolderName: updateFolderName,
  getFolders: getFolders,
  getFoldersNotes: getFoldersNotes
}
