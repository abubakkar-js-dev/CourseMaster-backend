
const mongoose = require('mongoose');

const assignmentSubmissionSchema = new mongoose.Schema({
    assignment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Assignment',
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
    submissionType: {
        type: String,
        enum: ['text', 'link'],
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    submittedAt: {
        type: Date,
        default: Date.now,
    },
    score: {
        type: Number,
    },
    feedback: {
        type: String,
    },
    reviewedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    reviewedAt: {
        type: Date,
    },
    status: {
        type: String,
        enum: ['pending', 'reviewed', 'resubmit'],
        default: 'pending',
    },
},{timestamps: true});

// indexes
assignmentSubmissionSchema.index({ assignment: 1, student: 1 }, { unique: true });


const AssignmentSubmission = mongoose.model('AssignmentSubmission',assignmentSubmissionSchema);

module.exports = AssignmentSubmission;