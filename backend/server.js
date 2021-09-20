require('dotenv').config();
const app = require('express')();

const connectDB = require('./config/db');

const PORT = process.env.PORT || 7654;

connectDB();

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server listening on http://localhost:${PORT}`);
  }
});
