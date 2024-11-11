const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    number: Number,
    category: String,
    question: String,
    correctAnswers: [String],
    options: [String],
});

const QuizSchema = new mongoose.Schema({
    id: Number,
    title: String,
    questionCount: Number,
    description: String,
    questions: [QuestionSchema],
});

const Quiz = mongoose.model('Quiz', QuizSchema);

module.exports = Quiz;