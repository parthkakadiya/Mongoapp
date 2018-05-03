const mongoose = require('mongoose');

const Users = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minLength: 1
    }
});

module.exports  = {Users};