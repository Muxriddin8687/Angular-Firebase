const express = require('express');

const app = express();

app.use( (req, res, next) => {
    console.log("This first midleware");
    next();
});

app.use( (req, res, next) => {
    res.send("Response send");
});

module.exports = app;