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
    theme: String,
    questionCount: Number,
    description: String,
    extraDescription: String,
    questions: [QuestionSchema],
});


const UserQuestionSchema = new mongoose.Schema({
    number: Number,
    category: String,
    question: String,
    correctAnswers: [String],
    options: [String],
});

const UserQuizSchema = new mongoose.Schema({
    id: Number,
    title: String,
    theme: String,
    questionCount: Number,
    description: String,
    extraDescription: String,
    questions: [UserQuestionSchema],
    username: String,
});

const Quizzes = mongoose.model('Quizzes', QuizSchema, 'Quizzes');
const UserQuizzes = mongoose.model('UserQuizzes', UserQuizSchema, 'UserQuizzes');

module.exports = Quizzes;
module.exports = UserQuizzes;