const http = require('http')

const app = http.createServer(req,res,() =>{
	//console.log()
})

const Port = process.env.Port ||3000

app.listen(Port,()=>{
	console.log(`listening on port ${Port}`)
})
