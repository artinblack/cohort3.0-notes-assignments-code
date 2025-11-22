// let x : number = 1 ; 
// // type inferencing 
// console.log(x) ; 

// function greet(firstname : string) { 
//     console.log("Hello " + firstname)
// }
// // number , string , any 
// // any - anything
// greet("aashray") ; 

// sum 
// function sum(a : number , b : number ) : number { 
//     return ( a + b ) 
// }
// // return should be a number 
// // a -> number 
// // b -> number 

// console.log(sum(1,2)) ; 

// condition 
// function isLegal(age : number)  { 
//     if(age > 18) { 
//         return true ; 
//     } else {
//         return false ; 
//     }
// }

// console.log(isLegal(20)) ; 
// inhere the return type is inferred by the ts compiler

// function delayedCall(fn : () => void) { 
//     setTimeout(fn,5000) ; 
// } 

// delayedCall(() => { 
//     console.log('hi there')
// })

// ECMAScript 
// var a = 1 ; 

// interfaces

// const greet = (user : { 
//     name : string , 
//     age : number 
// }) => { 
//     console.log('Hello ' + user.name)
//     console.log(user.age)
// }

// greet({
//     name : "aashray" , 
//     age : 21
// })

// interface Person {
//     name : string ;  
//     age : number ; 
//     greet(phrase : string) : void ; 
// }

// class Employee implements Person { 
//     name : string ;  
//     age : number ; 

//     constructor(n : string , a : number) { 
//         this.name = n ; 
//         this.age = a 
//     }

//     greet(phrase: string): void {
//         console.log(`${phrase} ${this.name}`)
//     }
// }

// interface UserType { 
//     firstname : string , 
//     lastname : string , 
//     age : number 
// }

// function greet (user : UserType) { 

// }

// let user : UserType = {
//     firstname : "aashray" , 
//     lastname : "bhagtani" , 
//     age : 21
// }

// interface Todotype { 
//     title : string ; 
//     description : string ;  
//     done : boolean ; 
// }

// interface Todoinput { 
//     todo : Todotype
// }

// function Todo({todo} : Todoinput ) { 
//     return
// }

// union
// type StringOrNumber = string | number  ; 

// function add( a : StringOrNumber , b : StringOrNumber ) : StringOrNumber { 
//     if (typeof a === 'string' || typeof b === 'string') { 
//         return String(a) + String(b) ; 
//     } 
//     return a + b ; 
// }

// intersection 
// type Employee = { 
//     name : string , 
//     startDate : Date , 
// }

// type Manager = { 
//     name : string , 
//     department : string , 
// }

// type TeamLead = Employee & Manager ; 

// const teamlead : TeamLead = { 
//     name : "harkirat" , 
//     startDate : new Date() ,  
//     department : "SD" ,
// }

// console.log(teamlead)

// interfaces and types 
// basic types number , string , boolean 

// interface User { 
//     name : string ;  
//     age : number ;  
//     address?: { 
//         city : string ; 
//         country : string ; 
//         pincode : number ; 
//     }
// }

// interface Office { 
//     user : User
// }

// let user : User = { 
//     name : "harkirat" , 
//     age : 21 , 
//     address : { 
//         city : "hyderabad" , 
//         country : "india" ,
//         pincode : 12345
//     }
// }

// function isLegal(user : User) : boolean { 
//     if ( user.age > 18 ) { 
//         return true 
//     } else { 
//         return false ;
//     }
// }

// console.log(isLegal(user)) ; 

// use ? for optional fields 

// interface Person { 
//     name : string , 
//     age : number , 
//     greet(phrase : string) : void ; 
// }

// class Employee implements Person { 
//     name : string ;  
//     age : number ; 

    // constructor function to construct a new object
//     constructor(n:string , a:number) { 
//         this.name = n ; 
//         this.age = a
//     }
    // call functions of a class 
//     greet(phrase: string): void {
//         console.log(`${phrase} ${this.name}`)
//     }
// }

// const person1 = new Employee("aashray",21) ;
// person1.greet("Hello") ;  

// main difference between interfaces and types are that one can be implemented in classes and the other cannot ( types cannot )

// what is the difference between the abstract class and interface
// abstract class - creating a class and implementing it later you can give default implementations also in an abstract class 

// abstract class User { 
//     name : string ; 
//     constructor(name : string) { 
//         this.name = name ; 
//     }

//     abstract greet : () => string ; 
// }

// const User { 
//     name : string , 
//     constructor(name : string) { 
//         super(name) ; 
//         this.name = name ; 
//     }
//     greet() { 
//         console.log(`hi ${this.name}`)
//     }
// }

// 1 implementing interfaces 
// types vs interfaces
// 2 abstract classes vs interfaces 
// if a class can implement interfaces what is the use of abstract class ( you can use default implementations of types in the abstract class than the interface )

// TYPES 
// very similar but minor differences 
// types let you do unions and interfaces 
// you cant implement a type you can implement a interface 

// type User = { 
//     name : string ; 
//     age : number ; 
// }

// function islegal(user : User) { 
//     return user.age > 18
// }

