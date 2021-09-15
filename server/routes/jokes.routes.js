const JokeController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get("/api/jokes/all", JokeController.findAllJokes);
    app.post("/api/jokes/create", JokeController.createJoke);
    app.get("/api/jokes/:_id", JokeController.findSingleJoke);
    app.delete("/api/jokes/:_id/delete", JokeController.deleteSingleJoke);
    app.patch("/api/jokes/:_id/update", JokeController.updateSingleJoke);
    // app.put("/api/jokes/:_id/addToArray", JokeController.addToArray);
}