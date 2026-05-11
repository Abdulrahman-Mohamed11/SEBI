const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

router.post('/register', register); // pass function
router.post('/login', login);       // pass function

module.exports = router;