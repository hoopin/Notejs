const folderRouter = require('express').Router()

folderRouter.route('/')
  .get((req, res) => {
    console.log('GET /folders')
    res.status(200).json({
      message: '/folders GET'
    })
  })
  .post((req, res) => {
    console.log('POST /folders')
    res.status(200).json({
      message: '/folders POST'
    })
  })

folderRouter.route('/:folderId')
  // get specific oflder and it contains notes
  .get((req, res) => {
    console.log('GET /folders/:folderId')
    res.status(200).json({
      message: '/folders/:folderId GET'
    })
  })
  // post a note to a specific folder. If no folderId given, folder would be root
  .post((req, res) => {
    console.log('POST /folders/:folderId')
    res.status(200).json({
      message: '/folders/:folderId POST'
    })
  })

module.exports = folderRouter
