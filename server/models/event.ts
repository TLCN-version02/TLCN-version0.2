import * as mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  startdate: Date,
  enddate: Date,
  location: String,
  peopleamount: String,
  guest: String,
  game: { type: mongoose.Schema.Types.ObjectId, ref: 'Game', index: true }
});

const Event = mongoose.model('Event', eventSchema);

export default Event;
