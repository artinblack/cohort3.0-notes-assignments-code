const mongoose = require('mongoose') ; 
// require mongoose 
const Schema = mongoose.Schema ; 
// bring the schema class
const ObjectId = Schema.ObjectId ; 
// bring the object id class from the schema 

// create your user schema
const User = new Schema({
    email : {type : String, unique : true} , 
    password : String , 
    name : String 
})

// create your todo schema with the userId having the ObjectId class
const Todo = new Schema({
    title : String , 
    done : Boolean , 
    userId : ObjectId 
})

// provides an interface to interact with a specific collection in your MongoDB database 
// it helps in creating a mongodb collection associated with a schema, defining the structure of documents that will be stored under that collection 
const UserModel = mongoose.model('users', User) ; 
const TodoModel = mongoose.model('todos', Todo) ; 
// the mongoose.model helps me save data in this specific collection with this specific schema 

module.exports = { 
    UserModel : UserModel , 
    TodoModel : TodoModel
}
