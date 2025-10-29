// async and await syntax in javascript provides a way to write async code that looks and behaves like synchronous code, making it easier to read and maintain 
// it builds on top of Promises and allows you to avoid chaining .then() and .catch() methods while still working with asynchronous operations . 
// async/await is essentially syntactic sugar on top of promises 
const fs = require('fs') ; 
// function setTimeoutPromisified(duration) { 
//     return new Promise (function (resolve) { 
//         setTimeout(resolve,duration)
//     })
// }
// syntactic sugar
// async function loggging() { 
//     await setTimeoutPromisified(1000) ; 
//     console.log("hi") ; 
//     await setTimeoutPromisified(3000) ; 
//     console.log("hello")
//     await setTimeoutPromisified(5000) ; 
//     console.log("hello there")
// }

// loggging() ; 


// function readFileAsync() { 
//     return new Promise((resolve) =>  { 
//         fs.readFile('nodejsinstall.txt','utf-8',function (err,data) { 
//             resolve(data) ; 
//             console.log(data) ;      
//         })
//     })
// }

// async function readFile() { 
//     await readFileAsync() ;
//     console.log("file read successfully") ;
// }
// readFile() ;

// errfirst callback vs rejects in promises 
// callbacks -> fs.readFile function used an err first callback approach to propogate back errors . 

// function afterDataFetch(err,data) { 
//     if(err){ 
//         console.log(err) ;
//         console.log("Error while reading the file / file not found") ;
//     } else { 
//         console.log(data)
//     }
// }

// fs.readFile('nodejsinstall.txt','utf-8',afterDataFetch); 

// assignments - create a promisified version of setTimeout , fetch , fs.readFile