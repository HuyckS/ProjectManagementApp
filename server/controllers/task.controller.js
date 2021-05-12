const Task = require('../models/Task');

module.exports.findAllTasks = (req, res) => {
    Task.find()
        .then(allTasks => res.json({ Tasks: allTasks }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOneTask = (req, res) => {
    Task.findOne({ _id: req.params.id })
        .then(oneTask => res.json({ Task: oneTask }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createNewTask = (req, res) => {
    Task.create(req.body)
        .then(newTask => res.json({ Task: newTask }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateExistingTask = (req, res) => {
    Task.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedTask => res.json({ Task: updatedTask }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteAnExistingTask = (req, res) => {
    Task.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

