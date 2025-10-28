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
        password : password
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

})

app.get('/gettodos',(req,res) => { 

})

app.post('/addtodos',(req,res) => { 

})

app.put('/modifytodo',(req,res) => { 

})

app.delete('/deletetodo',(req,res) => { 

})

app.listen(3000) ; 