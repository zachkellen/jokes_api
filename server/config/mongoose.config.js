const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jokes', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() =>console.log('Connection made'))
    .catch(err=>console.log('Failed connection'))