const Project = require('../models/Project');

module.exports.findAllProjects = (req, res) => {
    Project.find()
        .then(allProjects => res.json({ Projects: allProjects }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOneProject = (req, res) => {
    Project.findOne({ _id: req.params.id })
        .then(oneProject => res.json({ Project: oneProject }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createNewProject = (req, res) => {
    Project.create(req.body)
        .then(newProject => res.json({ Project: newProject }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateExistingProject = (req, res) => {
    Project.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProject => res.json({ Project: updatedProject }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteAnExistingProject = (req, res) => {
    Project.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

