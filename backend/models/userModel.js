const {Schema, model} = require('../connection');
const userSchema = new Schema({
    name: String,
    username: String,
    emai: String,
    password: String,
    occupation:String,
})

module.exports = model('users',userSchema);