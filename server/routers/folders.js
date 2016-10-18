const Router = require('express').Router

Router.route('/folders')
  .get((req, res) => {
    console.log('GET /folders')
  })
  .post((req, res) => {
    console.log('POST /folders')
  })

Router.route('/folders/:folderId')
  // get specific oflder and it contains notes
  .get((req, res) => {
    console.log('GET /folders:folderId')
  })
  // post a note to a specific folder. If no folderId given, folder would be root
  .post((req, res) => {
    console.log('POST /folders:folderId')
  })

module.exports = Router
