const express = require('express')
const server = express()

server.get('/', function(req, res){
    return res.send('Hello, Mundo!')
})

server.listen(8000, function(){
    console.log('Server is running...')
})