const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please enter in your first name'],
        minlength: [3, "Please enter a name greater than 3 characters."]
    },
    lastName: {
        type: String,
        required: [true, 'Please enter in your last name'],
        minlength: [1, "Please enter a name greater than 1 characters."]
    },
    username: {
        type: String,
        required: [true, 'Please enter a username for your account'],
        minlength: [7, "Please enter a username greater than 6 characters."],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Please enter a valid email (ex. person@emailprovider.com)'],
        match: /.+\@.+\..+/,
        unique: true

    },
    phone: {
        type: String,
        required: [true, 'User phone number required'],
        validate: {
            validator: function (v) {
                return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    password: {
        type: String,
        required: [true, "Please enter a password at least 8 characters in length, 1 uppercase letter, 1 lowercase letter, 1 special character and 1 number."],
        match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    },
    roles: {
        type: [String],
        required: true,
        default: ['user'],
        enum: {
            values: ['user', 'admin'],
            message: '{VALUE} is not supported'
        }
    },
    projects: {
        type: Array,
        default: []
    },
    projectsLeading: {
        type: Array,
        default: []
    },
    tasks: {
        type: Array,
        default: []
    },
    messages: {
        type: Array,
        default: []
    }
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = User;
