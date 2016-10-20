const folderController = {}
const Folders = require('../models/folder')

// gets folders for a specific user
folderController.GET_USER_FOLDERS = (req, res) => {
  const userId = req.params.userId
  Folders.getUserFolders(userId)
    .then((data) => {
      res.status(200).send(data)
    })
}

// Creates new folder for a user
folderController.POST = (req, res) => {
  // expects folderName and userId on body
  const data = req.body
  Folders.addFolder(data.folderName, data.userId)
    .then((folder) => {
      const newFolder = folder[0][0]
      res.status(200).send(newFolder)
    })
}

folderController.DELETE_FOLDER = (req, res) => {
  const folderId = req.body.folderId
  Folders.deleteFolder(folderId)
    .then(() => {
      res.status(200).send('Folder deleted')
    })
}

// get specific oflder and it contains notes
folderController.GET_FOLDERID = (req, res) => {
  let folderId = req.params.folderId
  Folders.getFoldersNotes(folderId)
    .then((data) => {
      res.status(200).send(data)
    })
}

folderController.UPDATE_FOLDER = (req, res) => {
  // expects newName for folder on body
  const newName = req.body.newName
  const folderId = req.params.folderId
  Folders.updateFolderName(folderId, newName)
    .then((updatedFolder) => {
      res.status(200).send(updatedFolder)
    })
}

module.exports = folderController
