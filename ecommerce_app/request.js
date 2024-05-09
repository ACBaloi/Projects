/*Consume Remote API Data From Within a Node.js Application 
To avoid building a remote web service, we're going to make use of a 
very popular and easy to use web service offered by httpbin.org*/

//Issue a GET request and determine the IP addredd of the request
const { response } = require("express");
var Request = require("request");

Request.get("http://httpbin.org/ip", (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.dir(JSON.parse(body));
});

Request.post({
    "headers": { "content-type": "application/json"},
    "url": "http://httpbin.org/post",
    "body": JSON.stringify({
        "firstname": "Ana",
        "lastname": "Baloi"
    })
}, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.dir(JSON.parse(body));
});
