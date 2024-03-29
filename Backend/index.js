const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');


const app = express();

app.use(cors());

// MongoDB bağlantısını yap
mongoose.connect('mongodb+srv://testpassifichouse.mjenzx8.mongodb.net/phdb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB bağlantısı başarılı'))
  .catch(err => console.error('MongoDB bağlantı hatası:', err));

// Middleware
app.use(express.json());

// Routes
app.use(authRoutes);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
