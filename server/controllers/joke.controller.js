const { Joke } = require("../models/joke.model")

module.exports.allJokes = (req, res ) => {
    Joke.find()
        .then(jokes => res.json(jokes)) // successful
        .catch(err => res.json(err)) // unsuccessful
}

// get one 
module.exports.oneJoke = ( req, res ) => {
    const id = req.params.id 
    Joke.findOne({_id: id})
        .then(joke => res.json(joke))
        .catch(err => res.json(err))
}

// create
module.exports.createJoke = ( req, res ) => {
    const newJoke = new Joke(req.body)
        newJoke.save()
            .then(response => res.json(response))
            .catch(err => res.json(err))
}

// update
module.exports.updateJoke = ( req, res ) => {
    const id = req.params.id
    Joke.findOneAndUpdate(
        { _id: id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(response => res.jason(response))
        .catch(err => res.json(err))
}

// delete
module.exports.deleteJoke = ( req, res ) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(response => res.json(response))
        .catch(err => res.json(err))
}
