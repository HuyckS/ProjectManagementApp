const mongoose = require('mongoose');
const { User } = require('./User');

const MessageSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: [true, "Subject required."],
        minLength: [3, 'Subject must be longer than 3 characters.']
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
    recipient: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            required: [true, 'Please include a recipient.']
        }
    ],
    priority: {
        type: [String],
        required: true,
        default: ["low"],
        enum: {
            values: ["low", "moderate", "high"],
            message: '{VALUE} is not supported'
        }
    },
    viewed: {
        type: Boolean,
        required: [true, 'This should be false'],
        default: false
    }
}, { timestamps: true });

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;