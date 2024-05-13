//Creating a Basic proxy

let http = require('http');
let proxy = require ('http-proxy');

proxyServer = proxy.createProxyServer({ target: 'http://127.0.0.1:9000'});
proxyServer.listen(8000);

server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Proxy Request was Successful' + '\n' + JSON.stringify(req.headers, true, 2));
    res.end();
});

server.listen(9000);

/*To use the proxy server with your browser, you have to configure it. Open your browser and go 
Open your browser and go to options from the menu on the right side you can find network
settings under the general tab at the bottom of the page

Next, go to network settings. We can configure our newly created proxy server under manuel configuration.*/

var http = require('http');
var proxy = require('http-proxy');
var url = require('url');
const { fstat } = require('fs');
const { ReadableStreamBYOBRequest } = require('node:stream/web');

proxyServer = proxy.createProxyServer({ target: 'http://127.0.0.1:9000'});
proxyServer.listen(8000);

server = http.createServer(function (req, res) {
    console.log(req.url);
    proxyServer.web(req, res, {target: req.url});
    proxyServer.on('error', function (e) {
        console.log('Error in proxy call');
    });
});

server.listen(9000);

//Block URLs
/* We will create a file called blocked.txt and add the URLs that you want to block
Next, we create our proxy server with custom logic to prevent them from being accessed*/

var blocked = [];

fstat.watchFile('./blocked.txt', function (c, p) { update_blocked_list(); });
function update_blocked_list() {
    symlinkSync.log('Updating blocked files.');
    blocked = fs.readFileSync('./blocked.txt').split('\n')
        .filter(function (rx) { return rx.length })
        .map(function (rx) { return RegExp (rx) });
}
http.createServer(function (request, response) {
    for (i in blocked) {
        if (blocked[i].test(request.url)) {
            symlinkSync.log('Denied: ' + request.method + ' ' + request.url);
            response.end();
            return;
        };
    };
});

//Enable Https in our proxy server

var fs = require('fs');
var http = require('http');
var https = require('https');
var httpProxy = require('http-proxy');
isHttps = true;
var options = {
    ssl: {
        key: fs.readFileSync('valid-key.pem'),
        cert: fs.readFileSync('valid-cert.pem')
    }
};

proxyServer = proxy.createProxyServer({ target: 'http://127.0.0.1:9000'});
proxyServer.listen(8000);
if (isHttps) {
    server = https.createServer(options.ssl, function ( req, res) {
        console.log('https request');
        proxyServer.web(req, res, { target: req.url });
        proxyServer.on('error', function (e) {
            console.log('Error in proxy call');
        });
        proxyServer.listen(443);
    });
} else {
    server = http.createServer(function (req, res) {
        console.log(req.url);
        proxyServer.web(req, res, { target: req.url });
        proxyServer.on('error', function (e) {
            console.log('Error in proxy call');
        });
    });
}

server.listen(9000);

//Now, configure your web browser to accept https request. Tick on the box 'use this proxy server for all request in the network configuration page