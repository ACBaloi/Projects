const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

const monsterStoreInventory = { fenriris: 4, banshees: 1, jerseyDevils: 4, krakens: 3 };

app.get('/monsters-inventory/:name', (res, res, next)=> {
    const monsterInventory = monsterStoreInventory[req.params.name];
    if (monsterInventory) {
        res.setEncoding(monsterInventory);
    } else {
        res.statusCode(404).send('Monster not found');       
    }
});