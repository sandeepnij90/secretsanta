const mongoose = require('mongoose')
const User = mongoose.model('users')
const AvailableUsers = mongoose.model('availableusers')
const Match = mongoose.model('matches')
const AvailableJSON = require('./available.json')
const UsersJSON = require('./users.json')

module.exports = app => {
    app.post('/api/login', async(req, res) => {
        const { name, passcode } = req.body
        const splitName = name.split(' ')

        if (splitName.length !== 2) {
            return res.send({user: false, hasMatch: false, error: 'Wrong name or passcode'})
        }

        const firstName = splitName[0].charAt(0).toUpperCase() + splitName[0].slice(1);
        const secondName = splitName[1].charAt(0).toUpperCase() + splitName[1].slice(1);
        const fullName = `${firstName} ${secondName}`
        const UserFound = await User.findOne({name: fullName, passcode})
        if (UserFound) {
            return res.send({name: UserFound.name, secretSantaFor: UserFound.secretSantaFor, error: ''})
        }
        res.send({user: false, hasMatch: false, error: 'Wrong name or passcode'})
    })

    app.post('/api/setMatch', async(req, res) => {
        const { name } = req.body
        const hasMatch = await Match.findOne({sender: name})
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

    app.get('/api/add_available', async (req,res) => {
        AvailableJSON.forEach(async ({name}) => {
            await new AvailableUsers({name}).save()
            console.log(`${name} has been added`)
        })
    })

    app.get('/api/add_users', (req,res) => {
        UsersJSON.forEach(async ({name, passcode}) => {
            await new User({name,passcode}).save()
            console.log(`${name} has been added`)
        })
    })
}