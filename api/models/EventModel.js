const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventModelSchema = new Schema({
    title: {type: String, required: true},
    image: {type: String, required: true},
    place: {type: String, required: true},
    number: {type: Number, required: true},
    position: {type: String, required: true},
    description: {type: String, required: true},
    create_date: {type: Date, default: Date.now},
    start_date: {type: Date},
    end_date: {type: Date},
    game: { type: mongoose.Schema.Types.ObjectId, ref: 'Game', index: true }
});

const EventModel = mongoose.model('EventModel', eventModelSchema);

module.exports = EventModel;