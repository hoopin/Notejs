const folderRouter = require('express').Router()
const folderController = require('../controllers/folderController')

folderRouter.route('/')
  .post(folderController.POST)
  .delete(folderController.DELETE_FOLDER)

folderRouter.route('/home/:userId')
  .get(folderController.GET_USER_FOLDERS)

folderRouter.route('/:folderId')
  .get(folderController.GET_FOLDERID)
  .put(folderController.UPDATE_FOLDER)

module.exports = folderRouter