// console.log(islegal({
//     name : "aashray" , 
//     age : 21
// })); 

// type User = { 
//     name : string ; 
//     age : number ; 
// }

// type Student = { 
//     name : string ; 
//     age : number ; 
//     grade : string
// }

// type AlcoholAddiction = User | Student ; 

// const alcoholic : AlcoholAddiction = { 
//     name : "aashray" , 
//     age : 21 , 
//     grade : "o" ,
// }
 
// if(alcoholic.age > 18 && alcoholic.grade == "o") { 
//     console.log('legend') ;
// } else { 
//     console.log('noob') ; 
// }

// create two types called User and Admin 
// create a function that takes either a user or an admin as an input and returns a string saying welcome

// interface Admin{ 
//     name : string ; 
//     permissions : string ; 
// }

// interface User { 
//     name : string ; 
//     age : number ;
// }

// type UserorAdmin = User | Admin ; 

// function greet(user : UserorAdmin) { 
//     console.log(user.name) ; 
// }

// arrays in ts 

// function getMax(nums : number[]) { 
//     let maxvalue : number = Number.NEGATIVE_INFINITY ; 

//     for(let i = 0 ; i < nums.length ; i++) { 
//         if(nums[i] !== undefined && nums[i] > maxvalue) { 
//             maxvalue = nums[i] 
//         }
//     }
//     return maxvalue ; 
// }

// getMax

// function maxValue(arr: number[]) {
//     if (arr.length === 0) return 0;
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     return max;
// }

// console.log(maxValue([1, 2, 3]));


// Given an array of positive integers as input, return the maximum value in the array

// function getMax(nums: number[]): number {
//     let maxValue: number = Number.NEGATIVE_INFINITY;

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== undefined && nums[i] > maxValue) {
//             maxValue = nums[i];
//         }
//     }
//     return maxValue;
// }

// console.log(getMax([3, 5, 7, 2, 8]));

// interface User { 
//     firstname : string ; 
//     lastname : string ; 
//     age : number ;
// }

// type Rect = { 
//     width : number ;
//     height : number ; 
//     lastname : "harkirat" ; 
// }

// type Name = { 
//     name : string ;
// }

// type Full = Rect | Name ; 
// // | is an union 
// // & is an intersection

// const rectangle : Full = { 
//     // width : 10 , 
//     // height : 10 , 
//     // lastname : 'harkirat' , 
//     // name : 'asdas' , 
// }

// console.log(rectangle)

// Pick 
// pick allows you to create a new type by selecting a set of properties ( keys ) from an existing type ( Type ) . 
// imagine you have a User model with several properties, but for a user profile displays , you only need a subset of these properties. 

// interface User { 
//     id : number ; 
//     name : string ; 
//     email : string ; 
//     createdAt : Date ; 
// }
// // for a profile display only pick 'name' and 'email' 
// type userProfile = Pick<User,"name"|"email"> ; 

// const displayUserProfile = (user : userProfile) => { 
//     console.log(`Name : ${user.name} , Email : ${user.email}`) ;
// }

// displayUserProfile({
//     name : 'aashray' , 
//     email : 'aashray.bhagtani@gmail.com'
// })

// Partial - makes all properties of a type optional , creating a type with the same properties , but each marked as optional 

// interface User { 
//     name : string ; 
//     email : string ; 
//     age : number ; 
// }

// type UpdateProps = Pick<User,'name'|'email'>

// type UpdatePropsOptional = Partial<UpdateProps>

// name and email become optional under the type UpdatePropsOptional 

// Readonly 

// type User = { 
//     readonly name : string ; 
//     readonly age : number; 
// }

// const user : Readonly<User> = { 
//     name : 'john' , 
//     age : 21 
// }

// user.age = 12 ; 
// the above syntax will throw an error ts does not allow to change the readonly types

// if you have a config variable where you store an api key , user by mistake ( developer ) does not update the api key 

// record and maps 
// let's you give a cleaner type of objects 

// interface User { 
//     id : string  ;
//     name : string ;
// } 

// type Users = Record<string,User>

// const users : Users = { 
//     asdf : { 
//         id : 'asdf' , name : 'las;kdjf' 
//     }
// }
 
// console.log(users['asdf']) ; 

// maps - gives you an even faster way to deal with objects . Very similar to maps in 
// C++ 

// Exclude
// type Event = 'click' | 'scroll' | 'mousemove' ; 
// type ExcludeEvent = Exclude<Event,'scroll'> ; 

// const handleEvent = (event : ExcludeEvent) => { 
//     console.log(`Handling ${event}`)
// }

// handleEvent('click') ; 

// Type inference in Zod 
// when using zod , we are done runtime validation 
// for example , the following code makes sure that the user is sending the right inputs to update their profile information 
// type inference 
    // -  you can extract the typescript type of any schema with z.infer<typeof mySchema>

// import {z} from 'zod' ; 
// import express from 'express' ; 

// const app = express() ; 

// const userProfileSchema = z.object({
//     name : z.string().min(1) ,     
// })



// import z from 'zod' ; 

// const StringZodSchema = z.string() ; 
// type StringZodType = z.infer<typeof StringZodSchema> ; 
