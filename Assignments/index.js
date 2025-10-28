//  try to create a TODO application where 
//     - user can signin/signup
//     - user can create/delete/update TODO's 
//     - user can see their existing todos and mark them as done 
    

const express = require('express') ; 
const app = express() ; 
const cors = require('cors') ; 
const jwt = require('jsonwebtoken') ; 
const JWT_SECRET = "aashrayjwtsecret" ; 
const fs = require('fs') ; 
const path = require('path') ; 

const userdbpath = path.join(__dirname , '/database/users.json')  ; 
const userdatabase = require(userdbpath) ; 
app.use(cors()) ; 
app.use(express.json()) ; 

// --- AUTH --- 

app.get('/',(req,res) => { 
    res.sendFile(__dirname + '/public/todo.html') ;
})


app.post('/signup',(req,res) => { 
    const username = req.body.username  ; 
    const password = req.body.password  ; 
    
    const newuserdata = {
        username : username , 
        password : password , 
        todos : []
    }

    userdatabase.push(newuserdata) ; 
    fs.writeFile(userdbpath,JSON.stringify(userdatabase,null,2),(err) => { 
        if(err) {
            throw new Error ; 
        } else { 
            console.log('User data updated') ;
            res.json('You are signed up!!')
        }
    })
})

app.post('/signin',(req,res) => { 
    const username = req.body.username ; 
    const password = req.body.password ; 

    const user = userdatabase.find((user) => user.username === username && user.password === password) ;

    if(user) { 
        const token = jwt.sign({
            username : username 
        },JWT_SECRET) ;
        res.json({
            token : token
        })
    } else { 
        res.status(403).json({
            msg : "Credentials are incorrect try again"
        })
    }
})

// AUTH MIDDLEWARE 
function auth(req,res,next) { 
    const token = req.headers.token ; 
    const verifiedInformation = jwt.verify(token,JWT_SECRET) ; 
    const verifiedUserName = verifiedInformation.username ; 
    if(verifiedUserName) { 
        req.username = verifiedUserName ; 
        next() 
    } else { 
        res.json({
            message : 'You are not logged in !!'
        })
    }
}


app.get('/gettodos',auth,(req,res) => { 
    const verifiedUserName = req.username ; 
    const user = userdatabase.find((user) => user.username === verifiedUserName) ; 
    if(user) { 
        res.json({
            Your_todos : user.todos 
        })
    } else { 
        res.status(404).json({
            msg : "Can't get todos"
        })
    }
})

app.post('/addtodos',auth,(req,res) => { 
    const verifiedUserName = req.username ; 
    const user = userdatabase.find((user) => user.username === verifiedUserName) ; 
    const addtodo = req.body.todo ; 
    if(user) { 
        const nextId = user.todos.length > 0 
            ? Math.max(...user.todos.map(todo => todo.id)) + 1 
            : 1;

        const todopushed = {
            todo : addtodo , 
            id : nextId
        }

        user.todos.push(todopushed) ; 
        

        fs.writeFile(userdbpath,JSON.stringify(userdatabase,null,2),(err) => { 
            if(err) { 
                res.send("Database can't be  Updated") 
            } else { 
                res.send("Database updated")
            }
        })

        res.json({
            todoadded : user.todos
        })
    } else { 
        res.status(404).json({
            msg : "Can't add todos"
        })
    }
})

app.put('/modifytodo/:id',auth,(req,res) => { 
    const verifiedUserName = req.username ;  
    const user = userdatabase.find((user) => user.username === verifiedUserName) ; 
    const newtodo = req.body.todo ; 
    const todoid = parseInt(req.params.id) ; 
    if(user) { 
        const todoexist = user.todos.find((todo) => todo.id === todoid) ; 
        if(todoexist) {
            const newtodoid = todoid - 1;  
            user.todos[newtodoid] = {
                todo : newtodo , 
                id : todoid
            }
            fs.writeFile(userdbpath,JSON.stringify(userdatabase,null,2),(err) => { 
            if(err) { 
                res.send("Database can't be  Updated") 
            } else { 
                res.send("Database updated")
            }
        })
        } else { 
            res.json({
                msg : "To Do Does not exist !!"
            })
        }
    } else { 
        res.status(404).json({
            msg : "Can't modify todo "
        })
    }
})

app.delete('/deletetodo/:id',auth,(req,res) => { 
    const verifiedUserName = req.username ; 
    const user = userdatabase.find((user) => user.username === verifiedUserName) ;
    const todoid = parseInt(req.params.id) ; 

    if(user) { 
        const todoexist = user.todos.find((todo) => todo.id === todoid) ; 
        if(todoexist) { 
            const newtodoid = todoid -1 ; 
            user.todos.splice(newtodoid,1) ; 
            fs.writeFile(userdbpath,JSON.stringify(userdatabase,null,2),(err) => { 
                if(err) { 
                    res.send("Database can't be  Updated") 
                } else { 
                    res.send("Database updated Todo deleted ")
                }
            })
        } else { 
            res.status(404).json({
                msg: "Can't delete todos "
            })
        }
    }
})

app.listen(3000) ; 