const UserQuizzes = require('../userModel'); // Assuming you have a UserQuiz model defined in models/userQuiz.js

app.post('/api/userquizzes', async (req, res) => {
    try {
        const newQuiz = new UserQuizzes(req.body);
        await newQuiz.save();
        res.json(newQuiz);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
);
app.get('/api/userquizzes', async (req, res) => {
    try {
        const quizzes = await UserQuizzes.find(); // Fetch all user quizzes
        res.json(quizzes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
);
app.get('/api/userquizzes/:id', async (req, res) => {
    try {
        const quiz = await UserQuizzes.find(
            { id: parseInt(req.params.id) }
        ); // Fetch a user quiz by ID
        if (!quiz) {
            return res.status(404).json({ msg: 'User Quiz not found' });
        }
        res.json(quiz);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
);