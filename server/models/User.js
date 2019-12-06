const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
    name: String,
    passcode: Number,
    secretSantaFor: ''
})

mongoose.model('users', UserSchema)