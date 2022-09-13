const {Schema, model} = require('../connection');
const userSchema = new Schema({
    name: String,
    username: String,
    email: String,
    password: String,
    occupation:String,
})

module.exports = model('users',userSchema);