// const express = require('express') ; 
// const app = express() ; 


// // app.use(function(req, res, next) {
// //     console.log("request received");
// //     next();
// // })

// // app.get("/sum", function(req, res) {
// //     const a = parseInt(req.query.a);
// //     const b = parseInt(req.query.b);

// //     res.json({
// //         ans: a + b
// //     })
// // });

// let requestCount = 0 ; 

// app.get('/add',(req,res) => { 
//     requestCount = requestCount + 1 ; 
//     console.log("Total number of requests = " + requestCount)
//     const a = req.query.a ; 
//     const b = req.query.b ; 

//     let inta = parseInt(a) ; 
//     let intb = parseInt(b) ; 
//     res.json({
//         ans : inta + intb
//     })
// })

// app.get('/multiply',(req,res) => { 
//     const a = req.query.a ; 
//     const b = req.query.b ; 

//     let inta = parseInt(a) ; 
//     let intb = parseInt(b) ; 
//     res.json({
//         ans : inta * intb
//     })
// }) 
// app.get('/divide',(req,res) => {
//     const a = req.query.a ; 
//     const b = req.query.b ; 

//     let inta = parseInt(a) ; 
//     let intb = parseInt(b) ; 
//     res.json({
//         ans : inta / intb
//     })
// })
// app.get('/subtract',(req,res) => { 
//     const a = req.query.a ; 
//     const b = req.query.b ; 

//     let inta = parseInt(a) ; 
//     let intb = parseInt(b) ; 
//     res.json({
//         ans : inta - intb
//     })
// })


// app.listen(3000) ; 

// const express = require("express");

// const app = express();

// function methodmiddleware(req,res,next) { 
//     console.log("Method is :" + req.method ) ; 
//     console.log(new Date()) ; 
//     console.log("URL : " + req.hostname ) ; 
//     next() 
// }
// // function urlmiddleware(req,res,next) { 
// //     console.log("URL : " + req.originalUrl ) ; 
// // }

// // add a middleware that logs the method , timestamp and the url 

// app.use(methodmiddleware) ; 
// // app.use(urlmiddleware) ; 
// // app.use(datemiddleware)

// app.get("/sum", function(req, res) {
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);

//     res.json({
//         ans: a + b
//     })
// });

// app.get("/multiply", function(req, res) {
//     const a = req.query.a;
//     const b = req.query.b;
//     res.json({
//         ans: a * b
//     })
// });

// app.get("/divide", function(req, res) {
//     const a = req.query.a;
//     const b = req.query.b;
//     res.json({
//         ans: a / b
//     })

// });

// app.get("/subtract", function(req, res) {
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);
//     res.json({
//         ans: a - b
//     })
// });

// app.listen(3000);

const express = require('express'); 

const app = express() ; 
const cors = require('cors') ; 
app.use(cors()) ; 

let middleware = express.json() ; 
app.use(middleware) ; 
// in express , you want to send JSON data , you need to first parse the json data    
app.get("/sum",(req,res) => { 
    const a = parseInt(req.query.a) ; 
    const b = parseInt(req.query.b) ; 

    res.json({
        ans : a+b
    })
})

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(3001) ; 