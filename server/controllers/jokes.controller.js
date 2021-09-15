const Joke = require('../models/jokes.model')

module.exports.findAllJokes = (req,res) => {
    console.log("findAll being run")
    Joke.find()
        .then(allJokes => res.json({results: allJokes}))
        .catch(err => res.json({message: "Find all failed", err}))
}

module.exports.findSingleJoke = (req,res) => {
    console.log("Find one being run");
    Joke.findOne({_id: req.params._id})
    .then(singleJoke => res.json({results: singleJoke}))
    .catch(err => res.json({message: "Find one failed", err}))
}

module.exports.createJoke = (req, res) => {
    console.log("Create being run");
    Joke.create(req.body)
        .then(newJoke => res.json({results: newJoke}))
        .catch(err => res.json({message: "Create failed", err}))
}

module.exports.updateSingleJoke = (req,res) => {
    console.log("Updating Joke")
    // can use .updateOne here and remove the comma stuff
    Joke.findOneAndUpdate({_id: req.params._id} , req.body, {new: true, runValidators: true})
        .then(singleJoke => res.json({results: singleJoke}))
        .catch(err => res.json({message: "Update one failed", err}))
}

module.exports.deleteSingleJoke = (req,res) => {
    console.log("Delete one being run")
    Joke.deleteOne({_id: req.params._id})
        .then(results => res.json({results: results}))
        .catch(err => res.json({message: "Delete one failed", err}))
}