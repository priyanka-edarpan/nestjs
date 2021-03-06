// const noteroute = require('./path');
// // module.exports = function(app,db) {
// // 	noteroute(app,db)
// // }
// noteroute.log('hello')

// // const noteroute = require('./path')
// // // module.exports = function(app,db) {
// // // 	noteroute(app,db)
// // // }
// // noteroute.log('hello')

//  function log(message){
// 	console.log(message)
// }

console.log('Before')
getUser(1,(user1)=>{
getRepositories(user1.username,(arr)=>{
console.log(arr)
})
})

console.log('after')

function getUser(id) {
	return new Promise((resolve,reject)=>{
	setTimeout(() => {
		console.log('reading a function')
		resolve({ id: id, username: 'priyana' })
	}, 2000)
	})

}

function getRepositories(username){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('reading a function')
			resolve(['repo1', 'repo2', 'repo3'])
		}, 2000)
	})
}

	
	//return([])
	//return[]

//getUser1(id,(callback1)=> {
	
///})
