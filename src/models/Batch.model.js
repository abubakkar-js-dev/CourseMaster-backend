
const mongoose = require('mongoose');

const batchSchema = new mongoose.Schema({
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true,
    },
    batchName: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    maxStudents: {
        type: Number,
        required: true,
    },
    currentEnrollment: {
        type: Number,
        default: 0,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
},{timestamps: true});

const Batch = mongoose.model('Batch',batchSchema);

module.exports = Batch;