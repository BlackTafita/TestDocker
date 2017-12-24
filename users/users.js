const express = require('express');
const mongoose = require('mongoose');
const userModel = require('./user');

const app = express();

mongoose.connect('mongodb://db:27017/docker', {useMongoClient: true}, (err, res) => {
    console.log(err);
});

app.get('/', (req, res) => {
    res.send('Run Users Container');
});

app.get('/set', (req, res) => {
    userModel.create({
        email: 'test',
        pass: 'test'
    }, (err, data) => {
        res.send(data);
    });
});

app.listen(4000);
