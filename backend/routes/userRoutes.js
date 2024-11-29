const express = require('express');
const { protect, restrictTo } = require('../middelwares/authMiddleware');
const router = express.Router();

router.get('/admin', protect, restrictTo('Admin'), (req, res) => {
  res.status(200).json({ message: 'Welcome Admin' });
});

router.get('/moderator', protect, restrictTo('Moderator'), (req, res) => {
  res.status(200).json({ message: 'Welcome Moderator' });
});

router.get('/user', protect, restrictTo('User'), (req, res) => {
  res.status(200).json({ message: 'Welcome User' });
});

module.exports = router;
