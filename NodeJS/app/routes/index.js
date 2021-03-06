// // const noteroute = require('./path')
// // // module.exports = function(app,db) {
// // // 	noteroute(app,db)
// // // }
// // noteroute.log('hello')

//  function log(message){
// 	console.log(message)
// }

console.log('Before')
getUser(1,function(user1){
console.log('user', user1)
})
console.log('after')

function getUser(id,callback1){
	setTimeout(() => { 
console.log('reading a function')
callback1({id: id, username= 'priyana'})
},2000)
}