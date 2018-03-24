const express = require('express');

const config = require('../config/db');
const router = express.Router();

const EventController = require('../controllers/EventController');


router.route('/getall')
.get(EventController.getAllEvents);

router.route('/gettop6')
.get(EventController.getTop6Events);

router.route('/news/:id')
.get(EventController.getSingleEvent);

module.exports = router;