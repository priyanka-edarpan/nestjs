const chalk = require('chalk')
const { describe, string } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')

//console.log(chalk.bgBlackBright.green("Success"))

//const command = process.argv[2]
// const command = yargs.argv

// if(command === 'add'){
// 	console.log('adding message')
// }
// else if(command === 'remove'){
// 	console.log('Remove message')
// }
yargs.command({
command: 'Add',
describe: 'Adding command',
builder:{
	title:{
		describe:'adding a title',
		demandOption:false,
		type:string	
	},
	body:{
		describe:'adding a body',
		demandOption: false,
		type:string
	}
},
handler: function(argv){
	//console.log('adding the body: '+ argv.body , 'title:' +argv.title)
	notes.addNotes(argv.title, argv.body)
}
})
 yargs.command({
 command: 'Remove',
 describe: 'removing command',
	 title: {
		 describe: 'removing a title',
		 demandOption: false,
		 type: string
	 },
 handler:function(argv){
	//  console.log('removing the note')
	notes.removeNotes(argv.title)
 }
})

yargs.command({
	command: 'Read',
	describe: 'reading command',
	title: {
		describe: 'removing a title',
		demandOption: false,
		type: string
	},
	handler: function (argv) {
		notes.readNotes(argv.title)
	}
})

yargs.command({
	command: 'List',
	describe: 'listing command',
	handler: function () {
		console.log('listing the note')
	},
	handler:(argv)=>{
		notes.listNotes()
	}
})
 yargs.parse()




//console.log(yargs.argv)