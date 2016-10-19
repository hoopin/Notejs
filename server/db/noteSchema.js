// const Sequelize = require('sequelize')
// const sequelize = require('./db')
// const Folders = require('./folderSchema.js')
// const Users = require('./userSchema.js')

// const Notes = sequelize.define('notes', {
//   notesName: {
//     type: Sequelize.STRING
//   },
//   content: {
//     type: Sequelize.STRING
//   }
// }, {
//   freezeTableName: true // Model tableName will be the same as the model name
// })

// Notes.hasMany(Users)
// Notes.belongsTo(Folders, { as: 'Folder_id', contraint: false })

// module.exports = Notes
