const chalk = require('chalk')
const fs = require('fs')

const getNotes = function(){
	return 'getNotes'
}

const listNotes = () =>{
	console.log(chalk.red('Your notes'))
	const notes = loadNotes()
	// return notes.filter(note=>{
	// 	console.log(note.title)
	// })

	return notes.forEach(note => {
		console.log(note.title)
	});
}

const readNotes = function(title) {
	const notes = loadNotes()

	const findNotes = notes.find((findN6yytes) => { return findN6yytes.title === title})		
	
	debugger
	
	if(findNotes){
		console.log(findNotes.title)
		console.log(findNotes.body)
	}
	else{
		console.log(chalk.red('No note found'))
	}

	//saveNotes(duplicateNotes)

}

const removeNotes = function(title){
	const notes = loadNotes()


	// console.log(notes)
	// return;

	// notes.removeNotes({
	// 	title: title
	// })

	
	const notesToKeep = notes.filter(function(single_object) {
		return single_object.title !== title
	})

	// console.log(notesToKeep)

	// return;

	if (notes.length > notesToKeep.length)
	{
		console.log(notes.length)
		console.log(chalk.bgGreen('Note Removed'))
	}
	else{
		console.log(chalk.bgRed('No note found!'))
	}
	// console.log(duplicateNotes)
	//return

	saveNotes(notesToKeep)

	// if (duplicateNotes.length === 0) {
	// 	notes.removeNotes({
	// 		title: title,			
	// 	})

	// 	console.log(notes)
	// 	saveNotes(notes)

	// 	console.log('new notes removed')
	// } else {
	// 	console.log('duplicateNotes')
}

const addNotes = (title, body)=>{
	const notes = loadNotes()
	//console.log(notes)

	const duplicateNotes = notes.filter((note)=> note.title === title)

	// console.log(duplicateNotes.length)
	if (duplicateNotes.length == 0)
	{
		
		notes.push({
			title: title,
			body: body
		})

	    //console.log(duplicateNotes.length)
		// console.log(notes)
		saveNotes(notes)

	    // console.log('new notes added')
	} else{
		console.log('Duplicate Notes found')
	}		
}

const saveNotes = function(notes){
	const dataJson = JSON.stringify(notes)
	fs.writeFileSync('notes.json', dataJson)
}

const loadNotes = function (){
	try{
		const dataBuffer = fs.readFileSync('notes.json')	
		const data = dataBuffer.toString()		
		return JSON.parse(data)
		//console.log(notes)
	}
	catch(e)
	{
		return[]
	}
}

module.exports = {
	addNotes:addNotes,
	getNotes: getNotes,
	removeNotes: removeNotes,
	readNotes: readNotes,
	listNotes: listNotes
}