const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
};

// Register a new user
exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const user = await User.create({ name, email, password, role });
    const token = generateToken(user);
    res.status(201).json({ token, user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Login an existing user
exports.login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Find the user by email
      const user = await User.findOne({ email });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Generate the JWT
      const token = generateToken(user);
  
      // Exclude sensitive information
      const { _id, name, role } = user;
  
      // Send the response
      res.status(200).json({
        token,
        user: { _id, name, email, role },
      });
    } catch (error) {
      // Handle server errors
      console.error('Error in login:', error.message);
      res.status(500).json({ message: 'Server error' });
    }
  };

// Logout (client-side should clear the token)
exports.logout = (req, res) => {
  res.status(200).json({ message: 'Logged out successfully' });
};
