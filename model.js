const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    number: Number,
    category: String,
    question: String,
    correctAnswers: [String],
    options: [String],
});

const QuizSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    title: String,
    theme: String,
    questionCount: Number,
    description: String,
    extraDescription: String,
    questions: [QuestionSchema],
});

const Quizzes = mongoose.model('Quizzes', QuizSchema, 'Quizzes');

module.exports = Quizzes;