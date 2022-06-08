const mongoose = require('mongoose');

// defining the structure of the collection and fields to be entered
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name"],
    },
    email: {
        type: String,
        required: [true, "Please add an email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please add a password"],
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', userSchema);