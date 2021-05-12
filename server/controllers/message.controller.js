const Message = require('../models/Message');

module.exports.findAllMessages = (req, res) => {
    Message.find()
        .then(allMessages => res.json({ Messages: allMessages }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOneMessage = (req, res) => {
    Message.findOne({ _id: req.params.id })
        .then(oneMessage => res.json({ Message: oneMessage }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createNewMessage = (req, res) => {
    Message.create(req.body)
        .then(newMessage => res.json({ Message: newMessage }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateExistingMessage = (req, res) => {
    Message.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedMessage => res.json({ Message: updatedMessage }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteAnExistingMessage = (req, res) => {
    Message.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

