require('dotenv').config();
const app = require('express')();

const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

const PORT = process.env.PORT || 7654;

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
