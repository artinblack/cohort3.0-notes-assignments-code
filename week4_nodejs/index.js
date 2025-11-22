

// const fs = require('fs') ; 
// const { Command } = require('commander') ; 
// const program = new Command ; 

// program.name('Todo-List').description('CLI for adding , deleting and marking the TodoList').version('1.0.0') ; 

// program.command('readtodo').description('Read the todos from the todo list').argument('<file>','file to read the todo').action((file) => { 
//     fs.readFile(file,'utf-8',(err,data) => { 
//         if(err) { 
//             console.log(err) 
//         } else { 
//             console.log(data)
//         }
//     })
    
// })

// program.command('addtodo').description('Add the todo to the todo list').argument('<file>','file to read the todo').argument('<todo>','todo to add').action((file,todo) => { 
//     const todos = require('./todo.json') 
//     let newtodo = {
//         "todo" : todo  ,
//         "markasdone" : false ,  
//     }
//     todos.push(newtodo) ; 
//     fs.writeFile(file,JSON.stringify(todos),(err) => { 
//         if(err) throw err ; 
//         console.log("Done adding a todo")
//     })
//     fs.readFile(file,'utf-8',(err,data) => { 
//         if(err) { 
//             console.log(err) 
//         } else { 
//             console.log(data)
//         }
//     })
// })

// program.command('deletetodo').description('Delete the todo from the todo list').argument('<file>','file to delete the todo').argument('<todoindex>','todo index to delete').action((file,todoindex) => { 
//     const todos = require('./todo.json') ; 
//     console.log("Todos before deletion")
//     console.log(todos)
//     const filter_todos = todos.splice(todoindex,1) ; 
//     fs.writeFile(file,JSON.stringify(todos),(err) => { 
//         if(err) throw err ; 
//         console.log("Done deleting the todos")
//         console.log(`Delted todo ${filter_todos}`)
//     })
//     fs.readFile(file,'utf-8',(err,data) => { 
//         if(err) { 
//             console.log(err)
//         } else { 
//             console.log(data)
//         }
//     })
// })

// program.command('markasdone').description('Mark as done the todo from the todo list').argument('<file>','file to mark the todo').argument('<todoindex>','todo to mark').action((file,todoindex) => { 
//     const todos = require('./todo.json') ; 
//     todos[todoindex].markasdone = true ;
//     console.log(todos) 
//     fs.writeFile(file , JSON.stringify(todos) , (err) => { 
//         if (err) throw err ; 
//         console.log("Todo Marked")
//     })
// })

// program.parse() ; 
