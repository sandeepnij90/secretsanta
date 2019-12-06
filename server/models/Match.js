const mongoose = require('mongoose')
const { Schema } = mongoose

const MatchSchema = new Schema({
    sender: String,
    receiver: String
})

mongoose.model('matches', MatchSchema)