import * as mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  startdate: String,
  enddate: String,
  location: String,
  peopleamount: String,
  game: { type: mongoose.Schema.Types.ObjectId, ref: 'Game', index: true }
});

const Event = mongoose.model('Event', eventSchema);

export default Event;
