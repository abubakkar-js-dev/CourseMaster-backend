
const mongoose = require('mongoose');

const quizAttemptSchema = new mongoose.Schema({
    quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz',
        required: true,
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true,
    },
    answers: [{
        questionId: mongoose.Schema.Types.ObjectId,
        selectedAnswer: Number,
    }],
    score: {
        type: Number,
    },
    percentage: {
        type: Number,
    },
    passed: {
        type: Boolean,
        default: false,
    },
    startedAt: {
        type: Date,
        default: Date.now,
    },
    submittedAt: {
        type: Date,
        default: Date.now,
    },
    attemptNumber: {
        type: Number,
        required: true,
    }
},{ strict: false , timestamps: true});

// indexes
quizAttemptSchema.index({ quiz: 1, student: 1, attemptNumber: 1 }, { unique: true });

const QuizAttempt = mongoose.model('QuizAttempt',quizAttemptSchema);