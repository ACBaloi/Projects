const http = require('http');
let {requestListener} = require('./callbackFile.js');
const PORT = process.env.PORT || 4001;
const hostname = '127.0.0.1';

const server = http.createServer(requestListener);

server.listen(PORT, hostname, function() {
    console.log(`Server running at http://${hostname}:${PORT}`);
});
