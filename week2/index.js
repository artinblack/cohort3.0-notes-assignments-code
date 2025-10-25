// function sum(a,b) { 
//     return a + b ; 
// }

// let ans = sum(2,3) ; 
// console.log(ans)

// function sum(n) { 
//     let ans = 0 ; 
//     for ( let i = 1; i <= n ; i++) { 
//         ans = ans + i ; 
//     }
//     return ans ; 
// }

// const ans = sum(9999) ; 
// console.log(ans) ; 

// function sum(n) { 
//     return n * ( n + 1 )/2 ;
// }

// const ans = sum(100) ; 
// console.log(ans)

// fs - file systems 
// const fs = require("fs") ; 

// const contents = fs.readFileSync("asyncjs.txt","utf-8") ; 
// console.log(contents) ; 

// CPU BOUND TASK 
// let ans = 0 ; 
// for ( let i = 1 ; i <= 10000 ; i++ ) { 
//     ans = ans + i 
// }
// console.log(ans); 

// IO BOUND TASK 


// const fs = require("fs") ; 

// fs.readFile("async.txt", 'utf-8' , function(err,contents) {
//     console.log(contents) ; 
// }); 

// fs.readFile("a.txt",'utf-8', function(err,contents){ 
//     console.log(contents) ; 
// })


// function sum(a,b) { 
//     return a + b ; 
// }

// function multiply(a,b) { 
//     return a * b ; 
// }

// function subtract(a,b) { 
//     return a - b ; 
// }

// function divide(a,b) { 
//     return a / b ; 
// }

// function doOperation(a, b, op) { 
//     return op(a,b) ; 
//     // a = 1 ; 
//     // b = 2 ; 
//     // op = multiply
//     // multiply(1,2 )
// }

// console.log(doOperation(1 , 2 , multiply))

// const fs = require("fs") ; 

// function print(err,data) { 
//     console.log(data) ; 
// }

// fs.readFile("a.txt","utf-8",print) ; // synchronously

// fs.readFile("asyncjs.txt",'utf-8',print) ; // synchrounously

// console.log("Done!") ; 

// print is the functional artument in this case 
// it reads all the files simoultaneously and prints the file that it completed reading first (this example is specific for fs)
// it completes the internal file compilation first 
// example : when i write a console.log("done!") then that happens first 
// both the files will be read synchronously then when the reading is complete then it will print one by one 


// console.log("hello") ; 

// function timeout() { 
//     console.log("click the button") ; 
// }

// setTimeout(timeout,5000) ; 
// // settimeout is also an async functions
// console.log("welcome to loupe") ; 

// function timeout() { 
//     console.log("click the button !")
// }

// console.log("hi !") ; 

// setTimeout(timeout,2000) ; 

// console.log("welcome to loupe") ; 

// let c = 0 ; 
// // 3-4 s 
// for (let i = 0 ; i<100000000 ; i++) { 
//     c = c + i
// }
// console.log("timepass")
// console.log(c)
// console.log("expensive function done") ; 

// sync actions comes first no matter how cpu intensive they are 
// call stack - the thing that is currently running 
// the asynchronous tasks have to wait for the cpu to free up from all the sync tasks 

// if the call stack is busy then whatever is happening in the async part of the code will have to wait 
// setTimeout was not a part of javascript 

// the callstack should be free to pull things from the callback queue , the callback queue takes the information from web apis 

// try to read about promises and create a promisifies version of setTimeout , fetch and fs.readFile 

// class Rectangle { 
//     constructor(width,height,color) { 
//         this.height = height ; 
//         this.width = width ; 
//         this.color = color ;
//     }

//     area() { 
//         const area = this.height * this.width ; 
//         return area; 
//     }

//     paint() { 
//         console.log(`Painting with color ${this.color}`)
//     }
// }

// const rect = new Rectangle(2,4,'red') ; 
// // this is what happens when you instantiate the instance of a class 
// const area = rect.area() ; 
// console.log(area + " sq cm") ; 
// const paint = rect.paint() ; 
// console.log(paint); 

// key concepts :-
// 1 CLASS DECLARATION :- you declare a class using the "class" keyword 
// inside a class , you define properties (variables) and methods (functions) that will belong to the objects created from this class . 
// inside the constructor the this is similar to the rect object that we are defining 
// so basically constructor(width => 2 , height => 4 , color => red) { 
                        // this => rect.height = height => 4 ,
                        // this => rect.width  = width => 2 , 
                        // this => rect.color  = color => red 
//                          }

// "this" is global for every object that is created

// 2 CONSTRUCTOR :- a special method inside the class that is called when you create an instance ( an object ) of the class . 
// it is used to initialize the properties of the object . 
// 3 METHODS :- functions that are defined inside the class and can be used by all instances of the class . 
// 4 INHERITENCE :- classes can inherit properties and methods from other classes, allowing you to create a new class based on an existing one. 
// 5 STATIC METHODS :- methods that belong to the class itself, not to instances of the class. You can call them directly on the class. 
// 6 GETTERS AND SETTERS :- special methods that allow you to define how properties are accessed and modified. 

