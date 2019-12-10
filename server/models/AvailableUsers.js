const mongoose = require('mongoose')
const { Schema } = mongoose

const AvailableSchema = new Schema({
    name: String,
})

mongoose.model('availableusers', AvailableSchema)