const {Schema, model} = require("mongoose");

const videoSchema = new Schema({
    //_id: ObjectId,
    url: String,
    author: String,
    title: String,
    date: Date,
    description: String,
    comments: [String],
});

module.exports = model('Video', videoSchema);