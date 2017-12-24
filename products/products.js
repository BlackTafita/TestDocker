'use strict';
const express = require('express');
const mongoose = require('mongoose');
const productModel = require('./product');

// App
const app = express();

mongoose.connect('mongodb://db:27017/docker', {useMongoClient: true}, (err, res) => {
    console.log(err);
});

app.get('/', (req, res) => {
    res.send('Run Products container');
});

app.get('/set', (req, res) => {
   productModel.create({
       title: "Test",
       desc: "test"
   }, (err, data) => {
       res.send(data);
   });
});

app.listen(3000);