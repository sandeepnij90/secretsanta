const mongoose = require('mongoose')
const { Schema } = mongoose

const AvailableSchema = new Schema({
    id: String,
    name: String,
})

mongoose.model('availableusers', AvailableSchema)