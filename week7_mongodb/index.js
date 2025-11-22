const express = require('express') ; 
const app = express() ; 
const cors = require('cors') ; 
const jwt = require('jsonwebtoken') ; 
const mongoose = require('mongoose') ; 
const {z} = require('zod') ; 
const bcrypt = require('bcrypt') ; 
const JWT_SECRET = 'aashraybhagtani' ; 

const { UserModel , TodoModel } = require('./db') ; 
mongoose.connect("").then(console.log('Connected to database successfully')) ; 
app.use(cors()) ; 
app.use(express.json()) ; 

app.post('/signup', async (req,res) => { 
    const requireBody = z.object({
        email : z.string().min(3).max(100).email() ,
        name : z.string().min(3).max(100) , 
        password : z.string().min(3).max(100)  
    })
    const parsedData = requireBody.safeParse(req.body) ; 

    // 1 how to show the user the exact error 
    // 
    if(!parsedData) { 
        res.json({
            message : "Incorrect format" , 
            error : parsedData.error
        })
        return 
    }
    // input validation 
    const email = req.body.email ; // string @,5  
    const password = req.body.password ; // string , 10 chars , 1spl , 1uppercase , 1lowercase
    const name = req.body.name ;



    let errorThrown = false ; 
    try {
        const hashedPassword = await bcrypt.hash(password,10) ; 

        await UserModel.create({
            email: email, 
            password : hashedPassword , 
            name : name
        })    
    } catch (error) {
        res.json({
            err : error 
        })
        errorThrown = true ; 
    }
    if(!errorThrown) { 
        res.json({
            message: "You are signed up !!"
        })    
    }
    
})

app.post('/signin', async (req,res) => { 
    const email = req.body.email ; 
    const password = req.body.email ; 

    const user = await UserModel.findOne({
        email:email , 
    })

    const passwordMatch = await bcrypt.compare(password, user.password) ; 


    console.log(user)

    if(user && passwordMatch) { 
        const token = jwt.sign({
            id : user._id
        },JWT_SECRET)
        res.json({
            token : token
        })
    } else { 
        res.status(403).json({
            message: "Incorrect credentials" 
        })
    }
})

function auth(req,res,next) { 
    const token = req.headers.token ; 
    const verifiedInformation = jwt.verify(token,JWT_SECRET) ;  
    const verifiedId = verifiedInformation.id ; 
    if(verifiedId) { 
        req.id = verifiedId ; 
        next() ; 
    } else { 
        res.status(401).json({
            message : "Unauthorized access !!"
        })
    }
}


app.post('/todo',auth, async (req,res) => { 
    const verifiedId = req.id ; 
    const todo = req.body.todo;
    const done = req.body.done ; 
    // find the verifiedId in the database 
    const user = await UserModel.findOne({
        _id : verifiedId 
    })
    console.log(user)
    if(user) { 
        await TodoModel.create({
            userId : verifiedId , 
            title : todo, 
            done : done 
        })

        res.json({
            message : "Todo Created !!"
        })
    }
    
    
})

app.get('/todos',auth , async (req,res) => { 
    const verifiedId = req.id ; 

    const todos = await TodoModel.find({
        userId : verifiedId
    })

    res.json({
        todos : todos 
    })
})

app.listen(3000) ; 