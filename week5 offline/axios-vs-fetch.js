// axios vs fetch 

// function main() { 
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then( res => res.json()) 
//     .then( json => console.log(json) )
// }

// main() ; 

// async function main() { 
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos")
//     const json = await response.json() ; 
//     console.log(json.length) ; 
// }

// main() ; 

// POST request
// async function main() { 
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos",{
//          method : "POST" 
//  })
//     const json = await response.json() ; 
//     console.log(json.length) ; 
// }

// main() ;


// GET request 

// const axios = require('axios'); 

// async function main() { 
//     const res = await axios.get("https://jsonplaceholder.typicode.com/todos") ; 
//     console.log(res.data.length) ; 
// }

// main() ; 

// POST request 
// change request method 
// send body 
// send headers 
// const axios = require('axios'); 

// async function main() { 
//     const res = await axios.post("https://jsonplaceholder.typicode.com/todos",{
//         username : "aashray" , 
//         password : "1234567" , 
//     },{
//         headers : { 
//             "Authorization" : "Bearer 123"
//         } 
//     }) ; 
//     console.log(res.data.length) ; 
// }

// main() ; 

// http dump 