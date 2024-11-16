const express = require('express');
const cors = require('cors');
const connectDB = require('../db'); // Assuming this file is in a separate folder

const app = express();
const port = process.env.PORT || 5000; // Use environment variable for port

const Quizzes = require('../model'); // Assuming you have a Quiz model defined in models/quiz.js

app.use(cors());

app.get('/', (req, res) => { res.send('QuizK Quiz API') });

// Define API endpoints (assuming you have a quiz model)
app.get('/api/quizzes', async (req, res) => {
    try {
        const quizzes = await Quizzes.find(); // Fetch all quizzes
        res.json(quizzes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

app.get('/api/quizzes/:id', async (req, res) => {
    try {
        const quiz = await Quizzes.find( 
            { id: parseInt(req.params.id) }
        ); // Fetch a quiz by ID
        if (!quiz) {
            return res.status(404).json({ msg: 'Quiz not found' });
        }
        res.json(quiz);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Start the server

app.listen(port, async () => {
    try {
        await connectDB();
    console.log(`Server listening on port ${port}`);

    } catch (err) {
        console.error(err.message);
    }
});

module.exports = app;
