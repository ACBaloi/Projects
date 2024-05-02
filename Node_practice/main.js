const express = require('express');
const app= express();

// import and mount the monstersRouter
const monsterRouter = require('./monster');
app.use('/monsters', monsterRouter);

const logging = (req, res, next) => {
    console.log(req);
    next();
};

app.use(logging);