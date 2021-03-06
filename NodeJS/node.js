const http = require('http')

const app = http.createServer((req, res )=> {
	//console.log()
	res.end('<h1>hellow</h1>')
})

const Port = process.env.Port || 3000

app.listen(Port, ()=> {
	console.log(`listening on port ${Port}`)
})
