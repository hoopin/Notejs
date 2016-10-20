const folderController = {}
const Folders = require('../models/folder')

// gets folders for a specific user
folderController.GET = (req, res) => {
  Folders.getFolders()
    .then((data) => {
      res.status(200).send(data)
    })
}

// Creates new folder for a user
folderController.POST = (req, res) => {
  const data = req.body
  Folders.addFolder(data.folderName)
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
  const newName = req.body.newName
  const folderId = req.params.folderId
  Folders.updateFolderName(folderId, newName)
    .then((updatedFolder) => {
      res.status(200).send(updatedFolder)
    })
}

module.exports = folderController
