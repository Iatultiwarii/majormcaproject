// auth.js

const express = require('express');
const router = express.Router();

// In-memory user data
let users = [];

// Route for user registration
router.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  console.log('Received registration request:', { name, email }); // Log the registration request

  // Check if the user already exists
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    console.log('User already exists'); // Log that user already exists
    return res.status(400).json({ message: 'User already exists' });
  }

  // Create a new user object
  const newUser = { name, email, password };

  // Add the new user to the in-memory array
  users.push(newUser);

  console.log('User registered successfully:', newUser); // Log the new user
  res.status(201).json({ message: 'User registered successfully' });
});

module.exports = router;
