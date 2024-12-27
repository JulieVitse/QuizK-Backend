const mongoose = require('mongoose');

const UserQuestionSchema = new mongoose.Schema({
    number: Number,
    category: String,
    question: String,
    correctAnswers: [String],
    options: [String],
});

const UserQuizSchema = new mongoose.Schema({
    id: Number,
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    theme: String,
    questionCount: Number,
    description: String,
    extraDescription: String,
    questions: [UserQuestionSchema],
    username: String,
});

const UserQuizzes = mongoose.model('UserQuizzes', UserQuizSchema, 'UserQuizzes');

module.exports = UserQuizzes;
