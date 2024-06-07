const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define the schema for submissions
const SubmissionSchema = new mongoose.Schema({
  questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
  code: { type: String, required: true },
  result: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now }
});

// Define the user schema
const UserSchema = new mongoose.Schema(
  {
    userToken: { type: String, required: true, trim: true, unique: true },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: { type: Boolean, default: false },
    submissions: [SubmissionSchema]
  },
  { timestamps: true }
);

// Hash the password before saving the user
UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

// Define methods for the user schema
UserSchema.methods = {
  authenticate: async function (password) {
    return await bcrypt.compare(password, this.password);
  },
};

module.exports = mongoose.model('User', UserSchema);
