const mongoose = require('mongoose')
const User = mongoose.model('users')
const AvailableUsers = mongoose.model('availableusers')
const Match = mongoose.model('matches')

module.exports = app => {
    app.post('/api/login', async(req, res) => {
        const { name, passcode } = req.body
        const UserFound = await User.findOne({name, passcode})
        if (UserFound) {
            return res.send({name: UserFound.name, secretSantaFor: UserFound.secretSantaFor, error: ''})
        }
        res.send({user: false, hasMatch: false, error: 'Wrong name or passcode'})
    })

    app.post('/api/setMatch', async(req, res) => {
        const { name } = req.body
        const hasMatch = await Match.findOne({sender: name})
        console.log({hasMatch})
        if (hasMatch) {
            return res.send(hasMatch.receiver)
        }

        const availableUsers = await AvailableUsers.find()
        const filteredUsers = availableUsers.filter((obj) => obj.name !== name)
        const randomId =  Math.floor(Math.random() * Math.floor(filteredUsers.length))
        const secretSantaFor = filteredUsers[randomId].name

        await AvailableUsers.findOneAndRemove({name: secretSantaFor})
        await User.findOneAndUpdate({ name },{ secretSantaFor })
        await new Match({
            sender: name,
            receiver: secretSantaFor
        }).save()
        res.send(secretSantaFor)
    })
}