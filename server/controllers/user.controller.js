const User = require('../models/User');
const bcrypt = require("bcrypt");

module.exports.findAllUsers = (req, res) => {
    User.find()
        .then(allUsers => res.json({ users: allUsers }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findAllUserNames = (req, res) => {
    User.find()
        .then(allUsers => {
            let userNames = [];
            for (let i = 0; i < allUsers.length; i++) {
                userNames.push(allUsers[i].firstName + " " + allUsers[i].lastName);
            }
            res.json({ users: userNames })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOneUser = (req, res) => {
    User.findOne({ _id: req.params.id })
        .populate('projects').exec((err, projects) => {
            console.log("Populated user with projects")
        })
        .populate('messages').exec((err, messages) => {
            console.log("Populated user with messages")
        })
        .then(oneUser => res.json({ user: oneUser }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createNewUser = (req, res) => {
    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        password: bcrypt.hashSync(req.body.password, 8),
        roles: req.body.roles,
    })
        .then(newUser => res.json({ user: newUser }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateExistingUser = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedUser => res.json({ user: updatedUser }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteAnExistingUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
