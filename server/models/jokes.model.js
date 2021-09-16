const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {type: String, required: [true, "Set up is required."], minlength: [10, "Setup must be at least 10 characters."]},
    punchline: {type: String, required: [true, "Punchline is required."], minlength: [3, "Punchline must be at least 3 characters."]}
}, {timestamps: true})

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;