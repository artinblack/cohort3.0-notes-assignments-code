// const express = require('express')
// const app = express()
// create an app instance of express after requiring 

// define all of your route handlers 
// whenever an HTTP request comes to the slash end point , that is a get request and sends the response accordingly  
// / => route 
// req => request
// res => response 
// res.send => send the data back to the client acc to the req
// send => send a response 
// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

// app.get('/asd',(req,res) => {
//     // req => gives all the things related to request 
//     res.send('Hello from the asd endpoint')
// })

// app.listen(port) in which port do you want the app to listen
// this makes sure that the process runs infinitely 
// the request goes to the process on the server that is infinitely running on the server 
// app.listen(3000)

// let's start by creating an in memory array that looks like this 
// const express = require('express'); 
// const app = express() ; 

// var users = [{
//   name : "John", 
//   kidneys : [{
//     healthy : false 
//   }, {
//     healthy : false
//   }]
// }]

// app.use(express.json()) ; 
// // Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
// // query parameters
// app.get('/',(req,res) =>  { 
//   // write logic here return to john about his medical records 
//   const johnkidney = users[0].kidneys ; 
//   const numberofkidneys = johnkidney.length;  
//   let numberofhealthykidneys = 0 ; 
//   for ( let i = 0 ; i < numberofkidneys ; i++) { 
//     if(johnkidney[i].healthy) { 
//       numberofhealthykidneys = numberofhealthykidneys + 1 ; 
//     }
//   }
//   const numberofunhealthykidneys = numberofkidneys - numberofhealthykidneys ; 
//   res.json({
//     johnkidneys: numberofkidneys , 
//     johnhealthykidneys : numberofhealthykidneys , 
//     johnunhealthykidneys:numberofunhealthykidneys
//   })
//   //filter 
// })

// // in post request you send data in the body 
// // eventually we will understand middlewares that will be clear why this is happening now
// app.post('/',(req,res) => { 
//   const isHealthy = req.body.isHealthy ; 
//   users[0].kidneys.push({
//     healthy : isHealthy
//   })
//   res.json({
//     msg : "Done!"
//   })
// })

// app.put('/',(req,res) => { 
//   for(let i = 0 ; i < users[0].kidneys.length ; i++ ) { 
//     users[0].kidneys[i].healthy = true
//   }
//   res.json({})
// })

// // removing all the unhealthy kidneys 
// app.delete('/',(req,res) => { 
//   // only if atleast one unhealthy kidney is there do this , else return 411 
//   const newKidneys = [] ; 
//   for(let i = 0 ; i < users[0].kidneys.length ; i++ ) {
//     if(users[0].kidneys[i].healthy) { 
//       newKidneys.push({
//         healthy : true
//       })
//     }
//   }
//   users[0].kidneys = newKidneys ; 
//   res.json({}) ; 
// })

// app.listen(3000) ;  

// const express = require('express') ; 

// function calculateSum(n) { 
//   let ans = 0 ; 
//   for ( let i = 1 ; i <= n ; i++ ) { 
//     ans = ans + i ; 
//   }
//   return ans ; 
// }

// const app = express() ; 

// app.get('/',(req,res) => { 
//   const n = req.query.n ; 
//   const ans = calculateSum(n) ; 
//   res.send(ans.toString()) ; 
// })

// app.listen(3000) ; 
// ---------------------------------------------------------------------------------

// MIDDLEWARES 

// const express = require('express') ; 
// const app = express() ; 

// function that will return a boolean if the age of the person is more than 14 

// function isOldEnough(age) { 
//   if(age >= 14) { 
//     return true ; 
//   } else { 
//     return false ; 
//   }
// }

// ticket checker middleware 
// function isOldEnoughMiddleware(req , res , next) { 
//   const age = req.query.age ; 
//   if(age >= 14) { 
//     next() ; 
//   } else { 
//     res.json({
//       msg : "Sorry you are not the age yet !!"
//     }) 
//   }
// }

// app.get('/ride1',isOldEnoughMiddleware, function(req,res) { 
//     res.json({
//       msg: "You have successfully riden the ride1"
//     })    
// })

// app.get('/ride2',isOldEnoughMiddleware, function(req,res) { 
//     res.json({
//       msg: "You have successfully riden the ride 2"
//     })    
// })

// app.listen(3000) ;  
// high level of creating a basic application using middlewares