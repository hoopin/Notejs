const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 8000;

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cors());

app.use('/', express.static(path.join(__dirname, '../client')));

app.listen(PORT, () => console.log("Server running on port", PORT));
