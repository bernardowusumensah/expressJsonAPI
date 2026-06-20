require('dotenv').config();
const express = require('express');
const cors = require('cors'); // 1. Imported cors package
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors({ origin: '*' })); // 2. Enabled CORS for all origins
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Pug setup
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("📦 MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.get('/', (req, res) => {
  res.redirect('/admin');
});

app.get('/admin', (req, res) => {
  res.render('admin');
});

const adminRoutes = require('./routes/admin');
const apiRoutes = require('./routes/api');
app.use('/admin', adminRoutes);
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});