const express = require('express');
const cors = require('cors');
const connectDB = require('../db'); // Assuming this file is in a separate folder

const app = express();
const port = process.env.PORT || 5001; // Use environment variable for port

const Quizzes = require('../model'); // Assuming you have a Quiz model defined in models/quiz.js
const UserQuizzes = require('../userModel'); // Assuming you have a UserQuiz model defined in models/userQuiz.js

app.use(express.json());
app.use(cors({}));

app.get('/', (req, res) => { res.send('QuizK Quiz API') });

//Define API endpoints (assuming you have a quiz model)
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
        const quiz = await Quizzes.findById(req.params.id); // Fetch a quiz by ID
        if (!quiz) {
            return res.status(404).json({ msg: 'Quiz not found' });
        }
        console.log(quiz);
        console.log(quiz._id);
        res.json(quiz);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});
// Define API endpoints for user quizzes
app.post('/api/userquizzes', async (req, res) => {
    try {
        const newQuiz = new UserQuizzes(req.body);
        await newQuiz.save();
        res.json(newQuiz);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

app.get('/api/userquizzes', async (req, res) => {
    try {
        const userQuizzes = await UserQuizzes.find(); // Fetch all user quizzes
        res.json(userQuizzes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

app.get('/api/userquizzes/:id', async (req, res) => {
    try {
        const userQuiz = await UserQuizzes.find( 
            { id: parseInt(req.params.id) }
        ); // Fetch a user quiz by ID
        if (!userQuiz) {
            return res.status(404).json({ msg: 'User Quiz not found' });
        }
        res.json(userQuiz);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Start the server
connectDB(); // Connect to MongoDB

app.listen(port, async () => {
    console.log(`Server listening on port ${port}`);
});

module.exports = app;
