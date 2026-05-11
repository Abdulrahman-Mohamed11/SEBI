// src/controllers/authController.js

// Register endpoint
const register = (req, res) => {
  // For now, just a test response
  res.json({ message: 'Register endpoint works!' });
};

// Login endpoint
const login = (req, res) => {
  // For now, just a test response
  res.json({ message: 'Login endpoint works!' });
};

module.exports = { register, login };