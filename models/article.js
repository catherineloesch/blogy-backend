//Require necessary NPM packages
const mongoose = require('mongoose')


//Define Article Schema
const articleSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: String,
    author: {type: String, required: true},
    published: {type: Boolean, default: true},
    pubishedOn: {type: Date, default: Date.now},
}, {
    timestamps: true
})

//Compile our model based on the schema
const Article = mongoose.model('Article', articleSchema)

// Export our Model for use
module.exports = Article