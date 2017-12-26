import Game from '../models/game';
import User from '../models/user';
import BaseCtrl from './base';

export default class GameCtrl extends BaseCtrl {
  model = Game;
    // Override get all
  getAll = (req, res) => {
    Game.find().populate('user').exec(function (err, docs) {
      if (err) { return console.error(err); }
      res.status(200).json(docs);
    });
  }

  // Override insert
  insert = (req, res) => {
    User.findOne({ _id: req.body.user_id }, (err, data) => {
      if (err) { return console.error(err); }
      const game = new Game(req.body)
      game.user = data;
      game.save((err, item) => {
        if (err && err.code === 11000) {
          res.sendStatus(400);
        }
        if (err) {
          return console.error(err);
        }
        res.status(200).json(item);
      });
    });
  }
}
