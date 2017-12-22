import * as mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
  name: String,
  prizeamount: String,
});

const Game = mongoose.model('Game', gameSchema);

export default Game;
