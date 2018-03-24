const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameModelSchema = new Schema({
  title: {type: String, required: true},
  prizeamount: {type: String, required: true},
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true }
});

const GameModel = mongoose.model('GameModel', gameModelSchema);

module.exports = GameModel;