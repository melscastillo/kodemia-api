
const express = require ('express');
const kodersRoutes = require('./routes/koders');
const mentorsRoutes= require('./routes/mentors');
const app = express ();


app.use(express.json ());
app.get('/',  (request, response) => {
    response.json ({
        success: true,
        message: "Kodemia APIv8",
    })
})

app.use('/koders', kodersRoutes);
app.use('/mentors', mentorsRoutes);

module.exports = app;