// Some more classes 
// date class
// const now = new Date() ; // current date and time 
// console.log(now.toISOString()) ; // outputs the date in ISO format 

// map class 
// const map = new Map() ; 
// map.set("name","Aashray") ;// setting a key value pair  
// map.set("age",30) ; 
// console.log(map.get('name')) ; // logging/getting the map 


// Inheritence in classes 
// allows one class to inherit properties and methods from another class . This mechanism enables code reuse, making it easier to create new classes that are based on existing ones , without having to duplicate code. 

// 1 introduced how to create a class and use it - somewhat medium 
// 2 we used some js provided classes ( map , date ) 
// 3 - we are going to introduce the "Promise" class 

// the promise class gives you a promise , that I will return you something in the future 

// the promise class in javascript is an object that represents the eventual completion ( or failure ) of an asynchrounous operation and its resulting value . promises are used to handle asynchronous operations more effectively than traditional callback functions , providing a cleaner and more manageable way to deal with code that executes asynchronously , such as API calls , file I/O or timers. 

// function logName() { 
//     console.log("aashray") ; 
// }

// setTimeout(logName,3000) ; 
// you can use the callback based approach 
// promise based approach 

// defining a promise is hard 
// using a promise is easy 

// using a function that returns a promise s`

//setTimoutPromisified - think it as a global function 
// It returns you the instance of a promise class 
// returns an object of the promise class 

// ms - milliseconds 
// function setTimeoutPromisified(ms) { 
//     return new Promise(resolve => setTimeout(resolve , ms )) ; 
//     // promise class says that i will take one function as an input and whatever is the first argument of this function whenever that resolve argument is called I will call whatever is passed in the '.then'
//     // A callback used to initialize the promise. This callback is passed two arguments: a resolve callback used to resolve the promise with a value or the result of another promise, and a reject callback used to reject the promise with a provided reason or error.
//     // returning you the object of the promise class 
// }

// function callback() { 
//     console.log("3 seconds have passed");
// }

// setTimeoutPromisified(3000).then(callback) ; 

// function random(resolve) { 
//     setTimeout(resolve,3000)
// }

// function setTimeoutPromisified() { 
//     return new Promise(random)
// }

// function callback() { 
//     console.log("you have 3 seconds")
// }

// setTimeoutPromisified().then(callback) ; 


// Promise{<pending>}

// write a function that reads the content of a file 
// trims the extra space from left and right 
// writes it back to the file 
// what is promise - it is a class that takes in three attributes resolve , reject and it promises a return of the callback function 

// let myPromise = new Promise(function(resolve, reject){
// // apna async task karo
//     setTimeout(()=>{console.log('timeout executed')}, 10000)
// // maan lo itna hi async task tha toh ab resolve kar do
//     resolve("promise executed")
// })

// // then ko Promise ke oopar use karte hai
// myPromise.then((resolvedValueJoAayi)=>{console.log(resolvedValueJoAayi)}) // logs 'promise executed'


// const fs = require('fs') 

// function readTheFile(sentTheFinalValueHere) { 
//     fs.readFile("a.txt","utf-8",function(err,data) {
//         sentTheFinalValueHere(data) ; 
//     })
// }

// function readFile(fileName) { 
//     return new Promise(readTheFile) ; 
// }

// const p = readFile() ; 

// function callback(contents) { 
//     console.log(contents) ; 
// }

// p.then(callback)

// const arrived = true ; 

// // creating a promise
// const ride = new Promise((resolve , reject) => { 
//     if(arrived) { 
//         resolve('driver arrived') ; 
//     } else { 
//         reject('drive bailed') ; 
//     }
// })

// // consuming the promise 
// ride.then(value => { 
//     console.log(value) ; 
// }).catch(error => { 
//     console.log(error) ; 
// }).finally(() => { 
//     console.log('all settled') ; 
// })

// const fs = require('fs') ; 

// console.log("-------top of the file-------") ; 

// function readTheFile(resolve) { 
//     console.log("readTheFile Called") ; 
//     setTimeout(function() { 
//         console.log("callback based setTimeout completed"); 
//         resolve() ; 
//     },3000) ; 
// }

// function setTimeoutPromisified(fileName) { 
//     console.log("setTimeoutPromisifiedCalled")
//     return new Promise(readTheFile) ; 
// }

// const p = setTimeoutPromisified() ; 

// function callback() { 
//     console.log("timer is completed")
// }

// p.then(callback) ;

// console.log("___end of the file___-")

// CREATION OF YOUR OWN PROMISES

// class Promise2 {
//     constructor(fn) { 
//         this.fn = fn ; 
//         this.fn(() => { 
//             this.resolve() ; 
//         })
//     }
//     then(callback) { 
//         this.resolve = callback ; 
//     }
// }

// function readTheFile(resolve) { 
//     setTimeout(function() { 
//         console.log("callback based setTimeout completed")
//         resolve() ; 
//     },3000) ; 
// }

// function setTimeoutPromisified() { 
//     return new Promise2(readTheFile) ;  
// }

// let p = setTimeoutPromisified() ; 

// function callback() { 
//     console.log("callback has been called ")
// }

// p.then(callback)

