const express = require ('express'	)

const mongodb = require('mongodb').MongoClient

const bodyparser = require('body-parser')

const server = express()
const Port = 8000

server.use(bodyparser.urlencoded({extended: true}))
require('./app/routes')(server,{})

server.listen(Port,()=>{
	console.log('Welcome to the server', +Port)
})
