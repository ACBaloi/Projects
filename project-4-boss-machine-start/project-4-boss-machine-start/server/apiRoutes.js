const express = require('express');
const apiRouter = require('./server/api');
const { updateInstanceInDatabase, getFromDatabaseById, addToDatabase, getAllFromDatabase } = require('./db');

let minions = [];

//Get an array of all minions
apiRouter.get('/api/minions', (req, res, next) => {
  res.send(getAllFromDatabase(minions));
});

//Get a single minion by id
apiRouter.get('/api/minions/:minionId', (req, res, next)=> {
    const minion = getFromDatabaseById(minions, req.params.id);
    if (minion) {
        res.send(minion);
    } else {
        res.status(404).send();
    }
});

//Create a new minion and save it to the database
apiRouter.post('/api/minions', (req, res, next) => {
    const receivedMinion = addToDatabase(minions, req.query);
    if (receivedMinion){
        minions.push(receivedMinion);
        res.status(201).send(receivedMinion);
    } else {
        res.status(400).send();
    }
});

//Update a single minion by id
apiRouter.put('/api/minions/:minionsId', (req, res, next)=>{
    const minionIndex = getIndexById(req.params.id, minions);
    if (minionIndex !== -1) {
        updateInstanceInDatabase(req.params.id, req.query, minions);
        res.send(minions[minionIndex]);
    } else {
        res.status(404).send();
    }
});

//Delete a single minion by id
apiRouter.delete('api/minions/:minionId', (req, res, next) => {
    constIndex = getIndexById(req.params.id, minions);
      if (minionIndex !== -1) {
        minions.splice(animalIndex, 1);
        res.status(204).send();
      } else {
        res.status(404).send();
      }
});
