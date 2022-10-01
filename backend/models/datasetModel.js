const { Schema , model, Types }  = require('../connection');
// let ObjectID = Schema.ObjectId;
const dataSetSchmea  = new Schema({
    title: String,
    description: String,
    details: Array,
    tags: Array,
    file: String,
    thumbnail: String,
    url: String,
    createdBy:{type: Types.ObjectId,   ref: "users"},
    createdAt: Date,
    upvote: Number,
    downvote: Number
})

module.exports = model('datasets',dataSetSchmea);