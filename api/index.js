const express = require('express');
const cors = require('cors');
const connectDB = require('../db'); // Assuming this file is in a separate folder

const app = express();
const port = process.env.PORT || 5000; // Use environment variable for port

const Quizzes = require('../model'); // Assuming you have a Quiz model defined in models/quiz.js
//const UserQuizzes = require('../model'); // Assuming you have a UserQuiz model defined in models/userQuiz.js

app.use(express.json());
app.use(cors({

}));

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

/**************************USER SUBMITS  *********************************/

/* app.post('/api/user-quizzes', async (req, res, next) => {
    console.log('Received POST request:', req.body);
    const { title, theme, questionCount, description, extraDescription, questions, username } = req.body;
    const userQuiz = new UserQuizzes({
        title,
        theme,
        questionCount,
        description,
        extraDescription,
        questions,
        username,
    });

    try {
        const newUserQuiz = await userQuiz.save(); // Save user quiz
        res.json(newUserQuiz);
    } catch (error) {
        console.error('error msg:', error);
        res.status(500).json({ message: 'Error saving user quiz' });
    }
}
);

app.get('/api/user-quizzes', async (req, res, next) => {
    try {
        const userQuizzes = await UserQuizzes.find(); // Fetch all user quizzes
        res.json(userQuizzes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching user quizzes' });
    }
});

app.get('/api/user-quizzes/:id', async (req, res, next) => {
    try {
        const userQuiz = await UserQuizzes.findById(req.params.id); // Fetch a user quiz by ID
        if (!userQuiz) {
            return res.status(404).json({ message: 'User quiz not found' });
        }
        res.json(userQuiz);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching user quiz' });
    }
}); */


// Start the server
connectDB(); // Connect to MongoDB

app.listen(port, async () => {
    console.log(`Server listening on port ${port}`);
});

module.exports = app;
