const http = require('http')

const server = http.createServer((req,res)=> {

	if(req.url ==='/'){
		res.write('helloworld')
		res.end()
	}

	if(req.url === '/api/courses'){
		res.write( JSON.stringify([1,                          4,  2,   3]) )
		res.end()
	}
	// console.log('New connection')
})

//Port = 3000
server.listen(3000)
console.log('listening on port')