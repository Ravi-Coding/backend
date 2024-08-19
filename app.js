
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cardRoutes = require('./routes/cardRoutes');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
// , {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

// Use routes
app.use('/', cardRoutes);

app.get('/ping', (req, res) => {
  res.send('Server is running');
});

module.exports = app;
