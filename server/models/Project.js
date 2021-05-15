const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: [true, "Project name required."],
        minLength: [3, 'Project name must be longer than 3 characters.'],
        unique: true
    },
    projectDescription: {
        type: String,
        required: [true, 'Please include a description about your project.'],
        minLength: [15, 'Please include a description longer than 15 characters about your project.']
    },
    projectLead: {
        type: String,
        required: [true, 'Please include a project leader.']
    },
    projectMembers: {
        type: Array,
        default: [],
    },
    projectTasks: {
        type: Array,
        default: [],
    },
    projectTasksCompleted: {
        type: Array,
        default: [],
    },
    dueDate: {
        type: Date,
        required: [true, 'Please enter a due date.'],
        validate: [dateValidator2, "End date must be in the future."]
    },
}, { timestamps: true });

function dateValidator2(value) {
    let currentDate = new Date();
    if (value.getTime() >= currentDate.getTime()) {
        return true;
    } else {
        return false;
    }
}
const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
