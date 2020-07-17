
const mongoose = require('mongoose');

//Define models
const koderSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlenght: 100,
        minlenght: 2,
    },
    gender: {
        type: String,
        required: true,
        enum: [ //listado de valores
            'male',
            'female',
            'nonbinary',
        ]
    },
    hobbies: {
        type: String,
    }
});

const koderModel = mongoose.model('koder', koderSchema);

module.exports = koderModel;
