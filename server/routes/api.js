const express = require('express');
const router = require('router');
const Post = require('../models/PostModel');

// POST route to add a new URL 

router.post('/addUrl', async (req, res) => {
    try {
        //Extract the URL from the request body 
        const { url } = req.body;
        // Create a new post document in the database
        const newPost = new Post({ url });
        await newPost.save();

        // Send a success response
        res.status(200).json({ success: true, message: 'URL added successfully' });
    } catch (error) {
        console.error('Error adding URL: ', error);
        // Send an error response
        res.status(500).json({ success: false, error: 'Error adding URL: ' });
    }
})