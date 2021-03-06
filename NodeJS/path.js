// // const path = require('path')
// // const a = path.parse(__dirname)
// // console.log(a)


// module.exports.log = log



const Logger1 = require('./event')
// const emitter = new EventEmitter()
const logger = new Logger1()

logger.on('messageLogged', (arg) => {
	console.log('event logged', arg)
})
logger.log('message')





