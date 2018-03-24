const EventModel = require('../models/EventModel');

const config = require('../config/db');

const getAllEvents = function(req, res){
    EventModel.find({}, function(err, events){
        if(err){
            res.json({success: false, message: 'Lỗi: ' + err});
        }else{
            if(!events){
                res.json({success: false, message: 'Rỗng'});
            }else{
                var count = 0;
                count = events.length;
                res.json({success: true, countevents: count, listEvents: events});
            }
        }
    });
};
const getTop6Events = function(req, res){
    EventModel.find({}).sort({create_date: -1}).limit(6).exec(function(err, events){
        if(err){
            res.json({success: false, message: 'Lỗi: ' + err});
        }else{
            if(!events){
                res.json({success: false, message: 'Rỗng'});
            }else{
                var count = 0;
                count = events.length;
                res.json({success: true, countevents: count, listEvents: events});
            }
        }
    });
};

const getSingleEvent = function(req, res){
    if (!req.params.id) {
        res.json({ success: false, message: 'No news ID was provided.' });
    } else {
        EventModel.findOne({ _id: req.params.id }, (err, event) => {
            if (err) {
                res.json({ success: false, message: 'Not a valid event id' }); // Return error message
            } else {
                if (!event) {
                    res.json({ success: false, message: 'event not found.' });
                } else {
                    res.json({ success: true, event: event });
                }
            }
        });
    }
}

module.exports = {
    getAllEvents,
    getTop6Events,
    getSingleEvent
}