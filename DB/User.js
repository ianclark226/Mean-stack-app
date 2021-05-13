const mongoose = require('mongoose');

const user = new mongoose.Schema({
    title: {
        type:String
    },
    isDone: {
        type:Boolean
    }
});

module.exports = User = mongoose.model('user', user);