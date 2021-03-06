//	const register = require('register')

const registeration = function(username) {
	console.log(`user ${username} has been registered`)
}

const login =function(username, password) {
	console.log(`user ${username} is logged in`)
}

module.exports = {
	registeration,
	login
}