// src/controllers/issueController.js

// Create a new issue
const createIssue = (req, res) => {
  res.json({ message: 'Create issue endpoint works!' });
};

// Get all issues
const getIssues = (req, res) => {
  res.json({ message: 'Get issues endpoint works!' });
};

module.exports = { createIssue, getIssues };