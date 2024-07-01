// server.js
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const PORT = process.env.PORT || 5137;
const HOST = process.env.HOST || 'localhost';
const uri = require('./config'); // Import the URI from config.js
mongoose.connect(uri);
const db = mongoose.connection;

// Models
const User = require('./models/userModel');
const POST = require('./models/PostModel');


const allowedOrigins = ['http://localhost:5173'];
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true // Allow credentials
};

app.use(cors(corsOptions));
app.use(express.json())



// Routes for POST requests
app.post('/api/addUrl', async (req, res) => {
    try {
        //Extract the URL from the request body 
        const { url } = req.body;
        // Create a new post document in the database
        const newPost = new POST({ url });
        await newPost.save();

        // Send a success response
        res.status(200).json({ success: true, message: 'URL added successfully' });
    } catch (error) {
        console.error('Error adding URL: ', error);
        // Send an error response
        res.status(500).json({ success: false, error: 'Error adding URL: ' });
    }
});

app.get('/api/posts', async (req, res) => {
    try {
        const posts = await POST.find();
        res.status(200).json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ error: 'Error fetching posts' });
    }
});


// Routes for USER requests
app.post('/api/login', async (req, res) => {
    try {
        // Find the user by email
        const user = await User.findOne({ email: req.body.user });
        if (!user) {
            return res.json({ status: 'error', error: 'Invalid login' });
        }
        let isPasswordValid = await bcrypt.compare(req.body.pwd, user.password)
        if (isPasswordValid) {
            // Passwords match
            // Generate JWT token for authentication
            const token = jwt.sign({ email: user.email }, 'secret123');

            // Send the token back to the client
            return res.json({ status: 'ok', token: token });
        } else {
            // Passwords do not match
            return res.json({ status: 'error', error: 'Invalid password' });
        }
    } catch (err) {
        // Handle any errors
        return res.json({ status: 'error', error: err.message });
    }
});




db.once('open', () => {
    console.log('Connected to MongoDB successfully.');
});

// Event listener for connection errors
db.on('error', (error) => {
    console.error('Error connecting to MongoDB:', error);
});

app.listen(PORT, () => {
    console.log(`Server started on http://${HOST}:${PORT}`);
});
