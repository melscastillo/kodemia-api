const express = require ('express');
const mongoose = require('mongoose');
 //conexión de mongoose
const connect = () =>{
    return mongoose.connect('mongodb://localhost:27017/kodemia', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connect;
