import * as mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
  name: String,
  prizeamount: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true }
});

const Game = mongoose.model('Game', gameSchema);

export default Game;
