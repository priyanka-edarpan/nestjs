const express = require('express')
const graphqlHTTP = require('express-graphql')

const app = express()

const {GraphQLSchema,
	   GraphQLObjectType,
	   GraphQLList,
	   GraphQLString, 
	   GraphQLInt, 
	   graphql} = require('graphql')
// const { GraphQLInt } = require('graphql/type')

const users = [
	{ id: 1, name: "Priya Sharma",  age:  "28" },
	{ id: 2, name: "Priya1 Sharma", age:  "29" },
	{ id: 3, name: "Priya2 Sharma", age:  "30" },
	{ id: 4, name: "Priya3 Sharma", age:  "31" },
]

const UserType = new GraphQLObjectType({
	name: 'Users',
	description: '...',
	fields:{
		id: {
			type: GraphQLInt
		},
		name: {
			type: GraphQLString
		},
		age: {
			type: GraphQLString
		}
	}
})

const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: "Query",
		description: "",
		fields: () => ({
			users: {
				type: new GraphQLList(UserType),
				resolve: (parent, args) => {
					return users
				}
			},
				user: {
					type: UserType,
					args:{
						id:{
							type: GraphQLInt
						} 
					},
					resolve: (parent, { id }) => {
					  const user = users.filter(user=> user.id==id)
					  return user[0]
					},
			},
		}),
	})
	})
	

app.use("/graphql", graphqlHTTP({
	schema,
	graphiql : true

 }))

 app.get("/",(req,res)=>{
	 const query = `query{uers{id,name,age}}`
	 graphql (schema,"{users{name,age,id}}",query)
	 .then(response=> res.send(response))
	 .catch(err=> res.send(err))
 })

 app.get("/:id",(req,res)=>{ 
	const query = `query{user(id: ${req.params.id}){id,name,age}}`
	graphql(schema,query)
	.then(response=>res.send(response))
	.catch(err=> res.send(err))
 })
  

app.listen(3000,()=>console.log('listening on port 3000'))