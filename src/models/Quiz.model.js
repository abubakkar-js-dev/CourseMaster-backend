
const mongoose = require('mongoose');

function arrayLimit(val) {
    return val.length === 4;
}


const questionSchema = new mongoose.Schema({
        question: {
            type: String,
            required: true,
        },
        options: {
            type: [String],
            validate: [arrayLimit, '{PATH} must have exactly 4 options'],
            required: true,
        },
        correctAnswer: {
            type: Number,
            min: 0,
            max: 3,
            required: true,
        },
        points: {
            type: Number,
            required: true,
        }
    }, { _id: false });

const quizSchema = new mongoose.Schema({
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true,
    },
    moduleId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    questions: [questionSchema],
    totalPoints: {
        type: Number,
        required: true,
    },
    passingScore: {
        type: Number,
        required: true,
    },
    timeLimit: {
        type: Number,
        required: true,
    },
},{timestamps: true});

const Quiz = mongoose.model('Quiz',quizSchema);

module.exports = Quiz;