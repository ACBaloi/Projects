//monsters.js

const express = require('express');
const app = express();

const monsters = {
    '1' : {
        name: 'godzilla',
        age: 2500000
    },
    '2' : {
        name: 'manticore',
        age: 21
    }
}

monsterRouter.get('/:id', (req, res, next) => {
    const monster = monsters[req.params.id];
    if (monster) {
        res.send(monster);
        } else {
            res.status(404).send();
        }
})


module.exports = monsterRouter;