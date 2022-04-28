const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schema = new Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    content: { type: String, required: true, index: true },
    dateCreated: { type: Date, required: true, default: Date.now },
    tags: { type: String, required: false, },
})
module.exports = {
    schema,
    model: mongoose.model('Post', schema),
}