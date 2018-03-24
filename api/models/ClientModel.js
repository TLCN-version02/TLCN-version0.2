const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientModelSchema = new Schema({
    fullname: String,
    email: { type: String, unique: true, lowercase: true, trim: true },
    phonenumber: String,
    job: String,
    skill: String,
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', index: true }
});

const ClientModel = mongoose.model('ClientModel', clientModelSchema);

module.exports = ClientModel;
