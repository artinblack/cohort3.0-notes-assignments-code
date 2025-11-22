// //variables
// let name = "john" ; // variable that can be reassigned 
// const age = 30 ; // constant variable that cannot be reassigned 
// var isStudent = true ; // older way to declare variables , function scoped 

// // data types 
// let number = 25 ; 
// let string = "Hello World" ; 
// let isActive = false ; 
// let numbers = [1,2,3] ; 

// // operators 

// let sum = 10 + 5 ; 
// let isEqual = (10 === 10) ; 
// let isTrue = (true && false) ; 

// // functions 

// function greet(name) { 
//     return "Hello, " + name ; 
// }

// // function call 
// let message = greet("John") ; // "Hello john"
// console.log(message)

// function canvote(age) { 
//     if(age > 18) { 
//         return true ; 
//     } else { 
//         return false ;
//     }
// }

// let ans = canvote(19) ; 
// console.log(ans) ; 

// IF/ELSE 

// if(age >= 18) { 
//     console.log("You are an adult") ; 
// } else { 
//     console.log("You are a minor") ;
// }

// FOR LOOPS 
// for(let i = 0 ; i < 5 ; i++ ) { 
//     console.log(i) ; 
// }

// let j = 0 ; 
// while ( j < 5 ) { 
//     console.log(j) ; 
//     j++ ; 
// }

// let users = ["harkirat" , "raman" , "aashray" , "bhagtani" ] ;

// let totalUsers = users.length

// for(let i = 0 ; i<totalUsers ; i++) { 
//     console.log(users[i]) ; 
// }

// let user = { 
//     name : "AASHRAY" , 
//     age : 20 , 
// }

// console.log(user.name) ; 
// console.log(user.age) ; 
// console.log(user["name"]) ; 

// function greet(user) { 
//     console.log("Hi " + user.name + " your age is " + user.age) ; 
// }

// let user = { 
//     name : "Aashray" , 
//     age : 21 , 
// }

// greet(user) ;

// array of objects 

// const users = [
//     {
//         name : "AAshray", 
//         age : 21
//     } , { 
//         name : "Bhagtani" , 
//         age : 22 
//     }
// ]

// const user1 = users[0] 
// const user1Age = users[0].age

// console.log(user1)
// console.log(user1Age)

//create a function that takes an array of objects as input, 
// and returns the users whose age > 18 and are male 
// function greet(arr) { 
//     let arr2 = [] ; 
//     for(let i = 0 ; i < arr.length ; i++ ) { 
//         if(arr[i].gender === "male" && arr[i].age > 18) { 
//             arr2.push(arr[i]) 
//         }
//     }
//     return arr2 ; 
// }   

// const users = [{
//     name : "harkirat" ,
//     age : 21 , 
//     gender : "male" 
// }, { 
//     name : "aashray" ,
//     age : 21 , 
//     gender : "male"
// } , { 
//     name : "raman" ,
//     age : 15 , 
//     gender : "male"
// }]

// console.log(greet(users))