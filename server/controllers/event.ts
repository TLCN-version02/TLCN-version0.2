import Event from '../models/event';
import Game from '../models/game';
import BaseCtrl from './base';

export default class EventCtrl extends BaseCtrl {
  model = Event;

  // Override get all
  // Cách 1:
  // getAll = (req, res) => {
  //   Event.find().populate('game').exec(function (err, docs) {
  //     if (err) { return console.error(err); }
  //     res.status(200).json(docs);
  //   });
  // }
  // Cách 2:
  getAll = (req, res) => {
    Event.find().populate({
        path: 'game',
        model: 'Game',
        populate: {
            path: 'user',
            model: 'User'           
        }
    }).exec(function (err, docs) {
      if (err) { return console.error(err); }
      res.status(200).json(docs);
    });
  }

  // Override insert
  insert = (req, res) => {
    Game.findOne({ _id: req.body.game_id }, (err, data) => {
      if (err) { return console.error(err); }
      const event = new Event(req.body)
      event.game = data;
      event.save((err, item) => {
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
