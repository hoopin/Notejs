const Sequelize = require('sequelize')
const sequelize = require('./db')

var Notes = sequelize.define('notes', {
  notesName: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
})

module.exports = Notes
