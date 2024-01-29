const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [{
        type: String,
        default: "Employee"
    }],
    active: {
        type: Boolean,
        default: true
    },
    squat: {
        type: String,
        default: "0"
    },
    bench: {
        type: String,
        default: "0"
    },
    deadlift: {
        type: String,
        default: "0"
    }

})

module.exports = mongoose.model('User', userSchema)