const express = require('express');

const config = require('../config/db');
const router = express.Router();

const GameController = require('../controllers/GameController');


router.route('/getall')
.get(GameController.getAllGames);

router.route('/news/:id')
.get(GameController.getSingleGame);

module.exports = router;