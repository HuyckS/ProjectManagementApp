const mongoose = require('mongoose');
const { User } = require('./User');

const MessageSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: [true, "Subject required."],
        minLength: [3, 'Subject must be longer than 3 characters.']
    },
    relatedProject: {
        type: String,
        required: [true, "Please select general message or the project that this message is related to."]
    },
    content: {
        type: String,
        required: [true, 'Please include a message.'],
        minLength: [5, 'Please include a message longer than 5 characters.']
    },
    sender: {
        type: String,
        required: [true, 'Please include your name.']
    },
    recipient: {
        type: String,
        required: [true, 'Please include at least one recipient from your contacts.']
    },
    priority: {
        type: [String],
        required: true,
        default: ["normal"],
        enum: {
            values: ["normal", "high"],
            message: '{VALUE} is not supported'
        }
    },
    viewed: {
        type: Boolean,
        required: [true, 'This should be false'],
        default: false
    },
    responses: {
        type: Array,
        default: []
    }
}, { timestamps: true });

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;