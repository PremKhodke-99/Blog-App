const { Schema, model } = require('mongoose');

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        ref: 'User'
    }
}, {
    timestamps: true
});

const Blog = model('Blog', blogSchema);
module.exports = Blog;