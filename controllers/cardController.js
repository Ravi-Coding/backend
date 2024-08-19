
const Card = require('../models/cardModel');

exports.createCard = async (req, res) => {
  try {
    const { title, description} = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: 'Title and description are required' });
    }

    const newCard = new Card({ title, description});
    await newCard.save();
    res.status(201).json(newCard);

  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all cards

exports.getAllCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get a specific card by title
exports.getCardByTitle = async (req, res) => {
  try {
    const card = await Card.findOne({ title: req.params.title });

    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }

    res.status(200).json(card);

  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
