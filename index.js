'use strict';
var express = require('express');

var server = express();

server.get('/', (req, res)=>{
    res.send('Hello world!!')
});

server.listen(9000, ()=>{
    console.log("Server up");
});