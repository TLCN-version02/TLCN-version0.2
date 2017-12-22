import * as express from 'express';

//Event and Game and Client

import User from './models/user';
import Event from './models/event';
import Game  from './models/game';
import Client from './models/client';

import UserCtrl from './controllers/user';
import ClientCtrl from './controllers/client';
import EventCtrl from './controllers/event';
import GameCtrl from './controllers/game';

export default function setRoutes(app) {

  const router = express.Router();

  const userCtrl = new UserCtrl();
  const eventCtrl = new EventCtrl();
  const gameCtrl = new GameCtrl();
  const clientCtrl = new ClientCtrl();

  // Users
  router.route('/login').post(userCtrl.login);
  router.route('/users').get(userCtrl.getAll);
  router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  router.route('/user/:id').delete(userCtrl.delete);
  
  //Event
  router.route('/events').get(eventCtrl.getAll);
  router.route('/events/count').get(eventCtrl.count);
  router.route('/event').post(eventCtrl.insert);
  router.route('/event/:id').get(eventCtrl.get);
  router.route('/event/:id').put(eventCtrl.update);
  router.route('/event/:id').delete(eventCtrl.delete);

  //Game
  router.route('/games').get(gameCtrl.getAll);
  router.route('/games/count').get(gameCtrl.count);
  router.route('/game').post(gameCtrl.insert);
  router.route('/game/:id').get(gameCtrl.get);
  router.route('/game/:id').put(gameCtrl.update);
  router.route('/game/:id').delete(gameCtrl.delete);

  //Client
  router.route('/clients').get(clientCtrl.getAll);
  router.route('/clients/count').get(clientCtrl.count);
  router.route('/client').post(clientCtrl.insert);
  router.route('/client/:id').get(clientCtrl.get);
  router.route('/client/:id').put(clientCtrl.update);
  router.route('/client/:id').delete(clientCtrl.delete);
  
  app.use('/api', router);

}
