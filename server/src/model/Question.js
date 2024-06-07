const mongoose = require('mongoose');

const TestCaseSchema = new mongoose.Schema({
  input: { type: String, required: true },
  output: { type: String, required: true }
});

const QuestionSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: { type: String, required: true },
  acceptance: { type: String, required: true },
  testCases: [TestCaseSchema]
});

module.exports = mongoose.model('Question', QuestionSchema);
