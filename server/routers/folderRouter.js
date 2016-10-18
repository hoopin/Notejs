const folderRouter = require('express').Router()
const folderController = require('../controllers/folderController')

folderRouter.route('/')
  .get(folderController.GET)
  .post(folderController.POST)

folderRouter.route('/:folderId')
  .get(folderController.GET_FOLDERID)
  .post(folderController.POST_FOLDERID)

module.exports = folderRouter
