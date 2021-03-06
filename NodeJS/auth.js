// // const req1 = require('./app')
// // // console.log(req1)
// // req1.registeration('priya')
// // req1.login('priyanka','Sharma')

// const path = require('path')

// console.log('Folder name',path.dirname(__filename))


// console.log('File name', path.basename(__filename))


// console.log('Parse : ', path.parse(__filename))

// console.log('ext name :', path.extname(__filename))

// console.log('join', path.join(__dirname, 'order', 'auth.js'))

const fs = require('fs')
const os = require('os')
//const { dirname } = require('path')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'test','order.js'),(err) => {

// 	if(err){
// 		console.log('Somehing went wrong')
// 	}
// 	else{
// 		console.log('File created')
// 	}
// fs.writeFile(path.join('test','order1.js'),
// 	'Hello World.',(err)=>{
// 		if(err){
// 			throw err
// 		}	
// 	})
// 		fs.appendFile(path.join('test','order1.js'),
// 		'Hellow',(err)=>{
// 			if(err){
// 				throw err
// 			}
// 			console.log('File created')				
	
// 	})

// 
// console.log('os type :', os.type())
// console.log('os platform :', os.platform())
// console.log('cpu architecture :', os.arch())
// console.log('cpu details :', os.cpus())
// console.log('Total memory :', os.totalmem())
// console.log('uptime :', os.uptime())

const Emitter = require('events')

class Auth extends Emitter{
	register(username)
	{
		console.log('Registered Successfully')
		this.emit('registered', username)
	}
}	
	const auth = new Auth()
	auth.on('registered',(data)=>{
		console.log(`sending email to ${data}` )
	})	

	auth.on('registered',(data)=>{
		console.log(`sending welcome email to ${data}`)
	})
	auth.register('priya')

