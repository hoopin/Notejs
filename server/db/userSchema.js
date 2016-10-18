const Sequelize = require('sequelize')
const sequelize = require('./db')

var User = sequelize.define('users', {
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

module.exports = User
