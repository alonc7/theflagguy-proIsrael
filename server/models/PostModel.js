const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    url: { type: String, required: true },
});

const Post = mongoose.model('Post', postSchema, 'posts'); // Specify collection name 'posts'

module.exports = Post;