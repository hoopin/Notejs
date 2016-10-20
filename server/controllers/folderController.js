const folderController = {}
const Folders = require('../models/folder')
const Promise = require('co')

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
  Folders.getFoldersNote(folderId)
    .then((data) => {
      console.log("DATA", data)
      res.status(200).send(data)
    })
}

// post a note to a specific folder. If no folderId given, folder would be root
folderController.POST_FOLDERID = (req, res) => {
  res.status(200).json({
    message: '/folders/:folderId POST'
  })
}

module.exports = folderController
