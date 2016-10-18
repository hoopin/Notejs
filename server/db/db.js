require('dotenv').config()
const Sequelize = require('sequelize')
var sequelize = new Sequelize('postgres://' + process.env.DB_User + ':' + process.env.DB_Password + '@elmer.db.elephantsql.com:5432/' + process.env.DB_User)

module.exports = sequelize
