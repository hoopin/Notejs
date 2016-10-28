const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const rootRouter = require('./routers/index')
const session = require('express-session')
const PORT = 8000

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(cors())
app.use(session({
  secret: 'notejs2016',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.use('/', express.static(path.join(__dirname, '../public')))

app.use('/api', rootRouter)

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.listen(PORT, () => console.log('Server running on port', PORT))
