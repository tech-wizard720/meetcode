const mongoose = require('mongoose');

// Assuming the username is 'malhotraaryan310' and the password is '@t6_G7Mhq.3uhb'
// Encoded password: '%40t6_G7Mhq.3uhb' (encoded '@' as '%40')

const ConnectDb = async () => {
    try {
        await mongoose.connect("mongodb+srv://anupam:1234567890@cluster0.ogyqwbx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Atlas Connected');
    } catch (error) {
        console.error(`Error is ${error}`);
        process.exit(1);
    }
};

module.exports = ConnectDb;

//