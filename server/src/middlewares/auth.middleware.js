const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../lib/constants");
const { USERS } = require("../database/data");
const User = require('../model/user.model');
const authMiddleware = async(req, _res, next) => {
  try {
    // Get the token from the request headers, query parameter, or request body
    const token = req.headers.authorization;
    // Check if token exists
    if (!token) {
      const err = new Error("Authentication token not provided");
      err.statusCode = 401;
      throw err;
    }
    // Verify the token
    const decodedToken = jwt.verify(token, JWT_SECRET_KEY);
    // Fetch the user from the database using the decoded token's email
    const user = await User.findOne({ email: decodedToken.email });
    if (!user) {
      const err = new Error('User not found');
      err.statusCode = 404;
      throw err;
    }

    // Attach the user object to the request for further use
    req.user = user;
    next();
  } catch (err) {
    err.statusCode = 401;
    console.log("hello");
    next(err);
  }
};

module.exports = authMiddleware;
