const mongoose = require("mongoose")

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Joke Setup is required!"],
        minlength: [10, "Joke Setup must be at least 10 characters long!"]
    },
    punchline: {
        type: String,
        required: [true, "Joke punchline is required!"],
        minlength: [3, "Joke punchline must be atleast 3 characters!"]
    }
}, {timestamps : true})

module.exports.Joke = mongoose.model('Joke', JokeSchema)