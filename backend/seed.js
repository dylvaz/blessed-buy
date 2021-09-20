require('dotenv').config();
const { connection } = require('mongoose');

const dummyData = require('./data/dummyData');
const connectDB = require('./config/db');
const Product = require('./models/Product');

const seedDB = async () => {
  try {
    await connectDB();
    await Product.deleteMany({});
    await Product.insertMany(dummyData);
    console.log('DB seeded successfully');
    connection.close();
  } catch (err) {
    console.error('DB seeded unsuccessfully');
    console.error(err);
    process.exit(1);
  }
};

seedDB();
