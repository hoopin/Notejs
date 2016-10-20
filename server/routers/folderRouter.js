const folderRouter = require('express').Router()
const folderController = require('../controllers/folderController')

folderRouter.route('/')
  .get(folderController.GET)
  .post(folderController.POST)

folderRouter.route('/:folderId')
  .get(folderController.GET_FOLDERID)
  .put(folderController.UPDATE_FOLDER)

module.exports = folderRouter
