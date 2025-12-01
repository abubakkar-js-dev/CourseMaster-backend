const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema(
  {
    lessonTitle: { type: String, required: true },
    videoUrl: { type: String, required: true },
    duration: { type: Number, required: true },
    order: { type: Number, required: true },
  },
  { _id: false }
);

const moduleSchema = new mongoose.Schema(
  {
    moduleTitle: { type: String, required: true },
    lessons: [lessonSchema],
  },
  { _id: false }
);

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,

    },
    description: {
      type: String,
      required: true,
    },
    instructor: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,

    },
    tags: {
      type: [String],
      required: true,

    },
    price: {
      type: Number,
      required: true,

    },
    thumbnail: {
      type: String,
      default: "",
    },
    syllabus: {
      type: [moduleSchema],
    },
    totalLessons: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
  },
  { timestamps: true }
);

// indexes

courseSchema.index({title: "text", description: "text", tags: "text"});
courseSchema.index({instructor: 1});
courseSchema.index({price: 1, category: 1});



const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
