const Sequelize = require('sequelize')
const sequelize = require('./db')

var Folder = sequelize.define('folders', {
  folderName: {
    type: Sequelize.STRING
  },
  notes: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
})

module.exports = Folder
