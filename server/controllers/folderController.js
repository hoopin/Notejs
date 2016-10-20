const folderController = {}
const Folders = require('../models/folder')
const Promise = require('co')

// gets folders for a specific user
folderController.GET = (req, res) => {
  console.log('GET /folders')

  console.log('folders', Folders.getFolders())
  Folders.getFolders()
    .then((data) => {
      console.log('data inside folder controller', data)
      res.status(200).send(data)
    })
}

// Creates new folder for a user
folderController.POST = (req, res) => {
  console.log('POST /folders')
  const data = req.body

    Folders.addFolder(data.folderName)

}

// get specific oflder and it contains notes
folderController.GET_FOLDERID = (req, res) => {
  console.log('GET /folders/:folderId')
  res.status(200).json({
    message: '/folders/:folderId GET'
  })
}

// post a note to a specific folder. If no folderId given, folder would be root
folderController.POST_FOLDERID = (req, res) => {
  console.log('POST /folders/:folderId')
  res.status(200).json({
    message: '/folders/:folderId POST'
  })
}

module.exports = folderController
