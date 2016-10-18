const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const rootRouter = require('./routers/index')
const PORT = process.env.PORT || 8000
const db = require('./db/db')

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(cors())

app.use('/', express.static(path.join(__dirname, '../client')))
//
app.use('/api', rootRouter)

db.authenticate()
  .then(function () {
    console.log('Connection has been established successfully.')
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err)
  })

app.listen(PORT, () => console.log('Server running on port', PORT))
