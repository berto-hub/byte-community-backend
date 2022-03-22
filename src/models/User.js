const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    //_id: ObjectId,
    name: String,
    email: String,
    password: String,
});

module.exports = model('User', userSchema);