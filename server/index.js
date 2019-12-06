const express = require('express')
const PORT = process.env.PORT || 5000
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const keys = require('./config/keys')

app.use(bodyParser.json())
mongoose.connect(keys.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

require('./models/Match')
require('./models/User')
require('./models/AvailableUsers')
require('./routes/api')(app)

app.listen(PORT)