require('dotenv').config(); // Load environment variables
const mongoose = require('mongoose'); // MongoDB ORM
const MONGO_URI = process.env.MONGO_URI; // MongoDB connection string

// Connect to MongoDB
const connectDB = async () => {
    try {
        const conn = (await mongoose.connect(MONGO_URI, {}));
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;