require('dotenv').config();
const express = require('express');

const app = express();

const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

const PORT = process.env.PORT || 7654;

// Conditionally include morgan only in development mode
if (process.env.NODE_ENV === 'development') {
  const morgan = require('morgan');
  app.use(morgan('dev'));
}

connectDB();

app.use(express.json());

app.use('/api/products', productRoutes);

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server listening on http://localhost:${PORT}`);
  }
});
