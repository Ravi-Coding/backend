
const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  id: { 
    type: String, 
    required: true, 
    unique: true,
    default: () => new mongoose.Types.ObjectId().toString()
  },
  title: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
