const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: [true, 'Please name your task']
    },
    taskOwner: {
        type: String,
        default: 'Unassigned',
        required: [true, 'Please select a team member working on this task.']
    },
    complete: {
        type: Boolean,
        default: false
    },
    taskForProject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
        required: [true, "Please select the project that this task is related to."]
    },
    projectEndDate: {
        type: Date,
        required: [true, 'Please include the projects end date for validation.']
    },
    endDate: {
        type: Date,
        default: this.projectEndDate,
        required: [true, 'Please enter an end date.'],
        validate: [dateValidator, "End date must be in the future and must not extend past it's project's deadline."]
    },
}, { timestamps: true });

function dateValidator(value) {
    let startDate = new Date();
    if (startDate.getTime() <= value.getTime() && value.getTime() <= this.projectEndDate.getTime()) {
        return true;
    } else {
        return false;
    }
}

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;