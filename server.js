const express = require('express');
const cors = require('cors');
const connectDB = require('./db'); // Assuming this file is in a separate folder

const app = express();
const port = process.env.PORT || 5000; // Use environment variable for port

const Quiz = require('./model'); // Assuming you have a Quiz model defined in models/quiz.js

// Connect to MongoDB
connectDB();

app.use(cors({
    origin: 'http://quizk.app', // Allow only this domain to make requests
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
    credentials: true, // Allow credentials
})); // Enable CORS

// Define API endpoints (assuming you have a quiz model)
app.get('/api/quizzes', async (req, res) => {
    try {
        const quizzes = await Quiz.find(); // Fetch all quizzes
        res.json(quizzes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Start the server
app.listen(port, () => console.log(`Server listening on port ${port}`));