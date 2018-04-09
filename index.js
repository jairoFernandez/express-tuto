'use strict';
var express = require('express');

var server = express();

server.get('/', (req, res)=>{
    res.send('Hello world!!, realizamos un cambio')
});

server.listen(9000, ()=>{
    console.log("Server up");
});