const Question = require('../model/Question');

// Fetch all questions
const getQuestionsList = async (_req, res, next) => {
  try {
    const questions = await Question.find();
    res.customJson(questions, "Questions fetched successfully", 200);
  } catch (error) {
    next(error);
  }
};

// Fetch a specific question by ID
const getQuestion = async (req, res, next) => {
  try {
    console.log("found");
    const { id } = req.params;
    const question = await Question.findOne({ id: Number(id) });
    if (!question) {
      const err = new Error("Question not found");
      err.statusCode = 404;
      throw err;
    }
    res.customJson(question, "Question fetched successfully", 200);
  } catch (error) {
    next(error);
  }
};

// Add a new question (admin only)
const addQuestion = async (req, res, next) => {
  try {
    // Admin validation logic (example)
    const user = req.user;
    if (!user || !user.isAdmin) {
      const err = new Error("Unauthorized");
      err.statusCode = 403;
      throw err;
    }

    const { title, description, difficulty, acceptance, testCases } = req.body;
    if (!title || !description || !difficulty || !acceptance || !testCases) {
      const err = new Error("Please provide all the required fields");
      err.statusCode = 400;
      throw err;
    }

    const newQuestion = new Question({
      title,
      description,
      difficulty,
      acceptance,
      testCases
    });

    await newQuestion.save();
    res.customJson(newQuestion, "Question added successfully", 201);
  } catch (error) {
    next(error);
  }
};

module.exports = { getQuestionsList, getQuestion,addQuestion };
