//Setting Up The DataBase
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://SaumitraKumar:<powerdsl>@cluster0-holvf.mongodb.net/<mongodb://localhost:27017/Mydatabase>?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection;
db.on('open', () => {
    console.log('The Database connection has been established')
})
db.on('error', (err) => console.error(err))

//Defining Our Schema 
var quizSchema = new mongoose.Schema({

    Question: [],
    quest: [{}]
})

//Our Model 
var Model = mongoose.model('Model', quizSchema);
module.exports = Model;