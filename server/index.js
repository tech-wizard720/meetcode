const express = require("express");
const app = express();
const cors = require("cors");
const authRouter = require("./src/routes/auth.routes");
const submissionRouter = require("./src/routes/submission.routes");
const questionRouter = require("./src/routes/question.routes");
const ConnectDb = require('./src/database/db');
const loggingMiddleware = require("./src/middlewares/logging.middleware.js");
const errorHandler = require("./src/middlewares/errorHandler.middleware");
const responseHandler = require("./src/middlewares/responseHandler.middleware");
const { RABBIT_MQ_QUEUE } = require("./src/lib/constants");
const {
  receiveMessageFromQueue,
  handleSubmissionFromQueue,
} = require("./src/lib/utils");
const authMiddleware = require("./src/middlewares/auth.middleware");
const port = 3001;
// const { MongoClient } = require("mongodb");

// // Connection URI. Update this URI with your MongoDB connection string.
// const uri =
//   "mongodb+srv://anupam:1234567890@cluster0.ogyqwbx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// async function connectToMongoDB() {
//   // Create a new MongoClient
//   const client = new (uri);
  
//   let collection;
//   let collection2;

//   try {
//     // Connect to the MongoDB server
//     await client.connect();

//     console.log("Connected to MongoDB");

//     // Access a database and collection through the `client` object
//     const database = client.db("test");
//     collection = database.collection("sample");
//     collection2 = database.collection("problems");
//     // Export collections once the connection is established
    
//     // Insert a document
    
//     // Query documents
//     return { collection, collection2 };
//   } finally {
//     // Close the connection
//     ///await client.close();
//     //console.log("Disconnected from MongoDB");
//   }
// }
// module.exports = connectToMongoDB;

// Call the connectToMongoDB function
ConnectDb();
app.use(cors());
app.use(express.json());
app.use(loggingMiddleware);
app.use(responseHandler);

app.use("/", authRouter);
app.use("/submissions", authMiddleware, submissionRouter);
app.use("/questions", questionRouter);

app.use(errorHandler);
receiveMessageFromQueue(RABBIT_MQ_QUEUE, handleSubmissionFromQueue);

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
