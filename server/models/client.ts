import * as mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
    fullname: String,
    email: { type: String, unique: true, lowercase: true, trim: true },
    phonenumber: String,
    job: String,
    skill: String,
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', index: true }
});

const Client = mongoose.model('Client', clientSchema);

export default Client;
