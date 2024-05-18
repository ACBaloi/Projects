const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//Basic Routes
app.get('/', (request, response)=>{
    response.send('Home page');
});

//Express error handling middleware
app.use((request, response)=>{
    response.type('text/plain');
    response.status(505);
    response.send('Error page');
});

//Binding to a port
app.listen(PORT, ()=>{
    console.log(`Server listening at port ${PORT}`)
}); 