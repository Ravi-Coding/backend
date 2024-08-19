
const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController');

// Create a new card
router.post('/cards', cardController.createCard);

// Get all cards
router.get('/cards', cardController.getAllCards);

// Get a specific card by title
router.get('/cards/:title', cardController.getCardByTitle);

module.exports = router;
