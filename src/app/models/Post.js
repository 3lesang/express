const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
    img: { type: String, default: '' },
    title: { type: String},
    des: { type: String},
    username: { type: String},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', Post);
