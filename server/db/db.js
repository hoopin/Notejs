require('dotenv').config()
const Sequelize = require('sequelize')

const sequelize = new Sequelize('postgres://' + process.env.DB_User + ':' + process.env.DB_Password + '@elmer.db.elephantsql.com:5432/' + process.env.DB_User)

// // module.exports = sequelize
sequelize.authenticate()
  .then(function () {
    console.log('Connection has been established successfully.')
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err)
  })

const Folders = sequelize.define('folders', {
  folderName: {
    type: Sequelize.STRING
  },
  notesInside: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
})

const Notes = sequelize.define('notes', {
  notesName: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
})

const Users = sequelize.define('users', {
  userName: {
    type: Sequelize.STRING
  },
  fullName: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
})

const NotesUsers = sequelize.define('NotesUsers', {

})

const FoldersUsers = sequelize.define('FoldersUsers', {

})

const NotesFolders = sequelize.define('NotesFolders', {

})

Notes.belongsToMany(Users, {through: NotesUsers})
Users.belongsToMany(Notes, {through: NotesUsers})

Folders.belongsToMany(Users, {through: FoldersUsers})
Users.belongsToMany(Folders, {through: FoldersUsers})

Notes.belongsToMany(Folders, {through: NotesFolders})
Folders.belongsToMany(Notes, {through: NotesFolders})

// HELPER TO DROP ALL TABLES
// sequelize.sync({force: true}).then(function () {
// console.log('Tables have been dropped')
// })

sequelize.sync().then(function () {
  console.log('Tables have been Created')
})

module.exports = {Folders: Folders,Users: Users,Notes: Notes,sequelize: sequelize}
