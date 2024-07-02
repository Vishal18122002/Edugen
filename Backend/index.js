const express = require('express');
const cors = require('cors');
const connectDB = require('./services/database'); 
const passport = require('passport');
const sessionConfig = require('./config/session');
const passportConfig = require('./config/passport');
const app = express();
require('dotenv').config();

connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the backend server');
});

try {
  sessionConfig(app);
  passportConfig(passport);
} catch (err) {
  console.error('Error in session or passport configuration:', err.message);
  process.exit(1);
}

app.use('/auth', require('./routes/auth'));
app.use('/signup', require('./routes/signup'));
app.use('/signin', require('./routes/signin'));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});