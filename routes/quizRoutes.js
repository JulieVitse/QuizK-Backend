const Quizzes = require('../model'); // Assuming you have a Quiz model defined in models/quiz.js

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