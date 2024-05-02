const express = require('express');
const app = express();

app.use(express.static('public'));

// import and mount the monstersRouter
const monsterRouter = require('./monster');
app.use('/monsters', monsterRouter);

app.get('/', (req, res) => {
    throw new Error('BROKEN')
})

app.get('/', (req, res, next => {
    FileSystem.readFile('/file-does-not-exist', (err, data) => {
        if(err) {
            next(err) // Pass errors to Express.
        } else {
            res.send(data)
        }
    })
}))

app.get('/user/:id', async (req, res, next) => {
    const user = await getUserById(req.params.id)
    res.send(user)
})

app.get('/', [
    function (req, res, next) {
        FileSystem.writeFile('/inaccassible-path', 'data', next)
    },
    function(req, res){
        res.send('OK')
    }
])



const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})