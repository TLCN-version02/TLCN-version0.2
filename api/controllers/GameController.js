const GameModel = require('../models/GameModel');

const config = require('../config/db');

const getAllGames = function(req, res){
    GameModel.find({}, function(err, games){
        if(err){
            res.json({success: false, message: 'Lỗi: ' + err});
        }else{
            if(!games){
                res.json({success: false, message: 'Rỗng'});
            }else{
                var count = 0;
                count = games.length;
                res.json({success: true, countgames: count, listGames: games});
            }
        }
    });
};

const getSingleGame = function(req, res){
    if (!req.params.id) {
        res.json({ success: false, message: 'No news ID was provided.' });
    } else {
        GameModel.findOne({ _id: req.params.id }, (err, game) => {
            if (err) {
                res.json({ success: false, message: 'Not a valid game id' }); // Return error message
            } else {
                if (!game) {
                    res.json({ success: false, message: 'game not found.' });
                } else {
                    res.json({ success: true, game: game });
                }
            }
        });
    }
}

module.exports = {
    getAllGames,
    getSingleGame
}