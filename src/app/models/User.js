const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    name: { type: String, default: '' },
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', User);
