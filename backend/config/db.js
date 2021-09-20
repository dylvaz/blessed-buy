require('dotenv').config();
const mongoose = require('mongoose');

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connection SUCCESS');
  } catch (err) {
    console.error(err);
    console.error('MongoDB connection FAIL');
    process.exit(1);
  }
};

module.exports = connectDB;
