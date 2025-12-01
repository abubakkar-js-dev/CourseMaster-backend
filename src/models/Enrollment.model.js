
const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
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
    batch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Batch',
    },
    enrolledAt: {
        type: Date,
        default: Date.now,
    },
    progress: {
        completedLessons: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Lesson',
        }],
        percentage: {
            type: Number,
            default: 0,
        },
        lastAccessedLesson: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Lesson',
        },
    },
    status: {
        type: String,
        enum: ['active', 'completed', 'dropped'],
        default: 'active',
    },
    paymentStatus: {
        type: String,
        enum: ['paid', 'pending', 'free'],
        default: 'pending',
    },
},{timestamps: true});

// indexes
enrollmentSchema.index({ student: 1, course: 1 }, { unique: true });

const Enrollment = mongoose.model('Enrollment',enrollmentSchema);

module.exports = Enrollment;