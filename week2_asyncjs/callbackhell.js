// function setTimeoutPromisified(duration) { 
//     return new Promise(function(resolve) {
//         setTimeout(resolve,duration)
//     })
// }
// // the above code is the black box 
// // setTimeout => promisified setTimeout 

// function callback() { 
//     console.log("hello there !!")
// }
// // this is how you call a promisified function 
// setTimeoutPromisified(3000).then(callback)

// callback hell 
// assignment
// write code that - logs 'hi' after 1 second - logs 'hello' after 3 seconds after the hi - 'hello there' 5 seconds after the hello  

// setTimeout(function() { 
//     console.log("hi") ; 
//     setTimeout(function() { 
//         console.log("hello")
//         setTimeout(function() { 
//             console.log("hello there")
//         },5000)
//     },3000)
// },1000)

// the above code is aka THE CALLBACK HELL 

// the promisified version is the solution 

// function setTimeoutPromisified(duration) { 
//     return new Promise (function (resolve) { 
//         setTimeout(resolve,duration)
//     })
// }
// main solution to callback hell 
// setTimeoutPromisified(1000).then(function() { 
//     console.log("hi")
//     setTimeoutPromisified(3000).then(function() { 
//         console.log("hello") 
//         setTimeoutPromisified(5000).then(function() {
//             console.log("hello there") 
//         })
//     })
// })
// console.log('aashray bhagtani')

// alternate solution to callback hell promisified 
// promise chaining 
// we can chain things in a promise 
// cleaner syntax than callback hell 
// setTimeoutPromisified(1000).then(() => { 
//     console.log('hi') ;
//     return setTimeoutPromisified(3000) ;
// }).then(() => { 
//     console.log('hello') ; 
//     return setTimeoutPromisified(5000) ; 
// }).then(() => { 
//     console.log('hello there')
// })

// -----------------------------------------------------------------------

// function callback1() { 
//     console.log('hi') ; 
// }

// function callback2() { 
//     console.log('hello') ; 
// }

// function callback3() { 
//     console.log('hello there') ; 
// }

// setTimeoutPromisified(1000).then(callback1) ; 
// setTimeoutPromisified(3000).then(callback2) ; 
// setTimeoutPromisified(5000).then(callback3) ; 

