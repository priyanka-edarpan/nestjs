const { PRIORITY_ABOVE_NORMAL } = require('constants')
const fs = require('fs')
const dataBuffer = fs.readFileSync('1-json-json.json')
const user = (JSON.parse(dataBuffer.toString()))
//console.log(user)
// const customer = {
// 	name =  "Newbie Co.",
// 	age: "29"
// }
user.name = 'priyana'
user.age = 30
 

 //onst n = JSON.stringify(user)
JSON.stringify(user)(fs.writeFileSync('1-json-json.json'))
//fs.writeFileSync('1-json-json.json', n)
