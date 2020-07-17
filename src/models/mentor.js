const mongoose = require('mongoose');

const mentorSchema = mongoose.Schema({
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
    teaches: {
        type: String,
    }
});

const mentorModel = mongoose.model('mentor', mentorSchema);

module.exports = mentorModel;