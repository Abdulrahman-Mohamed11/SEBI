const express = require('express');
const router = express.Router();
const { createIssue, getIssues } = require('../controllers/issueController');

// Issue endpoints
router.post('/', createIssue);
router.get('/', getIssues);

module.exports = router;