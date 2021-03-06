const Joi = require('joi')
const express = require('express')
const app = express()
const morgan = require('morgan')
app.use (express.json())
app.set('view engine','pug')
app.set('views','./views')

const courses =[{id: 1, name:'course1'},
		{ id: 2, name: 'course2' },
		{ id: 3, name: 'course3' },
		{ id: 4, name: 'course4' },
		]

if(app.get('env')=== 'production'){
	app.use(morgan('tiny'))
	console.log('Morgan Enabled.')
}		

app.get('/', (req, res) => {
	res.render('index',{title: 'My Express App', message: 'hello'})
})


// app.get('/',(req,res)=>{

// 	res.send('hello world')
// })

app.get('/api/courses',(req,res)=>{

	res.send(courses)
})

app.get('/api/courses/:id',(req,res)=>{
  const course= courses.find(c=> c.id===parseInt(req.params.id))
if(!course)res.status(404).send('courses are not found')
	res.send(course)
 }) 

 app.post('/api/courses/',(req,res)=>{
	
	const { error } = validatorCourse(req.body)
	if(error){
	res.status(400).send(error.details[0].message)
	return
	}

	 const course = {
		 id: courses.length + 1,
		 name: req.body.name
	 }
	 courses.push(course)
	 res.send(course)
 })

 app.put('/api/courses/:id',(req,res)=>{
	 const course = courses.find(c => c.id === parseInt(req.params.id))
	 if (!course) return res.status(404).send('courses are not found')
	//  res.send(course)
	const {error} = validatorCourse(req.body)

	 if (error) return res.status(400).send(error.details[0].message)		
	 
	course.name = req.body.name
	res.send(course)
 })

app.delete('/api/courses/:id',(req,res)=>{
	const course = courses.find(c => c.id === parseInt(req.params.id))
	//console.log(course)
	if (!course) res.status(404).send('courses are not found')
	console.log(course)
	console.log(courses)
	const index = courses.indexOf(course)
	courses.splice(index, 2)
	res.send(course)
	// debugger

})


function validatorCourse(course){
	const schema = {
		name: Joi.string().min(3).required()
	}

	return Joi.validate(course, schema)
	
}




app.listen(3000,()=>{
	console.log('listening on port 3000')
})