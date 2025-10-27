// const express = require('express') ; 
// const app = express() ; 
// const jwt = require('jsonwebtoken') ; 
// const JWT_SECRET = "randomaashraybhagtani" ; 
// app.use(express.json()) ; 

// const users = [] ; 

// // should return a random long string 
// // function generateToken() {
// //     let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// //     let token = "";
// //     for (let i = 0; i < 32; i++) {
// //         // use a simple function here
// //         token += options[Math.floor(Math.random() * options.length)];
// //     }
// //     return token;
// // }

// app.post('/signup',(req,res) => { 
//     // input validations using zod 
//     const username = req.body.username ; 
//     const password = req.body.password ; 

//     users.push({
//         username : username ,
//         password : password  
//     })

//     res.json({
//         message : "You are signed in !!"
//     })

//     console.log(users)
// })

// app.post('/signin',(req,res) => { 
//     const username = req.body.username ; 
//     const password = req.body.password ; 

//     const user = users.find(user => user.username === username &&  user.password === password) ; 
//     // find the user in users whose username is requestbodyusername (aashray) and whose password is requestbodypassword (123123123)
//     if(user) {
//         const token = jwt.sign({
//             username: username
//         },JWT_SECRET) ; 
//         // convert this username over to a jwt 
//         // it takes two arguments what do you want to encrypt encode and what is the secret that you want to sign this token with 
//         // const token = generateToken() ; 
//         // user.token = token ; 
//         res.send({
//             token
//         })
//         console.log(token)
//     } else { 
//         res.status(403).send({
//             message : "invalid username or password"
//         })
//     }

//     console.log(users)
// })


// app.get('/me',(req,res) => { 
//     const token = req.headers.authorization ; // jwt ( now user will send in the jwt )
//     const decodedInformation  = jwt.verify(token , JWT_SECRET) ; 
//     // this line of code above will get back the json object of the { username : "username" }
//     const username = decodedInformation.username ; 
//     const user = users.find(user => user.username === username) ; 
//     if(user) { 
//         res.send({
//             username : user.username  
//         })
//     } else { 
//         res.status(403).send({
//             message: "Unauthorized"
//         })
//     }
// })


// app.listen(3000) ; 

const express = require('express') ; 
const app = express() ; 
const jwt = require('jsonwebtoken') ; 
const JWT_SECRET = 'aashraybhagtanisecret' ;
const cors = require('cors') ; 
const users = [] ; 

app.use(express.json()) ; 
app.use(cors()) ; 

app.get('/',(req,res) => { 
    res.sendFile(__dirname + '/public/index.html')  ;
})

app.post('/signup',(req,res) => { 
    const username = req.body.username ; 
    const password = req.body.password ; 
    
    // zod validation code will come here , we should check if a user with this username is already existing 

    users.push({
        username : username ,
        password : password , 
    })

    res.json({
        msg : "You are signed-up !!"
    })
    // console.log(users)
})

app.post('/signin',(req,res) => { 
    const username = req.body.username ; 
    const password = req.body.password ; 

    const user = users.find((user) => user.username === username && user.password === password)

    if(user) { 
        const token = jwt.sign({
            username : username
        },JWT_SECRET) ; 
        res.json({
            token : token 
        })
        console.log(token)
    } else { 
        res.status(403).json({
            msg : "Credentials are incorrect"
        })
    }
    // console.log(users)

})
// ------ AUTH MIDDLEWARE 
// the most important usecase of middlewares is authentication 
// you can do all of this over here but the best practice is to have a separate auth middleware
function auth(req,res,next) { 
    const token = req.headers.token ; 
    const verifiedInformation = jwt.verify(token,JWT_SECRET) ; 
    const verifiedUserName = verifiedInformation.username ; 
    if(verifiedUserName) { 
        req.username = verifiedUserName ; 
        next() ; 
    } else { 
        res.json({
            message : "You are not logged in !!"
        })
    }
}

app.get('/me',auth, (req,res) => { 
    // const token = req.headers.authorization ; 

    // const verifiedInformation = jwt.verify(token,JWT_SECRET) ; 
    
    // const verifiedUserName = verifiedInformation.username ; 
    const verifiedUserName = req.username ; 
    const user = users.find((user) => user.username === verifiedUserName) 

    if(user) { 
        res.json({
            username : verifiedUserName , 
            password : user.password 
        })
    }
    // console.log(users)
    // console.log(verifiedInformation)
})

app.listen(3000) ; 