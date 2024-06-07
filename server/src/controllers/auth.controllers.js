const { hash, compare } = require("bcrypt");
 // Import the collection from index.js

// Now you can use the `collection` in your code
const User = require('../model/user.model');
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY, JWT_OPTIONS } = require("../lib/constants");
const signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      const err = new Error("Email and password are required!");
      err.statusCode = 400;
      throw err;
    }

    // Check if the user with the given email already exists in the database
    const userExists = await User.findOne({ email });
    if (userExists) {
      const err = new Error("User with the given email already exists!");
      err.statusCode = 400;
      throw err;
    }

    // Create a new user document using the User model
    const hashedPassword = await hash(password, 10);
    const token = jwt.sign({ email }, JWT_SECRET_KEY, JWT_OPTIONS);
    const newUser = new User({ email, password: hashedPassword,userToken:token });

    // Save the new user document to the database
    await newUser.save();

    // Generate JWT token

    // Respond with success message or user data
    const responseData = { email, token };
    res.customJson(responseData, "User created successfully!", 200);
  } catch (error) {
    next(error);
  }
};


const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      const err = new Error("Email and password are required!");
      err.statusCode = 400;
      throw err;
    }

    // Find user with the given email in the database
    const user = await User.findOne({ email });
    if (!user) {
      const err = new Error("User with the given email does not exist!");
      err.statusCode = 400;
      throw err;
    }

    // Compare passwords
    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) {
      const err = new Error("Password is incorrect!");
      err.statusCode = 401;
      throw err;
    }

    // Generate JWT token
    const token = jwt.sign({ email }, JWT_SECRET_KEY, JWT_OPTIONS);

    // Respond with success message or user data
    const responseData = { email: user.email, token };
    res.customJson(responseData, "User Logged In Successfully", 200);
  } catch (error) {
    next(error);
  }
};


module.exports = { signup, login };
